---
slug: reviewing-ai-written-code-checklist
title: Reviewing AI-Written Code: A Checklist
description: A practical checklist for reviewing code written by AI: correctness, security, tests, dependencies, performance and maintainability, with questions to ask.
keyword: review ai generated code
tags: AI coding, Code review, Best practices
cluster: AI coding
service: custom-software-development
related: ai-coding-dos-and-donts, security-risks-ai-generated-code, technical-debt-from-ai-code
date: 2026-10-26
updated: 2026-10-26
---
Review AI-written code as you would a new colleague's first pull request: assume it is plausible but unproven. Check that it does what was asked, handles edge cases, is secure, has meaningful tests, uses real dependencies and is simple enough for someone else to maintain. Never merge what you cannot explain.

## Before you read the code

- **Is the change small enough to review?** If not, split it.
- **Do you know what it should do?** Write the expected behaviour first.
- **Does it touch sensitive areas?** Authentication, payments, permissions and data storage need extra care.

## The checklist

### Correctness
- [ ] Does it do what the task said, and nothing unrelated?
- [ ] Are edge cases handled: empty input, very large input, wrong types, missing data?
- [ ] What happens when something fails, such as a network error or a timeout?
- [ ] Are there silent changes to other files?

### Security
- [ ] Is every route and action protected with authentication and authorisation?
- [ ] Is user input validated, and database queries parameterised?
- [ ] Are secrets absent from code and logs?
- [ ] Are errors safe, without internal details?

### Tests
- [ ] Do the tests check behaviour, not just that the code runs?
- [ ] Do they fail if the code is wrong? (Try breaking the code.)
- [ ] Were the tests reviewed, since AI-written tests can be shallow?

### Dependencies
- [ ] Does every package exist, from a trusted source and maintained?
- [ ] Is each one needed, or could existing code do the job?

### Maintainability
- [ ] Is it consistent with the codebase's style and structure?
- [ ] Is it simpler than it could be, without unneeded abstractions?
- [ ] Are names clear and comments useful?
- [ ] Could another developer change it without fear?

### Performance
- [ ] Any obvious inefficiency, such as queries in loops or loading everything into memory?
- [ ] Is it fine for the expected data size?

### Run it
- [ ] Run the type checker, linter and the test suite.
- [ ] Use the feature yourself in a browser or app.

## Red flags

- Functions or options that do not exist in the library.
- Very confident explanations that do not match what the code does.
- Large rewrites for a small request.
- Passing tests with no real assertions.

## Make it routine

Add this checklist to your pull request template. Review quality is what separates fast and safe from fast and fragile. See [AI coding do's and don'ts](/blog/ai-coding-dos-and-donts), [security risks of AI-generated code](/blog/security-risks-ai-generated-code) and [technical debt from AI code](/blog/technical-debt-from-ai-code).

## FAQ

### How do I review code I did not write?
Check behaviour against the requirement, then security, tests, dependencies and maintainability, and run it yourself.

### Can AI review its own code?
It can catch some issues, but it can share the same blind spots. Use a person and automated checks too.

### What should always be reviewed by a human?
Authentication, authorisation, payments, data storage and anything involving customer data.

### How long should a review take?
Long enough to understand the change. If it is too big to review, it is too big to merge.
