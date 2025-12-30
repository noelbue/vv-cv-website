import React from "react";
import { ExperienceItem } from "../components/ExperienceItem";
import { Title } from "../components/Title";
import { useLanguage } from "../context/LanguageContext";

export const Experience = () => {
  const { language } = useLanguage();

  const titles = {
    en: "Experience",
    de: "Berufserfahrung",
  };

  return (
    <>
      <Title title={titles[language]} />
      <ExperienceItem />
    </>
  );
};
