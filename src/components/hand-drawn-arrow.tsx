export function HandDrawnArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 40 Q25 45, 45 35 Q65 25, 85 15"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="0"
      />
      <path
        d="M75 10 L88 15 L80 25"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function HandDrawnArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25 5 Q20 25, 25 45 Q30 55, 25 70"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M18 60 L25 73 L32 60"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function HandDrawnArrowCurved({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 50 C30 55, 50 45, 70 35 C90 25, 100 20, 110 15"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 8 L112 15 L105 25"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
