<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=200&text=CAMPUS%20HUB&fontAlignY=38&desc=TIMETABLES%20%E2%80%A2%20DEADLINES%20%E2%80%A2%20FREE%20WINDOWS&descAlignY=58&color=0:050505,55:202020,100:5a1616&fontColor=f5f5f5&descColor=d4d4d4" width="100%" />

![Student](https://img.shields.io/badge/focus-student%20planning-111111?style=for-the-badge)
![Node](https://img.shields.io/badge/Node.js-20%2B-2b2b2b?style=for-the-badge&logo=nodedotjs)
![Tests](https://img.shields.io/badge/tests-node:test-7a1f1f?style=for-the-badge)

**A planning engine for the parts of student life that collide with each other.**

</div>

---

## Current features

- timetable sorting
- event overlap detection
- next-up agenda logic
- deadline risk scoring using time left + progress
- free-window calculation for study/work blocks
- automated tests

## Why I built it

I study Computer Science while juggling classes, work, applications and projects. I wanted the scheduling logic behind a student dashboard instead of another calendar that only displays events without helping me reason about them.

```txt
classes + shifts + deadlines
            ↓
   conflict / gap analysis
            ↓
next event + free windows
            ↓
      priority decisions
```

## Use

```js
import { findConflicts, freeWindows } from './src/index.js';
```

```bash
npm test
```

The code is deliberately UI-independent. A future interface can add timetable cards, calendar imports, assignment boards and notifications without changing the planning rules.

---

<div align="center"><sub>YukiShinobi // a timetable should help make decisions, not just show boxes.</sub></div>
