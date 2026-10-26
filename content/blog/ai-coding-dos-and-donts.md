---
slug: ai-coding-dos-and-donts
title: AI Coding Do's and Don'ts
description: The practical rules for using AI to write code safely: review everything, keep secrets out, test, write small changes, own the result, and what to never do.
keyword: ai coding best practices
tags: AI coding, Best practices, Security
cluster: AI coding
service: custom-software-development
related: security-risks-ai-generated-code, never-paste-secrets-into-ai-assistant, reviewing-ai-written-code-checklist
pillar: true
date: 2026-10-26
updated: 2026-10-26
---
Use AI for drafts, explanations and routine code, but review every line, run tests, keep secrets and customer data out of prompts, and stay the owner of what ships. Do not merge code you do not understand, and do not give AI tools access to production systems. These rules keep the speed and remove most of the risk.

## Do

1. **Review everything it writes.** Read the diff as you would a colleague's pull request.
2. **Ask for small changes.** One task at a time is easier to check than one huge rewrite.
3. **Give it context.** Share the relevant files, conventions and the business rules in plain language.
4. **Write or generate tests,** then run them. Check that the tests are meaningful, not just passing.
5. **Run the type checker, linter and the app.** Do not trust "it should work".
6. **Verify claims.** If it says it fixed something, reproduce the problem and confirm.
7. **Use version control,** with small commits you can revert.
8. **Keep a human owner** responsible for every change.
9. **Check dependencies.** Confirm packages exist, are maintained and are what you intended.
10. **Document decisions** so the next person understands why.

## Don't

1. **Don't paste secrets,** API keys, passwords or customer data into prompts. See [never paste secrets into an AI assistant](/blog/never-paste-secrets-into-ai-assistant).
2. **Don't merge code you do not understand.**
3. **Don't let agents act on production** or on live data.
4. **Don't skip security review** on authentication, payments, permissions and data storage. See [security risks of AI-generated code](/blog/security-risks-ai-generated-code).
5. **Don't trust invented details.** AI can make up functions, options and facts.
6. **Don't accept big-bang changes** you cannot review.
7. **Don't ignore licensing and data terms** of the tools you use.
8. **Don't assume passing tests mean correct** if the tests were also written by AI and never checked.
9. **Don't stop learning** how your own system works.

## A simple team policy

| Area | Rule |
|---|---|
| Data | No secrets or customer data in prompts |
| Review | All AI-written code is reviewed by a person |
| Testing | Tests must pass before merge |
| Access | AI tools have no production access |
| Ownership | A named developer owns each change |
| Records | Record which tools are approved |

## Why this matters for business owners

If a developer or agency uses AI, these habits are what you are really paying for. Ask them to describe theirs. See [AI coding: a practical guide for business owners](/blog/ai-coding-practical-guide-business-owners) and our [custom software development](/services/custom-software-development) service.

## FAQ

### What are the biggest AI coding mistakes?
Merging code without understanding it, pasting secrets into prompts and skipping security review.

### Is it okay to use AI for production code?
Yes, with review, tests and human ownership. Do not ship what you have not verified.

### Should AI have access to my production database?
No. Use test data and keep AI tools away from live systems.

### How do I check AI-written code?
Use a review checklist, run tests and the type checker, and try the feature yourself. See [reviewing AI-written code](/blog/reviewing-ai-written-code-checklist).
