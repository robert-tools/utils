---
id: ADR-002
version: 1.0.0
title: Base architecture of sortASC
status: accepted
date: 2026-09-19
authors:
  - Robert Willemelis
tags: [architecture]
---
## Context

The sortASC module provides a utility function for sorting arrays in ascending order.

## Decisions

### 1. normalize

Remove unnecessary characters and whitespace from the array elements before sorting.

#### 📋Reasoning

* **remove dashes and underscores:** Ensure that array elements are stripped of dashes and underscores to maintain consistency before sorting (esp. for HTTP headers).

```typescript
// before sort
["example-string", "another_example", "yet-another_example"]

// after sort
["another_example", "example-string", "yet-another_example"]
```
