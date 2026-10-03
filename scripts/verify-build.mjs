import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist');
async function walk(dir) { const entries = await readdir(dir, { withFileTypes: true }); return (await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(dir,e.name)) : [path.join(dir,e.name)]))).flat(); }
const files = await walk(root);
const errors = [];
let links = 0;
for (const file of files.filter(f => f.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`Missing title: ${file}`);
  if (!html.includes('name="description"')) errors.push(`Missing description: ${file}`);
  for (const [,href] of html.matchAll(/(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const clean = decodeURIComponent(href.split('?')[0]);
    const target = path.join(root, clean);
    let valid = false;
    for (const candidate of [target, path.join(target,'index.html')]) { try { if ((await stat(candidate)).isFile()) { valid = true; break; } } catch {} }
    if (!valid) errors.push(`Broken internal link ${href} in ${path.relative(root,file)}`);
    links++;
  }
  if (/github\.com\/DonnC\/(?:mTMS|zw_compliance|simplex|orbit)/i.test(html)) errors.push(`Private repository link in ${file}`);
  if (/Media: Show|CHANGE_ME|TODO_PUBLISH|C:\\Users\\/.test(html)) errors.push(`Unfinished or local-only content in ${file}`);
}
if (!files.some(f => f.endsWith('rss.xml'))) errors.push('Missing RSS feed');
if (!files.some(f => f.endsWith('sitemap-index.xml'))) errors.push('Missing sitemap');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Verified ${files.filter(f => f.endsWith('.html')).length} HTML pages and ${links} internal links/assets.`);
