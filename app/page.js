"use client";

import { useState, useEffect } from "react";
import {
  Mail, Phone, MapPin, Download, Linkedin,
  ChevronRight, Shield, BookOpen, Briefcase,
  Layers, GraduationCap, Award, Globe, User,
} from "lucide-react";

/* ─────────────────────────────────── DATA ─────────────────────────────────── */

const SKILLS = [
  { label: "Structural Analysis & Design",        pct: 95 },
  { label: "Reinforced Concrete & Steel Design",  pct: 92 },
  { label: "Construction Supervision",            pct: 90 },
  { label: "Foundation & Geotechnical Design",    pct: 85 },
  { label: "Estate Layout & Site Planning",       pct: 88 },
  { label: "Project Coordination & QC",           pct: 87 },
];

const SOFTWARE = [
  "AutoCAD", "Civil 3D", "ProtaStructure",
  "Revit", "Tekla Structures", "Orion", "MS Office",
];

const EXPERIENCE = [
  {
    role: "Civil / Structural Engineer",
    company: "Under Engr. Ularam Bello",
    period: "2021 – 2022",
    duties: [
      "Supervised residential and commercial construction projects ensuring adherence to approved structural drawings.",
      "Conducted quality-control inspections and ensured compliance with safety standards and building codes.",
      "Coordinated with contractors, architects, and allied professionals for seamless project execution.",
      "Managed site activities and resolved technical challenges during construction phases.",
    ],
  },
  {
    role: "Lecturer, Civil Engineering Department",
    company: "Modibbo Adama University, Yola",
    period: "2022",
    duties: [
      "Delivered undergraduate courses in civil and structural engineering.",
      "Supervised academic projects and integrated industry-based case studies into curriculum.",
      "Mentored students on practical engineering applications and professional development.",
    ],
  },
];

const PROJECTS_ESTATE = [
  "Hasiya Court Estate – 121 units of 4-bedroom duplexes with BQ (2025)",
  "Hilltop Hillcrest Estate, Katampe, Abuja – multiple duplex prototypes (2025)",
  "Rome Estate I & II for Dan Mama Smart Homes Ltd (2024)",
  "Boulevard Estate for Dan Mama Smart Homes Ltd (2023)",
  "Dan Mama Smart City master planning, site layout, estate road design (2025)",
];

const PROJECTS_RESIDENTIAL = [
  "Hotel development supervision, Maraba – 12-bedroom hotel (2021)",
  "Terrace duplex structural design (3 units), Anambra State (2025)",
  "Elm Villa duplex prototype for Dan Mama Smart Homes (2024)",
  "Guest chalet & 2-bedroom BQ, Kabusa Garden Estate, Abuja (2021–22)",
];

const CERTIFICATIONS = [
  { name: "COREN Registration",                    issuer: "Council for Regulation of Engineering in Nigeria", year: "Jan 2025" },
  { name: "Hedera Hashgraph Developer Certificate", issuer: "Hedera",                year: "2025" },
  { name: "Unit Masters – Blockchain & Crypto",     issuer: "Unit Masters",           year: "Nov 2022" },
  { name: "DeFi Certificate of Participation",      issuer: "University of Nicosia",  year: "2021" },
  { name: "Fundamentals of Digital Marketing",      issuer: "Google",                 year: "2022" },
];

const NAV = [
  { id: "profile",          label: "Profile",          Icon: User },
  { id: "experience",       label: "Experience",        Icon: Briefcase },
  { id: "projects",         label: "Projects",          Icon: Layers },
  { id: "education",        label: "Education",         Icon: GraduationCap },
  { id: "certifications",   label: "Certifications",    Icon: Award },
];

/* ─────────────────────────────── COMPONENTS ────────────────────────────────── */

function SectionHeading({ Icon, children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 rounded bg-navy-800 flex items-center justify-center flex-shrink-0"
           style={{ background: "var(--navy-800)" }}>
        <Icon size={15} color="#c49a2a" />
      </div>
      <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.35rem", fontWeight: 600, color: "#0b1f3a", letterSpacing: "0.01em" }}>
        {children}
      </h2>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #c49a2a40, transparent)" }} />
    </div>
  );
}

