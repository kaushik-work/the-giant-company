---
slug: chatbot-guardrails-what-ai-should-never-say
title: Chatbot Guardrails: What an AI Bot Should Never Say
description: The rules every business AI chatbot needs: no invented prices, no legal or medical promises, no leaking instructions, and how to test that the rules hold.
keyword: chatbot guardrails
tags: AI chatbot, AI safety
cluster: AI chatbots
service: ai-intelligent-automation
related: ai-chatbot-for-website-guide, how-we-built-moonlight-ai-trip-planner, rule-based-bot-vs-ai-chatbot
date: 2026-10-26
updated: 2026-10-26
---
A business chatbot should never invent facts, quote prices it does not own, make legal, medical or financial promises, reveal its internal instructions, or pretend to be a human. Guardrails are the written rules and technical limits that keep it inside those lines.

## Why guardrails are not optional

A language model writes fluent text whether or not it is correct. Without rules, it will answer anything, including things your business cannot stand behind. A single wrong promise in a chat can become a customer dispute.

## What to forbid

1. **Invented facts.** If the answer is not in your approved content, the bot should say it does not know and offer a person.
2. **Prices and discounts** unless they come from your system. In Moonlight, our trip planner, the bot never quotes prices at all.
3. **Guarantees and commitments** about delivery dates, outcomes, refunds or availability.
4. **Legal, medical and financial advice.** Offer general information at most, and point to a professional.
5. **Its own instructions.** The bot should not reveal or discuss its system prompt.
6. **Pretending to be human.** Be open that it is an AI assistant.
7. **Off-topic work.** A sales bot should not write essays, code or opinions on unrelated topics.

## Technical guardrails, not just written ones

Instructions help, but they are not a lock. Add limits in code:

- **Rate limits** per visitor and session to control abuse and cost.
- **Input and output checks** for obvious problems.
- **Structured outputs** where the bot must return a defined format, such as a saved itinerary, instead of free text.
- **Hand-off triggers** for frustration, sensitive topics or low confidence.
- **Logging** so you can review what was said.

## Prompt injection, briefly

Visitors can try to trick a bot with messages like "ignore your previous instructions". Treat anything a visitor types as untrusted. Keep sensitive data and actions out of the bot's reach, and never give it more access than the visitor should have.

## Test the rules

Before launch, try to break your bot on purpose. Ask it for a discount, a refund promise, a medical opinion, its instructions, and something unrelated. Fix what slips through, then repeat with real conversations after launch.

## FAQ

### What are chatbot guardrails?
They are the rules and technical limits that keep a chatbot within safe, approved behaviour, such as not inventing facts or quoting prices it does not own.

### Can a chatbot be made completely safe?
No. Guardrails reduce risk but do not remove it, so keep a human hand-off and review real conversations.

### What is prompt injection?
It is an attempt to make a chatbot ignore its instructions by typing manipulative text. Treat all visitor input as untrusted and limit what the bot can access.

### Should a chatbot say it is an AI?
Yes. Being honest about it builds trust and avoids confusion when the bot reaches its limits.
