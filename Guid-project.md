📁 PROJECT STRUCTURE
===================

blog-hono-worker/
├── 📁 src/
│   ├── 📁 components/          # React-like components
│   │   ├── layout/
│   │   │   ├── Layout.jsx      # Main layout wrapper
│   │   │   ├── Header.jsx      # Site header
│   │   │   ├── Footer.jsx      # Site footer
│   │   │   └── Navigation.jsx  # Mobile nav menu
│   │   ├── ui/
│   │   │   ├── ArticleCard.jsx # Homepage article cards
│   │   │   ├── ArticleDetail.jsx # Single article view
│   │   │   ├── AdSense.jsx     # Ad components
│   │   │   ├── Button.jsx      # Reusable buttons
│   │   │   └── Badge.jsx       # Tag badges
│   │   └── index.js            # Component exports
│   ├── 📁 content/             # Content management
│   │   ├── articles.js         # Article data
│   │   └── site-config.js      # Site metadata
│   ├── 📁 styles/              # CSS management
│   │   ├── globals.css         # Global styles & CSS variables
│   │   ├── components.css      # Component-specific styles
│   │   ├── mobile.css          # Mobile-specific overrides
│   │   └── print.css           # Print styles
│   ├── 📁 utils/               # Helper functions
│   │   ├── format-date.js      # Date formatting
│   │   ├── seo-helpers.js      # Meta tags generation
│   │   └── content-helpers.js  # Content processing
│   ├── 📁 routes/              # Route handlers
│   │   ├── home.js             # Homepage logic
│   │   ├── article.js          # Article page logic
│   │   └── sitemap.js          # SEO sitemap
│   └── index.js                # Main Hono app
├── 📁 public/                  # Static assets (if needed)
│   ├── favicon.ico
│   └── robots.txt
├── wrangler.toml               # Cloudflare Workers config
├── package.json
└── README.md

===================
CSS ARCHITECTURE
===================

/* /src/styles/globals.css */
/* Mobile-First CSS Variables & Base Styles */

:root {
  /* Colors - Modern Design System */
  --color-primary: #2563eb;      /* Blue-600 */
  --color-primary-dark: #1d4ed8; /* Blue-700 */
  --color-secondary: #64748b;    /* Slate-500 */
  
  --color-text-primary: #0f172a;    /* Slate-900 */
  --color-text-secondary: #475569;  /* Slate-600 */
  --color-text-muted: #94a3b8;     /* Slate-400 */
  
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8fafc;   /* Slate-50 */
  --color-bg-accent: #f1f5f9;      /* Slate-100 */
  
  --color-border: #e2e8f0;         /* Slate-200 */
  --color-border-light: #f1f5f9;   /* Slate-100 */
  
  /* Typography Scale - Mobile First */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  
  /* Spacing Scale */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  
  /* Layout */
  --max-width-content: 65ch;
  --max-width-container: 1200px;
  --border-radius: 0.5rem;
  --border-radius-lg: 0.75rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: #f8fafc;
    --color-text-secondary: #cbd5e1;
    --color-text-muted: #64748b;
    
    --color-bg-primary: #0f172a;
    --color-bg-secondary: #1e293b;
    --color-bg-accent: #334155;
    
    --color-border: #334155;
    --color-border-light: #475569;
  }
}

/* Base Styles - Mobile First */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
               'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: var(--color-text-primary);
  background-color: var(--color-bg-secondary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  color: var(--color-text-primary);
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: var(--space-4);
}

h1 { font-size: var(--font-size-2xl); }  /* Mobile: 24px */
h2 { font-size: var(--font-size-xl); }   /* Mobile: 20px */
h3 { font-size: var(--font-size-lg); }   /* Mobile: 18px */

p {
  margin-bottom: var(--space-4);
  color: var(--color-text-secondary);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--color-primary-dark);
}

/* Container System */
.container {
  width: 100%;
  max-width: var(--max-width-container);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

/* Tablet Styles */
@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-6);
  }
  
  h1 { font-size: var(--font-size-3xl); }  /* Tablet: 30px */
  h2 { font-size: var(--font-size-2xl); }  /* Tablet: 24px */
}

/* Desktop Styles */
@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-8);
  }
  
  h1 { font-size: var(--font-size-4xl); }  /* Desktop: 36px */
  h2 { font-size: var(--font-size-3xl); }  /* Desktop: 30px */
}

===================
COMPONENT STYLES
===================

/* /src/styles/components.css */
/* Component-specific styles with mobile-first approach */

/* Header Component */
.header {
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) 0;
}

.header__logo {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
}

.header__nav {
  display: none; /* Hidden on mobile */
}

.header__menu-button {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
}

@media (min-width: 768px) {
  .header__nav {
    display: flex;
    gap: var(--space-6);
  }
  
  .header__menu-button {
    display: none;
  }
}

/* Article Card Component */
.article-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  margin-bottom: var(--space-6);
  transition: all 0.2s ease;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-border);
}

.article-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

.article-card__title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-3);
}

.article-card__title a {
  color: var(--color-text-primary);
}

.article-card__title a:hover {
  color: var(--color-primary);
}

.article-card__description {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.article-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.article-card__read-more {
  color: var(--color-primary);
  font-weight: 500;
  font-size: var(--font-size-sm);
  white-space: nowrap;
}

/* Tag Badge Component */
.badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--color-bg-accent);
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
  font-weight: 500;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border-light);
}

.badge--primary {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

/* Article Content */
.article-content {
  max-width: var(--max-width-content);
  margin: 0 auto;
}

.article-content p {
  font-size: var(--font-size-base);
  line-height: 1.7;
  margin-bottom: var(--space-6);
}

@media (min-width: 768px) {
  .article-content p {
    font-size: var(--font-size-lg);
    line-height: 1.8;
  }
}

/* AdSense Container */
.adsense-container {
  margin: var(--space-8) auto;
  text-align: center;
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
  padding: var(--space-6) 0;
  background: var(--color-bg-accent);
}

.adsense-container::before {
  content: "Advertisement";
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Grid System */
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid--articles {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid--articles {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
  }
}

@media (min-width: 1024px) {
  .grid {
    gap: var(--space-8);
  }
}

/* Utility Classes */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mt-auto { margin-top: auto; }
.mb-auto { margin-bottom: auto; }

.hidden { display: none; }
.visible { display: block; }

@media (min-width: 768px) {
  .md\:hidden { display: none; }
  .md\:visible { display: block; }
}

===================
MOBILE OPTIMIZATIONS
===================

/* /src/styles/mobile.css */
/* Mobile-specific enhancements */

/* Touch-friendly interactions */
@media (max-width: 767px) {
  /* Larger touch targets */
  a, button {
    min-height: 44px;
    min-width: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Mobile typography adjustments */
  .article-content {
    padding: 0 var(--space-2);
  }
  
  /* Improved mobile navigation */
  .mobile-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 80%;
    height: 100vh;
    background: var(--color-bg-primary);
    transition: left 0.3s ease;
    z-index: 1000;
    padding: var(--space-8) var(--space-6);
    border-right: 1px solid var(--color-border);
  }
  
  .mobile-menu.is-open {
    left: 0;
  }
  
  .mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .mobile-overlay.is-active {
    opacity: 1;
    visibility: visible;
  }
  
  /* Scrolling improvements */
  body.menu-open {
    overflow: hidden;
  }
}

/* High-DPI display optimizations */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  /* Crisp borders and shadows for retina displays */
  .article-card {
    border-width: 0.5px;
  }
}