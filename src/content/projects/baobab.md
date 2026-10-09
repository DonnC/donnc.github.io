---
title: "Baobab"
description: "A business application framework connecting document definitions, Java services, an Angular Desk and custom portals, with a CLI for building and deployment."
category: "Platforms"
role: "Creator & framework architect"
status: "Working framework · Active development"
lastWorked: "2026-10-09"
order: 5
diagram: "baobab"
repository: "https://github.com/DonnC/baobab-erp"
stack: ["Java", "Spring Boot", "Angular", "TypeScript", "Python CLI", "Vant Flow", "Liquibase"]
proof: ["Document definitions connect storage, APIs, forms and lifecycle behaviour", "Working custom Angular operations portal on the shared backend", "Compiled framework and app installation exercised on Ubuntu WSL"]
---

## Build the application, not the same plumbing again
Business systems repeatedly need the same foundations: forms, records, relationships, validation, permissions and APIs. I built **Baobab** to connect those concerns through a document definition, while keeping business-specific engineering in ordinary Java services and custom frontends.

The result is a working framework for document-driven business applications. It combines a Spring Boot runtime, a metadata-driven Angular Desk, independently developed portals and Python tooling for the development and deployment lifecycle.

## From definition to working system
A document definition supplies the shared contract for fields, naming, relationships and storage. [Vant Flow](/work/vant-flow-baobab/) provides visual form authoring and rendering. Baobab connects the definition to backend metadata, generated Java bases, schema migrations and generic document APIs.

The generated base classes handle recurring structure. Developer-owned document classes and services remain extension points and are preserved during regeneration. The persistence layer maps typed documents to physical columns, JSON-backed fields and child records.

Normal document writes run validation and lifecycle hooks around persistence. Apps can add domain behaviour through services, document methods and hooks, rather than patching the framework for each new requirement.

## A custom portal is a full frontend application
Teams are not confined to the generated Desk or saved HTML Web Pages. Baobab's CLI can create a normal Angular workspace with routing, its own components and dependencies, and a shared browser SDK for backend communication.

The portal owns its user experience. The CLI builds its browser bundle into the owning app, and the main Spring server hosts it at a registered URL prefix, including frontend deep links. A deployed portal does not need a separate Angular development server.

This allows a shared business backend to support both an administrative Desk and purpose-built experiences for the people doing the work.

## Proof: the Task Operations application
The included Task app demonstrates an overview, searchable and filtered work queue, project context, task creation, editing and related checklist records. Its custom Angular portal and the Desk work with the same underlying records.

![Baobab Task Operations portal showing delivery totals, a work queue and project context](/images/baobab-task-portal.png)

*Task Operations portal from an isolated browser verification run, using synthetic example records.*

The example separates read and write responsibilities deliberately. Dashboard totals and queue searches use app-owned, tenant-scoped SQL projections. Creation and editing use the document lifecycle rather than writing directly to the database.

Recorded browser verification covers login, search, task creation, updates preserving child records, logout and mobile use. It demonstrates the connected application path, rather than just a collection of screens.

## Build here, deploy compiled applications there
Apps keep their Java code, metadata, migrations and portals together. The Python CLI supports local setup, app and portal builds, packaging, installation and runtime management.

Compiled releases deliver the server, built Desk, app binaries, runtime resources and portal assets. Maven, Node and Angular build tools stay on the development machine. I have exercised packaged installation on Ubuntu WSL with persistent H2 storage.

## Current stage
The document runtime, Desk, custom portal path and compiled deployment workflow are working and under active development. Production capacity, recovery and upgrade guarantees still require representative validation. Installed apps share the Java runtime; customer-specific authorization and domain rules remain application responsibilities.

## What it demonstrates
**Framework architecture, fullstack platform engineering and developer tooling.** Baobab shows how I connect data modelling, extensibility, user experience and deployment into a foundation that other applications can build on.
