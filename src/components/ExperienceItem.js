import React from "react";
import { Experience } from "../data/Experience";
import "../styles/ExperienceItem.css";
import { DownloadButton } from "../components/DownloadButton";

export const ExperienceItem = () => {
  return (
    <>
      {Experience.map((experience) => (
        <div className="ExperienceItem" key={experience.id}>
          <div className="ExperienceCompany">
            <a href={experience.href} target="_blank" rel="noreferrer">
              <img src={experience.src} alt={experience.company} />
            </a>
            <h3>{experience.company}</h3>
            <p>{experience.location}</p>
          </div>
          <div className="ExperiencePosition">
            <h3>{experience.date}</h3>
            <h2>{experience.position}</h2>
            <ul>
              {experience.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <DownloadButton button={experience.button} />
          </div>
          <hr></hr>
        </div>
      ))}
    </>
  );
};
