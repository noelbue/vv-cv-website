import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${language === "en" ? "active" : ""}`}
        onClick={() => switchLanguage("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="separator">|</span>
      <button
        className={`lang-btn ${language === "de" ? "active" : ""}`}
        onClick={() => switchLanguage("de")}
        aria-label="Zu Deutsch wechseln"
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
