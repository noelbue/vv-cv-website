import Education_BarIlan_University from "../../../images/Education_Bar-Ilan_University.png";
import Education_Belarusian_State_University from "../../../images/Education_Belarusian_State_University.png";
import Education_Israel_Tech_Challenge_ITC from "../../../images/Education_Israel_Tech_Challenge_ITC.png";
import Education_TeachMeSkills from "../../../images/Education_TeachMeSkills.png";
import goethe from "../../../images/goethe.png";
import hds from "../../../images/hds.png";
import GoetheCertificate_2 from "../../../downloads/Goethe-Certificate_2.pdf";
import GoetheCertificate from "../../../downloads/Goethe-Certificate.pdf";
import Certificate_Data_Scientist_Viktoriya_Voronchuk from "../../../downloads/Certificate_Data_Scientist_Viktoriya_Voronchuk.pdf";
import HDS_A2 from "../../../downloads/HDS_German_Course_A2.pdf";
import HDS_B1 from "../../../downloads/HDS_German_Course_B1_1.pdf";
import BarIlanCertificate from "../../../downloads/MBA-Certificate_Viktoryia_Varanchuk.pdf";

export const Education = [
  {
    id: 1,
    src: hds,
    href: "https://www.hds.ch/",
    company: "HDS (Haus der Sprachen)",
    location: "Romanshorn, Switzerland",
    date: "Nov. 2025 – Feb. 2026",
    position: "Deutschkurs Course B2",
    details: [
      "Teilnahme am Deutschkurs",
      "Gesamtumfang des Kurses: 40 Unterrichtseinheiten à 45 Minuten",
    ],
  },
  {
    id: 2,
    src: hds,
    href: "https://www.hds.ch/",
    company: "HDS (Haus der Sprachen)",
    location: "Romanshorn, Schweiz",
    date: "Jan. 2025 – Apr. 2025",
    position: "Deutschkurs B1",
    details: [
      "Teilnahme am Deutschkurs",
      "Gesamtumfang des Kurses: 40 Unterrichtseinheiten à 45 Minuten",
    ],
    button: {
      href: HDS_B1,
      text: "Zertifikat herunterladen",
      icon: "fa fa-file-pdf-o",
      download: "HDS_German_Course_B1_1.pdf",
    },
  },
  {
    id: 3,
    src: hds,
    href: "https://www.hds.ch/",
    company: "HDS (Haus der Sprachen)",
    location: "Romanshorn, Schweiz",
    date: "Nov. 2024 – Jan. 2025",
    position: "Deutschkurs A2",
    details: [
      "Teilnahme am Deutschkurs",
      "Gesamtumfang des Kurses: 40 Unterrichtseinheiten à 45 Minuten",
    ],
    button: {
      href: HDS_A2,
      text: "Zertifikat herunterladen",
      icon: "fa fa-file-pdf-o",
      download: "HDS_German_Course_A2.pdf",
    },
  },
  {
    id: 4,
    src: Education_BarIlan_University,
    href: "https://www.biu.ac.il/",
    company: "Bar-Ilan Universität",
    location: "Ramat Gan, Israel",
    date: "März 2023 – Aug. 2024",
    position: "International Master of Business Administration (MBA)",
    details: [
      "Schwerpunkte in Finanzen, Datenanalyse und Geschäftsstrategie",
      "Kernfächer: Rechnungswesen, Wirtschaftsethik, Volkswirtschaft, Führung, Marketing, Operations",
      "Expertise in interkulturellen Geschäftsprozessen und internationalen Märkten",
      "Teilnahme an globalen Wirtschaftssimulationen und strategischen Managementprojekten",
      "Abschlussnote: 88/100 (5,3/6 gemäss Schweizer System)",
    ],
    button: {
      href: BarIlanCertificate,
      text: "Diplom herunterladen",
      icon: "fa fa-file-pdf-o",
      download: "MBA-Certificate_Viktoryia_Varanchuk.pdf",
    },
  },
  {
    id: 5,
    src: goethe,
    href: "https://www.goethe.de/",
    company: "Goethe Institut",
    location: "München, Deutschland",
    date: "Jan. 2024 – Feb. 2024",
    position: "Zweiter Deutschkurs (A2)",
    details: [
      "Teilnahme am Deutschkurs",
      "Gesamtumfang des Kurses: 40 Unterrichtseinheiten à 45 Minuten",
      "Abschluss des Kurses mit grossem Erfolg.",
    ],
    button: {
      href: GoetheCertificate_2,
      text: "Zertifikat herunterladen",
      icon: "fa fa-file-pdf-o",
      download: "Goethe-Certificate-2.pdf",
    },
  },
  {
    id: 6,
    src: goethe,
    href: "https://www.goethe.de/",
    company: "Goethe Institut",
    location: "München, Deutschland",
    date: "Nov. 2023 – Dez. 2023",
    position: "Erster Deutschkurs (A2)",
    details: [
      "Teilnahme am Deutschkurs",
      "Gesamtumfang des Kurses: 40 Unterrichtseinheiten à 45 Minuten",
      "Abschluss des Kurses mit grossem Erfolg.",
    ],
    button: {
      href: GoetheCertificate,
      text: "Zertifikat herunterladen",
      icon: "fa fa-file-pdf-o",
      download: "Goethe-Certificate.pdf",
    },
  },
  {
    id: 7,
    src: Education_TeachMeSkills,
    href: "https://teachmeskills.by/",
    company: "TeachMeSkills",
    location: "Israel",
    date: "März 2021 – Dez. 2022",
    position: "Data-Scientist-Kurs",
    details: [
      "Analyse grosser Datensätze aus mehreren internen Quellen mit verschiedenen Tools",
      "Python: pandas, numpy, matplotlib, sklearn.metrics, seaborn",
      "MySQL",
      "Projekt: Anhand eines Datensatzes mit kreditbezogenen Informationen wurde ein Machine-Learning-Modell zur Klassifizierung der Kreditwürdigkeit erstellt.",
    ],
    button: {
      href: Certificate_Data_Scientist_Viktoriya_Voronchuk,
      text: "Zertifikat herunterladen",
      icon: "fa fa-file-pdf-o",
      download: "Certificate_Data_Scientist_Viktoriya_Voronchuk.pdf",
    },
  },
  {
    id: 8,
    src: Education_Israel_Tech_Challenge_ITC,
    href: "https://www.itc.tech/",
    company: "Israel Tech Challenge",
    location: "Israel",
    date: "Okt. 2021 – Dez. 2021",
    position: "Data-Analytics- & SQL-Kurs",
    details: [
      "Datenmodellierung",
      "SQL beherrschen",
      "Business Intelligence",
      "Dashboarding und Visualisierung von Erkenntnissen mit Power BI",
    ],
  },
  {
    id: 9,
    src: Education_Belarusian_State_University,
    href: "https://www.bsu.by/",
    company: "Staatliche Universität Belarus",
    location: "Minsk, Belarus",
    date: "Sep. 2016 – Jun. 2020",
    position: "Bachelor of Economics (Finanzen und Kredit)",
    details: [
      "Wirtschaftswissenschaftliche Fakultät",
      "Spezialisierung auf Finanzmärkte und Bankwesen",
      "Forschungsprojekt zur Optimierung und digitalen Transformation im Bankensektor",
      "Teilnahme an internationalen Finanzwettbewerben für Studierende",
      "Mit Auszeichnung (Cum Laude) abgeschlossen, Note: 9,5/10 (5,7/6 gemäss Schweizer System)",
    ],
  },
];
