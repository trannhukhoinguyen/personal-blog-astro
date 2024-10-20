import React from "react";

function generateId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
const H2 = ({ children }: { children: React.ReactNode }) => {
  const id = generateId(`${children?.toString()}`);
  return (
    <h2 id={id} className="hover:!text-text/80 group">
      <a href={`#${id}`} className="not-prose flex items-center gap-2">
        {children}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="invisible size-6 group-hover:visible"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          ></path>
        </svg>
      </a>
    </h2>
  );
};

export default H2;
