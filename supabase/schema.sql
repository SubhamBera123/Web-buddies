-- ==============================================================================
-- NEXUSCRAFT WEB DEVELOPMENT AGENCY - SUPABASE PRODUCTION DATABASE SCHEMA
-- ==============================================================================
-- Run this complete script in the Supabase SQL Editor (Dashboard > SQL Editor)
-- It creates all required tables, Row Level Security (RLS) policies, indexes,
-- and inserts initial seed data for projects, services, pricing, FAQs & settings.
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. ENUMS
DO $$ BEGIN
  CREATE TYPE enquiry_status AS ENUM ('New', 'Contacted', 'In Discussion', 'Closed', 'Archived');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- 3. PROFILES / ADMIN USERS TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. SERVICES TABLE
CREATE TABLE IF NOT EXISTS public.services (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  description TEXT NOT NULL,
  target_audience TEXT,
  key_features JSONB DEFAULT '[]'::jsonb,
  business_benefits JSONB DEFAULT '[]'::jsonb,
  technologies JSONB DEFAULT '[]'::jsonb,
  starting_price INTEGER NOT NULL DEFAULT 0,
  popular BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. PRICING PACKAGES TABLE
CREATE TABLE IF NOT EXISTS public.pricing_packages (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT NOT NULL,
  price INTEGER NOT NULL,
  price_display TEXT NOT NULL,
  billing_type TEXT NOT NULL DEFAULT 'one-time development fee',
  tagline TEXT,
  popular BOOLEAN DEFAULT false,
  delivery_time TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  cta_text TEXT DEFAULT 'Get Started',
  recommended_for TEXT,
  is_published BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.projects (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  category_key TEXT NOT NULL,
  short_description TEXT NOT NULL,
  overview TEXT,
  business_problem TEXT,
  proposed_solution TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  design_approach TEXT,
  tech_stack JSONB DEFAULT '[]'::jsonb,
  thumbnail TEXT NOT NULL,
  desktop_image TEXT,
  mobile_image TEXT,
  demo_video_url TEXT DEFAULT '',
  has_working_live_demo BOOLEAN DEFAULT true,
  demo_type TEXT DEFAULT 'generic',
  featured BOOLEAN DEFAULT false,
  metrics JSONB DEFAULT '{}'::jsonb,
  is_published BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. ENQUIRIES TABLE (CLIENT LEADS)
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  business_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  service_required TEXT NOT NULL,
  estimated_budget TEXT,
  project_deadline TEXT,
  communication_method TEXT DEFAULT 'Email',
  project_description TEXT NOT NULL,
  reference_url TEXT,
  status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'In Discussion', 'Closed', 'Archived')),
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. FAQS TABLE
CREATE TABLE IF NOT EXISTS public.faqs (
  id TEXT PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. TESTIMONIALS TABLE
CREATE TABLE IF NOT EXISTS public.testimonials (
  id TEXT PRIMARY KEY,
  client_name TEXT NOT NULL,
  role TEXT,
  company TEXT,
  category TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_placeholder BOOLEAN DEFAULT false,
  verification_label TEXT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. SITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.site_settings (
  id TEXT PRIMARY KEY DEFAULT 'primary_config',
  agency_name TEXT DEFAULT 'NexusCraft',
  agency_tagline TEXT,
  developer_name TEXT,
  developer_title TEXT,
  email TEXT,
  whatsapp_number TEXT,
  whatsapp_display TEXT,
  location TEXT,
  availability_status TEXT,
  turnaround_time TEXT,
  github_url TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- INDEXES FOR PERFORMANCE
-- ==============================================================================
CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_category ON public.projects(category_key);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON public.projects(featured);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created ON public.enquiries(created_at DESC);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pricing_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- 1. PROFILES POLICIES
DROP POLICY IF EXISTS "Admins can view profiles" ON public.profiles;
CREATE POLICY "Admins can view profiles" ON public.profiles
  FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Admins can update own profile" ON public.profiles;
CREATE POLICY "Admins can update own profile" ON public.profiles
  FOR UPDATE TO authenticated USING (auth.uid() = id);

-- 2. SERVICES POLICIES (Public read active, Admin write)
DROP POLICY IF EXISTS "Public can view active services" ON public.services;
CREATE POLICY "Public can view active services" ON public.services
  FOR SELECT TO public USING (is_active = true);

DROP POLICY IF EXISTS "Admins can manage services" ON public.services;
CREATE POLICY "Admins can manage services" ON public.services
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 3. PRICING POLICIES (Public read published, Admin write)
DROP POLICY IF EXISTS "Public can view published pricing" ON public.pricing_packages;
CREATE POLICY "Public can view published pricing" ON public.pricing_packages
  FOR SELECT TO public USING (is_published = true);

DROP POLICY IF EXISTS "Admins can manage pricing" ON public.pricing_packages;
CREATE POLICY "Admins can manage pricing" ON public.pricing_packages
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 4. PROJECTS POLICIES (Public read published, Admin write)
DROP POLICY IF EXISTS "Public can view published projects" ON public.projects;
CREATE POLICY "Public can view published projects" ON public.projects
  FOR SELECT TO public USING (is_published = true);

DROP POLICY IF EXISTS "Admins can manage projects" ON public.projects;
CREATE POLICY "Admins can manage projects" ON public.projects
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 5. ENQUIRIES POLICIES (Public can INSERT only; Authenticated Admins can SELECT/UPDATE/DELETE)
DROP POLICY IF EXISTS "Public can submit enquiries" ON public.enquiries;
CREATE POLICY "Public can submit enquiries" ON public.enquiries
  FOR INSERT TO public WITH CHECK (
    char_length(full_name) >= 2 AND 
    char_length(email) >= 5 AND
    char_length(project_description) >= 10
  );

DROP POLICY IF EXISTS "Only authenticated admins can view enquiries" ON public.enquiries;
CREATE POLICY "Only authenticated admins can view enquiries" ON public.enquiries
  FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Only authenticated admins can update enquiries" ON public.enquiries;
CREATE POLICY "Only authenticated admins can update enquiries" ON public.enquiries
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Only authenticated admins can delete enquiries" ON public.enquiries;
CREATE POLICY "Only authenticated admins can delete enquiries" ON public.enquiries
  FOR DELETE TO authenticated USING (true);

-- 6. FAQS POLICIES (Public read, Admin write)
DROP POLICY IF EXISTS "Public can view faqs" ON public.faqs;
CREATE POLICY "Public can view faqs" ON public.faqs
  FOR SELECT TO public USING (is_public = true);

DROP POLICY IF EXISTS "Admins can manage faqs" ON public.faqs;
CREATE POLICY "Admins can manage faqs" ON public.faqs
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 7. TESTIMONIALS POLICIES (Public read published, Admin write)
DROP POLICY IF EXISTS "Public can view testimonials" ON public.testimonials;
CREATE POLICY "Public can view testimonials" ON public.testimonials
  FOR SELECT TO public USING (is_published = true);

DROP POLICY IF EXISTS "Admins can manage testimonials" ON public.testimonials;
CREATE POLICY "Admins can manage testimonials" ON public.testimonials
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 8. SETTINGS POLICIES (Public read, Admin write)
DROP POLICY IF EXISTS "Public can view site settings" ON public.site_settings;
CREATE POLICY "Public can view site settings" ON public.site_settings
  FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Admins can update site settings" ON public.site_settings;
CREATE POLICY "Admins can update site settings" ON public.site_settings
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ==============================================================================
-- INITIAL SITE SETTINGS SEED
-- ==============================================================================
INSERT INTO public.site_settings (
  id, agency_name, agency_tagline, developer_name, developer_title,
  email, whatsapp_number, whatsapp_display, location, availability_status, turnaround_time
) VALUES (
  'primary_config',
  'NexusCraft',
  'High-Performance Websites & Custom Web Applications',
  'Alex Vance',
  'Senior Full-Stack Web Developer & UI/UX Specialist',
  'contact@nexuscraftstudio.dev',
  '+919876543210',
  '+91 98765 43210',
  'Remote / Available Worldwide',
  'Available for Q4 Projects & Retainers',
  'Within 4–6 business hours'
) ON CONFLICT (id) DO NOTHING;
