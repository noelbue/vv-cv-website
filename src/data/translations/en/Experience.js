import swisslogo from "../../../images/swiss-logo.svg";
import HolyFashionGroup from "../../../images/Holy-Fashion-Group_Logo.png";
import Papaya_Global_Logo from "../../../images/Papaya_Global_Logo.png";
import Experience_QBO_Services_Ltd from "../../../images/Experience_QBO_Services_Ltd.png";
import Experience_I_Know_First_Daily_Market_Forecast from "../../../images/Experience_I_Know_First_Daily_Market_Forecast.png";
import Experience_Sberbank from "../../../images/Experience_Sberbank.png";
import Certificate_VAVI_CitDevAutomationJunior from "../../../downloads/Certificate_VAVI_CitDevAutomationJunior.pdf";
import Reference_Letter_SWISS from "../../../downloads/VAVI_54387_Varanchuk_Viktoryia_Letter_of_reference.pdf";
import Reference_Letter_Papaya_Global from "../../../downloads/Reference_Papaya_Global.pdf";
import Reference_Letter_QBO_Services from "../../../downloads/Reference_QBO_Services_Ltd.pdf";

export const Experience = [
  {
    id: 0,
    src: HolyFashionGroup,
    href: "https://www.holyfashiongroup.de/",
    company: "Holy Fashion Group / Strellson AG",
    location: "Kreuzlingen, Switzerland",
    date: "Aug 2025 – present",
    position: "Intern in the Finance Team",
    details: [
      "Support with monthly and annual financial statements for several group companies, ensuring correct accrual accounting and complete documentation.",
      "Performing intercompany postings and reconciliations, including posting, clearing open items, and creating intercompany invoices.",
      "Support in the area of asset accounting and leasing, including capitalization, depreciation, and cost allocation.",
      "Assistance with external reporting requirements, in particular for the SNB CAS (Current Account Survey) – preparation and classification of cross-border transactions.",
      "Preparation and analysis of financial and balance sheet data from SAP Analytics Cloud (SAC), including Excel exports for closing and reporting purposes.",
      "Working with SAP S/4HANA, SAP Analytics Cloud, and Excel to analyze financial data and ensure reporting accuracy.",
      "Interdisciplinary collaboration with various teams and departments to continuously improve accounting processes.",
    ],
  },
  {
    id: 1,
    src: swisslogo,
    href: "https://www.swiss.com/",
    company: "Swiss International Airlines AG",
    location: "Zurich, Switzerland",
    date: "Feb 2025 – Aug 2025",
    position: "Intern in the Financial Accounting Excellence & Services Team",
    details: [
      "Helped develop and implement new financial accounting processes and systems to boost operational efficiency.",
      "Supported the analysis and management of accounts payable and accounts receivable processes managed by shared service centers in Krakow, Manila, and Mexico.",
      "Documented and illustrated financial processes to improve transparency and knowledge sharing.",
      "Led financial accounting initiatives and projects from planning to implementation.",
      "Supported OKR (Objectives & Key Results) initiatives to improve financial management methods.",
      "Collaborated with cross-functional teams to develop best-in-class solutions for global financial accounting.",
      "Worked with Power BI and Power Automate to create automated reports and email workflows, including data queries, JSON parsing, number formatting, and other data conversion tasks to support financial operations.",
    ],
    button: {
      href: Certificate_VAVI_CitDevAutomationJunior,
      text: "Microsoft Power Platform Certificate",
      icon: "fa fa-file-pdf-o",
      download: "Certificate_VAVI_CitDevAutomationJunior.pdf",
    },
    button2: {
      href: Reference_Letter_SWISS,
      text: "Reference Letter",
      icon: "fa fa-file-pdf-o",
      download: "VAVI_54387_Varanchuk_Viktoryia_Letter_of_reference.pdf",
    },
  },
  {
    id: 2,
    src: Papaya_Global_Logo,
    href: "https://www.papayaglobal.com/",
    company: "Papaya Global",
    location: "Herzliya, Israel",
    date: "Dec 2021 – Jul 2024",
    position: "Customer Operations & Payroll Journal Entry Controller",
    details: [
      "Responsible for the financial management of major accounts, including the control of complex booking processes in full compliance with international accounting standards.",
      "Design and implementation of customer-specific reporting solutions for international corporations, resulting in more efficient process handling.",
      "Successful management of cross-departmental projects to optimize monthly financial reporting, with demonstrable quality improvement and faster delivery.",
      "Implementation of automated systems for data validation and reconciliation for a significant monthly payroll volume.",
      "Function as central contact person for strategic key accounts with consistent customer satisfaction rates.",
    ],
    button: {
      href: Reference_Letter_Papaya_Global,
      text: "Reference Letter",
      icon: "fa fa-file-pdf-o",
      download: "Reference_Papaya_Global.pdf",
    },
  },
  {
    id: 3,
    src: Experience_QBO_Services_Ltd,
    href: "https://www.linkedin.com/company/q.b.o-services-ltd/about/",
    company: "Q.B.O Services Ltd",
    location: "Herzliya, Israel",
    date: "Apr 2021 – Dec 2021",
    position: "Junior Financial Analyst",
    details: [
      "Developing strategic financial analyses using Excel, Power BI, and MySQL as a basis for management decisions.",
      "Conducting detailed risk analyses and P&L evaluations to identify business opportunities and optimization potential.",
      "Independently managing the asset management portfolio, including valuation, calculation, and contract renewal.",
      "Increasing portfolio growth through targeted market analyses and identification of lucrative investment opportunities.",
      "Active participation in the development and implementation of innovative financial products.",
    ],
    button: {
      href: Reference_Letter_QBO_Services,
      text: "Reference Letter",
      icon: "fa fa-file-pdf-o",
      download: "Reference_QBO_Services_Ltd.pdf",
    },
  },
  {
    id: 4,
    src: Experience_I_Know_First_Daily_Market_Forecast,
    href: "https://iknowfirst.com/",
    company: "I Know First: Daily Market Forecast",
    location: "Tel Aviv, Israel",
    date: "Nov 2020 – Apr 2021",
    position: "Financial Analyst Intern",
    details: [
      "Conducting comprehensive fundamental analyses for over 100 companies in the US, UK, and Middle East.",
      "Developing compelling investment cases for promising stocks to optimize client portfolios.",
      "Increasing website usage through data-driven content strategy and traffic analysis.",
      "Preparing in-depth market analyses for institutional clients with a focus on growth markets.",
    ],
  },
  {
    id: 5,
    src: Experience_Sberbank,
    href: "https://www.sberbank.com/index",
    company: "BPS-Sberbank",
    location: "Minsk, Belarus",
    date: "Jun 2019 – Apr 2020",
    position: "Marketing and PR Intern",
    details: [
      "Conducting a strategic three-year analysis to identify profitability drivers and growth potential.",
      "Developing successful product strategies with a proven track record of increasing deposit accounts.",
      "Optimizing product development by implementing design thinking and customer journey mapping.",
      "Creating decision-relevant SWOT and profitability analyses for the card portfolio.",
    ],
  },
];
