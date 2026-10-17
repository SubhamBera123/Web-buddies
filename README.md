# NexusCraft Web Studio — Agency Website & Custom Web Application Platform

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)

A production-grade, conversion-focused freelance web development agency website built with **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **Supabase**. Engineered to showcase full-stack capabilities, demonstrate interactive working prototypes across 9 business categories, provide transparent package pricing, and convert visitors into clients.

---

## 🚀 Live Demo & Quick Start

The application runs seamlessly out of the box with **Dual-Mode Resilient Storage** (Offline/Mock Mode with pre-seeded demonstration data, transitioning automatically to live Supabase PostgreSQL when credentials are provided in `.env`).

### 1. Installation & Local Dev
```bash
# Clone the repository
git clone https://github.com/your-username/nexuscraft-agency.git
cd nexuscraft-agency

# Install dependencies
npm install

# Start development server
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🏛️ Website Architecture & Key Pages

### Page 1: Home (`/`)
- **Innovative Compact Studio Introduction**: Breaks away from conventional hero banners and global navbars. Starts with a high-density, engineering-focused introduction and an interactive **Live Project Terminal**.
- **Clear Business Statement**: Direct declaration of web engineering capabilities for businesses.
- **Prominent Dual Actions**: "Start Your Project" and "Explore My Work".
- **Selected Demonstration Projects**: Featured project cards with Live Demo, Video Walkthrough, and Case Study triggers.
- **Services Overview**: Quick breakdown of primary agency offerings with starting pricing.
- **The Studio Difference ("Why Work With Me")**: Direct engineer access, clean code, sub-second speed, 100% IP ownership.
- **4-Stage Execution Process**: Discovery & Architecture -> Custom UI/UX -> Clean React Engineering -> QA & Launch.
- **Pricing Overview**: Package cards linking directly to detailed pricing and the interactive cost estimator.
- **Transparent Testimonials**: Verified case study feedback concepts clearly labeled as design placeholders until real client endorsements are published.
- **Interactive FAQ Accordion**: Common questions on code ownership, recurring costs, and timelines.
- **Final High-Conversion CTA & Studio Footer**: Direct links, social profiles, and WhatsApp routing.

### Page 2: Services (`/services`)
- **15 Complete Services Detailed**:
  1. Business Website Development (₹12,999)
  2. Corporate Website Development (₹24,999)
  3. High-Conversion Landing Pages (₹7,999)
  4. E-Commerce Website Development (₹29,999)
  5. Portfolio & Personal Websites (₹8,999)
  6. Website Redesign & Modernization (₹14,999)
  7. Custom Web Application Development (₹49,999)
  8. Admin Dashboard Development (₹24,999)
  9. Booking & Appointment Websites (₹16,999)
  10. Restaurant & Hospitality Websites (₹15,999)
  11. Real Estate Property Websites (₹22,999)
  12. Healthcare & Clinic Websites (₹18,999)
  13. Website Maintenance & Support (₹2,999/mo)
  14. Search Engine Optimization (₹6,999)
  15. Website Speed & Performance Optimization (₹7,999)
- Includes: Target audience, key deliverables, business benefits, technologies employed, starting prices, and quotation triggers.
- **Integrated Service Quotation Form**: Smoothly scrolls and auto-selects whichever service the visitor clicked.

### Page 3: Pricing (`/pricing`)
- **4 Core Transparent Packages**:
  - **Starter Website (₹4,999)**: 1–3 pages, responsive layout, contact form, WhatsApp chat integration, basic on-page SEO, standard deployment.
  - **Business Website (₹12,999 — Most Popular)**: Up to 6 pages, custom UI/UX, responsive layouts, interactive animations, contact & enquiry forms, basic SEO, deployment assistance.
  - **E-Commerce Storefront (₹29,999)**: Product catalogue, product detail pages, shopping cart, checkout integration, order management, responsive design, payment gateway integration.
  - **Custom Web Application (₹49,999)**: Custom requirements analysis, Supabase authentication & authorization, PostgreSQL database integration with RLS, admin dashboard, API integration, custom business logic, deployment & testing.
- **Interactive Project Cost Estimator**:
  - Interactive website type selector (Landing page, Business site, E-commerce, Custom Web App).
  - Page count slider (1 to 20+ pages).
  - Feature add-on toggles (E-Commerce, Booking, User Auth, CMS/Admin, SEO, Speed, Maintenance).
  - Live indicative estimate breakdown with "Request Quotation with this Scope" pre-fill action.
- **Comprehensive Feature Comparison Matrix**: Side-by-side feature comparison table.
- **One-Time vs. Recurring Fees Breakdown**: Clear explanation of one-time agency code fees vs third-party hosting/domain direct costs.
- **Monthly Maintenance Care Retainers**: Essential Care (₹1,999/mo), Growth Retainer (₹4,499/mo), Dedicated Engineering Retainer (₹9,999/mo).

### Page 4: Portfolio (`/portfolio`)
- **9 Core Business Category Prototypes**:
  1. *Restaurant & Food Ordering* — Savoria Bistro & Online Orders
  2. *Fashion & E-Commerce* — Aura Luxe Minimalist Fashion Store
  3. *Real Estate* — Haven & Key Premium Realty
  4. *Healthcare & Clinics* — PulseCare Medical Clinic & Telehealth
  5. *Corporate Business* — Apex Horizon Strategy & Capital Partners
  6. *Personal Portfolio* — Elena Vance Creative Director
  7. *Hotel & Hospitality* — Azure Coastline Boutique Resort
  8. *Education & E-Learning* — SkillForge Interactive Tech Academy
  9. *SaaS Dashboard & Web Apps* — NovaMetric AI Business Analytics
- **Hands-on Interactive Prototypes**: Not just static pictures! Clicking "View Live Demo" opens active interactive prototypes with working menus, cart items, price filters, booking slots, and time-range telemetry charts.
- **Video Walkthrough Modals**: Supports YouTube / Vimeo embeds with professional "Video Coming Soon" fallbacks when no video URL is configured.
- **Category Filter Pills & Real-Time Search**: Instant client-side search across titles, descriptions, and tech stacks.

### Page 5: Project Case Study (`/portfolio/:slug`)
- In-depth architectural case studies featuring:
  - Challenge / Business Problem & Solution framework.
  - Engineered technical features grid.
  - UI/UX design approach and aesthetic tokens.
  - Full-width desktop screenshot preview and mobile viewport mockups.
  - Live Lighthouse telemetry metrics (98–100/100 speed, sub-second load times).
  - Technology stack specifications.
  - Direct conversion CTA to request a similar tailored project.

### Page 6: About (`/about`)
- Introduction to the lead full-stack developer (Alex Vance placeholder).
- Core philosophy: Handcrafted React, Tailwind, and PostgreSQL vs bloated WordPress plugins.
- Technical skills matrix: React 19, Tailwind CSS v4, Vite, Supabase, Java, Spring Boot, MySQL, REST APIs, Git.
- Client focus categories (SMEs, tech startups, D2C brands, executive consultants).
- Quality standards and post-launch warranty commitments.

### Page 7: Contact & Project Discovery (`/contact`)
- Full discovery enquiry form with Zod schema validation:
  - Full Name, Business Name (optional), Email, Phone (optional), Service Required, Estimated Budget, Project Deadline, Preferred Communication Channel, Project Description, and Reference URL.
- Direct communication channels: WhatsApp direct chat link (`wa.me`), studio email, response time guarantee ("Within 4–6 business hours").
- Success screen with celebration confetti and immediate record storage in Supabase / LocalStorage.

### Page 8: Admin Dashboard (`/admin`)
- Accessible via `/admin/login` using demo credentials or Supabase Auth:
  - **Demo Email**: `admin@nexuscraftstudio.dev`
  - **Demo Password**: `admin123`
- **Dashboard Overview**: KPI cards for Total Leads, New/Pending Enquiries, In Discussion, and Active Projects.
- **Client Enquiries Manager**: Filter leads by status (New, Contacted, In Discussion, Closed, Archived), inspect complete project briefs, update status in real time, and delete/archive records.
- **Portfolio Project Manager**: Add new projects, edit titles/descriptions/thumbnails/video URLs, toggle "Featured" status, and delete entries.
- **Pricing Packages Manager**: Inline editing of package starting prices with instant reflection across the website.
- **Services Catalogue**: View active services and pricing.
- **Testimonials & FAQs Manager**: Manage customer reviews and FAQ answers.
- **Studio Settings**: Update agency name, developer name, email, WhatsApp number, and turnaround time.

---

## 🗄️ Supabase PostgreSQL Setup & Migration

### 1. Create a Supabase Project
1. Log into your [Supabase Dashboard](https://supabase.com).
2. Click **New Project** and name it `nexuscraft-studio`.
3. Choose your nearest region and set a database password.

### 2. Execute SQL Schema Script
1. In your Supabase project, navigate to **SQL Editor** in the left sidebar.
2. Click **New query**.
3. Open the file `supabase/schema.sql` located in this project repository.
4. Paste the entire content into the SQL Editor and click **Run**.
5. This automatically creates:
   - Tables: `profiles`, `services`, `pricing_packages`, `projects`, `enquiries`, `faqs`, `testimonials`, `site_settings`.
   - Security: Row-Level Security (RLS) enabled on all tables.
   - Public policies: Public can read published services, pricing, projects, FAQs; Public can insert enquiries.
   - Admin policies: Authenticated admins have full CRUD permissions.
   - Seed data: Initial configuration for settings and categories.

### 3. Connect Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Update `.env` with your Supabase Project credentials:
```env
# In Supabase: Project Settings > API
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
Restart your development server (`npm run dev`). The admin bar indicator will switch to **Supabase PostgreSQL (Live)**!

