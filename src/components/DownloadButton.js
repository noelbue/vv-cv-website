import React from "react";
import "../styles/DownloadButton.css";

export const DownloadButton = ({ button }) => {
  if (!button || !button.href) return null;

  return (
    <a
      href={button.href}
      className="download-button"
      target="_blank"
      rel="noopener noreferrer"
      download={button.download}
    >
      <i className={button.icon} /> {button.text}
    </a>
  );
};
