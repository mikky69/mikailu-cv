"use client";

import { useState, useEffect } from "react";
import {
  Mail, Phone, MapPin, Download, Linkedin,
  ChevronRight, ShieldCheck, BookOpen, Briefcase,
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
  { name: "Hedera Hashgraph Developer Certificate", issuer: "Hedera",                                          year: "2025" },
  { name: "Unit Masters – Blockchain & Crypto",     issuer: "Unit Masters",                                    year: "Nov 2022" },
  { name: "DeFi Certificate of Participation",      issuer: "University of Nicosia",                           year: "2021" },
  { name: "Fundamentals of Digital Marketing",      issuer: "Google",                                          year: "2022" },
];

const NAV = [
  { id: "profile",        label: "Profile",        Icon: User },
  { id: "experience",     label: "Experience",     Icon: Briefcase },
  { id: "projects",       label: "Projects",       Icon: Layers },
  { id: "education",      label: "Education",      Icon: GraduationCap },
  { id: "certifications", label: "Certifications", Icon: Award },
];

/* ─────────────────────────────── COMPONENTS ────────────────────────────────── */

function SectionHeading({ Icon, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
      <div style={{
        width: "32px", height: "32px", borderRadius: "6px",
        background: "#0b1f3a", display: "flex", alignItems: "center",
        justifyContent: "center", flexShrink: 0,
      }}>
        <Icon size={15} color="#c49a2a" />
      </div>
      <h2 style={{
        fontFamily: "'Crimson Pro', serif", fontSize: "1.35rem",
        fontWeight: 600, color: "#0b1f3a", letterSpacing: "0.01em", margin: 0,
      }}>
        {children}
      </h2>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(196,154,42,0.35), transparent)" }} />
    </div>
  );
}

/* ─────────────────────────────── MAIN EXPORT ───────────────────────────────── */