---

## 📧 Email Notification Setup

When a prospective client submits an enquiry on `/contact`, it is stored securely in the `enquiries` table. To receive immediate email alerts, choose either:

### Option A: Supabase Webhooks + Resend / Formspree (Recommended)
1. Go to **Supabase Dashboard > Database > Webhooks**.
2. Click **Create a new webhook**.
3. Name: `send_enquiry_email_alert`.
4. Table: `enquiries`, Events: `INSERT`.
5. Webhook URL: Enter your [Resend API Endpoint](https://resend.com) or [Formspree Endpoint](https://formspree.io).
6. Whenever an enquiry is inserted, you receive an instant email on your phone!

### Option B: Netlify Forms / Zapier
Alternatively, configure a Zapier webhook connected to your Supabase PostgreSQL table or forward inquiries via Netlify functions.

---

## 🌐 Netlify Deployment Guide

The project is pre-configured with `netlify.toml` for Single Page Application (SPA) routing, asset caching, and security headers.

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit of NexusCraft agency website"
git branch -M main
git remote add origin https://github.com/your-username/nexuscraft-agency.git
git push -u origin main
```

### Step 2: Deploy on Netlify
1. Log into [Netlify](https://www.netlify.com).
2. Click **Add new site > Import an existing project**.
3. Connect your GitHub repository.
4. Netlify will automatically detect:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Go to **Site Configuration > Environment Variables** and add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
6. Click **Deploy Site**.

### Step 3: Connect Custom Domain & SSL
1. In Netlify, go to **Domain management > Add a custom domain** (e.g. `youragency.com`).
2. Update your domain registrar (GoDaddy, Namecheap, Cloudflare) with Netlify's DNS records:
   - `A Record`: `@` -> `75.2.60.5`
   - `CNAME Record`: `www` -> `your-site-name.netlify.app`
3. Netlify will automatically provision a free Let's Encrypt SSL certificate within minutes.

---

## 📋 Personal Details & Customization Checklist

Before launching to live clients, replace the editable placeholders in `src/lib/constants.js` or through the `/admin` settings dashboard:

- [ ] **Developer Name**: Update `Alex Vance` with your legal/brand name.
- [ ] **Email Address**: Update `contact@nexuscraftstudio.dev` with your email.
- [ ] **WhatsApp Number**: Update `+919876543210` with your phone number with country code.
- [ ] **Social Profiles**: Update GitHub, LinkedIn, and Twitter/X URLs.
- [ ] **Pricing Adjustments**: Customize starting prices for packages in `/admin > Pricing Packages`.
- [ ] **Demo Videos**: Embed your own YouTube walkthrough videos for projects in `/admin > Portfolio Projects`.

---

## 🛡️ Security & Performance Standards

- **Row Level Security (RLS)**: Public visitors can only insert inquiries and view published content; administrative read/write operations require authenticated session verification.
- **Zero Exposed Secrets**: Only the safe public anon key is consumed by Vite; no service-role secrets are included in client bundles.
- **Optimized Assets & Modern Fonts**: Fonts preloaded via Google Fonts with `Plus Jakarta Sans`, WebP responsive images, and sub-second bundle transforms.
- **Full SEO & Accessibility**: Semantic HTML5 tags, meta titles and descriptions, XML sitemap, `robots.txt`, and WCAG compliant color contrast.

---

© 2026 NexusCraft Web Studio. Built for ambitious businesses and agencies.
