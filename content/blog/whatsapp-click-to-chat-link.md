---
slug: whatsapp-click-to-chat-link
title: WhatsApp Click-to-Chat Link: How to Create One With a Pre-Filled Message
description: Create a WhatsApp click-to-chat link in seconds: the wa.me format, how to add a pre-filled message, how to put it on your website, and common mistakes.
keyword: whatsapp click to chat url
tags: WhatsApp, Lead capture, Website
cluster: WhatsApp
service: web-development
related: whatsapp-chat-link-vs-chatbot, whatsapp-chatbot-for-business-guide, route-whatsapp-enquiries-to-salesperson
date: 2026-10-26
updated: 2026-10-26
---
A WhatsApp click-to-chat link opens a chat with your number when someone taps it. The format is `https://wa.me/<number>`, where the number is in international format with no plus sign, spaces or leading zeros. Add `?text=` followed by a URL-encoded message to pre-fill what the visitor will send.

## The format

```
https://wa.me/91XXXXXXXXXX
https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20a%20quote
```

Replace the digits with your full number: country code first (91 for India), then the number, with nothing else.

## Step by step

1. Write your number as digits only: country code plus number. For an Indian mobile, that is 91 followed by the ten digits.
2. Put `https://wa.me/` in front of it.
3. Optional: add `?text=` and your message, with spaces written as `%20`.
4. Test the link on your phone and on desktop.

## Pre-filled messages that help you

A pre-filled message saves the visitor typing and tells you what they want:

- On a pricing page: "Hi, I'd like a quote for the Pro plan."
- On a service page: "Hi, I'm interested in CRM development."
- On a property page: "Hi, I'd like to visit Plot 12 at Green Valley."

Different pages with different messages tell you where the enquiry came from.

## Where to place it

- A button in the header or a floating button.
- Next to forms, as an alternative for people who do not want to fill one in.
- At the end of articles and on contact and pricing pages.

On this site, our contact page and service pages use WhatsApp links, and the contact flow tracks which page each lead came from.

## Common mistakes

- **Writing the plus sign, spaces or dashes** in the number.
- **Forgetting the country code.**
- **Not URL-encoding the message**, which breaks it at the first space or special character.
- **Using a personal number** when several people need to reply. Consider the Business app or API.
- **No follow-up process**, so messages sit unanswered.

## When a link is not enough

A link starts a chat, but it does not automate anything. If you need to qualify leads, answer at night or route enquiries, read [WhatsApp chat link vs a chatbot](/blog/whatsapp-chat-link-vs-chatbot).

## FAQ

### What is a WhatsApp click-to-chat link?
It is a web link that opens a WhatsApp conversation with a specific number, optionally with a pre-filled message.

### How do I add a pre-filled message?
Add `?text=` after the number, followed by your message with spaces replaced by `%20` and other special characters encoded.

### Do I need a WhatsApp Business account for a wa.me link?
No. It works with any WhatsApp number, though a Business account adds profile features and quick replies.

### Is a wa.me link free?
Yes. Creating and using the link costs nothing.
