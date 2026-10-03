---
title: "A local WhatsApp emulator for faster bot development"
description: "A practical development loop for chatbot journeys while channel onboarding and remote environments catch up."
published: "2026-06-05"
topic: "Developer tools"
canonical: "https://donnclab.hashnode.dev/a-local-whatsapp-emulator-for-faster-bot-development"
---

Building a WhatsApp chatbot is not only about writing the bot logic. A lot of the friction appears before the real work even starts.

If you build on top of the official WhatsApp Cloud API, you already know the shape of that setup. You need the Meta app, the WhatsApp product, the business assets, a test number or production number, access tokens, permissions, webhook configuration, and a reachable public endpoint for inbound events. That path makes sense for production, but it is heavier than what you want during normal local development.

That was the real problem for me.

I built a local WhatsApp emulator because I got tired of paying the full setup cost every time I wanted to test one small feature, rehearse a demo, or validate a payload before pushing code to a server.

## Where the official path slows you down

The official flow is fine when you are preparing a real deployment. It is less fine when you just want to answer a simple question like, "Did this new button flow work?"

A normal development loop can involve:

*   making sure the Meta app is set up correctly

*   making sure the WhatsApp product is configured

*   working with a test business account and test number

*   dealing with tokens and permissions

*   exposing and verifying a public webhook

*   subscribing the app to the account correctly

*   then finally testing the actual bot behavior


That is a lot of platform work before you even get to the product question you were trying to answer.

In real project work, this gets worse.

Sometimes the client is still doing their Meta onboarding. Sometimes you want to test a quick feature addition before deploying to a shared server. Sometimes your network is unstable. Sometimes you want to show progress in a demo without relying on a full remote environment to behave on cue.

That is the gap this emulator is meant to close.

## What I wanted instead

I wanted a local loop that felt close enough to the real WhatsApp Cloud API workflow to be useful, but light enough to use every day.

The goal was simple:

*   let the bot send WhatsApp-style payloads locally

*   render them in a WhatsApp-like UI

*   capture replies locally

*   convert those replies back into webhook-style events

*   keep the move to production as close as possible to a configuration switch


That is what the emulator does.

It is a standalone open-source tool. I use it with my own projects, but it is not meant to be tied to one engine or one stack. If your bot can send outbound WhatsApp-style payloads and receive inbound webhook events, you can use this pattern.

## How the local loop works

There are two parts:

*   a local bridge

*   the emulator UI


The bridge accepts WhatsApp-style outbound payloads from your bot and translates them into a simpler UI contract. The UI renders those messages in a WhatsApp-like chat window. When you click a button, choose a list option, share a location, or type a response, the bridge converts that interaction back into a webhook-style payload and posts it to your bot.

That means you still get a message loop, just locally.

## Getting started in a reproducible way

> I assume you are already used to create WhatsApp Chatbots

### Prerequisites

You need:

*   Node.js 18+

*   npm

*   a bot that can send outbound WhatsApp-style payloads

*   a local webhook endpoint in your bot application


### 1\. Clone and install

```bash
git clone https://github.com/DonnC/wce-emulator.git
cd wce-emulator
npm install
npm run postinstall
```

The root project has a script that installs dependencies and starts both pieces together,for the UI and bridge project.

### 2\. Point the bridge at your bot webhook

The bridge needs to know where to send user replies from the emulator.

> Assume your chatbot runs on: http://localhost:8000/chatbot/webhook

On macOS or Linux:

```bash
export BOT_WEBHOOK_URL="http://localhost:8000/chatbot/webhook"
```

On Windows PowerShell:

```powershell
$env:BOT_WEBHOOK_URL="http://localhost:8000/chatbot/webhook"
```

Or look into the bridge server code

```javascript
// wce-emulator/bridge/index.js

const BOT_WEBHOOK_URL = "my-bot-url"; // <your-chatbot-webhook-url>;
```

If you do nothing, the bridge defaults to:

```text
http://localhost:8000/chatbot/webhook
```

### 3\. Start the emulator

```bash
npm run dev
```

That starts:

*   the React UI at `http://localhost:8080`

