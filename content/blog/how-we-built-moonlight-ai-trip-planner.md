---
slug: how-we-built-moonlight-ai-trip-planner
title: How We Built Moonlight, an AI Trip Planner on Claude
description: A behind-the-scenes look at Moonlight, the AI trip-planning chatbot we built for Trripah: persona, destination knowledge, lead capture, guardrails and lessons.
keyword: ai trip planner chatbot
tags: AI chatbot, Case study, Travel
cluster: AI chatbots
service: ai-intelligent-automation
related: ai-chatbot-for-travel-agencies, chatbot-guardrails-what-ai-should-never-say, ai-chatbot-lead-capture-without-annoying-visitors
date: 2026-10-26
updated: 2026-10-26
---
Moonlight is the AI trip planner inside Trripah's website, CRM and mobile app. It chats like a well-travelled friend, plans an itinerary with the visitor, and hands a ready lead to the sales team. This is how we built it and what we learned.

## The goal

Trripah is a travel business. Visitors arrive with a vague idea ("7 days in Japan, we love food") and leave if nobody helps them turn it into a plan. The goal was a chatbot that helps with that, collects the traveller's details at the right moment, and gives the sales team a lead with a finished plan attached.

## The persona

Moonlight is written as a 28-year-old who has travelled the world. She adapts her tone to the person she is talking to: casual and punchy for younger travellers, more structured for millennials, and warm and clear for older travellers. A written persona is what makes a bot feel consistent instead of generic.

## Destination knowledge, loaded on demand

We built a knowledge base of 65 destinations, one JSON file each, with highlights, must-try food, visa information for Indian travellers, best season, hidden gems and hotel zones. The file for a destination is loaded only when that destination comes up in the chat.

This keeps prompts small, which keeps costs down and answers focused. Sending everything into every message would have made the bot vaguer, not smarter.

## Lead capture at the right moment

Moonlight talks through destination, dates, group and style until the itinerary is final. Then it asks for name, WhatsApp number and email so the ground team can send a quote. The itinerary is returned as structured JSON and saved to MongoDB as a lead. The ask works because the visitor has just built a plan they want to keep. More on this in [how an AI chatbot captures leads without annoying visitors](/blog/ai-chatbot-lead-capture-without-annoying-visitors).

## Guardrails

- **Never quote prices.** Pricing stays with people.
- **Rate limits per IP** and session handling to control abuse and cost.
- **Stay in role.** Off-topic requests are steered back politely.

See [chatbot guardrails](/blog/chatbot-guardrails-what-ai-should-never-say) for the thinking behind these.

## The stack

A Spring Boot (Java 21) backend wraps Claude Haiku 4.5 with the persona and conversation rules. The frontend is embedded in the Trripah website, the CRM and the mobile app, so one brain serves all three.

## What we learned

1. **Persona and rules matter more than model choice.** Most quality came from writing clear instructions.
2. **Load knowledge per topic.** It is cheaper and more accurate.
3. **Decide the hand-off first.** A lead that does not reach the CRM in a usable form is wasted.
4. **Read real conversations.** They are the fastest way to find what to fix.

You can see the project on our [Moonlight page](/moonlight), and our [AI and intelligent automation service](/services/ai-intelligent-automation) covers how we build similar systems.

## FAQ

### What is Moonlight?
Moonlight is the AI trip planner in Trripah's website, CRM and mobile app. It plans itineraries through chat and captures leads for the sales team.

### Which AI model does Moonlight use?
It runs on Claude Haiku 4.5, wrapped by a custom backend with the persona and conversation rules.

### Does Moonlight quote prices?
No. By design, pricing stays with people.

### Can you build something similar for another business?
Yes. The same pattern, a persona, topic-based knowledge, guardrails and a lead hand-off, applies to other industries.
