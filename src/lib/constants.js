// NexusCraft Web Development Agency - Core Constants & Demonstration Data

export const SITE_CONFIG = {
  agencyName: "NexusCraft",
  agencyTagline: "High-Performance Websites & Custom Web Applications",
  developerTitle: "Senior Full-Stack Web Developer & UI/UX Specialist",
  developerName: "Alex Vance", // Editable placeholder as specified in prompt
  email: "contact@nexuscraftstudio.dev",
  whatsappNumber: "+919876543210",
  whatsappDisplay: "+91 98765 43210",
  location: "Remote / Available Worldwide",
  availabilityStatus: "Available for Q4 Projects & Retainers",
  turnaroundTime: "Within 4–6 business hours",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  twitterUrl: "https://x.com",
};

export const INITIAL_SERVICES = [
  {
    id: "business-website",
    name: "Business Website Development",
    iconName: "Briefcase",
    description: "Tailor-made, conversion-focused websites engineered to give growing companies a commanding digital presence and turn visitors into qualified leads.",
    targetAudience: "Small to mid-sized businesses, service providers, B2B agencies, and local enterprises.",
    keyFeatures: [
      "Custom responsive design (desktop, tablet, mobile)",
      "High-speed semantic architecture",
      "Lead generation contact and quotation forms",
      "Interactive Google Maps and WhatsApp integration",
      "Content Management integration option"
    ],
    businessBenefits: [
      "Establishes authority and trust immediately",
      "Increases organic discovery and local search visibility",
      "Generates continuous inbound inquiries around the clock"
    ],
    technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    startingPrice: 12999,
    popular: true,
  },
  {
    id: "corporate-website",
    name: "Corporate Website Development",
    iconName: "Building2",
    description: "Enterprise-grade multi-page digital portals designed with strict security standards, accessibility compliance, and stakeholder messaging.",
    targetAudience: "Corporations, financial firms, consulting groups, and enterprise institutions.",
    keyFeatures: [
      "Multi-tier navigation and information architecture",
      "Investor relations and press release sections",
      "Team rosters with dynamic filtering",
      "Enterprise security headers and strict compliance",
      "Role-based access capabilities"
    ],
    businessBenefits: [
      "Aligns global brand identity across all regional divisions",
      "Facilitates institutional compliance and investor confidence",
      "Streamlines corporate communications and recruitment"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    startingPrice: 24999,
    popular: false,
  },
  {
    id: "landing-page",
    name: "High-Conversion Landing Pages",
    iconName: "Zap",
    description: "Single-page powerhouses built specifically for paid advertising campaigns, product launches, lead magnets, and maximum conversion rates.",
    targetAudience: "SaaS startups, DTC brands running ads, course creators, and event organizers.",
    keyFeatures: [
      "Laser-focused conversion narrative and layout",
      "A/B testing-ready architecture",
      "Sub-second loading speed for high ad quality scores",
      "Sticky call-to-action bars and exit-intent modals",
      "UTM parameter tracking and analytics hooks"
    ],
    businessBenefits: [
      "Reduces customer acquisition costs (CAC)",
      "Maximizes return on ad spend (ROAS)",
      "Captures high-intent leads before bounce"
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Analytics"],
    startingPrice: 7999,
    popular: false,
  },
  {
    id: "ecommerce-website",
    name: "E-Commerce Website Development",
    iconName: "ShoppingCart",
    description: "Modern e-commerce storefronts with frictionless shopping cart experiences, lightning-fast product filtering, and secure payment checkout.",
    targetAudience: "Retailers, boutique brands, direct-to-consumer businesses, and wholesale merchants.",
    keyFeatures: [
      "Dynamic product catalog with multi-variant filtering",
      "Persistent shopping cart with local-storage sync",
      "Stripe, Razorpay, or PayPal payment gateway readiness",
      "Customer accounts and order tracking portal",
      "Admin order and inventory management view"
    ],
    businessBenefits: [
      "Zero marketplace commissions on your own domain",
      "Frictionless mobile checkout reduces abandoned carts",
      "Complete ownership of customer emails and shopping habits"
    ],
    technologies: ["React", "Supabase", "Stripe / Razorpay API", "Tailwind CSS"],
    startingPrice: 29999,
    popular: true,
  },
  {
    id: "portfolio-personal",
    name: "Portfolio & Personal Websites",
    iconName: "UserCheck",
    description: "Distinctive, editorial-quality personal branding websites for creative directors, executives, developers, photographers, and independent consultants.",
    targetAudience: "Freelancers, senior creatives, keynote speakers, and executive consultants.",
    keyFeatures: [
      "Signature typography and interactive case study displays",
      "High-resolution media galleries with lightbox previews",
      "Interactive resume and milestone timeline",
      "Direct calendar booking integration (Calendly/Cal.com)",
      "Custom domain and verified email routing"
    ],
    businessBenefits: [
      "Commands premium consulting and speaking fees",
      "Differentiates personal brand from standard social profiles",
      "Serves as a definitive 24/7 digital credential"
    ],
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    startingPrice: 8999,
    popular: false,
  },
  {
    id: "website-redesign",
    name: "Website Redesign & Modernization",
    iconName: "RefreshCw",
    description: "Transform outdated, slow, or cluttered websites into modern, ultra-responsive web experiences that retain your SEO rankings.",
    targetAudience: "Established businesses with legacy websites built on outdated stacks.",
    keyFeatures: [
      "Modern UI/UX overhaul while preserving brand heritage",
      "URL structure preservation and 301 redirect mapping",
      "Mobile-first responsiveness audit and rebuild",
      "Asset optimization and image format upgrades (WebP/AVIF)",
      "Conversion funnel restructuring"
    ],
    businessBenefits: [
      "Eliminates embarrassing visual artifacts and legacy bugs",
      "Significantly improves bounce rates and session duration",
      "Maintains hard-earned Google search rankings"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Lighthouse"],
    startingPrice: 14999,
    popular: false,
  },
  {
    id: "custom-web-app",
    name: "Custom Web Application Development",
    iconName: "Layers",
    description: "Full-stack software solutions engineered for complex business logic, bespoke workflows, user accounts, and real-time database reactivity.",
    targetAudience: "Startups, tech founders, internal business operations, and automated service platforms.",
    keyFeatures: [
      "Secure user authentication (OAuth, magic links, email)",
      "Relational PostgreSQL database architecture with RLS",
      "Custom REST and GraphQL API integrations",
      "State management for complex user workflows",
      "Role-based permission hierarchies"
    ],
    businessBenefits: [
      "Replaces messy spreadsheets with automated software",
      "Provides proprietary competitive IP for your business",
      "Scales seamlessly as your user base expands"
    ],
    technologies: ["React", "Supabase", "PostgreSQL", "Node.js / REST"],
    startingPrice: 49999,
    popular: true,
  },
  {
    id: "admin-dashboard",
    name: "Admin Dashboard Development",
    iconName: "LayoutDashboard",
    description: "Intuitive, dense control centers to manage internal business metrics, customer data, content feeds, inventory, and staff permissions.",
    targetAudience: "Operations teams, SaaS founders, logistics providers, and community managers.",
    keyFeatures: [
      "Interactive data visualizations, trend charts, and KPIs",
      "CRUD operations for records with instant feedback",
      "Advanced search, multi-column sorting, and CSV export",
      "Activity audit logging and admin role security",
      "Dark and light mode surface adaptability"
    ],
    businessBenefits: [
      "Reduces manual administrative overhead by over 50%",
      "Provides real-time business visibility in one clean view",
      "Prevents costly data entry errors"
    ],
    technologies: ["React", "Supabase", "Tailwind CSS", "Lucide React"],
    startingPrice: 24999,
    popular: false,
  },
  {
    id: "booking-appointment",
    name: "Booking & Appointment Websites",
    iconName: "CalendarClock",
    description: "Automated booking platforms that eliminate telephone tag, accept upfront deposits, and sync directly with Google Calendar and Outlook.",
    targetAudience: "Salons, private tutors, consultants, fitness trainers, and repair specialists.",
    keyFeatures: [
      "Real-time slot availability calculation",
      "Time zone automatic detection",
      "Integrated deposit or full payment processing",
      "Automated SMS and email reminders",
      "Cancellation and rescheduling policies built-in"
    ],
    businessBenefits: [
      "Eliminates no-shows with automated reminder sequences",
      "Fills vacant schedule gaps automatically 24/7",
      "Saves hours of phone coordination each week"
    ],
    technologies: ["React", "Supabase", "Calendar APIs", "Tailwind CSS"],
    startingPrice: 16999,
    popular: false,
  },
  {
    id: "restaurant-hospitality",
    name: "Restaurant & Hospitality Websites",
    iconName: "Utensils",
    description: "Appetizing digital storefronts featuring interactive digital menus, table reservation inquiries, delivery integration, and dietary filtering.",
    targetAudience: "Cafes, fine dining bistros, cloud kitchens, and boutique lodging.",
    keyFeatures: [
      "Visual digital menu with allergen and dietary tags",
      "Table reservation system with instant confirmation",
      "Direct pickup/delivery ordering integration",
      "High-speed photo gallery with food styling focus",
      "One-tap phone calling and turn-by-turn directions"
    ],
    businessBenefits: [
      "Bypasses 30% aggregator commissions on direct orders",
      "Fills dining tables on slower weekday shifts",
      "Provides instant clarity on hours, menu, and location"
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Supabase"],
    startingPrice: 15999,
    popular: false,
  },
  {
    id: "real-estate",
    name: "Real Estate Property Websites",
    iconName: "Home",
    description: "High-impact real estate showcase portals with interactive property filters, floor plans, photo tours, and direct agent inquiry forms.",
    targetAudience: "Real estate brokers, property developers, property managers, and luxury agents.",
    keyFeatures: [
      "Interactive property search by price, beds, and location",
      "Virtual tour and video walkthrough embedding",
      "Agent profile contact card with instant WhatsApp dispatch",
      "Mortgage/EMI indicative calculator widget",
      "Downloadable brochure and floor plan PDFs"
    ],
    businessBenefits: [
      "Captures qualified buyer leads before competitors",
      "Showcases listings with luxury visual prestige",
      "Answers buyer FAQs before the first showing"
    ],
    technologies: ["React", "Supabase", "Tailwind CSS", "Lucide React"],
    startingPrice: 22999,
    popular: false,
  },
  {
    id: "healthcare-clinic",
    name: "Healthcare & Clinic Websites",
    iconName: "HeartPulse",
    description: "Compassionate, HIPAA-conscious medical websites featuring doctor credentials, specialty directories, patient preparation forms, and appointment requests.",
    targetAudience: "Dental clinics, specialized doctors, pediatric practices, and wellness centers.",
    keyFeatures: [
      "Doctor and specialist credential profiles",
      "Patient appointment triage and intake request form",
      "Treatment and procedure educational guides",
      "Emergency contact highlight and parking guidance",
      "Accessible design adhering to WCAG standards"
    ],
    businessBenefits: [
      "Reassures anxious patients with transparent care info",
      "Reduces clinic reception phone traffic",
      "Attracts insured patients seeking specialized procedures"
    ],
    technologies: ["React", "Tailwind CSS", "Supabase", "Accessible UX"],
    startingPrice: 18999,
    popular: false,
  },
  {
    id: "maintenance-support",
    name: "Website Maintenance & Support",
    iconName: "Wrench",
    description: "Ongoing proactive care plans providing weekly backups, security patching, dependency updates, uptime monitoring, and priority technical assistance.",
    targetAudience: "Businesses that want guaranteed peace of mind without hiring internal IT staff.",
    keyFeatures: [
      "Weekly automated cloud backups",
      "SSL certificate and domain expiration monitoring",
      "Security audit scans and dependency vulnerability patches",
      "Dedicated developer hours for content and feature tweaks",
      "Monthly performance and uptime reports"
    ],
    businessBenefits: [
      "Prevents catastrophic site outages and hacking risks",
      "Guarantees swift emergency response when issues arise",
      "Keeps digital assets fresh and fast year-round"
    ],
    technologies: ["DevOps", "Security Monitoring", "Git", "Supabase"],
    startingPrice: 2999,
    popular: false,
  },
  {
    id: "seo-optimization",
    name: "Search Engine Optimization (SEO)",
    iconName: "Search",
    description: "On-page, technical, and structural SEO setup to ensure search engines crawl, index, and rank your business prominently for target search phrases.",
    targetAudience: "Businesses seeking consistent inbound Google search traffic without perpetual ad spend.",
    keyFeatures: [
      "Schema.org JSON-LD structured data implementation",
      "Semantic heading hierarchy and meta tag optimization",
      "XML sitemap and robots.txt generation",
      "Google Search Console verification and indexing submission",
      "Canonical URL handling and Open Graph social tags"
    ],
    businessBenefits: [
      "Attracts high-intent prospects searching for your services",
      "Builds long-term compounding digital equity",
      "Improves brand trustworthiness in search engine results"
    ],
    technologies: ["Technical SEO", "Schema.org", "HTML5", "Vite"],
    startingPrice: 6999,
    popular: false,
  },
  {
    id: "performance-optimization",
    name: "Website Speed & Performance Optimization",
    iconName: "Gauge",
    description: "Deep technical performance tuning to achieve sub-second load times, 90+ Google Lighthouse scores, and pass Google Core Web Vitals.",
    targetAudience: "Websites suffering from high bounce rates, laggy animations, or poor mobile conversions.",
    keyFeatures: [
      "JavaScript bundle splitting and tree-shaking",
      "Image compression and WebP/AVIF asset conversion",
      "Elimination of render-blocking resources",
      "CSS purge and critical path delivery",
      "Font preloading and server caching strategy"
    ],
    businessBenefits: [
      "Every 1-second delay cut increases conversions by up to 7%",
      "Improves mobile user satisfaction drastically",
      "Boosts Google organic ranking signals (Core Web Vitals)"
    ],
    technologies: ["Vite", "Lighthouse", "Web Vitals", "Asset Pipeline"],
    startingPrice: 7999,
    popular: false,
  }
];

export const INITIAL_PRICING_PACKAGES = [
  {
    id: "starter",
    name: "Starter Website",
    code: "PACKAGE A",
    price: 4999,
    priceDisplay: "₹4,999",
    billingType: "one-time development fee",
    tagline: "Ideal for small businesses and solo entrepreneurs establishing their first credible online presence.",
    popular: false,
    deliveryTime: "3–5 Days",
    features: [
      "1–3 Custom Designed Pages",
      "Fully Responsive (Mobile, Tablet & Desktop)",
      "Interactive Contact & Lead Generation Form",
      "One-Tap WhatsApp Chat Integration",
      "Basic On-Page SEO Setup & Meta Tags",
      "SSL & Standard Deployment Assistance",
      "Social Media & Google Maps Links",
      "14 Days Post-Launch Bug Fix Support"
    ],
    ctaText: "Choose Starter Plan",
    recommendedFor: "Solo practitioners, consultants, local shops, and quick launch landing pages."
  },
  {
    id: "business",
    name: "Business Website",
    code: "PACKAGE B",
    price: 12999,
    priceDisplay: "₹12,999",
    billingType: "one-time development fee",
    tagline: "The premier solution for established businesses seeking strong brand authority and higher lead conversions.",
    popular: true,
    deliveryTime: "7–10 Days",
    features: [
      "Up to 6 Bespoke Pages",
      "Custom UI/UX Design System (No Cookie-Cutter Templates)",
      "Ultra-Responsive Multi-Device Layouts",
      "Smooth Framer Motion Micro-Animations",
      "Advanced Contact & Quote Request Forms",
      "Interactive Services & Portfolio Showcase",
      "Comprehensive On-Page SEO & Schema Markup",
      "Google Analytics & Tag Setup Assistance",
      "Performance Optimization (90+ Mobile Score Target)",
      "30 Days Post-Launch Dedicated Support"
    ],
    ctaText: "Choose Business Plan",
    recommendedFor: "Growing businesses, professional agencies, corporate services, and regional clinics."
  },
  {
    id: "ecommerce",
    name: "E-Commerce Website",
    code: "PACKAGE C",
    price: 29999,
    priceDisplay: "₹29,999",
    billingType: "one-time development fee",
    tagline: "High-conversion online storefront engineered to sell physical or digital products smoothly.",
    popular: false,
    deliveryTime: "14–18 Days",
    features: [
      "Complete Product Catalogue & Collections",
      "Rich Product Detail Pages with Variant Selectors",
      "Persistent Shopping Cart & Saved Wishlist",
      "Frictionless Checkout Workflow",
      "Secure Payment Gateway Integration (Stripe / Razorpay)",
      "Order Management & Customer Notification Workflow",
      "Customer Accounts & Order History Portal",
      "Inventory & Shipping Rules Setup",
      "Automated Order Confirmation Inquiries",
      "45 Days Dedicated Warranty Support"
    ],
    ctaText: "Choose E-Commerce Plan",
    recommendedFor: "Retail brands, direct-to-consumer labels, artisan goods, and merchandise stores."
  },
  {
    id: "custom-app",
    name: "Custom Web Application",
    code: "PACKAGE D",
    price: 49999,
    priceDisplay: "₹49,999",
    billingType: "one-time development fee",
    tagline: "Bespoke full-stack web software built for complex business logic, user auth, and relational databases.",
    popular: false,
    deliveryTime: "21–30 Days",
    features: [
      "Comprehensive Custom Requirements & Architecture Analysis",
      "Secure Supabase Authentication & Role-Based Authorization",
      "PostgreSQL Database Design with Row-Level Security (RLS)",
      "Bespoke Administrative Dashboard & Control Panel",
      "External REST / Webhook API Integrations",
      "Custom Interactive Logic & Data Filtering Pipelines",
      "File Upload & Cloud Storage Handling",
      "Comprehensive Automated Testing & Production Deployment",
      "Full Source Code Transfer & Database Documentation",
      "60 Days Post-Launch Priority Maintenance"
    ],
    ctaText: "Build Custom Application",
    recommendedFor: "Tech startups, SaaS platforms, internal operations tools, and booking portals."
  }
];

export const INITIAL_MAINTENANCE_PLANS = [
  {
    id: "maint-basic",
    name: "Essential Care",
    price: 1999,
    priceDisplay: "₹1,999 / mo",
    description: "Peace of mind maintenance for static and brochure websites.",
    features: [
      "Monthly software and dependency updates",
      "Cloud backup once per month",
      "Uptime monitoring & SSL verification",
      "1 hour of developer content edits per month",
      "Email support within 24 hours"
    ]
  },
  {
    id: "maint-pro",
    name: "Growth Retainer",
    price: 4499,
    priceDisplay: "₹4,499 / mo",
    description: "Proactive management and feature iterations for active business sites.",
    popular: true,
    features: [
      "Weekly automated database and file backups",
      "Continuous uptime & security vulnerability scans",
      "4 hours of monthly feature development or UI adjustments",
      "Speed audit and performance maintenance",
      "Priority WhatsApp developer direct line"
    ]
  },
  {
    id: "maint-enterprise",
    name: "Dedicated Engineering Retainer",
    price: 9999,
    priceDisplay: "₹9,999 / mo",
    description: "Dedicated full-stack engineering support for custom web apps and e-commerce stores.",
    features: [
      "Daily automated backups with 1-click restore",
      "Continuous error log monitoring (Sentry / Supabase)",
      "10 hours of active full-stack engineering monthly",
      "Database query optimization and index tuning",
      "Same-day emergency response guarantee"
    ]
  }
];

export const INITIAL_PROJECTS = [
  {
    id: "savoria-bistro",
    slug: "savoria-bistro",
    title: "Savoria Bistro & Online Orders",
    category: "Restaurant & Hospitality",
    categoryKey: "restaurant",
    shortDescription: "Artisanal culinary dining experience with digital interactive menu, table reservations, and seamless direct food orders.",
    overview: "Savoria Bistro needed a digital presence that mirrored their upscale in-person dining ambiance while allowing patrons to browse menus by dietary preferences and book tables without third-party reservation commissions.",
    businessProblem: "The restaurant was losing 20-30% margins on aggregator delivery platforms and suffering from phone bottlenecks during peak evening reservation hours.",
    proposedSolution: "Engineered a custom React web application with an interactive multi-course menu, real-time table booking requests, dietary allergen toggles, and direct pickup order calculation.",
    features: [
      "Interactive visual menu with Gluten-Free, Vegan & Chef Choice filters",
      "Real-time table reservation form with date/time slot picker",
      "Digital takeaway cart calculation with instant WhatsApp dispatch",
      "Interactive chef stories, interior photo tour, and location mapping",
      "Mobile-optimized one-tap calling and directions"
    ],
    designApproach: "Warm charcoal tones with terracotta and gold accents, luxurious typography, high-contrast food photography, and fluid smooth-scroll interactions.",
    techStack: ["React 19", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Supabase"],
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    desktopImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
    mobileImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Safe placeholder or demo embed
    hasWorkingLiveDemo: true,
    demoType: "restaurant",
    featured: true,
    metrics: {
      lighthouseSpeed: "99/100",
      avgLoadTime: "0.6s",
      responsiveScore: "100%"
    }
  },
  {
    id: "aura-luxe-store",
    slug: "aura-luxe-store",
    title: "Aura Luxe Minimalist Fashion Store",
    category: "Fashion & E-Commerce",
    categoryKey: "ecommerce",
    shortDescription: "High-end direct-to-consumer apparel storefront with persistent cart, multi-variant selectors, and instant search.",
    overview: "A contemporary fashion label requiring an ultra-sleek, minimalist e-commerce storefront that lets the garments stand out without cluttered badges or distractions.",
    businessProblem: "Previous platform was sluggish on mobile devices with high drop-off during checkout and clumsy product filtering.",
    proposedSolution: "Developed a sub-second e-commerce experience using React and Tailwind with responsive product filtering, slide-out drawer cart, and instant client-side search.",
    features: [
      "Instant client-side catalog filtering by collection, size, and price",
      "Slide-out animated drawer cart with free shipping progress bar",
      "Multi-angle product image gallery with zoom preview",
      "Size guide modal and fabric transparency information",
      "Stripe and Razorpay checkout readiness integration"
    ],
    designApproach: "High-contrast monochrome palette with clean typography, generous whitespace, sharp product cards, and understated micro-animations.",
    techStack: ["React", "Tailwind CSS", "Zustand State", "Framer Motion", "Vite"],
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    desktopImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80",
    mobileImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
    demoVideoUrl: "",
    hasWorkingLiveDemo: true,
    demoType: "ecommerce",
    featured: true,
    metrics: {
      lighthouseSpeed: "98/100",
      avgLoadTime: "0.7s",
      responsiveScore: "100%"
    }
  },
  {
    id: "haven-key-realty",
    slug: "haven-key-realty",
    title: "Haven & Key Premium Realty",
    category: "Real Estate",
    categoryKey: "realestate",
    shortDescription: "Luxury property showcase platform with dynamic search filters, mortgage calculator, and direct agent inquiry leads.",
    overview: "A boutique real estate agency needed a distinguished online portfolio to showcase luxury penthouses, suburban villas, and prime commercial spaces.",
    businessProblem: "Generic real estate portal listings buried the brokerage's identity and failed to provide high-resolution architectural photo presentations.",
    proposedSolution: "Created an immersive property portal featuring interactive search by location and budget, mortgage installment estimation, and instant WhatsApp inquiry routing.",
    features: [
      "Property search by property type, bedroom count, and budget range",
      "Interactive Mortgage & EMI monthly payment calculator widget",
      "Property specifications grid (sq ft, year built, parking, amenities)",
      "High-res architectural photo gallery and neighborhood highlights",
      "One-click agent schedule viewing modal"
    ],
    designApproach: "Deep navy and slate backdrop with champagne gold highlights, architectural grid alignment, and crisp iconography.",
    techStack: ["React", "Tailwind CSS", "Lucide React", "Supabase", "Vite"],
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    desktopImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    mobileImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    demoVideoUrl: "",
    hasWorkingLiveDemo: true,
    demoType: "realestate",
    featured: true,
    metrics: {
      lighthouseSpeed: "97/100",
      avgLoadTime: "0.8s",
      responsiveScore: "100%"
    }
  },
  {
    id: "pulsecare-clinic",
    slug: "pulsecare-clinic",
    title: "PulseCare Medical Clinic & Telehealth",
    category: "Healthcare & Clinics",
    categoryKey: "healthcare",
    shortDescription: "Accessible, patient-friendly clinic portal with doctor specialist directory, procedure guides, and appointment booking.",
    overview: "A multi-specialty healthcare practice required a calming, trustworthy, and compliant digital portal where patients could evaluate specialists and schedule visits.",
    businessProblem: "High front-desk call volume during morning hours caused long hold times and dropped patient appointments.",
    proposedSolution: "Delivered a patient-first portal with doctor credential profiles, insurance acceptance verification, and automated appointment request triage.",
    features: [
      "Department and specialist directory with doctor bios & credentials",
      "Online appointment request form with symptom categorization",
      "Emergency phone callout and parking/arrival instructions",
      "Comprehensive patient checklist and preparation guides",
      "Accessibility contrast compliance (WCAG AAA level text)"
    ],
    designApproach: "Clean clinical whites and calming medical blues with clear typographic hierarchy, legible button targets, and high contrast.",
    techStack: ["React", "Tailwind CSS", "Zod Validation", "Supabase", "Vite"],
    thumbnail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    desktopImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    mobileImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    demoVideoUrl: "",
    hasWorkingLiveDemo: true,
    demoType: "healthcare",
    featured: false,
    metrics: {
      lighthouseSpeed: "99/100",
      avgLoadTime: "0.5s",
      responsiveScore: "100%"
    }
  },
  {
    id: "apex-horizon-consulting",
    slug: "apex-horizon-consulting",
    title: "Apex Horizon Strategy & Capital Partners",
    category: "Corporate Business",
    categoryKey: "corporate",
    shortDescription: "Authoritative corporate portal for a private equity and management consulting firm with interactive case studies and leadership roster.",
    overview: "Apex Horizon advises Fortune 500 leadership and needed a digital presence communicating intellectual rigor, market expertise, and global capability.",
    businessProblem: "Their previous website looked outdated, lacked mobile compatibility, and failed to communicate their billion-dollar transaction track record.",
    proposedSolution: "Architected a stately, razor-sharp corporate site with dynamic sector filtering, executive leadership profiles, and interactive transaction tombstones.",
    features: [
      "Industry practice area navigation (Fintech, Energy, Healthcare)",
      "Interactive transaction track record with filterable deal sizes",
      "Executive leadership biographies with verified credentials",
      "Thought leadership whitepapers and publication downloads",
      "Confidential partnership inquiry routing"
    ],
    designApproach: "Midnight navy, brushed steel borders, and electric sapphire accents, featuring crisp grid layouts and executive typography.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Lucide React"],
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    desktopImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    mobileImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    demoVideoUrl: "",
    hasWorkingLiveDemo: true,
    demoType: "corporate",
    featured: false,
    metrics: {
      lighthouseSpeed: "98/100",
      avgLoadTime: "0.6s",
      responsiveScore: "100%"
    }
  },
  {
    id: "elena-vance-portfolio",
    slug: "elena-vance-portfolio",
    title: "Elena Vance - Creative Director",
    category: "Personal Portfolio",
    categoryKey: "portfolio",
    shortDescription: "Award-winning editorial personal portfolio featuring interactive project case studies, client logos, and direct speaking inquiry.",
    overview: "An international product designer and creative director wanted a digital showcase that highlighted her conceptual thinking and tangible business impact.",
    businessProblem: "Standard portfolio sites like Behance or Dribbble forced standardized templates and could not convey in-depth research methodologies.",
    proposedSolution: "Built an immersive, editorial case study portfolio with interactive prototype embeds, before/after visual sliders, and a direct consulting booking hook.",
    features: [
      "Editorial project narrative with client quotes and design system tokens",
      "Interactive prototype iframe embedding support",
      "Award and recognition badge showcase",
      "Integrated Calendly booking consultation embed",
      "Dark and light contrast aesthetic"
    ],
    designApproach: "Asymmetrical grid layouts, micro-typography, smooth cursor hover interactions, and stark contrast.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    desktopImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
    mobileImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    demoVideoUrl: "",
    hasWorkingLiveDemo: true,
    demoType: "portfolio",
    featured: true,
    metrics: {
      lighthouseSpeed: "100/100",
      avgLoadTime: "0.4s",
      responsiveScore: "100%"
    }
  },
  {
    id: "azure-coastline-resort",
    slug: "azure-coastline-resort",
    title: "Azure Coastline Boutique Resort",
    category: "Hotel & Hospitality",
    categoryKey: "hotel",
    shortDescription: "Coastal luxury resort website with room and villa suite showcases, amenity highlights, and date-based reservation inquiries.",
    overview: "A coastal Mediterranean-inspired boutique resort seeking to attract high-net-worth travelers and honeymoon couples looking for secluded luxury.",
    businessProblem: "Over-reliance on Booking.com and Expedia eroded resort operating margins by 18% per room night.",
    proposedSolution: "Constructed a high-converting direct booking experience with interactive suite photo tours, resort experiences package builder, and instant inquiry concierge.",
    features: [
      "Suite showcase with 360 photo galleries and amenity checklists",
      "Date and guest count room selector with instant cost breakdown",
      "Curated resort experiences gallery (Spa, Yacht Charter, Private Dining)",
      "Weather widget and seasonal packing recommendations",
      "Direct VIP concierge inquiry form"
    ],
    designApproach: "Deep azure blues, sand neutrals, expansive hero imagery, and smooth fluid page reveals.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    desktopImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    mobileImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    demoVideoUrl: "",
    hasWorkingLiveDemo: true,
    demoType: "hotel",
    featured: false,
    metrics: {
      lighthouseSpeed: "97/100",
      avgLoadTime: "0.7s",
      responsiveScore: "100%"
    }
  },
  {
    id: "skillforge-academy",
    slug: "skillforge-academy",
    title: "SkillForge Interactive Tech Academy",
    category: "Education & E-Learning",
    categoryKey: "education",
    shortDescription: "Modern online learning platform with syllabus curriculum explorer, student project showcase, and cohort enrollment.",
    overview: "An online technology academy offering intensive bootcamps in Full-Stack Engineering, AI Engineering, and Cloud DevOps.",
    businessProblem: "Prospective students felt overwhelmed by dense text descriptions and dropped off before understanding career outcomes.",
    proposedSolution: "Designed an interactive curriculum explorer with week-by-week syllabus reveals, graduate salary statistics, and a tuition calculator.",
    features: [
      "Interactive week-by-week course syllabus roadmap",
      "Instructor credentials and alumni portfolio spotlights",
      "Tuition calculator with installment and scholarship breakdowns",
      "Free preview lesson registration modal",
      "Live cohort countdown timer and seat availability tracker"
    ],
    designApproach: "Vibrant violet and electric cyan accents against a charcoal matrix, modern coding badges, and interactive accordion modules.",
    techStack: ["React", "Tailwind CSS", "Lucide React", "Supabase"],
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    desktopImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80",
    mobileImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    demoVideoUrl: "",
    hasWorkingLiveDemo: true,
    demoType: "education",
    featured: false,
    metrics: {
      lighthouseSpeed: "98/100",
      avgLoadTime: "0.6s",
      responsiveScore: "100%"
    }
  },
  {
    id: "novametric-analytics",
    slug: "novametric-analytics",
    title: "NovaMetric AI Business Analytics",
    category: "SaaS Dashboard & Web Apps",
    categoryKey: "saas",
    shortDescription: "Full-scale administrative analytics dashboard with real-time KPI metrics, revenue charts, and automated team permission management.",
    overview: "A cloud-based SaaS platform providing AI-powered financial forecasting, customer churn prediction, and subscription metrics for B2B enterprises.",
    businessProblem: "The founders needed a production-ready dashboard interface that remained lightning fast with thousands of customer records and complex chart visualizations.",
    proposedSolution: "Engineered an ultra-dense, responsive dashboard UI with interactive time-range selectors, live bar/line telemetry charts, and user permission toggles.",
    features: [
      "Real-time financial telemetry indicators (MRR, Net Retention, ARPU)",
      "Interactive revenue trend graph with custom date filtering",
      "Filterable customer churn risk table with status chips",
      "Role-based access permission management switches",
      "One-click CSV financial data export simulation"
    ],
    designApproach: "High-density data cockpit with dark navy glass panels, electric neon telemetry accents, and legible mono typography for numbers.",
    techStack: ["React 19", "Tailwind CSS", "Lucide React", "Chart Logic", "Supabase"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    desktopImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    mobileImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    demoVideoUrl: "",
    hasWorkingLiveDemo: true,
    demoType: "saas",
    featured: true,
    metrics: {
      lighthouseSpeed: "99/100",
      avgLoadTime: "0.5s",
      responsiveScore: "100%"
    }
  }
];

export const INITIAL_FAQS = [
  {
    id: "faq-1",
    question: "How long does it take to design and launch a new website?",
    answer: "A standard Starter Website (1–3 pages) typically launches within 3 to 5 business days. A comprehensive custom Business Website (up to 6 pages) usually takes 7 to 10 days. Complex e-commerce stores or full-stack web applications generally require 2 to 4 weeks depending on database architecture, third-party integrations, and feedback turnaround."
  },
  {
    id: "faq-2",
    question: "What is the difference between your development fee and recurring costs?",
    answer: "Our pricing covers 100% of the custom UI/UX design, frontend code, database integration, testing, and deployment. Recurring costs are third-party services that you pay directly to the provider: domain registration (~₹800–₹1,200/year), hosting (Netlify/Vercel have generous free tiers for starter sites), and database hosting (Supabase has a robust free tier for initial workloads). We assist you in setting these up under your own account so you maintain full ownership."
  },
  {
    id: "faq-3",
    question: "Do I completely own my code and website once finished?",
    answer: "Yes, 100%. Upon final project sign-off and payment, all intellectual property, React source code, Tailwind design tokens, database schemas, and assets are transferred to your own GitHub and hosting accounts. We do not lock you into proprietary closed platforms."
  },
  {
    id: "faq-4",
    question: "Can I update content myself or do I need you for every change?",
    answer: "We build our applications with user-friendly administration controls and structured data models. For sites requiring frequent content updates (like blogs, projects, or store products), we integrate Supabase or lightweight CMS controls so you can update text, images, and prices without touching code."
  },
  {
    id: "faq-5",
    question: "How does the revision and communication process work?",
    answer: "We conduct projects with total transparency. You receive a private staging URL to review progress in real time. Each package includes designated revision rounds to fine-tune typography, spacing, colors, and content. Communication is handled via WhatsApp, email, or scheduled Google Meet sessions to keep feedback tight and projects on schedule."
  },
  {
    id: "faq-6",
    question: "Do you build custom web apps or only static websites?",
    answer: "We specialize in both! Our custom web application service (Package D) includes complete full-stack development: PostgreSQL databases, authentication, role-based permissions, custom APIs, external payment gateways, and tailored administrative dashboards."
  },
  {
    id: "faq-7",
    question: "What happens if a bug or issue arises after launch?",
    answer: "Every project includes a complimentary post-launch warranty period (14 to 60 days depending on package). Any bug or technical discrepancy originating from the agreed scope is resolved immediately at zero charge. We also offer ongoing monthly maintenance retainers for long-term support."
  }
];

export const INITIAL_TESTIMONIALS = [
  {
    id: "test-1",
    clientName: "David Sterling",
    role: "Founder & Managing Director",
    company: "Sterling Asset Advisory",
    category: "Corporate Business",
    content: "The corporate website built for our advisory firm exceeded our expectations. The attention to typography, sub-second load times, and custom inquiry workflow helped us secure two institutional clients within three weeks of launch.",
    rating: 5,
    isPlaceholder: true,
    verificationLabel: "Sample Client Case Study"
  },
  {
    id: "test-2",
    clientName: "Maya Lin",
    role: "Proprietor & Executive Chef",
    company: "Savoria Bistro",
    category: "Restaurant & Hospitality",
    content: "Moving our ordering and reservations away from delivery apps to our own custom web application saved us thousands in monthly fees. Customers constantly compliment how clean and fast the online menu feels on their phones.",
    rating: 5,
    isPlaceholder: true,
    verificationLabel: "Demonstration Project Feedback"
  },
  {
    id: "test-3",
    clientName: "Rohan Mehta",
    role: "Head of Marketing",
    company: "Aura Apparel Lab",
    category: "E-Commerce",
    content: "Our previous Shopify theme was bloated with apps and took 4 seconds to load on 4G. The new custom React storefront loads in under a second and our mobile checkout abandonment dropped significantly.",
    rating: 5,
    isPlaceholder: true,
    verificationLabel: "Performance Benchmark Case Study"
  }
];
