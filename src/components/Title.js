import React from "react";
import "../styles/Title.css";

export const Title = ({ title }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
};
