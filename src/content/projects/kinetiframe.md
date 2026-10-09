---
title: "Kinetiframe"
description: "A hybrid 2D animation studio for Android: draw frames, pose reusable characters and combine them into editable scenes."
category: "Creative"
role: "Product creator · Android engineer"
status: "Active development"
lastWorked: "2026-10-08"
order: 4
featured: true
diagram: "animation"
stack: ["Kotlin", "Jetpack Compose", "Canvas", "IK / FK", "MVI"]
proof: ["Actor Studio with independently authored character views", "Reusable performances and editable starter projects", "Shared rendering for editor, thumbnails and export"]
---

## Animate without redrawing every action
I started **Kinetiframe** because I wanted to animate characters without redrawing them every time they raised a hand or changed a pose. I built a native Android studio that combines frame-by-frame drawing with reusable, rigged characters.

Draw when a scene needs a new shape or expression. Pose an actor when the same artwork can carry the action. Bring both into one scene with backgrounds and audio.

## Actor Studio
An actor can have independently authored front, profile, three-quarter and back views. Each view holds its own skeleton, artwork and part stacking. A profile is a separately drawn character view, not a flattened front drawing.

Saved performances contain motion and reference a specific actor revision. This lets a creator improve a character without silently changing an earlier performance. Human, quadruped and custom structures support different kinds of characters and props.

View-specific motion presets can be auditioned and adjusted before applying. Authored motion includes pose timing, root travel and contact information; the profile-running example demonstrates deliberate foot placement.

## Reusable artwork and editable examples
The application includes editable starter projects, characters, performances and packs. They demonstrate gestures, profile running, a quadruped, custom articulation and scenes combining drawings with actors.

![Five sampled poses from the editable Actor Views and Motion Lab project: front-facing gestures, profile running, a quadruped and an articulated flag.](/images/kinetiframe-motion-lab.png)

*Sampled poses from an editable bundled project, not an application screenshot.*

Mouth, eye, hand and prop packs make drawings reusable. The bundled presenter scene uses separate frame-by-frame layers and held expression replacements. These are raster stamps, rather than automatic lip-sync or live rig-part swaps.

## Engineering a creative tool
I work across product interaction, graphics, motion evaluation, persistence and asset packaging. The editor, thumbnails and project export share actor-rendering logic, keeping the visual interpretation consistent across those paths.

Immutable actor revisions preserve the relationship between artwork and motion. Bounded caches, disk-backed frames and streamed audio mixing address the resource constraints of a mobile device. Native project and pack archives keep the examples editable and reusable.

## Current stage
Kinetiframe is in **active development**, with the local authoring workflows and bundled content implemented. Device testing and export validation remain part of release preparation.

Views are authored separately and do not automatically blend within a performance. Cloud distribution, marketplace purchases and an AI assistant are future work. The goal is a paid creative tool with a useful asset catalogue, while keeping local creation available offline.

## What this demonstrates
**Native Android engineering, graphics and animation maths, document modelling and product ownership** in a demanding interactive application.
