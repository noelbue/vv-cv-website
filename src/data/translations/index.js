// Import English translations
import { Home as HomeEN } from "./en/Home";
import { About as AboutEN } from "./en/About";
import { Education as EducationEN } from "./en/Education";
import { Experience as ExperienceEN } from "./en/Experience";
import { Expertise as ExpertiseEN } from "./en/Expertise";
import { NavLinks as NavLinksEN } from "./en/NavLinks";

// Import German translations
import { Home as HomeDE } from "./de/Home";
import { About as AboutDE } from "./de/About";
import { Education as EducationDE } from "./de/Education";
import { Experience as ExperienceDE } from "./de/Experience";
import { Expertise as ExpertiseDE } from "./de/Expertise";
import { NavLinks as NavLinksDE } from "./de/NavLinks";

export const getTranslations = (language) => {
  if (language === "de") {
    return {
      Home: HomeDE,
      About: AboutDE,
      Education: EducationDE,
      Experience: ExperienceDE,
      Expertise: ExpertiseDE,
      NavLinks: NavLinksDE,
    };
  }

  // Default to English
  return {
    Home: HomeEN,
    About: AboutEN,
    Education: EducationEN,
    Experience: ExperienceEN,
    Expertise: ExpertiseEN,
    NavLinks: NavLinksEN,
  };
};
