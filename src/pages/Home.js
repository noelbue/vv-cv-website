import React from "react";
import { Title } from "../components/Title";
import { HomeItem } from "../components/HomeItem";
import { useLanguage } from "../context/LanguageContext";

export const Home = () => {
  const { language } = useLanguage();

  const titles = {
    en: "Get to know me",
    de: "Lernen Sie mich kennen",
  };

  return (
    <>
      <Title title={titles[language]} />
      <HomeItem />
    </>
  );
};
