type IconProps = {
  className?: string;
};

function StrokeIcon({
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconCart({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
      <path d="M3 4h2l2.3 11.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.78L20 8H6" />
    </StrokeIcon>
  );
}

export function IconLeaf({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 21C7.3 21 4.5 17.7 4.5 13.2 4.5 7.4 9.6 3.8 19.5 4.5c.6 9.9-3 16.5-7.5 16.5z" />
      <path d="M6.5 18.5C9 13.5 13 10 17.5 7.5" />
    </StrokeIcon>
  );
}

export function IconTruck({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <rect x="3" y="7" width="11" height="9" rx="1" />
      <path d="M14 10h3.6l2.9 3v3H14" />
      <circle cx="7" cy="17.8" r="1.6" />
      <circle cx="16.8" cy="17.8" r="1.6" />
    </StrokeIcon>
  );
}

export function IconSnowflake({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 3v18" />
      <path d="M4.2 7.5l15.6 9" />
      <path d="M19.8 7.5l-15.6 9" />
    </StrokeIcon>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 3.2l6.8 2.6v5.1c0 4.3-2.9 7.6-6.8 9.9-3.9-2.3-6.8-5.6-6.8-9.9V5.8z" />
      <path d="M9.2 11.6l2 2 3.8-4.2" />
    </StrokeIcon>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M4.5 12.5l5 5L19.5 7" />
    </StrokeIcon>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M4.5 12h15" />
      <path d="M13.5 6l6 6-6 6" />
    </StrokeIcon>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </StrokeIcon>
  );
}

export function IconX({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </StrokeIcon>
  );
}

export function IconBottle({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M10 2.5h4a.8.8 0 0 1 .8.8v2.4l1.7 2.3c.4.5.6 1.1.6 1.7v9.1a3.2 3.2 0 0 1-3.2 3.2h-3.8a3.2 3.2 0 0 1-3.2-3.2V9.7c0-.6.2-1.2.6-1.7l1.7-2.3V3.3a.8.8 0 0 1 .8-.8z" />
    </svg>
  );
}
