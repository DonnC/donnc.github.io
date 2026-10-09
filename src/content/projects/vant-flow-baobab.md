---
title: "Vant Flow"
description: "An Angular form builder and renderer that keep changing business forms on one shared schema."
category: "Tools"
role: "Creator & library architect"
status: "Public library · Used in workflow work"
lastWorked: "2026-10-02"
order: 7
diagram: "forms"
repository: "https://github.com/DonnC/vant-flow"
stack: ["Angular", "TypeScript", "Schema-driven forms"]
proof: ["Created the library and integrated it into a banking workflow portal", "Shared definition for builder, preview and runtime renderer", "Form authoring and rendering layer used by Baobab"]
---

## The repeated problem
Workflow-heavy applications need forms that change with the business. Building each screen separately creates repeated work and makes it harder to keep authoring, validation and the live experience aligned.

I created **Vant Flow**, an Angular form builder and runtime renderer, to give those forms a shared model.

## One definition, several experiences
The same document definition supports visual authoring, preview, runtime interaction and readonly replay. The reusable layer owns form behaviour; the host application keeps control of authentication, APIs, storage, uploads and workflow orchestration.

That boundary matters. A form library should fit into a business application without forcing it to adopt a new backend or process engine.

## Applied in real workflow work
I built the package and integrated it into the [banking workflow portal](/work/banking-workflows/) I developed as lead fullstack engineer. It gives changing business documents a reusable frontend foundation instead of requiring another isolated screen for every process.

## How it relates to Baobab
Vant Flow also provides the form authoring and rendering layer inside [Baobab](/work/baobab/), my business application framework. Baobab connects document definitions to Java models, persistence, APIs and an administrative Desk, and supports independent custom Angular portals.

They have different responsibilities: Vant Flow is the reusable form library; Baobab is the broader application framework. A custom Baobab portal can own its UI rather than being restricted to generated document forms.

## What it demonstrates
**Angular library design, schema-driven UI and reusable engineering grounded in business requirements.** The architectural choice is to share the recurring form behaviour while preserving the host application's ownership of the system around it.
