import { useState } from "react";
import "./App.css";

function App() {

   const [menuOpen, setMenuOpen] = useState(false);
  return (

   
    <div className="portfolio">

    <nav className="navbar">

  <div className="logo">
    Daji Dudhal<span>.</span>
  </div>

  <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#skills" onClick={() => setMenuOpen(false)}>
      Skills
    </a>

    <a href="#experience" onClick={() => setMenuOpen(false)}>
      Experience
    </a>

       <a href="#social" onClick={() => setMenuOpen(false)}>
      Social Media
    </a>

    <a href="#projects" onClick={() => setMenuOpen(false)}>
      Projects
    </a>

     <a href="#designs" onClick={() => setMenuOpen(false)}>
      Designs
    </a>

    <a href="#marketing" onClick={() => setMenuOpen(false)}>
      Marketing
    </a>

 

    <a href="#education" onClick={() => setMenuOpen(false)}>
      Education
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

  </div>

  <a href="#contact" className="nav-button">
    Let's Talk
  </a>

  <button
    className="menu-button"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? "✕" : "☰"}
  </button>

</nav>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <p className="hero-small-text">
            HELLO, I'M
          </p>

          <h1>
            Daji <span>Dudhal</span>
          </h1>

          <h2>
            Digital Marketing Executive
            <br />
            Web Developer & Graphic Designer
          </h2>

          <p className="hero-description">
            I create modern websites, digital marketing strategies,
            social media content and creative designs that help
            businesses build a strong online presence.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>

          </div>

        </div>


        <div className="hero-image">

          <div className="image-circle">

            <img
              src="Images/daji-photo.jpeg"
              alt="Daji Dudhal"
            />

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about-section" id="about">

        <div className="section-heading">

          <p>ABOUT ME</p>

          <h2>
            Turning Ideas Into{" "}
            <span>Digital Work</span>
          </h2>

        </div>


        <div className="about-content">

          <div className="about-text">

            <p>
              I'm Daji Dudhal, a Computer Engineering student with
              hands-on experience in Web Development, Digital Marketing,
              Social Media Management, Graphic Design, and Video Editing.
            </p>

            <p>
              I enjoy creating websites, designing creative content,
              managing social media pages, and helping businesses build
              a strong online presence.
            </p>

            <p>
              My technical experience includes Java, Spring Boot,
              React.js, MySQL and REST APIs, while my creative skills
              include SEO, Google Ads, Meta Ads, Graphic Design and
              Social Media Marketing.
            </p>


            <div className="about-highlights">

              <div>
                <strong>01</strong>
                <span>Web Development</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Digital Marketing</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Graphic Design</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Social Media</span>
              </div>

            </div>

          </div>


          <div className="about-card">

            <div className="about-card-number">
              01
            </div>

            <h3>
              Creative
              <br />
              <span>& Technical</span>
            </h3>

            <p>
              Combining technology and creativity to build
              meaningful digital experiences.
            </p>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section className="skills-section" id="skills">

        <div className="section-heading">

          <p>MY SKILLS</p>

          <h2>
            Skills I Use To Create
            <span> Digital Work</span>
          </h2>

        </div>


        <div className="skills-grid">


          <div className="skill-card">

            <div className="skill-number">
              01
            </div>

            <div className="skill-icon">
              &lt;/&gt;
            </div>

            <h3>
              Web Development
            </h3>

            <p>
              Building responsive web applications using
              modern frontend and backend technologies.
            </p>

            <div className="skill-tags">

              <span>Java</span>
              <span>Spring Boot</span>
              <span>React.js</span>
              <span>MySQL</span>
              <span>JDBC</span>
              <span>REST APIs</span>

            </div>

          </div>


          <div className="skill-card">

            <div className="skill-number">
              02
            </div>

            <div className="skill-icon">
              ↗
            </div>

            <h3>
              Digital Marketing
            </h3>

            <p>
              Helping businesses improve their online presence
              through digital marketing strategies.
            </p>

            <div className="skill-tags">

              <span>SEO</span>
              <span>Google Ads</span>
              <span>Meta Ads</span>
              <span>Social Media</span>
              <span>Content Marketing</span>

            </div>

          </div>


          <div className="skill-card">

            <div className="skill-number">
              03
            </div>

            <div className="skill-icon">
              ✦
            </div>

            <h3>
              Graphic Design
            </h3>

            <p>
              Creating visual designs for brands, businesses,
              social media and promotional campaigns.
            </p>

            <div className="skill-tags">

              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Canva</span>
              <span>PixelLab</span>
              <span>Branding</span>
              <span>Logo Design</span>

            </div>

          </div>


          <div className="skill-card">

            <div className="skill-number">
              04
            </div>

            <div className="skill-icon">
              ▶
            </div>

            <h3>
              Video Editing
            </h3>

            <p>
              Creating promotional videos, reels and short-form
              content for social media.
            </p>

            <div className="skill-tags">

              <span>Filmora</span>
              <span>CapCut</span>
              <span>VN Editor</span>
              <span>KineMaster</span>
              <span>Reels</span>

            </div>

          </div>


        </div>

      </section>


     {/* ================= EXPERIENCE ================= */}

<section className="experience-section" id="experience">

  <div className="section-heading">

    <p>EXPERIENCE</p>

    <h2>
      My Professional
      <span> Journey</span>
    </h2>

  </div>


  <div className="experience-list">


    {/* ================= QSPIDERS ================= */}

    <div className="experience-item">

      <div className="experience-date">
        Feb 2026 – Present
      </div>

      <div className="experience-line">
        <span></span>
      </div>

      <div className="experience-content">

        <p className="experience-type">
          INTERNSHIP
        </p>

        <h3>
          Java Full Stack Developer Intern
        </h3>

        <h4>
          QSpiders, Wakad, Pune
        </h4>

        <p>
          Learning and developing full-stack applications using
          Java, Spring Boot, React.js, and MySQL.
        </p>

        <p>
          Building REST APIs and integrating frontend applications
          with backend services.
        </p>

        <div className="experience-tags">

          <span>Java</span>
          <span>Spring Boot</span>
          <span>React.js</span>
          <span>MySQL</span>
          <span>REST APIs</span>

        </div>

      </div>

    </div>


    {/* ================= INFOYAHONAND ================= */}

    <div className="experience-item">

      <div className="experience-date">
        Aug 2024 – Nov 2024
      </div>

      <div className="experience-line">
        <span></span>
      </div>

      <div className="experience-content">

        <p className="experience-type">
          INTERNSHIP
        </p>

        <h3>
          Web Developer Intern
        </h3>

        <h4>
          Infoyahonand Pvt. Ltd.
        </h4>

        <p>
          Worked on backend and full-stack projects using Core Java,
          JDBC, Spring Boot, MySQL, HTML, CSS, and JavaScript.
        </p>

        <p>
          Developed CRUD operations and worked with REST APIs
          and MVC architecture.
        </p>

        <div className="experience-tags">

          <span>Core Java</span>
          <span>JDBC</span>
          <span>Spring Boot</span>
          <span>MySQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>REST APIs</span>
          <span>MVC</span>

        </div>

      </div>

    </div>

     {/* ================= GRAPHIC DESIGN ================= */}

    <div className="experience-item">

      <div className="experience-date">
        Aug 2026 – Sep 2026
      </div>

      <div className="experience-line">
        <span></span>
      </div>

      <div className="experience-content">

        <p className="experience-type">
          PROFESSIONAL TRAINING
        </p>

        <h3>
          PPGD in Graphic Design
        </h3>

        <h4>
          Professional Graphic Design Training
        </h4>

        <p>
          Currently pursuing professional training in Graphic Design,
          learning branding, typography, color theory, layout design,
          and visual communication.
        </p>

        <p>
          Creating social media posts, promotional banners, festival
          creatives, logos, branding designs, and business marketing
          creatives.
        </p>

        <div className="experience-tags">

          <span>Adobe Photoshop</span>
          <span>Adobe Illustrator</span>
          <span>Canva</span>
          <span>PixelLab</span>
          <span>Branding</span>
          <span>Logo Design</span>

        </div>

      </div>

    </div>


  {/* SOCIAL MEDIA */}
<section className="social-section" id="social">
  <div className="section-title">
    <p>SOCIAL MEDIA</p>
    <h2>Building & Growing <span>Social Brands</span></h2>
  </div>

  <p className="section-description">
    I create and manage social media content, promotional creatives,
    reels and campaigns to build audience engagement and promote local businesses.
  </p>

  <div className="social-grid">


    {/* Kalakar Graphics */}
    <div className="social-card">
      <div className="social-icon">🎨</div>

      <div className="social-content">
        <span className="social-label">GRAPHIC DESIGN PAGE</span>

        <h3>Kalakar Graphics</h3>

        <p className="social-handle">@kalakar_gfx</p>

        <p>
          A creative design page showcasing social media posts,
          promotional banners, festival creatives, logos, branding
          and business marketing designs.
        </p>

        <div className="social-tags">
          <span>Graphic Design</span>
          <span>Branding</span>
          <span>Promotional Creatives</span>
          <span>Logo Design</span>
        </div>

        <a
          href="https://www.instagram.com/kalakar_gfx/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          View Instagram →
        </a>
      </div>
    </div>

    {/* Sangli City */}
    <div className="social-card">
      <div className="social-icon">📍</div>

      <div className="social-content">
        <span className="social-label">LOCAL COMMUNITY PAGE</span>

        <h3>Sangli City</h3>

        <p className="social-handle">@sangli_city_</p>

        <p>
          A city-focused Instagram page covering Sangli places, food,
          events, businesses, updates and local content.
        </p>

        <div className="social-tags">
          <span>Content Creation</span>
          <span>Reels</span>
          <span>Business Promotion</span>
          <span>Audience Engagement</span>
        </div>

        <a
          href="https://www.instagram.com/sangli_city_/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          View Instagram →
        </a>
      </div>
    </div>


    

  </div>
</section>



   

  </div>

</section>

      {/* ================= PROJECTS ================= */}

      <section className="projects-section" id="projects">

        <div className="section-heading">

          <p>MY PROJECTS</p>

          <h2>
            Things I've
            <span> Built</span>
          </h2>

        </div>


        <div className="projects-grid">


          {/* PROJECT 1 */}

          <div className="project-card">

            <div className="project-top">

              <span className="project-number">
                01
              </span>

              <span className="project-type">
                JAVA FULL STACK
              </span>

            </div>


            <div className="project-icon">
              🏙️
            </div>


            <h3>
              CivicFix
            </h3>

            <p className="project-subtitle">
              Local Complaint & Civic Issue System
            </p>


            <p className="project-description">
              A platform where users can report civic issues
              such as broken street lights, garbage problems,
              potholes and water leakage.
            </p>


            <div className="project-features">

              <span>📷 Photo Upload</span>
              <span>📍 Location</span>
              <span>📊 Status Tracking</span>

            </div>


            <div className="project-tech">

              <span>Java</span>
              <span>Spring Boot</span>
              <span>React.js</span>
              <span>MySQL</span>

            </div>


            <a
              href="https://github.com/Daji-Dudhal"
              className="github-button"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>

          </div>


          {/* PROJECT 2 */}

          <div className="project-card">

            <div className="project-top">

              <span className="project-number">
                02
              </span>

              <span className="project-type">
                JAVA FULL STACK
              </span>

            </div>


            <div className="project-icon">
              🏠
            </div>


            <h3>
              Hostel Hunt
            </h3>

            <p className="project-subtitle">
              Hostel Finding & Management Platform
            </p>


            <p className="project-description">
              A hostel booking and management platform designed
              for students and hostel owners with separate
              roles and management features.
            </p>


            <div className="project-features">

              <span>👨‍🎓 Students</span>
              <span>🏠 Owners</span>
              <span>🔐 Authentication</span>

            </div>


            <div className="project-tech">

              <span>Java</span>
              <span>Spring Boot</span>
              <span>React.js</span>
              <span>MySQL</span>

            </div>


            <a
              href="https://github.com/Daji-Dudhal"
              className="github-button"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>

          </div>


        </div>

      </section>

      
{/* ================= GRAPHIC DESIGN ================= */}

<section className="design-section" id="designs">

  <div className="section-heading">

    <p>GRAPHIC DESIGN</p>

    <h2>
      Creative Work &
      <span> Visual Designs</span>
    </h2>

  </div>

  <div className="design-intro">

    <p>
      I create social media posts, promotional banners, festival
      creatives, logos and branding designs for businesses and
      social media pages.
    </p>

  </div>


  <div className="design-grid">

    <div className="design-card">
      <img
        src="Images/design-1.jpg"
        alt="Graphic Design Work 1"
      />
      <div className="design-overlay">
        <span>01</span>
        <h3>Social Media Design</h3>
      </div>
    </div>


    <div className="design-card">
      <img
        src="/Images/design-2.jpg"
        alt="Graphic Design Work 2"
      />
      <div className="design-overlay">
        <span>02</span>
        <h3>Social Media Design</h3>
      </div>
    </div>


    <div className="design-card">
      <img
        src="/Images/design-3.jpg"
        alt="Graphic Design Work 3"
      />
      <div className="design-overlay">
        <span>03</span>
        <h3>Social Media Design</h3>
      </div>
    </div>


    <div className="design-card">
      <img
        src="/Images/design-4.jpg"
        alt="Graphic Design Work 4"
      />
      <div className="design-overlay">
        <span>04</span>
        <h3>Branding Design</h3>
      </div>
    </div>


    <div className="design-card">
      <img
        src="/Images/design-5.jpg"
        alt="Graphic Design Work 5"
      />
      <div className="design-overlay">
        <span>05</span>
        <h3>Festival Creative</h3>
      </div>
    </div>


      <div className="design-card">
      <img
        src="/Images/design-6.jpg"
        alt="Graphic Design Work 5"
      />
      <div className="design-overlay">
        <span>05</span>
        <h3>Festival Creative</h3>
      </div>
    </div>

  </div>

  

</section>

{/* ================= DIGITAL MARKETING ================= */}

<section className="marketing-section" id="marketing">

  <div className="section-heading">

    <p>DIGITAL MARKETING</p>

    <h2>
      Growing Brands Through
      <span> Digital Marketing</span>
    </h2>

  </div>


  <div className="marketing-intro">

    <p>
      I work on digital marketing activities including SEO,
      Google Ads, Meta Ads, social media marketing and content
      creation to help businesses build their online presence.
    </p>

  </div>


  <div className="marketing-grid">


    {/* ================= SEO ================= */}

    <div className="marketing-card">

      <div className="marketing-card-top">

        <span className="marketing-number">
          01
        </span>

        <span className="marketing-label">
          SEO
        </span>

      </div>

      <div className="marketing-icon">
        🔍
      </div>

      <h3>
        Search Engine Optimization
      </h3>

      <p>
        Improving website visibility through keyword research,
        on-page optimization, content optimization and basic
        off-page SEO practices.
      </p>

      <div className="marketing-tags">

        <span>Keyword Research</span>
        <span>On-Page SEO</span>
        <span>Meta Optimization</span>
        <span>Content Optimization</span>
        <span>Backlinks</span>
        <span>Search Console</span>
        <span>Competitor Analysis</span>

      </div>

    </div>


    {/* ================= GOOGLE ADS ================= */}

    <div className="marketing-card">

      <div className="marketing-card-top">

        <span className="marketing-number">
          02
        </span>

        <span className="marketing-label">
          PAID ADS
        </span>

      </div>

      <div className="marketing-icon">
        🎯
      </div>

      <h3>
        Google Ads
      </h3>

      <p>
        Understanding campaign structure, keyword research,
        audience targeting, bidding, ad copy and performance
        analysis.
      </p>

      <div className="marketing-tags">

        <span>Campaign Structure</span>
        <span>Keyword Research</span>
        <span>Audience Targeting</span>
        <span>Bidding</span>
        <span>Ad Copy</span>
        <span>Ad Extensions</span>
        <span>Conversion Tracking</span>

      </div>

    </div>


    {/* ================= META ADS ================= */}

    <div className="marketing-card">

      <div className="marketing-card-top">

        <span className="marketing-number">
          03
        </span>

        <span className="marketing-label">
          SOCIAL ADS
        </span>

      </div>

      <div className="marketing-icon">
        📱
      </div>

      <h3>
        Meta Ads
      </h3>

      <p>
        Working with Facebook and Instagram advertising concepts,
        audience targeting, creative selection, placements and
        campaign performance tracking.
      </p>

      <div className="marketing-tags">

        <span>Facebook Ads</span>
        <span>Instagram Ads</span>
        <span>Campaign Objectives</span>
        <span>Audience Targeting</span>
        <span>Lookalike Audiences</span>
        <span>Placements</span>
        <span>Budget Management</span>

      </div>

    </div>


    {/* ================= SOCIAL MEDIA ================= */}

    <div className="marketing-card">

      <div className="marketing-card-top">

        <span className="marketing-number">
          04
        </span>

        <span className="marketing-label">
          SOCIAL MEDIA
        </span>

      </div>

      <div className="marketing-icon">
        📈
      </div>

      <h3>
        Social Media Marketing
      </h3>

      <p>
        Creating and managing social media content including
        posts, captions, reels, promotional content and audience
        engagement.
      </p>

      <div className="marketing-tags">

        <span>Instagram</span>
        <span>Content Planning</span>
        <span>Post Creation</span>
        <span>Reels</span>
        <span>Captions</span>
        <span>Audience Engagement</span>
        <span>Business Promotion</span>

      </div>

    </div>


  </div>


  {/* ================= MARKETING PROCESS ================= */}

  <div className="marketing-process">

    <div className="process-title">

      <p>MY APPROACH</p>

      <h3>
        From Strategy To
        <span> Execution</span>
      </h3>

    </div>


    <div className="process-items">

      <div className="process-item">

        <strong>01</strong>

        <h4>Research</h4>

        <p>
          Understand the business, audience and competitors.
        </p>

      </div>


      <div className="process-item">

        <strong>02</strong>

        <h4>Strategy</h4>

        <p>
          Plan content, campaigns and audience targeting.
        </p>

      </div>


      <div className="process-item">

        <strong>03</strong>

        <h4>Create</h4>

        <p>
          Create engaging designs, content and promotional creatives.
        </p>

      </div>


      <div className="process-item">

        <strong>04</strong>

        <h4>Analyze</h4>

        <p>
          Review campaign and content performance.
        </p>

      </div>

    </div>

  </div>

</section>


{/* EDUCATION */}
<section className="education-section" id="education">
  <div className="section-title">
    <p>EDUCATION</p>
    <h2>My <span>Education</span></h2>
  </div>

  <div className="education-card">

    <div className="education-year">
      <span>2022</span>
      <span>Present</span>
    </div>

    <div className="education-content">
      <span className="education-type">B.TECH</span>

      <h3>B.Tech in Computer Engineering</h3>

      <h4>Sanjay Bhokare Group of Institutes, Miraj</h4>

      <p>
        Currently pursuing B.Tech in Computer Engineering with
        practical experience in Java Full Stack Development,
        Digital Marketing and Graphic Design.
      </p>

      <div className="education-details">
        <div>
          <strong>7.0</strong>
          <span>Final Year CGPA</span>
        </div>

        <div>
          <strong>57%</strong>
          <span>HSC</span>
        </div>

        <div>
          <strong>84.80%</strong>
          <span>SSC</span>
        </div>
      </div>
    </div>

  </div>
</section>

{/* CONTACT */}
<section className="contact-section" id="contact">
  <div className="section-title">
    <p>CONTACT</p>
    <h2>Let's Work <span>Together</span></h2>
  </div>

  <p className="section-description">
    Have a project, job opportunity or collaboration in mind?
    Feel free to get in touch with me.
  </p>

  <div className="contact-grid">

    {/* Contact Info */}
    <div className="contact-info">

      <div className="contact-card">
        <div className="contact-icon">✉</div>
        <div>
          <span>Email</span>
          <a href="mailto:ddudhal17@gmail.com">
            ddudhal17@gmail.com
          </a>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-icon">☎</div>
        <div>
          <span>Phone</span>
          <a href="tel:7498130171">
            +91 7498130171
          </a>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-icon">📍</div>
        <div>
          <span>Location</span>
          <p>Sangli, Maharashtra, India</p>
        </div>
      </div>

    </div>


    {/* Contact CTA */}
    <div className="contact-box">

      <span>AVAILABLE FOR OPPORTUNITIES</span>

      <h3>
        Let's build something
        <strong> amazing together.</strong>
      </h3>

      <p>
        I am open to opportunities in Digital Marketing,
        Web Development and Graphic Design.
      </p>

      <a
        href="mailto:ddudhal17@gmail.com"
        className="contact-button"
      >
        Send Me an Email →
      </a>

    </div>

  </div>
</section>


{/* FOOTER */}
<footer className="footer">

  <div className="footer-content">

    <div className="footer-brand">
      <h3>Daji Dudhal<span>.</span></h3>
      <p>
        Digital Marketing Executive | Web Developer |
        Graphic Designer
      </p>
    </div>

    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Daji Dudhal. All Rights Reserved.</p>

    <div className="footer-socials">
      <a
        href="https://www.instagram.com/rahulldudhal/"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>

      <a
        href="https://github.com/Daji-Dudhal"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/daji-dudhal-41937028b/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </div>

</footer>

    </div>
  );
}

export default App;