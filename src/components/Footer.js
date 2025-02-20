import React from "react";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <p>
            {new Date().getFullYear()} © Viktoryia Varanchuk | Made by{" "}
            <a
              href="https://b-business-solutions.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bürgler Business Solutions
            </a>
          </p>
        </div>
        <div className="footer-content-right"></div>
      </div>
    </footer>
  );
};
