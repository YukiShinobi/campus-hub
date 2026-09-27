export function overlaps(a, b) {
  return new Date(a.start) < new Date(b.end) && new Date(b.start) < new Date(a.end);
}

export function findConflicts(events = []) {
  const conflicts = [];
  for (let i = 0; i < events.length; i += 1) {
    for (let j = i + 1; j < events.length; j += 1) {
      if (overlaps(events[i], events[j])) conflicts.push([events[i], events[j]]);
    }
  }
  return conflicts;
}

export function sortAgenda(events = []) {
  return [...events].sort((a, b) => new Date(a.start) - new Date(b.start));
}

export function nextItems(events = [], now = new Date(), limit = 5) {
  return sortAgenda(events)
    .filter(item => new Date(item.end ?? item.start) >= now)
    .slice(0, limit)
    .map(item => ({ ...item, minutesUntil: Math.round((new Date(item.start) - now) / 60000) }));
}

export function deadlineRisk(deadline, progressPercent, now = new Date()) {
  const hours = (new Date(deadline) - now) / 3600000;
  if (hours < 0) return 'overdue';
  if (progressPercent >= 100) return 'done';
  if (hours <= 24 && progressPercent < 80) return 'critical';
  if (hours <= 72 && progressPercent < 50) return 'high';
  if (hours <= 168 && progressPercent < 25) return 'medium';
  return 'low';
}

export function freeWindows(events = [], dayStart, dayEnd, minimumMinutes = 30) {
  const sorted = sortAgenda(events.filter(e => new Date(e.start) < new Date(dayEnd) && new Date(e.end) > new Date(dayStart)));
  const windows = [];
  let cursor = new Date(dayStart);
  for (const event of sorted) {
    const start = new Date(event.start);
    if ((start - cursor) / 60000 >= minimumMinutes) windows.push({ start: cursor.toISOString(), end: start.toISOString() });
    const end = new Date(event.end);
    if (end > cursor) cursor = end;
  }
  const end = new Date(dayEnd);
  if ((end - cursor) / 60000 >= minimumMinutes) windows.push({ start: cursor.toISOString(), end: end.toISOString() });
  return windows;
}
