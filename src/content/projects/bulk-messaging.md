---
title: "Bulk messaging & campaign operations"
description: "Campaign tooling that connects recipient data, background processing and traceable email/SMS delivery attempts."
category: "Platforms"
role: "Portal engineering & backend development"
status: "Professional work"
lastWorked: "2026-10-01"
order: 9
diagram: "messaging"
stack: ["Java", "Spring Boot", "Spring Batch", "Kafka", "PostgreSQL", "Angular"]
proof: ["Built the messaging portal", "Campaign, data-source and delivery-attempt workflows", "Batch processing with optional Kafka integration"]
---

## The problem
Bulk messaging becomes an operational system as soon as teams need templates, recipient imports, scheduling, progress tracking and resends. Sending a message is only one step.

This work brings those steps together in a campaign workflow.

## My contribution
I built the messaging portal and worked on the system around campaign operations and processing. The application includes template management, CSV/Excel recipient-data import, variable mapping, campaign launch and monitoring, and per-recipient delivery attempts.

The engineering spans an Angular-facing workflow and a Spring backend with PostgreSQL records, scheduled dispatch and Spring Batch processing.

## Background work and delivery records
Long-running delivery work belongs outside the interactive request. The backend separates campaign actions from batch orchestration and background dispatch.

Attempts are records in their own right. A resend creates a new attempt linked to the previous one, preserving the history rather than replacing it with a single final status.

That distinction supports investigation and campaign monitoring when some recipients succeed and others need attention.

## Kafka in context
The system includes **Kafka integration support**, alongside scheduled and batch processing. Kafka is optional and is disabled in the current standalone default configuration; mock delivery is also used for local testing.

The deployment can therefore use the processing mode appropriate to its environment. Production throughput needs validation against the configured delivery providers.

## What it demonstrates
This work connects **backend engineering, asynchronous processing, batch operations and portal delivery**. It gives a team the tools to run campaigns and understand delivery behaviour.
