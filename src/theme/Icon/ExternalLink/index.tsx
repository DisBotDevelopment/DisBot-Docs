export default function IconExternalLink({ width = 13.5, height = 13.5 }) {
  return (
    <div
      style={{
        display: "inline-block",
        width: `${width}px`,
        height: `${height}px`,
        verticalAlign: "middle",
        marginLeft: "0.25rem",
        marginRight: "0.25rem",
      }}
    >
      <svg
        className="icon-external-link"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={width}
        height={height}
      >
        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
        <path d="m21 3-9 9" />
        <path d="M15 3h6v6" />
      </svg>
    </div>
  );
}
