import React from "react";
import { Expertise } from "../data/Expertise";

export const ExpertiseItem = () => {
  return (
    <>
      {Expertise.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <ul>
            {category.skills.map((skill, i) => (
              <li key={i}>
                {skill.name} {skill.level ? `(${skill.level})` : ""}
                {skill.details && `: ${skill.details.join(", ")}`}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
