---
title: "mPOS + mTMS"
description: "A Zimbabwe-focused banking and retail payment-terminal application, connected to provisioning, diagnostics and settlement reporting."
category: "Payments"
role: "Product creator · Payments & Android engineer"
status: "Independent product"
lastWorked: "2026-10-05"
order: 1
featured: true
diagram: "payments"
stack: ["Kotlin", "Android", "ISO 8583", "EMV", "Frappe"]
proof: ["Built the payment application and terminal-management platform", "Payment lifecycle: messaging, reversals and settlement controls", "Separate client integrations and device implementations"]
---

## Payments and the operations behind them
**mPOS + mTMS** is my independently developed payment-terminal platform, designed around Zimbabwean banking and retail workflows. It connects the application a cashier uses with the tools needed to provision, configure and support its terminals.

My focus is payment acceptance and its operational lifecycle: what happens when a response is lost, a transaction needs reversing, or a batch needs reconciling.

## The terminal application
**mPOS** covers card-payment and banking journeys, ISO 8583 messaging, Postilion integration and EMV integration, alongside Zimbabwean wallet and change use cases. Multicurrency handling, cashier shifts, transaction history and receipts support the wider merchant workflow.

Reversal handling retains references to the original transaction. Settlement preflight checks unresolved and unsynchronised records before proceeding. These details connect the on-device experience with the host and the records needed for investigation.

## The management platform
**mTMS** uses Frappe to manage terminal registration, configuration, credentials, remote commands, deployment status and diagnostics. Transaction synchronisation and settlement records give the management layer visibility into the payment lifecycle.

Settlement reporting preserves terminal-reported values alongside management-system totals for comparison. The payment switch remains the settlement authority.

## Built for different clients and devices
I separated reusable payment behaviour from client-specific host integrations, branding and device implementations. Hardware abstractions provide a foundation for supported terminal families without assuming every device is interchangeable.

The journey from messaging and EMV integration to wallets, settlement controls and terminal operations reflects sustained engineering across the application and management platform.

## Current scope
This case study describes implemented engineering work. Deployment on another bank's host or terminal estate requires its own integration, testing and approvals; it is not a claim of universal certification or production acceptance.

A merchant self-service portal is planned to bring terminal activity, reports and transaction queries closer to the people operating the business.

## What this demonstrates
**Payment-domain engineering, native Android development, backend integration and operational systems design** across a connected product family.
