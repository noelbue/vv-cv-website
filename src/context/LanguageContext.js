import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Detect language from URL
  const getLanguageFromPath = () => {
    return location.pathname.startsWith("/de") ? "de" : "en";
  };

  const [language, setLanguage] = useState(getLanguageFromPath());

  // Update language when URL changes
  useEffect(() => {
    const newLang = getLanguageFromPath();
    if (newLang !== language) {
      setLanguage(newLang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const switchLanguage = (newLang) => {
    const currentPath = location.pathname;
    let newPath;

    if (newLang === "de") {
      // Switch to German
      if (currentPath.startsWith("/de")) {
        newPath = currentPath;
      } else if (currentPath === "/") {
        newPath = "/de";
      } else {
        newPath = "/de" + currentPath;
      }
    } else {
      // Switch to English
      if (currentPath.startsWith("/de")) {
        newPath = currentPath.replace("/de", "") || "/";
      } else {
        newPath = currentPath;
      }
    }

    navigate(newPath);
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
