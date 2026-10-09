export function Logo({ light = false }: { light?: boolean }) {
  const fill = light ? "#fff" : "#141414";
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true">
      <rect x="0" y="14" width="12" height="12" rx="2" fill={fill} />
      <rect x="14" y="14" width="12" height="12" rx="2" fill={fill} />
      <circle cx="20" cy="6.5" r="6" fill="#FF5A2C" />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 12L12 4M5.5 4H12v6.5" />
    </svg>
  );
}

export function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="14" rx="2.5" />
      <path d="M3 8.5h18M8 21h8" />
    </svg>
  );
}

export function GrowthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 18l5-6 4 3 7-9" />
      <path d="M15 6h5v5" />
    </svg>
  );
}

export function InstaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r=".9" fill="currentColor" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="1.5" y="3" width="13" height="10" rx="2" />
      <path d="M2 4l6 5 6-5" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 2h3l1.5 3.5-2 1.2a8 8 0 004 4l1.2-2L14 10v3a1.5 1.5 0 01-1.5 1.5A11.5 11.5 0 011.5 3.5 1.5 1.5 0 013 2z" />
    </svg>
  );
}

export function InstagramSmall() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2" y="2" width="12" height="12" rx="3.5" />
      <circle cx="8" cy="8" r="2.8" />
    </svg>
  );
}
