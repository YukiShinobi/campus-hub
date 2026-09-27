# Campus Hub

A student planning engine for timetables, deadlines and the gaps between them.

I study Computer Science and end up juggling classes, work shifts, applications and project deadlines, so this repo focuses on the scheduling logic behind a student dashboard rather than pretending another generic calendar is enough.

## Current features

- timetable sorting
- class/event overlap detection
- next-up agenda
- deadline risk scoring based on time left + progress
- free-window calculation for study/work blocks

```js
import { findConflicts, freeWindows } from './src/index.js';
```

The code is deliberately UI-independent. A future front end can add timetable cards, assignment boards, calendar imports and notifications without changing the scheduling rules.

Requires Node 20+.
