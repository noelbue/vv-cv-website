import Portrait from "../../../images/Portrait.jpeg";
import CV_PDF from "../../../downloads/CV_Viktoryia_Varanchuk_DE.pdf";

export const Home = {
  name: "Viktoryia Varanchuk",
  subtitle: "Lassen Sie uns vernetzen",
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
      text: "Horn, CH-9326",
      href: "http://google.com/maps/place/9326+Horn/@47.4927939,9.4524314,3840m/data=!3m2!1e3!4b1!4m6!3m5!1s0x479b1b5b2077d975:0x7b5963801028344e!8m2!3d47.4949526!4d9.4627045!16zL20vMGczNjFn?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
    },
    {
      icon: "fa fa-linkedin-square",
      text: "Vernetzen Sie sich auf LinkedIn",
      href: "https://www.linkedin.com/in/viktoriyavoronchuk/",
    },
  ],
  cv: {
    text: "Lebenslauf als PDF herunterladen",
    href: CV_PDF,
    icon: "fa fa-file-pdf-o",
    download: "CV_Viktoryia_Varanchuk_DE.pdf",
  },
};
