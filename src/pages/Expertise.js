import React from "react";
import { ExpertiseItem } from "../components/ExpertiseItem";
import { Title } from "../components/Title";
import { useLanguage } from "../context/LanguageContext";

export const Expertise = () => {
  const { language } = useLanguage();

  const titles = {
    en: "Expertise",
    de: "Kenntnisse",
  };

  return (
    <>
      <Title title={titles[language]} />
      <ExpertiseItem />
    </>
  );
};
