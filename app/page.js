// app/page.js
"use client";

import { useState } from "react";
import { 
  Mail, Phone, MapPin, Download, Linkedin, 
  ExternalLink, CheckCircle, Building2, 
  Hammer, GraduationCap, FileText, Award 
} from "lucide-react";

export default function CV() {
  const [activeSection, setActiveSection] = useState("profile");

  // Your profile image from portfolio - update path as needed
  const profileImage = "https://engr-mikailu-portfolio.vercel.app/assets/profile.jpg"; 
  // OR use GitHub raw: "https://raw.githubusercontent.com/mikky69/Engr-Mikailu-Portfolio-/main/assets/profile.jpg"

  const sections = [
    { id: "profile", label: "Profile", icon: <FileText size={16} /> },
    { id: "experience", label: "Experience", icon: <Building2 size={16} /> },
    { id: "projects", label: "Projects", icon: <Hammer size={16} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={16} /> },
    { id: "certifications", label: "Certifications", icon: <Award size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header / Hero */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              MN
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Engr. Mikailu Samuel Nadro</h1>
              <div className="flex items-center gap-2 text-sm text-blue-700 font-medium">
                <CheckCircle size={14} />
                <span>COREN Registered Structural Engineer</span>
              </div>
            </div>
          </div>
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
            onClick={() => window.print()}
          >
            <Download size={16} />
            Download CV
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar - Contact & Quick Info */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 overflow-hidden border-4 border-white shadow-lg">
              {/* Replace with actual image */}
              <span className="text-4xl font-bold text-blue-700">MN</span>
              {/* <img src={profileImage} alt="Engr. Mikailu Nadro" className="w-full h-full object-cover" /> */}
            </div>
            <h2 className="font-bold text-lg text-slate-900">Mikailu S. Nadro</h2>
            <p className="text-sm text-slate-600 mb-4">Civil / Structural Engineer</p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-left pt-4 border-t border-slate-100">
              <a href="tel:+2348128264901" className="flex items-center gap-3 text-sm text-slate-700 hover:text-blue-600 transition-colors">
                <Phone size={16} className="text-blue-600" />
                +234 812 826 4901
              </a>
              <a href="mailto:mikailu29@gmail.com" className="flex items-center gap-3 text-sm text-slate-700 hover:text-blue-600 transition-colors">
                <Mail size={16} className="text-blue-600" />
                mikailu29@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <MapPin size={16} className="text-blue-600 flex-shrink-0" />
                <span>Yola, Adamawa State, Nigeria</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3 pt-4">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" 
                 className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/mikky69" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition-colors">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* COREN Badge */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">COREN Registered</p>
                <p className="text-xs text-amber-700">Council for Regulation of Engineering in Nigeria</p>
              </div>
            </div>
            <p className="text-xs text-slate-600">Registration: January 2025</p>
          </div>

          {/* Quick Navigation */}
          <nav className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id 
                        ? 'bg-blue-50 text-blue-700 font-medium' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {section.icon}
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="lg:col-span-3 space-y-8">
          
          {/* Professional Profile */}
          <section id="profile" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 scroll-mt-24">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FileText size={18} className="text-blue-600" />
              Professional Profile
            </h2>
            <p className="text-slate-700 leading-relaxed">
              COREN-registered Structural Engineer with comprehensive experience in structural design, 
              construction supervision, and project management across residential, commercial, and 
              estate-scale developments. Demonstrated expertise in reinforced concrete and steel structures, 
              site execution, multidisciplinary coordination, and compliance with Nigerian engineering standards. 
              Proven track record of delivering complex projects while maintaining high quality standards and 
              meeting tight deadlines.
            </p>
          </section>

          {/* Core Competencies */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Structural Analysis & Design",
                "Reinforced Concrete & Steel Design", 
                "Construction Supervision & Site Management",
                "Estate Layout & Site Planning",
                "Foundation Design & Soil Investigation",
                "Project Coordination & Quality Control",
                "Road Design & Infrastructure Development",
                "Multidisciplinary Team Coordination",
                "Compliance with Engineering Standards",
                "Budget Management & Cost Control"
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Software Proficiency */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Engineering Software</h3>
            <div className="flex flex-wrap gap-2">
              {['AutoCAD', 'Civil 3D', 'ProtaStructure', 'Revit', 'Tekla Structures', 'Orion', 'MS Office'].map((tool) => (
                <span key={tool} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 scroll-mt-24">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Building2 size={18} className="text-blue-600" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {[
                {
                  role: "Civil / Structural Engineer",
                  period: "2021 – 2022",
                  company: "Under Engr. Ularam Bello",
                  duties: [
                    "Supervised residential and commercial construction projects ensuring adherence to approved structural drawings",
                    "Conducted quality control inspections and ensured compliance with safety standards and building codes",
                    "Coordinated with contractors, architects, and other professionals for seamless project execution",
                    "Managed site activities and resolved technical challenges during construction phases"
                  ]
                },
                {
                  role: "Lecturer, Civil Engineering Department",
                  period: "2022",
                  company: "Modibbo Adama University, Yola",
                  duties: [
                    "Delivered undergraduate courses in civil and structural engineering",
                    "Supervised academic projects and integrated industry-based case studies into curriculum",
                    "Mentored students on practical engineering applications and professional development"
                  ]
                }
              ].map((job, idx) => (
                <div key={idx} className="border-l-2 border-blue-200 pl-4 pb-2">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <h4 className="font-semibold text-slate-900">{job.role}</h4>
                    <span className="text-sm text-slate-500">{job.period}</span>
                  </div>
                  <p className="text-sm text-blue-600 font-medium mb-3">{job.company}</p>
                  <ul className="space-y-1.5">
                    {job.duties.map((duty, i) => (
                      <li key={i} className="text-sm text-slate-700 flex gap-2">
                        <span className="text-blue-400">•</span>
                        {duty}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Projects */}
          <section id="projects" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 scroll-mt-24">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Hammer size={18} className="text-blue-600" />
              Selected Structural Projects
            </h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Large-Scale Estate Developments (2023 – 2025)</h4>
                <ul className="space-y-2">
                  {[
                    "Hasiya Court Estate – 121 units of 4-bedroom duplexes with BQ (2025)",
                    "Hilltop Hillcrest Estate, Katampe, Abuja – multiple duplex prototypes (2025)",
                    "Rome Estate I & II for Dan Mama Smart Homes Ltd (2024)",
                    "Boulevard Estate for Dan Mama Smart Homes Ltd (2023)",
                    "Dan Mama Smart City master planning, site layout, estate road design (2025)"
                  ].map((project, i) => (
                    <li key={i} className="text-sm text-slate-700 flex gap-2">
                      <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Residential & Commercial (2021 – 2025)</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Hotel development supervision, Maraba – 12-bedroom hotel (2021)",
                    "Terrace duplex structural design (3 units), Anambra State (2025)",
                    "Elm Villa duplex prototype for Dan Mama Smart Homes (2024)",
                    "Guest chalet & 2-bedroom BQ, Kabusa Garden Estate, Abuja (2021–2022)"
                  ].map((project, i) => (
                    <li key={i} className="text-sm text-slate-700 flex gap-2">
                      <span className="text-blue-400">▹</span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Education & Certifications */}
          <section id="education" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-blue-600" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-900">B.Eng. Civil Engineering</p>
                  <p className="text-sm text-blue-600">Modibbo Adama University of Technology, Yola</p>
                  <p className="text-sm text-slate-600">Second Class Upper Division (Honours) • 2020</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">WAEC</p>
                  <p className="text-sm text-slate-600">Yangal Academic, Jalingo • 2014</p>
                </div>
              </div>
            </div>

            <div id="certifications" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 scroll-mt-24">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Award size={18} className="text-blue-600" />
                Certifications
              </h3>
              <ul className="space-y-2">
                {[
                  "COREN Registration – Council for Regulation of Engineering in Nigeria (Jan 2025)",
                  "Hedera Hashgraph Developer Certificate (2025)",
                  "Unit Masters Certificate in Blockchain & Cryptocurrency (Nov 2022)",
                  "Certificate of Participation in DeFi – University of Nicosia (2021)",
                  "Fundamentals of Digital Marketing – Google (2022)"
                ].map((cert, i) => (
                  <li key={i} className="text-sm text-slate-700 flex gap-2">
                    <Award size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Languages & Personal */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-medium text-slate-900 mb-2">Languages</p>
                <div className="space-y-1">
                  <p><span className="text-slate-600">English:</span> Professional Proficiency</p>
                  <p><span className="text-slate-600">Hausa:</span> Native Proficiency</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-slate-900 mb-2">Personal</p>
                <div className="space-y-1 text-slate-600">
                  <p>Nigerian National • Adamawa State of Origin</p>
                  <p>DOB: 27 August 1996</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6 pt-4 border-t border-slate-100">
              References available upon request
            </p>
          </section>

        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Engr. Mikailu Samuel Nadro • COREN Registered Structural Engineer</p>
          <p className="mt-1">Last Updated: {new Date().toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </footer>
    </div>
  );
}
