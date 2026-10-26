---
slug: claude-for-coding-real-projects
title: Claude for Coding: How We Use It on Real Projects
description: How a software studio uses Claude for coding: where it helps, where we do not trust it, our review habits and the products we built on Claude.
keyword: claude coding ai
tags: AI coding, Claude, Software
cluster: AI coding
service: ai-intelligent-automation
related: ai-coding-dos-and-donts, ai-coding-assistants-compared, how-we-built-moonlight-ai-trip-planner
date: 2026-10-26
updated: 2026-10-26
---
We use Claude for coding as a fast collaborator, not an autopilot. It helps us explore a codebase, draft routine code, write tests and refactor, and a developer reviews and tests every change before it ships. We also build products on Claude, such as the Moonlight trip planner.

This is a description of our own practice, not a ranking of tools.

## Where it helps us

- **Understanding code quickly.** Asking it to explain how a module works or where a behaviour comes from.
- **Routine code.** Forms, validation, API endpoints and data mapping, once we have described the rules.
- **Refactoring.** Renaming, restructuring and cleaning up with tests as a safety net.
- **Tests and documentation.** Drafting cases we then check.
- **Debugging.** Suggesting likely causes from logs and code.
- **Content and data work** around a site, such as drafting structured pages we then edit.

## Where we do not rely on it

- **Product and architecture decisions.** Those need business context and trade-offs.
- **Security-sensitive logic.** Authentication, payments and permissions get extra human review.
- **Anything involving secrets.** Keys and customer data are kept out of prompts. See [never paste secrets into an AI assistant](/blog/never-paste-secrets-into-ai-assistant).
- **Unreviewable big-bang changes.** We prefer small, steady steps.

## How we work with it

1. **Give it context,** such as the relevant files, conventions and the rules in plain language.
2. **Ask for small changes,** one at a time.
3. **Read every diff.**
4. **Run tests and the type checker,** and check the result in the browser or app.
5. **Verify claims.** If it says something works, we confirm it ran.
6. **Keep a human owner** for every change.

See the full checklist in [reviewing AI-written code](/blog/reviewing-ai-written-code-checklist).

## What we have built on Claude

Moonlight, Trripah's AI trip planner, runs on Claude Haiku 4.5 with a custom persona, destination knowledge loaded on demand and lead capture. Read [how we built it](/blog/how-we-built-moonlight-ai-trip-planner). We also build document parsing and assistants for other workflows under our [AI and intelligent automation service](/services/ai-intelligent-automation).

## FAQ

### Can Claude write production code?
It can draft production-quality code, but any code that ships should be reviewed, tested and owned by a developer.

### Do you let AI access customer data?
No. We keep secrets and customer data out of AI tools and use test data.

### Which Claude model do you use for chatbots?
Moonlight uses Claude Haiku 4.5. We choose models per use case based on quality, speed and cost.

### Will AI coding make my project cheaper?
It can speed up routine work. Review, testing and design still take time, so savings depend on the project.
