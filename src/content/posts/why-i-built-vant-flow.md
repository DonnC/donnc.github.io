---
title: "Why I built Vant Flow for workflow-heavy apps"
description: "How changing banking workflows led me to build a schema-driven Angular form builder and renderer."
published: "2026-05-25"
topic: "Forms & architecture"
canonical: "https://donnclab.hashnode.dev/vant-flow-dynamic-angular-forms"
---

I did not build Vant Flow because I wanted to build another form builder.

I built it because I kept running into the same delivery problem.

I work in a banking environment in Zimbabwe, inside a digital team where workflows do not stay still for long. A compliance rule changes. A department wants a new approval step. Another team wants attachments. Someone else wants the process turned into a stepper flow. Then later, support or audit needs the same document reopened in readonly mode.

Nobody outside engineering really cares whether the workflow was built from scratch or assembled from a template. They care whether it works.

That pressure is what pushed me toward Vant Flow.

This is the practical version of the story: the problem I was solving, the approach I chose, and why this model has worked well for me.

## The problem was never just collecting data

The hard part was dealing with business documents that behave like mini applications.

In my context, that usually means:

- fields that become required only in certain cases
- sections that appear or disappear based on values, roles, or status
- approvals, review notes, and follow-up actions
- tables, signatures, and attachments
- workflows that begin as a simple form and later become multi-step
- the same document needing to support authoring, runtime, and readonly replay

There are good products in this space already. This is not a claim that everything else is bad.

But in my environment, a few constraints kept coming up:

- paid platforms are not always an option
- procurement and security reviews take time
- some tools work well for basic form capture but become awkward when the workflow behaves more like part of the application itself
- some platforms want to own too much of the stack when I need the host app to stay in control

So I wanted something more specific: a schema-driven way to build forms that change often, carry real business logic, and still fit inside an existing application architecture.

## The approach in simple terms

Vant Flow is built around one main idea:

**design the form once, store it as schema, and let the renderer execute it at runtime instead of rebuilding Angular screens every time a workflow changes.**

At the center of that is a shared schema contract called `DocumentDefinition`.

That schema can then power:

- `VfBuilder` for authoring
- `VfRenderer` for runtime execution
- preview mode for testing
- readonly replay for support, review, or audit

The host application still owns the things it should own:

- auth
- APIs
- storage
- uploads
- approvals
- role context
- environment-specific workflow rules

That separation matters a lot to me. I did not want a form platform that tries to swallow the whole application.

## What the developer experience looks like

The core setup is intentionally simple.

Register the provider:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideVfFlow } from 'vant-flow';

export const appConfig: ApplicationConfig = {
  providers: [provideVfFlow()]
};
```

Render a schema:

```html
<vf-renderer
  [document]="document"
  [initialData]="initialData"
  [metadata]="metadata"
  (formAction)="handleAction($event)"
></vf-renderer>
```

Open the builder:

```html
<vf-builder
  [initialSchema]="document"
  [previewMetadata]="previewMetadata"
  (schemaChange)="onSchemaChange($event)"
></vf-builder>
```

That is the main loop:

1. author schema
2. store schema
3. render schema
4. respond to runtime events in host code

What I like about this model is that the frontend stops treating every workflow as a brand-new page.

## Why it felt useful in real work

The strength of the approach is not just “forms from JSON.” Plenty of projects can do that.

What made it useful for me is that the same document can support:

- builder authoring
- live runtime execution
- dynamic conditions
- stepper flows
- richer workflow actions
- readonly replay later

That changes the economics of delivery.

Instead of rebuilding screens every time a department changes a process, a lot of that change can move into schema, runtime rules, and host metadata.

## The runtime layer is where it gets interesting

Static schema alone is not enough for operational workflows. You also need runtime behavior.

Vant Flow supports two layers:

- declarative rules like `depends_on` and `mandatory_depends_on`
- scripted behavior through a constrained `frm` API

That lets you handle things like:

- make a field required only after a certain value is selected
- set fields to readonly after approval
- show or hide sections at runtime
- update remote lookup filters dynamically
- calculate totals from table rows
- block actions until validation passes

For example:

```js
frm.on('status', (value, frm) => {
  if (value === 'Approved') {
    frm.set_df_property('batch_id', 'read_only', true);
  }
});
```

And for a table total:

```js
frm.on('parts_used', (rows, frm) => {
  const total = (rows || []).reduce((sum, row) => {
    return sum + ((Number(row.qty) || 0) * (Number(row.rate) || 0));
  }, 0);

  frm.set_value('parts_total', total);
});
```

This is the kind of logic I used to see hardcoded inside custom page components. I wanted the behavior to travel with the document definition instead.

## A practical example flow

Let us say you are building a work-order form, internal approval form, or onboarding flow.

You can model it as:

- request details
- review or diagnostics
- evidence or attachments
- sign-off

That same document can then be:

- designed in the builder
- previewed with sample metadata
- used by an end user
- reopened later in readonly mode for review

This is where the Vant style started to feel practical to me.

It is not only about generating a UI. It is about giving the business document a longer and more useful life inside the application.

## The small details that matter

There are a few parts of the approach that I think make it much more useful in real projects.

**Link fields**

These are remote autocomplete fields, not just static selects. They can point to backend search endpoints, map returned data, and change filters at runtime.

**Attachments and signatures**

The renderer supports a `mediaHandler`, so the host application can control uploads and store compact file references instead of raw payloads in form state.

**Host-controlled runtime state**

The host can still control runtime behavior directly through inputs like:

- `runFormScripts`
- `readonlyFields`
- `hiddenFields`
- `disabledActionButtons`
- `hiddenActionButtons`

**Readonly replay**

This is one of the features that matters a lot in enterprise work. The same schema can be reused later against saved data for support, audit, or compliance review.

## Why this works for me

I am not claiming this is the answer for everyone.

I am saying this approach matches the kind of problems I deal with:

- workflows that change often
- forms that grow into process documents
- business rules that should not always require rebuilding screens
- environments where open source thinking and internal control matter

That is why Vant Flow has been worth building.

It gives me a way to move repeated change away from page-by-page implementation and into a shared form runtime, while still keeping business-specific concerns in the host application where they belong.

## Where I stay realistic

There are still trade-offs.

- a flexible schema model needs discipline
- scripting needs guardrails
- the host app still owns workflow orchestration and permissions
- building your own platform means owning maintenance and documentation

So no, I would not present this as a miracle solution.

But if you keep building workflow-heavy apps and you are tired of turning every process change into another custom frontend rebuild, this pattern is worth serious consideration.

## Final thought

Vant Flow came from a practical need: make workflow change cheaper without giving up too much control.

That is the lens I bring to engineering more broadly.

I like solutions that are reusable, grounded, and close to how the business actually works. Vant Flow is one example of that approach, and if you work on internal tools, regulated systems, or operational workflows, you may find the pattern useful for your next project.
