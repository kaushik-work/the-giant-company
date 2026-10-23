const paths: Record<string, React.ReactNode> = {
  code: <><path d="M8 8l-5 4 5 4M16 8l5 4-5 4" /><path d="M14 5l-4 14" /></>,
  crm: <><circle cx="9" cy="8" r="3.2" /><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" /><path d="M16 5.5a3 3 0 010 5.6M18 14c2 .7 3 2.3 3 5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" /></>,
  workflow: <><rect x="3" y="3" width="6" height="6" rx="1.6" /><rect x="15" y="15" width="6" height="6" rx="1.6" /><rect x="15" y="3" width="6" height="6" rx="1.6" /><path d="M9 6h6M18 9v6M9 6v9a3 3 0 003 3h3" /></>,
  rocket: <><path d="M5 15c-1.5 1.2-2 4-2 6 2 0 4.8-.5 6-2" /><path d="M12 15l-3-3c1-4 4.5-8.500 11-9 .5 6.500-5 10-9 11z" /><circle cx="15.500" cy="8.500" r="1.400" /><path d="M9 12H5l2-3.500h3.500M12 15v4l3.500-2v-3" /></>,
  bot: <><rect x="4" y="8" width="16" height="11" rx="4" /><path d="M12 4v4M9 13v1.500M15 13v1.500" /><circle cx="12" cy="3.500" r="1" /><path d="M2 13v2M22 13v2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3.500" /><path d="M4 8l8 5.500L20 8" /></>,
  brain: <><path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3.200 3.200 0 002 5 3 3 0 005 1V5a2 2 0 00-2-1z" /><path d="M15 4a3 3 0 013 3 3 3 0 012 5 3.200 3.200 0 01-2 5 3 3 0 01-5 1V5a2 2 0 012-1z" /></>,
  doc: <><path d="M7 3h7l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
  card: <><rect x="2.500" y="5" width="19" height="14" rx="3.500" /><path d="M2.500 10h19M6.500 15h4" /></>,
  megaphone: <><path d="M4 10v4a1 1 0 001 1h2l6 4V5L7 9H5a1 1 0 00-1 1z" /><path d="M17 9.500a3.500 3.500 0 010 5M19.500 7a7 7 0 010 10" /></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  phone: <><rect x="7" y="2.500" width="10" height="19" rx="2.800" /><path d="M10.500 5.500h3M11 18.500h2" /></>,
  ship: <><path d="M3 15l2 4h14l2-4-9-3.500z" /><path d="M12 11.500V4l5 4.500M7 12.500V8h5" /></>,
  chat: <><path d="M4 5h16a1 1 0 011 1v10a1 1 0 01-1 1h-8l-5 4v-4H4a1 1 0 01-1-1V6a1 1 0 011-1z" /><path d="M8 10h8M8 13h5" /></>,
  pin: <><path d="M12 21s7-6.200 7-11.500A7 7 0 005 9.500C5 14.800 12 21 12 21z" /><circle cx="12" cy="9.500" r="2.500" /></>,
  call: <><path d="M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></>,
  moon: <><path d="M20 14.500A8.500 8.500 0 019.500 4a8.500 8.500 0 1010.500 10.500z" /></>,
};

export default function Icon({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] ?? paths.code}
    </svg>
  );
}
