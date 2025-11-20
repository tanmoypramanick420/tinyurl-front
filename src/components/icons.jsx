import React from "react";

export function Loader2(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      className={`animate-spin ${props.className || ""}`}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        opacity="0.25"
      />
      <path
        d="M22 12a10 10 0 00-10-10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Copy(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <rect
        x="9"
        y="9"
        width="9"
        height="9"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="2"
      />
      <rect
        x="6"
        y="6"
        width="9"
        height="9"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="2"
      />
    </svg>
  );
}

export function Check(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Loader2;
