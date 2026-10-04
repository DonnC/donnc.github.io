---
title: "WCE: chatbots & developer tools"
description: "Template-driven chatbot engines and local WhatsApp/USSD tools for developing, testing and demonstrating conversational products."
category: "Tools"
role: "Creator & maintainer"
status: "Public projects"
lastWorked: "2026-06-23"
order: 6
diagram: "chat"
repository: "https://github.com/DonnC/wce-emulator"
stack: ["Python", "Java", "Spring Boot", "React", "Node.js"]
proof: ["Python and Java chatbot engine implementations", "Reusable flow templates and service hooks", "Local emulator for conversational development"]
---

## The problem
Conversational products have two kinds of work: defining the journey and connecting it to services. External channel setup can also slow down local development, especially when onboarding or a shared environment is not ready.

The **WCE ecosystem** is my set of tools for making that work more repeatable.

## Engines and reusable journeys
**PyWCE** and **JAWCE** provide Python and Java approaches to template-driven chatbot flows. Templates define the conversation, while hooks let the application connect steps to its own business services.

This separates repeated conversation mechanics from the domain behaviour around them. Related Frappe integration work extends the same idea into business applications.

## A practical local development loop
The **WCE emulator** provides a local interface and bridge for developing conversational integrations. It can send webhook-style events to a local bot and display responses without depending on the full remote setup for every test.

WhatsApp and USSD tooling belong in this family because they support the same development cycle: define a journey, exercise it and inspect the behaviour before moving to channel validation.

## The boundary that matters
An emulator is a development aid. It does not prove an integration works against every live-channel constraint. Real WhatsApp integration still needs platform onboarding and validation; the current emulator does not cover every feature, including WhatsApp Flows.

Keeping that boundary explicit helps the tool stay useful without promising more than it does.

## What it demonstrates
This ecosystem shows **developer experience, reusable backend design and conversational integration work** across Python and Java. The public repositories offer an additional way to inspect the implementation.

Explore [PyWCE](https://github.com/DonnC/pywce), [JAWCE](https://github.com/DonnC/jawce) and the [local emulator](https://github.com/DonnC/wce-emulator).
