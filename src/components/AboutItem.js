import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { getTranslations } from "../data/translations/index";
import "../styles/AboutItem.css";

export const AboutItem = () => {
  const { language } = useLanguage();
  const { About } = getTranslations(language);

  return (
    <div className="AboutItem">
      <div className="about-container">
        <div className="about-images">
          {About[0].images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`About ${index + 1}`}
              className="about-image"
            />
          ))}
        </div>

        <div className="about-content">
          {About.map((section, index) => (
            <div key={index} className="AboutSection">
              <h2>{section.title}</h2>
              {section.content && <p>{section.content}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
