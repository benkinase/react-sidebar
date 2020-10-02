import React from "react";

export default function Title({ name, title }) {
  return (
    <div>
      <h1>
        <strong className="text-blue">{title}</strong>
      </h1>
    </div>
  );
}
