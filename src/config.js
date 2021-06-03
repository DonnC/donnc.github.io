module.exports = {
  email: 'donnclab@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/DonnC',
    },
    {
      name: 'PlayStore',
      url: 'https://play.google.com/store/apps/developer?id=DonnC+Lab',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/donald-chinhuru-9aa48211a/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/donix_22',
    },
     {
      name: 'Medium',
      url: 'https://donnclab.medium.com/',
    },
     {
      name: 'Python',
      url: 'https://pypi.org/user/DonaldC/',
    },
     {
      name: 'Flutter',
      url: 'https://pub.dev/packages?q=email%3Adonychinhuru%40gmail.com',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/15746605/donnc',
    },
     {
      name: 'Youtube',
      url: 'https://www.youtube.com/channel/UCdbjCQra85wNB4xlcA6rXUQ',
    },
    {
      name: 'External',
      url: 'https://octoprofile.now.sh/user?id=DonnC',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
