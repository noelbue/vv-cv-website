import React from "react";
import { Education } from "../data/Education";
import "../styles/ExperienceItem.css";
import { DownloadButton } from "../components/DownloadButton";

export const EducationItem = () => {
  return (
    <>
      {Education.map((education) => (
        <div className="ExperienceItem" key={education.id}>
          <div className="ExperienceCompany">
            <a href={education.href} target="_blank" rel="noreferrer">
              <img src={education.src} alt={education.company} />
            </a>
            <h3>{education.company}</h3>
            <p>{education.location}</p>
          </div>
          <div className="ExperiencePosition">
            <h3>{education.date}</h3>
            <h2>{education.position}</h2>
            <ul>
              {education.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <DownloadButton button={education.button} />
          </div>
          <hr></hr>
        </div>
      ))}
    </>
  );
};
