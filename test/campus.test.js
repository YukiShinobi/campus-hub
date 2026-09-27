import test from 'node:test';
import assert from 'node:assert/strict';
import { deadlineRisk, findConflicts, freeWindows } from '../src/index.js';

test('detects timetable conflicts', () => {
  const events = [
    { start: '2026-09-28T10:00:00Z', end: '2026-09-28T11:00:00Z' },
    { start: '2026-09-28T10:30:00Z', end: '2026-09-28T12:00:00Z' }
  ];
  assert.equal(findConflicts(events).length, 1);
});

test('flags close unfinished deadlines', () => {
  const now = new Date('2026-09-27T10:00:00Z');
  assert.equal(deadlineRisk('2026-09-28T08:00:00Z', 30, now), 'critical');
});

test('finds free windows', () => {
  const windows = freeWindows(
    [{ start: '2026-09-27T10:00:00Z', end: '2026-09-27T11:00:00Z' }],
    '2026-09-27T09:00:00Z',
    '2026-09-27T13:00:00Z',
    30
  );
  assert.equal(windows.length, 2);
});
