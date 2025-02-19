import React from "react";
import { About } from "../data/About";
import "../styles/AboutItem.css";

export const AboutItem = () => {
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
