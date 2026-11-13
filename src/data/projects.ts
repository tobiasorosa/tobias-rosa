import agenda from '../assets/agenlink/agenda.png';
import dashboard from '../assets/agenlink/dashboard.png';
import shareLink from '../assets/agenlink/share-link.png';

export type Project = {
  slug: string;
  name: string;
  platforms: string;
  url: string;
  urlLabel: string;
  summary: string;
  /** Labelled rows under the summary — PROBLEM / BUILT / MY PART / STACK. */
  problem: string;
  built: string;
  myPart: string;
  stack: string[];
  /** Phone screenshots at the device's own ratio, imported from src/assets/. */
  shots: { src: ImageMetadata; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: 'agenlink',
    name: 'AgenLink',
    platforms: 'iOS · Android · Web',
    url: 'https://agenlink.net',
    urlLabel: 'agenlink.net',
    summary:
      'A scheduling platform for independent professionals in Brazil — hairdressers, lawyers, personal trainers, tattoo artists. Clients book themselves from a public link, reminders go out over WhatsApp, and everything stays in sync with Google Calendar. I co-founded it with a friend and built it end to end.',
    problem:
      'Autonomous professionals run their agenda out of a WhatsApp thread. Double bookings, no-shows, and Sunday nights spent sorting out the week.',
    built:
      'Public booking pages, automatic rescheduling and cancellation, WhatsApp reminders, two-way Google Calendar sync, subscription billing, and the mobile app on both stores.',
    myPart:
      'Co-founder and engineer. Architecture, API, app, deploys, and the boring decisions in between.',
    stack: ['TypeScript', 'React', 'React Native', 'Node.js', 'PostgreSQL', 'Google Calendar API', 'AWS'],
    shots: [
      {
        src: dashboard,
        alt: "AgenLink dashboard with a pending booking request, the week's counts, the public booking link and the next appointment.",
      },
      {
        src: shareLink,
        alt: 'Share sheet showing the QR code and address of a public booking page.',
      },
      {
        src: agenda,
        alt: 'Agenda day view with one confirmed appointment and a blocked afternoon.',
      },
    ],
  },
];
