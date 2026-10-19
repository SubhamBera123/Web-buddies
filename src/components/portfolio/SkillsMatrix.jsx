import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Gauge, 
  Database, 
  Layout, 
  Workflow, 
  Lock 
} from 'lucide-react';

const SKILLS_DATA = [
    {
      name: 'React 19 & Next.js Architecture',
      category: 'frontend',
      level: 98,
      experience: 'Production Expert',
      description: 'Concurrent rendering, Server Components, custom hook state engines, optimized re-render trees.',
      tags: ['React 19', 'Next.js', 'Vite', 'TypeScript', 'Context API'],
      icon: Code2,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Interactive 3D WebGL & Three.js',
      category: 'frontend',
      level: 92,
      experience: 'Advanced Interactive',
      description: 'PBR shading, cinematic camera transitions, 60fps mesh optimization, WebGL shaders & canvas effects.',
      tags: ['Three.js', 'WebGL', 'Canvas API', 'GLTF/GLB', '3D Orbit Controls'],
      icon: Layers,
      color: 'from-amber-400 to-[#D2B477]'
    },
    {
      name: 'Tailwind CSS v4 & Creative Styling',
      category: 'frontend',
      level: 99,
      experience: 'Mastery',
      description: 'Tailwind v4 tokens, responsive layouts, glassmorphism, micro-animations, accessible contrast ratios.',
      tags: ['Tailwind v4', 'Framer Motion', 'CSS Variables', 'Responsive Grid'],
      icon: Layout,
      color: 'from-teal-400 to-emerald-500'
    },
    {
      name: 'PostgreSQL & Supabase BaaS',
      category: 'backend',
      level: 95,
      experience: 'Production Architect',
      description: 'Relational data modeling, Row-Level Security policies, edge functions, realtime WebSockets.',
      tags: ['PostgreSQL', 'Supabase', 'Row-Level Security', 'Edge Functions', 'REST/GraphQL'],
      icon: Database,
      color: 'from-emerald-400 to-teal-600'
    },
    {
      name: 'Node.js & Scalable API Services',
      category: 'backend',
      level: 94,
      experience: 'Senior Level',
      description: 'High-throughput microservices, webhook pipelines, payment gateway integrations (Stripe, Razorpay).',
      tags: ['Node.js', 'Express', 'JWT Auth', 'Webhooks', 'Zod Validation'],
      icon: Workflow,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Core Web Vitals & Sub-Second TTFB',
      category: 'architecture',
      level: 99,
      experience: 'Benchmark Leader',
      description: 'Sub-600ms Time-To-First-Byte, aggressive code-splitting, modern AVIF/WebP image streaming, 99+ Lighthouse.',
      tags: ['99+ Lighthouse', 'LCP/FID/CLS', 'SSR/SSG', 'Brotli/Gzip', 'Asset Streaming'],
      icon: Gauge,
      color: 'from-[#D2B477] to-amber-500'
    },
    {
      name: 'Enterprise Security & OWASP Standards',
      category: 'security',
      level: 96,
      experience: 'Security Hardened',
      description: 'Strict Content Security Policy headers, sanitized DOM inputs, token rotation, defense-in-depth.',
      tags: ['OWASP Top 10', 'CSP Headers', 'Rate Limiting', 'Sanitization', 'Zero Trust'],
      icon: Lock,
      color: 'from-rose-500 to-amber-500'
    },
    {
      name: 'Unit Testing & Automated Verification',
      category: 'security',
      level: 93,
      experience: 'Automated CI/CD',
      description: 'Vitest, React Testing Library, regression benchmarks, end-to-end user journey validation.',
      tags: ['Vitest', 'Testing Library', 'CI/CD Pipelines', 'Regression Guards'],
      icon: ShieldCheck,
      color: 'from-indigo-400 to-cyan-500'
    }
  ];

const CATEGORIES = [
  { key: 'all', label: 'All Technologies' },
  { key: 'frontend', label: 'Frontend & 3D WebGL' },
  { key: 'backend', label: 'Backend & Cloud APIs' },
  { key: 'architecture', label: 'Architecture & Vitals' },
  { key: 'security', label: 'Security & Quality' },
];

export const SkillsMatrix = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = useMemo(() => {
    if (activeTab === 'all') return SKILLS_DATA;
    return SKILLS_DATA.filter((skill) => skill.category === activeTab);
  }, [activeTab]);

  return (
    <section className="mb-20">
      {/* Section Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B89458]/10 border border-[#D2B477]/30 text-[#D2B477] text-xs font-mono uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Competencies & Engineering Stack</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Specialized Digital Skill Matrix
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-300">
          Mastering modern web standards from high-fidelity 3D user interfaces down to low-latency cloud data persistence.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveTab(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#D2B477] to-[#B89458] text-[#050505] font-bold shadow-[0_0_20px_rgba(210,180,119,0.3)] scale-[1.02]'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-gradient-to-br from-[#0c0f18]/90 via-[#07090e]/95 to-[#0b0e17]/90 border border-slate-800/80 hover:border-[#D2B477]/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Corner decorative light */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D2B477]/10 to-transparent pointer-events-none rounded-bl-3xl group-hover:from-[#D2B477]/20 transition-all" />

              <div>
                {/* Header: Icon + Mastery Percentage */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[#D2B477] group-hover:scale-110 group-hover:border-[#D2B477]/50 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black font-mono text-white tracking-tight">
                      {skill.level}%
                    </span>
                    <span className="block text-[10px] font-mono text-emerald-400">
                      {skill.experience}
                    </span>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-bold text-white group-hover:text-[#D2B477] transition-colors leading-snug">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {skill.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60">
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-gradient-to-r from-[#D2B477] to-amber-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {skill.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-slate-900/90 text-[10px] font-mono text-slate-500">
                      +{skill.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
