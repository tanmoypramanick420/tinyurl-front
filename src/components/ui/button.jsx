import React from "react";

export default function Button({
  children,
  className = "",
  size,
  disabled,
  onClick,
  ...props
}) {
  const sizeClass = size === "sm" ? "px-3 py-1 text-sm" : "px-4 py-2";
  const disabledClass = disabled ? "opacity-60 cursor-not-allowed" : "";
  return (
    <button
      {...props}
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-600 text-white rounded-md ${sizeClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
}
