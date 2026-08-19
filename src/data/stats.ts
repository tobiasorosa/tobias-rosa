export type Stat = { value: number; suffix?: string; label: string };

/**
 * DS voice rule: "Numbers only if true. Three real numbers beat four
 * with one invented." Verify each of these before launch.
 */
export const stats: Stat[] = [
  { value: 5, suffix: '+', label: 'Years shipping' },
  { value: 6, label: 'Engineering teams' },
  { value: 2, label: 'App stores live' },
  { value: 57, label: 'Skills on record' },
];
