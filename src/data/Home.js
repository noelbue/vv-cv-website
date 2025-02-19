import Portrait from "../images/Portrait.jpeg";
import CV_PDF from "../downloads/CV_Viktoryia_Varanchuk_EN.pdf";

export const Home = {
  name: "Viktoryia Varanchuk",
  subtitle: "Let's connect",
  image: Portrait,
  contactInfo: [
    {
      icon: "fa fa-envelope",
      text: "vvoronchuk99@gmail.com",
      href: "mailto:vvoronchuk99@gmail.com",
    },
    {
      icon: "fa fa-phone",
      text: "+41 78 309 19 36",
      href: "tel:+41783091936",
    },
    {
      icon: "fa fa-location-arrow",
      text: "Arbon, CH-9320",
    },
  ],
  cv: {
    text: "Download CV as PDF",
    href: CV_PDF,
    icon: "fa fa-file-pdf-o",
    download: "CV_Viktoryia_Varonchuk_EN.pdf",
  },
};
