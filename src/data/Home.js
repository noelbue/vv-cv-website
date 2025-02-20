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
      href: "https://www.google.com/maps/place/9320+Arbon/@47.515702,9.3998401,14z/data=!3m1!4b1!4m6!3m5!1s0x479b034b182ce0cf:0x636f223ad9679cf5!8m2!3d47.5140905!4d9.4268301!16zL20vMGczNjNk?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D",
    },
  ],
  cv: {
    text: "Download CV as PDF",
    href: CV_PDF,
    icon: "fa fa-file-pdf-o",
    download: "CV_Viktoryia_Varonchuk_EN.pdf",
  },
};
