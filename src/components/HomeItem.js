import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { getTranslations } from "../data/translations/index";
import "../styles/HomeItem.css";
import { DownloadButton } from "../components/DownloadButton";

export const HomeItem = () => {
  const { language } = useLanguage();
  const { Home } = getTranslations(language);

  return (
    <div className="home-item">
      <div className="home-container">
        <div className="home-images">
          <img src={Home.image} alt={Home.name} className="home-image" />
        </div>

        <div className="home-content">
          <h2>{Home.name}</h2>
          <p>{Home.subtitle}</p>
          <ul>
            {Home.contactInfo.map((item, index) => (
              <li key={index}>
                <i className={item.icon} />{" "}
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
              </li>
            ))}
          </ul>

          <DownloadButton button={Home.cv} />
        </div>
      </div>
    </div>
  );
};
