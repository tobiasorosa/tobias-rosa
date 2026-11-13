export type Stat = { value: number; suffix?: string; label: string };

/**
 * The four metric tiles in the hero profile panel. Numbers only if
 * true — verify each of these before launch.
 */
export const stats: Stat[] = [
  { value: 5, suffix: '+', label: 'Years shipping' },
  { value: 6, label: 'Engineering teams' },
  { value: 2, label: 'App stores live' },
  { value: 57, label: 'Skills on record' },
];
