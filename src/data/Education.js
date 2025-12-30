import Education_BarIlan_University from "../images/Education_Bar-Ilan_University.png";
import Education_Belarusian_State_University from "../images/Education_Belarusian_State_University.png";
import Education_Israel_Tech_Challenge_ITC from "../images/Education_Israel_Tech_Challenge_ITC.png";
import Education_TeachMeSkills from "../images/Education_TeachMeSkills.png";
import goethe from "../images/goethe.png";
import hds from "../images/hds.png";
import GoetheCertificate_2 from "../downloads/Goethe-Certificate_2.pdf";
import GoetheCertificate from "../downloads/Goethe-Certificate.pdf";
import Certificate_Data_Scientist_Viktoriya_Voronchuk from "../downloads/Certificate_Data_Scientist_Viktoriya_Voronchuk.pdf";
import HDS_A2 from "../downloads/HDS_German_Course_A2.pdf";
import HDS_B1 from "../downloads/HDS_German_Course_B1_1.pdf";

export const Education = [
  {
    id: 1,
    src: hds,
    href: "https://www.hds.ch/",
    company: "HDS (Haus der Sprachen)",
    location: "Romanshorn, Switzerland",
    date: "Jan 2025 – Apr 2025",
    position: "German Course B1",
    details: [
      "Attended German Language Course",
      "Full scope of the course: 40 teaching units of 45 minutes",
    ],
    button: {
      href: HDS_B1,
      text: "Download Certificate",
      icon: "fa fa-file-pdf-o",
      download: "HDS_German_Course_B1_1.pdf",
    },
  },
  {
    id: 2,
    src: hds,
    href: "https://www.hds.ch/",
    company: "HDS (Haus der Sprachen)",
    location: "Romanshorn, Switzerland",
    date: "Nov 2024 – Jan 2025",
    position: "German Course A2",
    details: [
      "Attended German Language Course",
      "Full scope of the course: 40 teaching units of 45 minutes",
    ],
    button: {
      href: HDS_A2,
      text: "Download Certificate",
      icon: "fa fa-file-pdf-o",
      download: "HDS_German_Course_A2.pdf",
    },
  },
  {
    id: 3,
    src: Education_BarIlan_University,
    href: "https://www.biu.ac.il/",
    company: "Bar-Ilan University",
    location: "Ramat Gan, Israel",
    date: "Mar 2023 – Aug 2024",
    position: "International Master of Business Administration (MBA)",
    details: [
      "Focus on finance, data analysis, and business strategy",
      "Core subjects: Accounting, business ethics, economics, leadership, marketing, operations",
      "Expertise in intercultural business processes and international markets",
      "Participation in global business simulations and strategic management projects",
      "Final grade: 88/100 (5.3/6 according to the Swiss system)",
    ],
  },
  {
    id: 4,
    src: goethe,
    href: "https://www.goethe.de/",
    company: "Goethe Institut",
    location: "Munich, Germany",
    date: "Jan 2024 – Feb 2024",
    position: "Second German Language Course (A2)",
    details: [
      "Attended German Language Course",
      "Full scope of the course: 40 teaching units of 45 minutes",
      "Completed the course with great success.",
    ],
    button: {
      href: GoetheCertificate_2,
      text: "Download Certificate",
      icon: "fa fa-file-pdf-o",
      download: "Goethe-Certificate-2.pdf",
    },
  },
  {
    id: 5,
    src: goethe,
    href: "https://www.goethe.de/",
    company: "Goethe Institut",
    location: "Munich, Germany",
    date: "Nov 2023 – Dec 2023",
    position: "First German Language Course (A2)",
    details: [
      "Attended German Language Course",
      "Full scope of the course: 40 teaching units of 45 minutes",
      "Completed the course with great success.",
    ],
    button: {
      href: GoetheCertificate,
      text: "Download Certificate",
      icon: "fa fa-file-pdf-o",
      download: "Goethe-Certificate.pdf",
    },
  },
  {
    id: 6,
    src: Education_TeachMeSkills,
    href: "https://teachmeskills.by/",
    company: "TeachMeSkills",
    location: "Israel",
    date: "Mar 2021 – Dec 2022",
    position: "Data-Scientist-Course",
    details: [
      "Analyzing large datasets across multiple internal sources using varying tools",
      "Python: pandas, numpy, matplotlib, sklearn.metrics, seaborn",
      "MySQL",
      "Project: Using a person's credit-related information dataset, a machine-learning model was built to classify the credit score.",
    ],
    button: {
      href: Certificate_Data_Scientist_Viktoriya_Voronchuk,
      text: "Download Certificate",
      icon: "fa fa-file-pdf-o",
      download: "Certificate_Data_Scientist_Viktoriya_Voronchuk.pdf",
    },
  },
  {
    id: 7,
    src: Education_Israel_Tech_Challenge_ITC,
    href: "https://www.itc.tech/",
    company: "Israel Tech Challenge",
    location: "Israel",
    date: "Oct 2021 – Dec 2021",
    position: "Data-Analytics- & SQL-Course",
    details: [
      "Data Modeling",
      "Mastering SQL",
      "Business Intelligence",
      "Dashboarding and visualization insights using Power BI",
    ],
  },
  {
    id: 8,
    src: Education_Belarusian_State_University,
    href: "https://www.bsu.by/",
    company: "Belarusian State University",
    location: "Minsk, Belarus",
    date: "Sep 2016 – Jun 2020",
    position: "Bachelor of Economics (Finance and Credit)",
    details: [
      "Faculty of Economics",
      "Specialization in financial markets and banking",
      "Research project on optimization and digital transformation in the banking sector",
      "Participation in international finance competitions for students",
      "Graduated with honors (Cum Laude), grade: 9.5/10 (5.7/6 according to the Swiss system)",
    ],
  },
];