function Card({ children, className = "", id }) {
  return (
    <div id={id}
      className={`bg-white rounded-xl border shadow-print scroll-mt-24 ${className}`}
      style={{ borderColor: "#e5e9ef", boxShadow: "0 2px 12px rgba(11,31,58,0.06)" }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────── MAIN EXPORT ───────────────────────────────── */

export default function CV() {
  const [active, setActive] = useState("profile");

  /* Update active section on scroll */
  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#f0f3f8" }}>

      {/* ── STICKY HEADER ── */}
      <header className="no-print sticky top-0 z-50 bg-white border-b"
              style={{ borderColor: "#dde2ea", boxShadow: "0 1px 8px rgba(11,31,58,0.08)" }}>
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Monogram */}
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm tracking-wider"
                 style={{ background: "linear-gradient(135deg, #0b1f3a, #163358)", fontFamily: "'DM Mono', monospace" }}>
              MN
            </div>
            <div>
              <p style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 700, fontSize: "1.05rem", color: "#0b1f3a" }}>
                Engr. Mikailu Samuel Nadro
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#c49a2a", letterSpacing: "0.08em" }}>
                COREN REGISTERED STRUCTURAL ENGINEER
              </p>
            </div>
          </div>

          {/* Nav tabs */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map(({ id, label }) => (
              <button key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                className="px-3 py-1.5 rounded text-xs font-medium transition-all"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.04em",
                  background: active === id ? "#0b1f3a" : "transparent",
                  color: active === id ? "#c49a2a" : "#64748b",
                }}>
                {label.toUpperCase()}
              </button>
            ))}
          </nav>

          <button
            onClick={() => window.print()}
            className="no-print flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-90"
            style={{ background: "var(--navy-800)", color: "white", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.05em" }}>
            <Download size={14} />
            DOWNLOAD
          </button>
        </div>
      </header>

      <div className="cv-grid max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-7">

        {/* ════════════════════ SIDEBAR ════════════════════ */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-5">

          {/* Profile Card */}
          <div className="rounded-xl overflow-hidden shadow-print"
               style={{ boxShadow: "0 4px 20px rgba(11,31,58,0.18)" }}>

            {/* Dark header */}
            <div className="blueprint-texture relative px-6 pt-8 pb-10 text-center"
                 style={{ background: "linear-gradient(160deg, #0b1f3a 0%, #071525 100%)" }}>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-20"
                   style={{ background: "linear-gradient(225deg, #c49a2a, transparent)" }} />

              {/* Avatar circle */}
              <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4"
                   style={{
                     fontFamily: "'Crimson Pro', serif",
                     background: "linear-gradient(135deg, #102848, #163358)",
                     borderColor: "#c49a2a",
                     color: "#c49a2a",
                     boxShadow: "0 0 0 4px rgba(196,154,42,0.15)",
                   }}>
                MN
              </div>

              <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.2rem", fontWeight: 700, color: "white", lineHeight: 1.2 }}>
                Mikailu S. Nadro
              </h2>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#6b9ec7", letterSpacing: "0.1em", marginTop: "4px" }}>
                CIVIL / STRUCTURAL ENGINEER
              </p>

              {/* COREN badge */}
              <div className="inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-full"
                   style={{ background: "rgba(196,154,42,0.15)", border: "1px solid rgba(196,154,42,0.4)" }}>
                <Shield size={11} color="#c49a2a" />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#c49a2a", letterSpacing: "0.06em" }}>
                  COREN REG. 2025
                </span>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white px-5 py-5 space-y-3">
              {[
                { Icon: Phone, label: "+234 812 826 4901", href: "tel:+2348128264901" },
                { Icon: Mail,  label: "mikailu29@gmail.com", href: "mailto:mikailu29@gmail.com" },
                { Icon: MapPin, label: "Yola, Adamawa State, NG" },
              ].map(({ Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0"
                       style={{ background: "#f0f4f9" }}>
                    <Icon size={13} color="#c49a2a" />
                  </div>
                  {href ? (
                    <a href={href} className="text-xs hover:underline transition-colors"
                       style={{ color: "#334155", fontFamily: "'Barlow', sans-serif" }}>
                      {label}
                    </a>
                  ) : (
                    <span className="text-xs" style={{ color: "#334155", fontFamily: "'Barlow', sans-serif" }}>
                      {label}
                    </span>
                  )}
                </div>
              ))}

              {/* Social */}
              <div className="flex gap-2 pt-1">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all hover:opacity-80"
                   style={{ background: "#f0f4f9", color: "#0b1f3a", fontFamily: "'DM Mono', monospace", fontSize: "0.65rem" }}>
                  <Linkedin size={11} /> LINKEDIN
                </a>
                <a href="https://github.com/mikky69" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all hover:opacity-80"
                   style={{ background: "#f0f4f9", color: "#0b1f3a", fontFamily: "'DM Mono', monospace", fontSize: "0.65rem" }}>
                  <Globe size={11} /> GITHUB
                </a>
              </div>
            </div>
          </div>

          {/* Core Skills */}
          <div className="bg-white rounded-xl p-5 border shadow-print"
               style={{ borderColor: "#e5e9ef", boxShadow: "0 2px 12px rgba(11,31,58,0.06)" }}>
            <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#c49a2a", marginBottom: "14px" }}>
              CORE COMPETENCIES
            </h3>
            <div className="space-y-3">
              {SKILLS.map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between mb-1">
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.72rem", color: "#475569" }}>{label}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#c49a2a" }}>{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#f0f3f8" }}>
                    <div className="h-full rounded-full skill-bar"
                         style={{
                           "--bar-width": `${pct}%`,
                           width: `${pct}%`,
                           background: "linear-gradient(to right, #c49a2a, #d4a940)",
                         }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software */}
          <div className="bg-white rounded-xl p-5 border shadow-print"
               style={{ borderColor: "#e5e9ef", boxShadow: "0 2px 12px rgba(11,31,58,0.06)" }}>
            <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#c49a2a", marginBottom: "12px" }}>
              ENGINEERING SOFTWARE
            </h3>
            <div className="flex flex-wrap gap-2">
              {SOFTWARE.map((s) => (
                <span key={s} className="px-2.5 py-1 rounded text-xs"
                      style={{ background: "#f0f3f8", color: "#0b1f3a", fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", border: "1px solid #e2e8f0" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-xl p-5 border shadow-print"
               style={{ borderColor: "#e5e9ef", boxShadow: "0 2px 12px rgba(11,31,58,0.06)" }}>
            <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#c49a2a", marginBottom: "12px" }}>
              LANGUAGES
            </h3>
            {[["English", "Professional"], ["Hausa", "Native"]].map(([lang, level]) => (
              <div key={lang} className="flex items-center justify-between mb-2">
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.78rem", color: "#334155" }}>{lang}</span>
                <span className="px-2 py-0.5 rounded-full text-xs"
                      style={{ background: "rgba(196,154,42,0.12)", color: "#a8821f", fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", border: "1px solid rgba(196,154,42,0.25)" }}>
                  {level}
                </span>
              </div>
            ))}
          </div>

        </aside>

        {/* ════════════════════ MAIN CONTENT ════════════════════ */}
        <main className="flex-1 space-y-6">

          {/* ── PROFILE ── */}
          <Card id="profile" className="p-7 fade-up">
            <SectionHeading Icon={User}>Professional Profile</SectionHeading>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.92rem", color: "#475569", lineHeight: 1.75 }}>
              COREN-registered Structural Engineer with comprehensive experience in structural design,
              construction supervision, and project management across residential, commercial, and
              estate-scale developments. Demonstrated expertise in reinforced concrete and steel structures,
              site execution, multidisciplinary coordination, and compliance with Nigerian engineering
              standards. Proven track record of delivering complex projects while maintaining high quality
              standards and meeting tight deadlines.
            </p>

            {/* Key stats strip */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-5 border-t" style={{ borderColor: "#f0f3f8" }}>
              {[
                { value: "4+",   label: "Years Experience" },
                { value: "15+",  label: "Projects Delivered" },
                { value: "121",  label: "Units Designed (2025)" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "2rem", fontWeight: 700, color: "#0b1f3a", lineHeight: 1 }}>
                    {value}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#94a3b8", letterSpacing: "0.06em", marginTop: "4px" }}>
                    {label.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* ── EXPERIENCE ── */}
          <Card id="experience" className="p-7 fade-up">
            <SectionHeading Icon={Briefcase}>Professional Experience</SectionHeading>
            <div className="space-y-7">
              {EXPERIENCE.map((job, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 timeline-item"
                     style={{ borderColor: "#e2e8f0" }}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", fontWeight: 700, color: "#0b1f3a" }}>
                      {job.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded text-xs"
                          style={{ background: "#f0f4f9", color: "#64748b", fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", border: "1px solid #e2e8f0" }}>
                      {job.period}
                    </span>
                  </div>
                  <p className="mb-3 font-medium text-sm" style={{ color: "#c49a2a", fontFamily: "'Barlow', sans-serif" }}>
                    {job.company}
                  </p>
                  <ul className="space-y-2">
                    {job.duties.map((d, i) => (
                      <li key={i} className="flex gap-2.5 text-sm" style={{ color: "#475569", fontFamily: "'Barlow', sans-serif", lineHeight: 1.6 }}>
                        <ChevronRight size={14} className="flex-shrink-0 mt-0.5" color="#c49a2a" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          {/* ── PROJECTS ── */}
          <Card id="projects" className="p-7 fade-up">
            <SectionHeading Icon={Layers}>Selected Structural Projects</SectionHeading>

            <div className="space-y-6">
              {/* Estate */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px flex-1" style={{ background: "#f0f3f8" }} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.1em", color: "#94a3b8" }}>
                    LARGE-SCALE ESTATE DEVELOPMENTS — 2023–2025
                  </span>
                  <div className="h-px flex-1" style={{ background: "#f0f3f8" }} />
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {PROJECTS_ESTATE.map((p, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg"
                         style={{ background: "#f8fafc", border: "1px solid #e5e9ef" }}>
                      <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                           style={{ background: "rgba(196,154,42,0.15)" }}>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", color: "#c49a2a", fontWeight: 600 }}>
                          0{i + 1}
                        </span>
                      </div>
                      <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.82rem", color: "#334155" }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Residential */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px flex-1" style={{ background: "#f0f3f8" }} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.1em", color: "#94a3b8" }}>
                    RESIDENTIAL & COMMERCIAL — 2021–2025
                  </span>
                  <div className="h-px flex-1" style={{ background: "#f0f3f8" }} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {PROJECTS_RESIDENTIAL.map((p, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg"
                         style={{ background: "#f8fafc", border: "1px solid #e5e9ef" }}>
                      <ChevronRight size={13} className="flex-shrink-0 mt-0.5" color="#c49a2a" />
                      <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.82rem", color: "#334155" }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* ── EDUCATION ── */}
          <Card id="education" className="p-7 fade-up">
            <SectionHeading Icon={GraduationCap}>Education</SectionHeading>
            <div className="space-y-5">
              {[
                {
                  degree: "B.Eng. Civil Engineering",
                  institution: "Modibbo Adama University of Technology, Yola",
                  detail: "Second Class Upper Division (Honours)",
                  year: "2020",
                },
                {
                  degree: "WAEC — Senior Secondary Certificate",
                  institution: "Yangal Academic, Jalingo",
                  detail: "",
                  year: "2014",
                },
              ].map((edu, i) => (
                <div key={i} className="flex items-start gap-5 p-4 rounded-xl"
                     style={{ background: i === 0 ? "linear-gradient(135deg, #f8fafc, #f0f4fb)" : "#f8fafc", border: "1px solid #e5e9ef" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ background: i === 0 ? "#0b1f3a" : "#f0f3f8" }}>
                    <GraduationCap size={17} color={i === 0 ? "#c49a2a" : "#94a3b8"} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem", fontWeight: 700, color: "#0b1f3a" }}>
                        {edu.degree}
                      </p>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#94a3b8" }}>{edu.year}</span>
                    </div>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.82rem", color: "#c49a2a", fontWeight: 500 }}>
                      {edu.institution}
                    </p>
                    {edu.detail && (
                      <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.78rem", color: "#64748b" }}>{edu.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* ── CERTIFICATIONS ── */}
          <Card id="certifications" className="p-7 fade-up">
            <SectionHeading Icon={Award}>Certifications &amp; Professional Development</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl"
                     style={{ background: "#f8fafc", border: "1px solid #e5e9ef" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ background: i === 0 ? "rgba(196,154,42,0.15)" : "#f0f3f8", border: i === 0 ? "1px solid rgba(196,154,42,0.3)" : "1px solid #e2e8f0" }}>
                    <Award size={14} color={i === 0 ? "#c49a2a" : "#94a3b8"} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "#0b1f3a", lineHeight: 1.3 }}>
                      {cert.name}
                    </p>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.73rem", color: "#64748b" }}>
                      {cert.issuer}
                    </p>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#c49a2a", marginTop: "2px" }}>
                      {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* ── PERSONAL ── */}
          <Card className="p-7 fade-up">
            <div className="flex flex-wrap justify-between items-end gap-4">
              <div>
                <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.1em", color: "#c49a2a", marginBottom: "10px" }}>
                  PERSONAL DETAILS
                </h3>
                <div className="space-y-1 text-sm" style={{ fontFamily: "'Barlow', sans-serif", color: "#475569" }}>
                  <p><span style={{ color: "#94a3b8" }}>Nationality:</span> Nigerian · Adamawa State of Origin</p>
                  <p><span style={{ color: "#94a3b8" }}>Date of Birth:</span> 27 August 1996</p>
                  <p><span style={{ color: "#94a3b8" }}>References:</span> Available upon request</p>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg"
                     style={{ background: "#f0f3f8", border: "1px solid #e2e8f0" }}>
                  <BookOpen size={14} color="#c49a2a" />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#0b1f3a", letterSpacing: "0.06em" }}>
                    OPEN TO OPPORTUNITIES
                  </span>
                </div>
              </div>
            </div>
          </Card>

        </main>
      </div>

      {/* ── FOOTER ── */}
      <footer className="no-print border-t mt-6 py-5" style={{ background: "white", borderColor: "#dde2ea" }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-wrap items-center justify-between gap-3">
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#94a3b8", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} ENGR. MIKAILU SAMUEL NADRO · COREN REGISTERED
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#c49a2a", letterSpacing: "0.06em" }}>
            LAST UPDATED: {new Date().toLocaleDateString("en-NG", { year: "numeric", month: "long" }).toUpperCase()}
          </p>
        </div>
      </footer>
    </div>
  );
}
