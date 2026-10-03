---
title: "Vant Flow & Baobab"
description: "Metadata-driven forms and application foundations that turn recurring business requirements into reusable tooling."
category: "Tools"
role: "Creator & architect"
status: "Public tools · Baobab in development"
lastWorked: "2026-10-02"
order: 5
diagram: "forms"
repository: "https://github.com/DonnC/vant-flow"
stack: ["Angular", "TypeScript", "Java", "Spring Boot", "Python CLI"]
proof: ["Created Vant Flow and integrated it into workflow work", "Shared form schema for builder and renderer", "Developing Baobab’s metadata-driven application architecture"]
---

## The repeated problem
Business applications often repeat the same work: define a document, build its form, connect it to persistence, and add business-specific behaviour. When requirements change frequently, duplication becomes expensive to maintain.

Vant Flow and Baobab approach different layers of that problem. They are related by an architectural idea, rather than being one finished platform.

## Vant Flow: a shared form model
I created **Vant Flow**, an Angular form builder and runtime renderer. A shared document definition powers authoring, preview, runtime interaction and readonly replay.

The host application retains control of authentication, APIs, storage, uploads and workflow orchestration. That boundary lets the form engine handle reusable UI behaviour without owning the whole application.

The package is used in the workflow portal I built. It is public, so the design and implementation can be explored beyond this case study.

## Baobab: application foundations
**Baobab is actively under development.** It extends my interest in metadata toward application architecture: document definitions, generated and developer-owned classes, lifecycle behaviour, generic APIs and persistence.

The project brings together Java/Spring services, an Angular desk and Python command-line tooling. Its purpose is to make a business application easier to build while preserving places for custom engineering.

## The tradeoff
A reusable platform earns its place only when it reduces repeated work without hiding necessary decisions. Schemas need discipline, generated code needs clear boundaries, and extensibility must not make behaviour impossible to follow.

Baobab’s production concerns are still work to be completed. I present it as architectural work in progress, rather than a proven replacement for established business platforms.

## What it demonstrates
These projects show **library design, systems architecture, Angular depth and developer-tool thinking**. They also explain a pattern in my professional work: build a reusable foundation when a requirement keeps coming back.
