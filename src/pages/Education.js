import React from "react";
import { EducationItem } from "../components/EducationItem";
import { Title } from "../components/Title";
import { useLanguage } from "../context/LanguageContext";

export const Education = () => {
  const { language } = useLanguage();

  const titles = {
    en: "Education",
    de: "Bildung",
  };

  return (
    <>
      <Title title={titles[language]} />
      <EducationItem />
    </>
  );
};
