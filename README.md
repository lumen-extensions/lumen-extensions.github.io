# Lumen Extensions Website

A modern, static website for Lumen Extensions - a browser extension development studio. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **Multi-page Structure**: Home, Instructions, Privacy Policy, and Terms of Service
- **Browser Support**: Information about Chrome, Firefox, Safari, and Edge extensions
- **SEO Optimized**: Proper meta tags and structured content
- **Print-friendly**: Optimized styles for printing policy pages
- **Accessibility**: Semantic HTML and proper contrast ratios

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lumenextensions_site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page
│   ├── instructions/        # Installation instructions page
│   ├── privacy/             # Privacy policy page
│   └── terms/               # Terms of service page
├── components/
│   └── ui/                  # Reusable UI components
│       ├── button.tsx
│       └── card.tsx
└── lib/
    └── utils.ts             # Utility functions
```

## Pages

### Home Page (`/`)
- Hero section with company introduction
- Browser support showcase
- Services overview
- Featured extension showcase
- About section

### Instructions (`/instructions`)
- Step-by-step installation guides for:
  - Google Chrome
  - Mozilla Firefox
  - Safari
  - Microsoft Edge
- Troubleshooting section

### Privacy Policy (`/privacy`)
- Comprehensive privacy policy
- GDPR and CCPA compliance
- Data collection and usage information
- User rights and contact information

### Terms of Service (`/terms`)
- Complete terms of service
- Usage restrictions and guidelines
- Intellectual property rights
- Liability limitations

## Customization

### Colors
The color scheme can be customized in `src/app/globals.css`:

```css
:root {
  --color-extension-blue: #2563eb;
  --color-extension-bg: #f8fafc;
  --color-extension-text: #1e293b;
}
```

### Content
- Update company information in `src/app/layout.tsx`
- Modify page content in respective page components
- Update contact information in policy pages

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any other static hosting provider

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

The website is optimized for:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2024 Lumen Extensions. All rights reserved.