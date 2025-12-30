import React from "react";
import { AboutItem } from "../components/AboutItem";
import { Title } from "../components/Title";
import { useLanguage } from "../context/LanguageContext";

export const About = () => {
  const { language } = useLanguage();

  const titles = {
    en: "About me",
    de: "Über mich",
  };

  return (
    <>
      <Title title={titles[language]} />
      <AboutItem />
    </>
  );
};
