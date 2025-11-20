import React from "react";

export default function Input(props) {
  return (
    <input
      {...props}
      className={`w-full border border-gray-200 px-3 py-2 bg-white ${
        props.className || ""
      }`}
    />
  );
}
