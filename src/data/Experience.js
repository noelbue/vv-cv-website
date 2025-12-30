import swisslogo from "../images/swiss-logo.svg";
import HolyFashionGroup from "../images/Holy-Fashion-Group_Logo.png";
import Papaya_Global_Logo from "../images/Papaya_Global_Logo.png";
import Experience_QBO_Services_Ltd from "../images/Experience_QBO_Services_Ltd.png";
import Experience_I_Know_First_Daily_Market_Forecast from "../images/Experience_I_Know_First_Daily_Market_Forecast.png";
import Experience_Sberbank from "../images/Experience_Sberbank.png";
import Certificate_VAVI_CitDevAutomationJunior from "../downloads/Certificate_VAVI_CitDevAutomationJunior.pdf";
import Reference_Letter_SWISS from "../downloads/VAVI_54387_Varanchuk_Viktoryia_Letter_of_reference.pdf";
import Reference_Letter_Papaya_Global from "../downloads/Reference_Papaya_Global.pdf";
import Reference_Letter_QBO_Services from "../downloads/Reference_QBO_Services_Ltd.pdf";

export const Experience = [
  {
    id: 0,
    src: HolyFashionGroup,
    href: "https://www.holyfashiongroup.de/",
    company: "Holy Fashion Group / Strellson AG",
    location: "Kreuzlingen, Switzerland",
    date: "Aug 2025 – present",
    position: "Finance Intern",
    details: [
      "Supported month-end and year-end closing activities for multiple group entities, ensuring accurate period cut-off and proper documentation.",
      "Performed intercompany accounting and reconciliations, including postings, clearing of open items, and preparation of intercompany invoices.",
      "Assisted with fixed assets and leasing activities, supporting capitalization, depreciation, and cost allocation processes.",
      "Contributed to external reporting requirements, including preparation of SNB CAS (Current Account Survey) data and classification of cross-border transactions.",
      "Extracted and prepared financial statements and balance sheet data from SAP Analytics Cloud (SAC) packages, exporting reports to Excel for closing and reporting purposes.",
      "Worked with SAP S/4HANA, SAP Analytics Cloud, and Excel to analyze financial data and ensure reporting accuracy.",
      "Collaborated cross-functionally with various teams to support continuous improvement of accounting processes and practices.",
    ],
  },
  {
    id: 1,
    src: swisslogo,
    href: "https://www.swiss.com/",
    company: "Swiss International Airlines AG",
    location: "Zurich, Switzerland",
    date: "Feb 2025 – Aug 2025",
    position: "Financial Accounting Excellence – Services Intern",
    details: [
      "Assisted in designing and implementing new financial accounting processes and systems to enhance operational efficiency.",
      "Supported the analysis and steering of accounts payable & receivable processes managed by shared service centers in Krakow, Manila, and Mexico.",
      "Documented and illustrated financial processes to improve transparency and knowledge sharing.",
      "Co-managed financial accounting initiatives and projects, contributing from planning to implementation.",
      "Assisted in driving OKR (Objectives & Key Results) initiatives to enhance financial management methodologies.",
      "Collaborated with cross-functional teams to develop best-in-class solutions for global financial accounting operations.",
      "Worked with Power BI and Power Automate to create automated reports and email workflows, including data queries, JSON parsing, number formatting, and other data transformation tasks to support finance operations.",
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
      "Conducted comprehensive discussions with clients to understand their specific requirements for journal entry reports",
      "Successfully implemented customized journal entry reports to meet each client’s needs, ensuring accuracy and compliance",
      "Developed, improved, and issued monthly financial reports in a timely manner, providing clients with valuable insight for decision making.",
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
    position: "Financial Analyst Junior",
    details: [
      "Producing accurate and timely financial reports via Excel, Power BI and MySQL",
      "Reviewing, analysing, and monitoring the company’s exposures, profit and loss statements",
      "Collecting and recalculating expiration assets contracts and preparing new contract",
      "Searching for new attractive market assets and setting initial configuration Producing market notifications",
      "Implementing and testing new features.",
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
      "Producing fundamental and financial analysis of companies from investment attractiveness perspective (US, UK, Middle East stock markets) to improve customer awareness of current stock state",
      "Assisting in developing the day-to-day marketing strategy for the “I Know First” website and social media growth (content, traffic analysis, etc.).",
    ],
  },
  {
    id: 5,
    src: Experience_Sberbank,
    href: "https://www.sberbank.com/index",
    company: "Sberbank",
    location: "Minsk, Belarus",
    date: "Jun 2019 – Apr 2020",
    position: "Financial Analyst Intern",
    details: [
      "Analysing the composition, structure, and dynamics of the financial results and indicators of profitability of the bank over the past 3 years",
      "Calculating the Total Economic Effect by developing the ways of improving the financial condition of «BPS-Sberbank», introducing a new type of deposit, a new type of loan, reducing operating expenses.",
    ],
  },
];
