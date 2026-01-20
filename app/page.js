import { Mail, Phone, MapPin } from 'lucide-react';

export default function CV() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <style jsx global>{`
        body { background: #f3f4f6; margin: 0; padding: 20px; }
        * { box-sizing: border-box; }
      `}</style>
      
      {/* Header */}
      <div style={{ borderBottom: '4px solid #1e3a8a', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.5rem' }}>
          ENGR. MIKAILU SAMUEL NADRO
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#374151', fontWeight: '600', marginBottom: '0.75rem' }}>
          COREN Registered Civil / Structural Engineer
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem', color: '#4b5563' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span>📞</span>
            <span>+234 812 826 4901 | +234 810 472 0061</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span>✉️</span>
            <span>mikailu29@gmail.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span>📍</span>
            <span>Yola, Adamawa State, Nigeria</span>
          </div>
        </div>
      </div>

      {/* Professional Profile */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a', borderBottom: '2px solid #d1d5db', paddingBottom: '0.25rem', marginBottom: '0.75rem' }}>
          PROFESSIONAL PROFILE
        </h2>
        <p style={{ color: '#374151', lineHeight: '1.6', textAlign: 'justify' }}>
          COREN-registered Structural Engineer with comprehensive experience in structural design, construction 
          supervision, and project management across residential, commercial, and estate-scale developments. 
          Demonstrated expertise in reinforced concrete and steel structures, site execution, multidisciplinary 
          coordination, and compliance with Nigerian engineering standards. Proven track record of delivering 
          complex projects while maintaining high quality standards and meeting tight deadlines. Self-motivated 
          professional with excellent communication, leadership, and team collaboration skills.
        </p>
      </section>

      {/* Core Competencies */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a', borderBottom: '2px solid #d1d5db', paddingBottom: '0.25rem', marginBottom: '0.75rem' }}>
          CORE COMPETENCIES
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <ul style={{ color: '#374151', paddingLeft: '1.25rem' }}>
            <li>Structural Analysis & Design</li>
            <li>Reinforced Concrete & Steel Design</li>
            <li>Construction Supervision & Site Management</li>
            <li>Estate Layout & Site Planning</li>
            <li>Foundation Design & Soil Investigation</li>
          </ul>
          <ul style={{ color: '#374151', paddingLeft: '1.25rem' }}>
            <li>Project Coordination & Quality Control</li>
            <li>Road Design & Infrastructure Development</li>
            <li>Multidisciplinary Team Coordination</li>
            <li>Compliance with Engineering Standards</li>
            <li>Budget Management & Cost Control</li>
          </ul>
        </div>
      </section>

      {/* Engineering Software */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a', borderBottom: '2px solid #d1d5db', paddingBottom: '0.25rem', marginBottom: '0.75rem' }}>
          ENGINEERING SOFTWARE PROFICIENCY
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {['AutoCAD', 'Civil 3D', 'ProtaStructure', 'Revit', 'Tekla Structures (Steel)', 'Orion', 'Microsoft Office Suite'].map((software) => (
            <span key={software} style={{ background: '#dbeafe', color: '#1e3a8a', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontSize: '0.875rem', fontWeight: '500' }}>
              {software}
            </span>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a', borderBottom: '2px solid #d1d5db', paddingBottom: '0.25rem', marginBottom: '0.75rem' }}>
          PROFESSIONAL EXPERIENCE
        </h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <h3 style={{ fontWeight: 'bold', color: '#1f2937' }}>Civil / Structural Engineer</h3>
            <span style={{ color: '#4b5563', fontSize: '0.875rem' }}>2021 – 2022</span>
          </div>
          <p style={{ color: '#4b5563', fontStyle: 'italic', marginBottom: '0.5rem' }}>Under Engr. Ularam Bello</p>
          <ul style={{ color: '#374151', paddingLeft: '1.25rem' }}>
            <li>Supervised residential and commercial construction projects ensuring adherence to approved structural drawings</li>
            <li>Conducted quality control inspections and ensured compliance with safety standards and building codes</li>
            <li>Coordinated with contractors, architects, and other professionals for seamless project execution</li>
            <li>Managed site activities and resolved technical challenges during construction phases</li>
          </ul>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <h3 style={{ fontWeight: 'bold', color: '#1f2937' }}>Lecturer, Civil Engineering Department</h3>
            <span style={{ color: '#4b5563', fontSize: '0.875rem' }}>2022</span>
          </div>
          <p style={{ color: '#4b5563', fontStyle: 'italic', marginBottom: '0.5rem' }}>Modibbo Adama University, Yola</p>
          <ul style={{ color: '#374151', paddingLeft: '1.25rem' }}>
            <li>Delivered undergraduate courses in civil and structural engineering</li>
            <li>Supervised academic projects and integrated industry-based case studies into curriculum</li>
            <li>Mentored students on practical engineering applications and professional development</li>
          </ul>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <h3 style={{ fontWeight: 'bold', color: '#1f2937' }}>Site Engineer (SIWES/Industrial Training)</h3>
            <span style={{ color: '#4b5563', fontSize: '0.875rem' }}>2016 – 2017</span>
          </div>
          <p style={{ color: '#4b5563', fontStyle: 'italic', marginBottom: '0.5rem' }}>Deluxe Engineering Nigeria Ltd.</p>
          <ul style={{ color: '#374151', paddingLeft: '1.25rem' }}>
            <li>Gained practical experience in construction site operations and structural implementation</li>
            <li>Assisted in supervision of residential and commercial building projects</li>
            <li>Participated in quality assurance activities and construction documentation</li>
          </ul>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <h3 style={{ fontWeight: 'bold', color: '#1f2937' }}>National Youth Service Corps (NYSC)</h3>
            <span style={{ color: '#4b5563', fontSize: '0.875rem' }}>March 2021 – February 2022</span>
          </div>
          <p style={{ color: '#4b5563', fontStyle: 'italic', marginBottom: '0.5rem' }}>Federal Ministry of Water Resources, Abuja</p>
          <ul style={{ color: '#374151', paddingLeft: '1.25rem' }}>
            <li>Contributed to irrigation and drainage infrastructure projects</li>
            <li>Assisted in technical documentation and project planning activities</li>
          </ul>
        </div>
      </section>

      {/* Selected Projects */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a', borderBottom: '2px solid #d1d5db', paddingBottom: '0.25rem', marginBottom: '0.75rem' }}>
          SELECTED STRUCTURAL & CONSTRUCTION PROJECTS
        </h2>
        
        <div style={{ color: '#374151' }}>
          <div style={{ marginBottom: '0.75rem' }}>
            <p style={{ fontWeight: '600' }}>Large-Scale Estate Developments (2023 – 2025)</p>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem' }}>
              <li>Structural design of Hasiya Court Estate – 121 units of 4-bedroom duplexes with BQ (2025)</li>
              <li>Structural design of Hilltop Hillcrest Estate, Katampe, Abuja – multiple duplex prototypes (2025)</li>
              <li>Structural design of Rome Estate I & II for Dan Mama Smart Homes Ltd (2024)</li>
              <li>Structural design of Boulevard Estate for Dan Mama Smart Homes Ltd (2023)</li>
              <li>Dan Mama Smart City master planning, site layout, estate road design (2025)</li>
            </ul>
          </div>

          <div style={{ marginBottom: '0.75rem' }}>
            <p style={{ fontWeight: '600' }}>Residential & Commercial Projects (2021 – 2025)</p>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem' }}>
              <li>Hotel development supervision, Maraba, Nasarawa State – 12-bedroom hotel (2021)</li>
              <li>Structural design & construction of terrace duplex (3 units), Anambra State (2025)</li>
              <li>Structural design of Elm Villa duplex prototype for Dan Mama Smart Homes (2024)</li>
              <li>Guest chalet, 2-bedroom BQ construction, Kabusa Garden Estate, Abuja (2021–2022)</li>
              <li>Renovation supervision of twin blocks of flats, Karu, Abuja – 12 units (2021)</li>
              <li>Structural design & supervision of 4-bedroom bungalow, Yola (2025)</li>
            </ul>
          </div>

          <div style={{ marginBottom: '0.75rem' }}>
            <p style={{ fontWeight: '600' }}>Specialized Infrastructure Projects (2025)</p>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem' }}>
              <li>Soil investigation for proposed girls' hostel, Modibbo Adama University, Yola</li>
              <li>Reservoir structural design for Mayokila Water Factory, Yola</li>
            </ul>
          </div>

          <div>
            <p style={{ fontWeight: '600' }}>Academic Research Project (2020)</p>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem' }}>
              <li>Clay pot filtration system to remove heavy metals from drinking water</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a', borderBottom: '2px solid #d1d5db', paddingBottom: '0.25rem', marginBottom: '0.75rem' }}>
          EDUCATION
        </h2>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <div>
              <p style={{ fontWeight: 'bold', color: '#1f2937' }}>Bachelor of Engineering (B.Eng.) in Civil Engineering</p>
              <p style={{ color: '#4b5563' }}>Modibbo Adama University of Technology, Yola</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', fontStyle: 'italic' }}>Second Class Upper Division (Honours)</p>
            </div>
            <span style={{ color: '#4b5563' }}>2020</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontWeight: 'bold', color: '#1f2937' }}>West African Senior School Certificate (WAEC)</p>
              <p style={{ color: '#4b5563' }}>Yangal Academic, Jalingo</p>
            </div>
            <span style={{ color: '#4b5563' }}>2014</span>
          </div>
        </div>
      </section>

      {/* Professional Registration */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a', borderBottom: '2px solid #d1d5db', paddingBottom: '0.25rem', marginBottom: '0.75rem' }}>
          PROFESSIONAL REGISTRATION & CERTIFICATIONS
        </h2>
        <ul style={{ color: '#374151', paddingLeft: '1.25rem' }}>
          <li><strong>COREN Registration</strong> – Council for the Regulation of Engineering in Nigeria (January 2025)</li>
          <li><strong>Certificate of Participation in Decentralized Finance (DeFi)</strong> – University of Nicosia (2021)</li>
          <li><strong>VeChain ToolChain Certificate</strong> – University of Nicosia, Cyprus (2020)</li>
          <li><strong>Hedera Hashgraph Developer Certificate</strong> (2025)</li>
          <li><strong>Unit Masters Certificate in Blockchain & Cryptocurrency</strong> (November 2022)</li>
          <li><strong>Fundamentals of Digital Marketing</strong> – Google Digital Skills for Africa (2022)</li>
        </ul>
      </section>

      {/* Key Strengths */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a', borderBottom: '2px solid #d1d5db', paddingBottom: '0.25rem', marginBottom: '0.75rem' }}>
          KEY PROFESSIONAL STRENGTHS
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <ul style={{ color: '#374151', paddingLeft: '1.25rem' }}>
            <li>Self-motivated and target-oriented</li>
            <li>Excellent leadership and managerial skills</li>
            <li>Strong communication and relationship management</li>
            <li>Effective multitasking and team collaboration</li>
          </ul>
          <ul style={{ color: '#374151', paddingLeft: '1.25rem' }}>
            <li>Work under pressure with minimal supervision</li>
            <li>High level of integrity and transparency</li>
            <li>Strong adherence to policies and procedures</li>
            <li>Advanced computer literacy</li>
          </ul>
        </div>
      </section>

      {/* Languages */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a', borderBottom: '2px solid #d1d5db', paddingBottom: '0.25rem', marginBottom: '0.75rem' }}>
          LANGUAGES
        </h2>
        <p style={{ color: '#374151' }}>
          <strong>English:</strong> Professional Proficiency | <strong>Hausa:</strong> Native Proficiency
        </p>
      </section>

      {/* Personal Information */}
      <section>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a', borderBottom: '2px solid #d1d5db', paddingBottom: '0.25rem', marginBottom: '0.75rem' }}>
          PERSONAL INFORMATION
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', color: '#374151' }}>
          <div>
            <p><strong>Date of Birth:</strong> 27th August, 1996</p>
            <p><strong>Nationality:</strong> Nigerian</p>
            <p><strong>State of Origin:</strong> Adamawa State</p>
          </div>
          <div>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Marital Status:</strong> Single</p>
            <p><strong>Religion:</strong> Christianity</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '2px solid #d1d5db', textAlign: 'center', fontSize: '0.875rem', color: '#4b5563' }}>
        <p>References available upon request</p>
      </div>
    </div>
  );
}