*   the local bridge endpoint at `http://localhost:3001/send-to-emulator`


### 4\. Connecting Your Bot: The Redirection

To use WCE, you only need to change your bot's base URL for API requests during development.

Replace ~~`https://graph.facebook.com/<VERSION>/<PHONE_NUMBER_ID>/messages`~~ with `http://localhost:3001/send-to-emulator` during local development.

Your bot continues to send the same WhatsApp-style JSON payloads. WCE intercepts them and renders them, making the eventual switch to production a simple configuration change.

The nice part here is that many bots already support a configurable base URL or transport target. If that is true in your app, the emulator becomes an environment switch, not a rewrite.

The exact code depends on your client library, but the pattern stays the same.

## A minimal bot example

Here is a minimal Flask webhook receiver that prints whatever the emulator sends back after a user interacts with the UI:

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.post("/chatbot/webhook")
def chatbot_webhook():
    payload = request.get_json()
    print("Received webhook payload:")
    print(payload)
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    app.run(port=8000, debug=True)
```

Start that app first, then start the emulator.

Now send a message into the bridge:

```bash
curl -X POST http://localhost:3001/send-to-emulator \
     -H "Content-Type: application/json" \
     -d '{
       "messaging_product": "whatsapp",
       "to": "123456789",
       "type": "text",
       "text": { "body": "Hello from the bridge!" }
     }'
```

If everything is wired correctly:

*   the message appears in the emulator UI

*   you can interact with it there

*   the bridge posts a webhook-style payload back to your Flask app


## Testing richer message types

The bridge already supports several useful message types for day-to-day chatbot work, including:

*   Interactive Support: Reply, CTA Buttons, Location, Rich text and List Messages

*   Media Support: (Dummy) Images, Videos, and Documents

*   Meta Events: Simulates "Read Receipts," "Typing Indicators," and "Reactions"

*   Persistence: Your chat history stays there even after a refresh


For example, this button payload can be sent directly to the bridge:

```bash
curl -X POST http://localhost:3001/send-to-emulator \
  -H "Content-Type: application/json" \
  -d '{
    "type": "interactive",
    "interactive": {
      "type": "button",
      "body": {
        "text": "Choose an option"
      },
      "action": {
        "buttons": [
          {
            "type": "reply",
            "reply": {
              "id": "btn-yes",
              "title": "Yes"
            }
          },
          {
            "type": "reply",
            "reply": {
              "id": "btn-no",
              "title": "No"
            }
          }
        ]
      }
    }
  }'
```

When you click a button in the emulator, the bridge constructs a webhook-style message event and posts it back to your configured webhook URL.

## Why this is useful in normal development

This emulator helps most in the boring but expensive parts of delivery:

*   when Meta setup is still in progress

*   when a client has not finished onboarding yet

*   when you only want to test one feature before a deploy

*   when your network is unreliable

*   when you need a stable demo environment

*   when you want to debug payload behavior without mixing in remote platform problems


## Making it Practical for Different Stacks
If your bot can send official WhatsApp-style payloads to a configurable URL and expose a local webhook endpoint, you can use this emulator.

It fits Python, Java, or Node bots equally well. You just point your bot to the local bridge endpoint instead of the normal Meta base URL during development.

## Staying Realistic: The Limitations

This tool is useful, but it is still an emulator.

It is not a replacement for the official WhatsApp Cloud API. You still need the full Meta path for production: business assets, permissions, real number setup, webhook hosting, and real integration validation.

There are also feature limits.

A clear one right now is **WhatsApp Flows**. The emulator does not support them yet.

That matters because Flows are useful for more structured in-chat experiences like data capture, forms, guided booking, and other task-driven journeys. If your use case depends heavily on Flows, this emulator will not yet cover that part of the product.

## Final thought

I built this emulator because I wanted a calmer local development loop for WhatsApp chatbot work.

*   Not a replacement for production.

*   Not a claim that every WhatsApp feature is covered.

*   Not a magic fix for platform integration.


Just a practical way to reduce setup drag, test faster, and keep building even when the official environment is not ready or not convenient.

For a tool like this, that is already a meaningful win.
