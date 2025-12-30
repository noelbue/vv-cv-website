# Viktoryia Varanchuk's Personal CV Website

This repository contains the source code for Viktoryia Varanchuk's personal CV website, built with React and deployed on Netlify.

## 🚀 Overview

This website serves as Viktoryia's online CV and portfolio, showcasing her professional experience, education, and expertise. It's designed to provide a comprehensive view of her background and capabilities to potential employers or collaborators, with a focus on her journey in finance, data analysis, and business administration.

## 🛠 Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/): For handling navigation and routing
- [Netlify](https://www.netlify.com/): For continuous deployment and hosting
- CSS3: For styling and responsive design
- Font Awesome: For icons and visual elements

## 🎨 Features

- **Bilingual Support:** Full English and German language versions with seamless switching
- **URL-Based Language Detection:** Automatic language selection based on URL path (`/` for English, `/de` for German)
- **Responsive Design:** Fully optimized for both desktop and mobile devices
- **Component-Based Architecture:** Modular and maintainable code structure
- **Clean Navigation:** Intuitive menu system with mobile-friendly hamburger menu
- **PDF Downloads:** Downloadable CV and certificates (language-specific versions)
- **Contact Integration:** Direct email and phone contact capabilities
- **Translation System:** Centralized translation management for easy content updates

## 🌍 Language Features

### Supported Languages

- 🇬🇧 **English** - Default language (accessible at `/`)
- 🇩🇪 **German** - Full German version (accessible at `/de`)

### Language Switcher

- Integrated language toggle in the navigation bar
- Preserves current page when switching languages
- Visual indicator for active language
- Mobile-responsive design

### URL Structure

```
English Routes:
- / (Home)
- /about-me
- /experience
- /education
- /expertise

German Routes:
- /de (Startseite)
- /de/about-me (Über mich)
- /de/experience (Berufserfahrung)
- /de/education (Bildung)
- /de/expertise (Kenntnisse)
```

## 💼 Content Sections

1. **Home / Startseite:** Personal introduction and contact information
2. **About Me / Über mich:** Detailed biography and professional profile
   - Finance and analytics professional background
   - International MBA and Economics degree (Cum Laude)
   - Experience with SAP S/4HANA and financial accounting
3. **Experience / Berufserfahrung:** Comprehensive work history including:
   - Intern in Finance Team at Holy Fashion Group (2025-present)
   - Financial Accounting Excellence at Swiss International Airlines (2025)
   - Payroll Control at Papaya Global (2021-2024)
   - Financial Analysis at various companies
4. **Education / Bildung:** Academic background featuring:
   - MBA from Bar-Ilan University
   - German language certifications (A2, B1)
   - Data Science and Analytics courses
   - Bachelor's in Economics (Cum Laude)
5. **Expertise / Kenntnisse:** Skills overview including:
   - Language proficiencies (English, German, Russian, Hebrew)
   - Technical competencies (SAP, Power BI, SQL)
   - Professional skills (Financial management, Process automation)

## 📁 Project Structure

```
.
├── components/          # Reusable UI components
│   ├── NavBar.js       # Navigation with language switcher
│   ├── LanguageSwitcher.js  # Language toggle component
│   └── ...
├── context/            # React Context providers
│   └── LanguageContext.js   # Language state management
├── data/               # Content and configuration files
│   └── translations/   # Translation files
│       ├── index.js    # Translation export handler
│       ├── en/         # English content
│       │   ├── Home.js
│       │   ├── About.js
│       │   ├── Experience.js
│       │   ├── Education.js
│       │   ├── Expertise.js
│       │   └── NavLinks.js
│       └── de/         # German content
│           ├── Home.js
│           ├── About.js
│           ├── Experience.js
│           ├── Education.js
│           ├── Expertise.js
│           └── NavLinks.js
├── downloads/          # Downloadable resources
│   ├── CV_Viktoryia_Varanchuk_EN.pdf
│   ├── CV_Viktoryia_Varanchuk_DE.pdf
│   └── ... (certificates)
├── images/            # Image assets
├── pages/             # Main page components
│   ├── Home.js        # With translated titles
│   ├── About.js
│   ├── Experience.js
│   ├── Education.js
│   └── Expertise.js
└── styles/            # CSS styling files
    ├── LanguageSwitcher.css
    └── ...
```

## 🔧 Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vv-cv-website.git

# Navigate to project directory
cd vv-cv-website

# Install dependencies
npm install

# Start development server
npm start
```

### Adding New Translations

To add content in a new language:

1. Create a new folder in `src/data/translations/[language-code]/`
2. Copy all files from `en/` or `de/` folder
3. Translate the content
4. Update `src/data/translations/index.js` to include the new language
5. Add language option to `LanguageSwitcher.js`
6. Update `LanguageContext.js` URL routing logic

## 🚀 Deployment

- Continuous Deployment via Netlify
- Automatic builds on push to main branch
- Preview deployments for pull requests
- Custom domain configuration
- Language-specific routes handled by Netlify redirects

[![Netlify Status](https://api.netlify.com/api/v1/badges/eea53f8f-eb63-48ad-b701-2e1dc6b99511/deploy-status)](https://app.netlify.com/sites/vv-cv-website/deploys)

## 🔗 Live Site

You can view the live version of the CV at:

- English: [https://vikavoronchuk.com/](https://vikavoronchuk.com/)
- German: [https://vikavoronchuk.com/de](https://vikavoronchuk.com/de)

## 📞 Contact

For job opportunities or collaborations, please reach out via:

- Email: [vvoronchuk99@gmail.com](mailto:vvoronchuk99@gmail.com)
- Phone: +41 78 309 19 36
- Location: Horn, CH-9326
- LinkedIn: [linkedin.com/in/viktoriyavoronchuk](https://www.linkedin.com/in/viktoriyavoronchuk/)

## 📝 Note

This project serves as Viktoryia's personal website and CV. While the code is viewable for reference, it is customized for her personal use. Feel free to reach out if you have questions about her experience or background.

## ✅ Completed Features

- ✅ German Language Implementation
- ✅ Language Switcher with URL-based routing
- ✅ Updated Content (2025)
- ✅ Bilingual CV downloads
- ✅ Translated navigation and page titles
- ✅ Mobile-responsive language switcher
- ✅ Context-based translation system

**Made with ❤️ by [Bürgler Business Solutions](https://b-business-solutions.ch)**
