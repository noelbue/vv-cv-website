import React from "react";
import { Expertise } from "../data/Expertise";
import "../styles/ExpertiseItem.css";

export const ExpertiseItem = () => {
  return (
    <div className="expertise-section">
      {Expertise.map((category, index) => (
        <div key={index} className="expertise-category">
          <h2>{category.category}</h2>
          <ul className="expertise-list">
            {category.skills.map((skill, i) => (
              <li key={i} className="expertise-item">
                <span className="expertise-name">{skill.name}</span>
                {skill.level && (
                  <span className="expertise-level">{skill.level}</span>
                )}
                {skill.details && (
                  <span className="expertise-details">
                    : {skill.details.join(", ")}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