export default function CV() {
  const [active, setActive] = useState("profile");

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
    <div style={{ minHeight: "100vh", background: "#f0f3f8", fontFamily: "'Barlow', sans-serif" }}>
      <style>{`
        /* ── Mobile layout ── */
        @media (max-width: 768px) {
          .cv-body        { flex-direction: column !important; padding: 16px !important; }
          .cv-sidebar     { width: 100% !important; max-width: 100% !important; }
          .cv-header-nav  { display: none !important; }
          .cv-header-inner{ gap: 8px !important; }
          .cv-stats-grid  { grid-template-columns: repeat(3,1fr) !important; gap: 8px !important; }
          .cv-stats-grid p:first-child { font-size: 1.4rem !important; }
          .cv-stats-grid p:last-child  { font-size: 0.5rem !important; }
          .cv-divider-label { font-size: 0.5rem !important; white-space: normal !important; text-align: center; }
          .cv-proj-grid   { grid-template-columns: 1fr !important; }
          .cv-cert-grid   { grid-template-columns: 1fr !important; }
          .cv-card        { padding: 18px !important; }
          .cv-section-h2  { font-size: 1.15rem !important; }
          .cv-profile-avatar { width: 72px !important; height: 72px !important; font-size: 1.2rem !important; }
          .cv-contact-card-top { padding: 24px 18px 32px !important; }
          .cv-personal-row { flex-direction: column !important; align-items: flex-start !important; }
          body { padding-bottom: 72px; }
        }
        @media (max-width: 480px) {
          .cv-header-download span { display: none; }
          .cv-stats-grid p:first-child { font-size: 1.2rem !important; }
        }
      `}</style>

      {/* ── STICKY HEADER ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "white", borderBottom: "1px solid #dde2ea",
        boxShadow: "0 1px 8px rgba(11,31,58,0.08)",
      }}>
        <div style={{
          maxWidth: "1152px", margin: "0 auto", padding: "12px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px",
        }} className="cv-header-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "8px",
              background: "linear-gradient(135deg, #0b1f3a, #163358)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#c49a2a", fontFamily: "'DM Mono', monospace",
              fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em",
            }}>MN</div>
            <div>
              <p style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 700, fontSize: "1.05rem", color: "#0b1f3a", margin: 0 }}>
                Engr. Mikailu Samuel Nadro
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#c49a2a", letterSpacing: "0.08em", margin: 0 }}>
                COREN REGISTERED STRUCTURAL ENGINEER
              </p>
            </div>
          </div>

          <nav style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }} className="cv-header-nav">
            {NAV.map(({ id, label }) => (
              <button key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  padding: "6px 12px", borderRadius: "6px", border: "none", cursor: "pointer",
                  fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.05em",
                  background: active === id ? "#0b1f3a" : "transparent",
                  color: active === id ? "#c49a2a" : "#64748b",
                  transition: "all 0.2s",
                }}>
                {label.toUpperCase()}
              </button>
            ))}
          </nav>

          <button
            onClick={() => window.print()}
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "8px 16px", borderRadius: "8px", border: "none", cursor: "pointer",
              background: "#0b1f3a", color: "white",
              fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.05em",
            }}>
            <Download size={14} />
            DOWNLOAD
          </button>
        </div>
      </header>

      {/* ── BODY ── */}
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "32px 16px", display: "flex", gap: "28px", flexWrap: "wrap" }} className="cv-body">

        {/* ════════ SIDEBAR ════════ */}
        <aside style={{ width: "100%", maxWidth: "272px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "20px" }} className="cv-sidebar">

          {/* Profile card */}
          <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(11,31,58,0.18)" }}>
            {/* Dark header */}
            <div style={{
              position: "relative", padding: "32px 24px 40px", textAlign: "center",
              background: "#0b1f3a",
            }} className="cv-contact-card-top">
              <div style={{
                position: "absolute", inset: 0, opacity: 1,
                backgroundImage: "linear-gradient(rgba(107,158,199,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(107,158,199,0.07) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: "64px", height: "64px", opacity: 0.2, background: "linear-gradient(225deg, #c49a2a, transparent)" }} />

              {/* Avatar */}
              <div style={{
                position: "relative", width: "96px", height: "96px", borderRadius: "50%", margin: "0 auto 16px",
                background: "linear-gradient(135deg, #102848, #163358)",
                border: "4px solid #c49a2a", boxShadow: "0 0 0 4px rgba(196,154,42,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Crimson Pro', serif", fontSize: "1.6rem", fontWeight: 700, color: "#c49a2a",
              }} className="cv-profile-avatar">MN</div>

              <h2 style={{ position: "relative", fontFamily: "'Crimson Pro', serif", fontSize: "1.2rem", fontWeight: 700, color: "white", margin: "0 0 4px" }}>
                Mikailu S. Nadro
              </h2>
              <p style={{ position: "relative", fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#6b9ec7", letterSpacing: "0.1em", margin: "0 0 16px" }}>
                CIVIL / STRUCTURAL ENGINEER
              </p>
              <div style={{
                position: "relative", display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "4px 12px", borderRadius: "999px",
                background: "rgba(196,154,42,0.15)", border: "1px solid rgba(196,154,42,0.4)",
              }}>
                <ShieldCheck size={11} color="#c49a2a" />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", color: "#c49a2a", letterSpacing: "0.06em" }}>
                  COREN REG. 2025
                </span>
              </div>
            </div>

            {/* Contact */}
            <div style={{ background: "white", padding: "20px" }}>
              {[
                { Icon: Phone,  label: "+234 812 826 4901",   href: "tel:+2348128264901" },
                { Icon: Mail,   label: "mikailu29@gmail.com", href: "mailto:mikailu29@gmail.com" },
                { Icon: MapPin, label: "Yola, Adamawa State, NG", href: null },
              ].map(({ Icon, label, href }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "6px", flexShrink: 0, background: "#f0f4f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={13} color="#c49a2a" />
                  </div>
                  {href
                    ? <a href={href} style={{ fontSize: "0.75rem", color: "#334155", textDecoration: "none" }}>{label}</a>
                    : <span style={{ fontSize: "0.75rem", color: "#334155" }}>{label}</span>
                  }
                </div>
              ))}
              <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                {[
                  { Icon: Linkedin, label: "LINKEDIN", href: "https://linkedin.com/in/yourprofile" },
                  { Icon: Globe,    label: "GITHUB",   href: "https://github.com/mikky69" },
                ].map(({ Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: "6px", padding: "6px 10px",
                    borderRadius: "6px", background: "#f0f4f9", border: "1px solid #e2e8f0",
                    textDecoration: "none", color: "#0b1f3a",
                    fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.05em",
                  }}>
                    <Icon size={11} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div style={{ background: "white", borderRadius: "12px", padding: "20px", border: "1px solid #e5e9ef" }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.12em", color: "#c49a2a", margin: "0 0 14px" }}>
              CORE COMPETENCIES
            </p>
            {SKILLS.map(({ label, pct }) => (
              <div key={label} style={{ marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.72rem", color: "#475569" }}>{label}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#c49a2a" }}>{pct}%</span>
                </div>
                <div style={{ height: "6px", borderRadius: "3px", background: "#f0f3f8", overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: "3px", width: `${pct}%`, background: "linear-gradient(to right, #c49a2a, #d4a940)" }} />
                </div>
              </div>
            ))}
          </div>

          {/* Software */}
          <div style={{ background: "white", borderRadius: "12px", padding: "20px", border: "1px solid #e5e9ef" }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.12em", color: "#c49a2a", margin: "0 0 12px" }}>
              ENGINEERING SOFTWARE
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {SOFTWARE.map((s) => (
                <span key={s} style={{ padding: "4px 10px", borderRadius: "4px", fontSize: "0.65rem", background: "#f0f3f8", color: "#0b1f3a", border: "1px solid #e2e8f0", fontFamily: "'DM Mono', monospace" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div style={{ background: "white", borderRadius: "12px", padding: "20px", border: "1px solid #e5e9ef" }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.12em", color: "#c49a2a", margin: "0 0 12px" }}>
              LANGUAGES
            </p>
            {[["English", "Professional"], ["Hausa", "Native"]].map(([lang, level]) => (
              <div key={lang} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "0.78rem", color: "#334155" }}>{lang}</span>
                <span style={{ padding: "2px 8px", borderRadius: "999px", fontSize: "0.6rem", background: "rgba(196,154,42,0.12)", color: "#a8821f", fontFamily: "'DM Mono', monospace", border: "1px solid rgba(196,154,42,0.25)" }}>
                  {level}
                </span>
              </div>
            ))}
          </div>

        </aside>

        {/* ════════ MAIN ════════ */}
        <main style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* Profile */}
          <div id="profile" style={{ background: "white", borderRadius: "12px", padding: "28px", border: "1px solid #e5e9ef", boxShadow: "0 2px 12px rgba(11,31,58,0.06)", scrollMarginTop: "80px" }} className="cv-card">
            <SectionHeading Icon={User}>Professional Profile</SectionHeading>
            <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.75, margin: "0 0 24px" }}>
              COREN-registered Structural Engineer with comprehensive experience in structural design,
              construction supervision, and project management across residential, commercial, and
              estate-scale developments. Demonstrated expertise in reinforced concrete and steel structures,
              site execution, multidisciplinary coordination, and compliance with Nigerian engineering
              standards. Proven track record of delivering complex projects while maintaining high quality
              standards and meeting tight deadlines.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", paddingTop: "20px", borderTop: "1px solid #f0f3f8" }} className="cv-stats-grid">
              {[
                { value: "4+",  label: "Years Experience" },
                { value: "15+", label: "Projects Delivered" },
                { value: "121", label: "Units Designed (2025)" },
              ].map(({ value, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "2rem", fontWeight: 700, color: "#0b1f3a", margin: "0 0 4px", lineHeight: 1 }}>{value}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", color: "#94a3b8", letterSpacing: "0.06em", margin: 0 }}>{label.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div id="experience" style={{ background: "white", borderRadius: "12px", padding: "28px", border: "1px solid #e5e9ef", boxShadow: "0 2px 12px rgba(11,31,58,0.06)", scrollMarginTop: "80px" }} className="cv-card">
            <SectionHeading Icon={Briefcase}>Professional Experience</SectionHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {EXPERIENCE.map((job, idx) => (
                <div key={idx} style={{ position: "relative", paddingLeft: "20px", borderLeft: "2px solid #e2e8f0" }}>
                  <div style={{
                    position: "absolute", left: "-1px", top: "8px",
                    width: "10px", height: "10px", borderRadius: "50%",
                    background: "#c49a2a", border: "2px solid #0b1f3a",
                    transform: "translateX(-50%)",
                  }} />
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px", marginBottom: "4px" }}>
                    <h3 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", fontWeight: 700, color: "#0b1f3a", margin: 0 }}>{job.role}</h3>
                    <span style={{ padding: "2px 10px", borderRadius: "4px", fontSize: "0.65rem", background: "#f0f4f9", color: "#64748b", border: "1px solid #e2e8f0", fontFamily: "'DM Mono', monospace" }}>{job.period}</span>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#c49a2a", fontWeight: 500, margin: "0 0 12px" }}>{job.company}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {job.duties.map((d, i) => (
                      <li key={i} style={{ display: "flex", gap: "10px", fontSize: "0.84rem", color: "#475569", lineHeight: 1.6 }}>
                        <ChevronRight size={14} style={{ flexShrink: 0, marginTop: "3px" }} color="#c49a2a" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div id="projects" style={{ background: "white", borderRadius: "12px", padding: "28px", border: "1px solid #e5e9ef", boxShadow: "0 2px 12px rgba(11,31,58,0.06)", scrollMarginTop: "80px" }} className="cv-card">
            <SectionHeading Icon={Layers}>Selected Structural Projects</SectionHeading>

            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ flex: 1, height: "1px", background: "#f0f3f8" }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.1em", color: "#94a3b8", whiteSpace: "nowrap" }}>LARGE-SCALE ESTATE DEVELOPMENTS — 2023–2025</span>
                <div style={{ flex: 1, height: "1px", background: "#f0f3f8" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {PROJECTS_ESTATE.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px", borderRadius: "8px", background: "#f8fafc", border: "1px solid #e5e9ef" }}>
                    <div style={{ width: "22px", height: "22px", borderRadius: "4px", flexShrink: 0, background: "rgba(196,154,42,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", color: "#c49a2a", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <span style={{ fontSize: "0.82rem", color: "#334155" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ flex: 1, height: "1px", background: "#f0f3f8" }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.1em", color: "#94a3b8", whiteSpace: "nowrap" }}>RESIDENTIAL & COMMERCIAL — 2021–2025</span>
                <div style={{ flex: 1, height: "1px", background: "#f0f3f8" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "8px" }} className="cv-proj-grid">
                {PROJECTS_RESIDENTIAL.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px", borderRadius: "8px", background: "#f8fafc", border: "1px solid #e5e9ef" }}>
                    <ChevronRight size={13} style={{ flexShrink: 0, marginTop: "2px" }} color="#c49a2a" />
                    <span style={{ fontSize: "0.82rem", color: "#334155" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div id="education" style={{ background: "white", borderRadius: "12px", padding: "28px", border: "1px solid #e5e9ef", boxShadow: "0 2px 12px rgba(11,31,58,0.06)", scrollMarginTop: "80px" }} className="cv-card">
            <SectionHeading Icon={GraduationCap}>Education</SectionHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { degree: "B.Eng. Civil Engineering", institution: "Modibbo Adama University of Technology, Yola", detail: "Second Class Upper Division (Honours)", year: "2020", primary: true },
                { degree: "WAEC — Senior Secondary Certificate", institution: "Yangal Academic, Jalingo", detail: "", year: "2014", primary: false },
              ].map((edu) => (
                <div key={edu.degree} style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "16px", borderRadius: "10px", background: edu.primary ? "linear-gradient(135deg, #f8fafc, #f0f4fb)" : "#f8fafc", border: "1px solid #e5e9ef" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "8px", flexShrink: 0, background: edu.primary ? "#0b1f3a" : "#f0f3f8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <GraduationCap size={17} color={edu.primary ? "#c49a2a" : "#94a3b8"} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                      <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem", fontWeight: 700, color: "#0b1f3a", margin: 0 }}>{edu.degree}</p>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#94a3b8" }}>{edu.year}</span>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "#c49a2a", fontWeight: 500, margin: "2px 0 0" }}>{edu.institution}</p>
                    {edu.detail && <p style={{ fontSize: "0.78rem", color: "#64748b", margin: "2px 0 0" }}>{edu.detail}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div id="certifications" style={{ background: "white", borderRadius: "12px", padding: "28px", border: "1px solid #e5e9ef", boxShadow: "0 2px 12px rgba(11,31,58,0.06)", scrollMarginTop: "80px" }} className="cv-card">
            <SectionHeading Icon={Award}>Certifications &amp; Professional Development</SectionHeading>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }} className="cv-cert-grid">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px", borderRadius: "10px", background: "#f8fafc", border: "1px solid #e5e9ef" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", flexShrink: 0, background: i === 0 ? "rgba(196,154,42,0.15)" : "#f0f3f8", border: i === 0 ? "1px solid rgba(196,154,42,0.3)" : "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Award size={14} color={i === 0 ? "#c49a2a" : "#94a3b8"} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0b1f3a", margin: "0 0 2px", lineHeight: 1.3 }}>{cert.name}</p>
                    <p style={{ fontSize: "0.73rem", color: "#64748b", margin: "0 0 3px" }}>{cert.issuer}</p>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#c49a2a", margin: 0 }}>{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal */}
          <div style={{ background: "white", borderRadius: "12px", padding: "28px", border: "1px solid #e5e9ef", boxShadow: "0 2px 12px rgba(11,31,58,0.06)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }} className="cv-personal-row">
              <div>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.1em", color: "#c49a2a", margin: "0 0 10px" }}>PERSONAL DETAILS</p>
                <div style={{ fontSize: "0.84rem", color: "#475569", lineHeight: 2 }}>
                  <p style={{ margin: 0 }}><span style={{ color: "#94a3b8" }}>Nationality: </span>Nigerian · Adamawa State of Origin</p>
                  <p style={{ margin: 0 }}><span style={{ color: "#94a3b8" }}>Date of Birth: </span>27 August 1996</p>
                  <p style={{ margin: 0 }}><span style={{ color: "#94a3b8" }}>References: </span>Available upon request</p>
                </div>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderRadius: "8px", background: "#f0f3f8", border: "1px solid #e2e8f0" }}>
                <BookOpen size={14} color="#c49a2a" />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "#0b1f3a", letterSpacing: "0.06em" }}>OPEN TO OPPORTUNITIES</span>
              </div>
            </div>
          </div>

        </main>
      </div>

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav style={{ display: "none" }} className="cv-mobile-nav">
        <style>{`
          @media (max-width: 768px) {
            .cv-mobile-nav {
              display: flex !important;
              position: fixed;
              bottom: 0; left: 0; right: 0;
              background: #0b1f3a;
              border-top: 1px solid rgba(196,154,42,0.3);
              z-index: 100;
              justify-content: space-around;
              padding: 8px 4px 12px;
            }
          }
        `}</style>
        {NAV.map(({ id, label, Icon }) => (
          <button key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "3px",
              background: "none", border: "none", cursor: "pointer",
              color: active === id ? "#c49a2a" : "#6b9ec7",
              fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.05em",
              padding: "4px 8px",
            }}>
            <Icon size={16} />
            {label.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* ── FOOTER ── */}
      <footer style={{ background: "white", borderTop: "1px solid #dde2ea", marginTop: "24px", padding: "20px 16px" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "#94a3b8", letterSpacing: "0.06em", margin: 0 }}>
            © {new Date().getFullYear()} ENGR. MIKAILU SAMUEL NADRO · COREN REGISTERED
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "#c49a2a", letterSpacing: "0.06em", margin: 0 }}>
            LAST UPDATED: {new Date().toLocaleDateString("en-NG", { year: "numeric", month: "long" }).toUpperCase()}
          </p>
        </div>
      </footer>
    </div>
  );
}
