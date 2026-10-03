---
title: "mPOS + mTMS"
description: "Android POS and Frappe terminal management: connecting the payment experience with the tools needed to manage it."
category: "Payments"
role: "Independent creator · Built end to end"
status: "Independent product"
lastWorked: "2026-10-02"
order: 1
featured: true
diagram: "payments"
stack: ["Kotlin", "Android", "ISO 8583", "EMV", "Frappe"]
proof: ["Sole engineering ownership across both products", "POS transaction and payment-switch integration", "Terminal provisioning and configuration lifecycle"]
---

## The problem
A payment terminal is only one part of a payment system. The application must handle the transaction, but someone also has to provision the device, manage its parameters, distribute updates and understand what happened when a payment needs investigation.

mPOS and mTMS are my answer to both sides of that problem. I designed and built them independently as a connected product family.

## What I built
**mPOS** is the Android payment application. My work covers banking and retail POS journeys, ISO 8583 transaction messaging and payment-switch integration, including Zimswitch-related flows and wallet use cases. The application includes EMV integration and utilities around payment messages, terminal data and sensitive-log masking.

**mTMS** is the Frappe-based terminal management application. It brings terminal registration, parameter distribution, provisioning, remote commands and software-update management into the same operational picture. Settlement records and reporting are also part of the terminal-management domain.

The point of presenting these together is the connection: a device needs a management layer, and that management layer has to understand the device’s payment lifecycle.

## The engineering decisions
I separated the payment application from the management plane. The terminal can focus on transaction behaviour, while Frappe gives the management side a foundation for records, administration and business processes.

Payment integrations also make the details matter. Message construction, response handling, terminal parameters and diagnostic data need clear boundaries. I treat payment behaviour and operational tooling as parts of the same delivery problem.

## Why this work matters
This is my strongest example of ownership across **Android engineering, payment integration and ERP-backed operations**. It demonstrates work beyond a mobile UI: the transaction, the device and the surrounding business tools.
