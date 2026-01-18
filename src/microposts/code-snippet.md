---
layout: micropost.njk
date: 2026-01-14
tags:
  - microposts
  - coding
---

TIL: You can use `Array.from({length: n}, (_, i) => i)` to create an array of numbers from 0 to n-1. So much cleaner than a for loop!

```javascript
const numbers = Array.from({length: 10}, (_, i) => i);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
