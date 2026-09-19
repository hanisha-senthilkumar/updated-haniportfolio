import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

/* =====================================================
   ANIMATION SETTINGS
===================================================== */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },

  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },

  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =====================================================
   SKILLS
===================================================== */

const skills = [
  {
    title: "Frontend",
    icon: "</>",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },

  {
    title: "Programming",
    icon: "01",
    items: ["Python", "Java", "SQL"],
  },

  {
    title: "AI & Data",
    icon: "AI",
    items: [
      "Machine Learning",
      "KNN",
      "TF-IDF",
      "OCR",
      "AI Applications",
    ],
  },

  {
    title: "Tools",
    icon: "◆",
    items: ["Git", "GitHub", "VS Code", "Vite", "Figma"],
  },
];

/* =====================================================
   PROJECTS
===================================================== */

const projects = [
  {
    title: "HireNova",
    category: "AI • Full Stack",

    description:
      "An AI-powered resume and job description matching platform that analyzes skills, keywords and similarity to identify job fit and skill gaps.",

    tech: ["React", "Puter AI", "TF-IDF", "PDF.js"],

    repo:
      "https://github.com/hanisha-senthilkumar/hirenova-ai-resume",
  },

  {
    title: "AI-IDR",
    category: "AI / ML • Navigation",

    description:
      "An AI-assisted intelligent dead reckoning system designed to support seamless vehicle navigation during GNSS-denied conditions using sensor fusion and adaptive models.",

    tech: ["Python", "PyTorch", "EKF / UKF", "Android"],

    repo:
      "https://github.com/madhumithas2213-hash/AI-Intelligent-Dead-Reckoning",
  },

  {
    title: "Jan Suvidha AI",
    category: "AI • Civic Tech",

    description:
      "A citizen welfare assistant that helps users discover government schemes, check eligibility and process document information using AI-assisted workflows.",

    tech: ["React", "Node.js", "OCR", "AI"],

    repo:
      "https://github.com/harshanasathasivam-bit/Jan-Suvidha-AI",
  },

  {
    title: "Movie Recommendation",
    category: "ML • Full Stack",

    description:
      "An AI-powered movie recommendation platform that uses similarity-based recommendation techniques to suggest movies according to user preferences.",

    tech: ["React", "KNN", "FastAPI", "MongoDB"],

    repo:
      "https://github.com/hanisha-senthilkumar/movie-recommendation",
  },
];

/* =====================================================
   CERTIFICATES
   Only the 3 certificates you currently have
===================================================== */

const certificates = [
  {
    title: "NPTEL Certification",
    subtitle: "Cloud Computing",
    image: "/nptel.png",
  },

  {
    title: "Python Certification",
    subtitle: "Automate the Boring Stuff with Python",
    image: "/python.png",
  },

  {
    title: "Internship Certification",
    subtitle: "United Soft Tech",
    image: "/internship.png",
  },
];

/* =====================================================
   CERTIFICATE IMAGE COMPONENT
===================================================== */

function CertificateImage({
  src,
  alt,
  className = "",
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className={`certificate-placeholder ${className}`}
      >
        <span>Certificate Preview</span>

        <small>
          PNG image not found
        </small>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}

/* =====================================================
   MAIN APP
===================================================== */

function App() {
  const [
    selectedCertificate,
    setSelectedCertificate,
  ] = useState(null);

  /* ===================================================
     NAVIGATION
  =================================================== */

  const handleNavClick = (event, id) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (!element) return;

    const navbarHeight = 82;

    const elementPosition =
      element.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">

        <div className="nav-inner">

          {/* LOGO */}

          <a
            href="#home"
            className="logo"
            onClick={(event) =>
              handleNavClick(event, "home")
            }
          >
            HANISHA<span>.</span>
          </a>

          {/* NAV LINKS */}

          <nav className="nav-links">

            <a
              href="#home"
              onClick={(event) =>
                handleNavClick(event, "home")
              }
            >
              Home
            </a>

            <a
              href="#about"
              onClick={(event) =>
                handleNavClick(event, "about")
              }
            >
              About
            </a>

            <a
              href="#skills"
              onClick={(event) =>
                handleNavClick(event, "skills")
              }
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={(event) =>
                handleNavClick(event, "projects")
              }
            >
              Projects
            </a>

            <a
              href="#certificates"
              onClick={(event) =>
                handleNavClick(event, "certificates")
              }
            >
              Certificates
            </a>

            <a
              href="#contact"
              onClick={(event) =>
                handleNavClick(event, "contact")
              }
            >
              Contact
            </a>

          </nav>

          {/* LET'S TALK */}

          <a
            href="#contact"
            className="lets-talk"
            onClick={(event) =>
              handleNavClick(event, "contact")
            }
          >
            Let's Talk
          </a>

        </div>

      </header>

      {/* =================================================
          HOME
      ================================================= */}

      <section
        id="home"
        className="hero section"
      >

        <div className="hero-background"></div>

        <div className="hero-inner">

          {/* ---------------------------------------------
              HERO TEXT
          --------------------------------------------- */}

          <motion.div
            className="hero-content"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >

            <motion.p
              className="hero-small"
              variants={fadeUp}
            >
              Hello, I'm
            </motion.p>

            <motion.h1 variants={fadeUp}>
              Hanisha<span>.</span>
            </motion.h1>

            <motion.h2 variants={fadeUp}>
              CSE Student &{" "}
              <strong>
                AI Full Stack Developer
              </strong>
            </motion.h2>

            <motion.p
              className="hero-description"
              variants={fadeUp}
            >
              I build modern web applications and
              AI-powered solutions that combine clean
              interfaces, intelligent systems and
              practical problem solving.
            </motion.p>

            <motion.div
              className="hero-buttons"
              variants={fadeUp}
            >

              <a
                href="#contact"
                className="primary-btn"
                onClick={(event) =>
                  handleNavClick(
                    event,
                    "contact"
                  )
                }
              >
                Contact Me
                <span>↗</span>
              </a>

              <a
                href="/hanires.pdf"
                className="secondary-btn"
                download="Hanisha-Resume.pdf"
              >
                Download Resume
                <span>↓</span>
              </a>

            </motion.div>

          </motion.div>

          {/* ---------------------------------------------
              HERO ORBIT / HS DESIGN
          --------------------------------------------- */}

          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* OUTER ORBIT */}

            <motion.div
              className="orbit orbit-one"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              <span className="orbit-dot dot-top"></span>

              <span className="orbit-dot dot-right"></span>

              <span className="orbit-dot dot-bottom"></span>

              <span className="orbit-dot dot-left"></span>

            </motion.div>

            {/* SECOND ORBIT */}

            <motion.div
              className="orbit orbit-two"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              <span className="orbit-dot small-dot-one"></span>

              <span className="orbit-dot small-dot-two"></span>

            </motion.div>

            {/* THIRD ORBIT */}

            <div className="orbit orbit-three"></div>

            {/* CENTER HS */}

            <motion.div
              className="hs-circle"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <span>HS</span>

              <small>
                HANISHA
              </small>

            </motion.div>

            {/* FLOATING SKILL LABELS */}

            <motion.div
              className="hero-tag tag-ai"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              AI
            </motion.div>

            <motion.div
              className="hero-tag tag-react"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              React
            </motion.div>

            <motion.div
              className="hero-tag tag-python"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Python
            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* =================================================
          ABOUT
      ================================================= */}

      <section
        id="about"
        className="section about-section"
      >

        <div className="section-container">

          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
          >

            <p className="eyebrow">
              ABOUT ME
            </p>

            <h2>
              Who I Am
            </h2>

          </motion.div>

          <div className="about-grid">

            {/* PROFILE */}

            <motion.div
              className="about-profile-card"
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeLeft}
            >

              <div className="profile-photo-container">

                <motion.img
                  src="/profile.png"
                  alt="Hanisha"
                  className="profile-photo"
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                />

              </div>

              <h3>
                Hanisha
              </h3>

              <p>
                Computer Science Engineering
              </p>

            </motion.div>

            {/* ABOUT TEXT */}

            <motion.div
              className="about-content"
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeRight}
            >

              <h3>
                I'm a Computer Science Engineering
                student passionate about building
                useful digital products with technology
                and artificial intelligence.
              </h3>

              <p>
                My interests are mainly focused on
                full-stack development, AI/ML
                applications and solving real-world
                problems through software.
              </p>

              <p>
                I enjoy turning ideas into working
                applications with clean interfaces,
                practical functionality and intelligent
                solutions.
              </p>

              <div className="about-stats">

                <div className="stat">
                  <strong>4+</strong>
                  <span>
                    Major Projects
                  </span>
                </div>

                <div className="stat">
                  <strong>AI</strong>
                  <span>
                    Focused Development
                  </span>
                </div>

                <div className="stat">
                  <strong>CSE</strong>
                  <span>
                    Student
                  </span>
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =================================================
          SKILLS
      ================================================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="section-container">

          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
          >

            <p className="eyebrow">
              SKILLS & TOOLS
            </p>

            <h2>
              What I Work With
            </h2>

          </motion.div>

          <motion.div
            className="skills-grid"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={staggerContainer}
          >

            {skills.map((skill) => (

              <motion.div
                className="skill-card"
                key={skill.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
              >

                <div className="skill-top">

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <h3>
                    {skill.title}
                  </h3>

                </div>

                <div className="skill-items">

                  {skill.items.map((item) => (

                    <motion.span
                      key={item}
                      className="skill-pill"
                      whileHover={{
                        y: -5,
                        scale: 1.06,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      {item}
                    </motion.span>

                  ))}

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

      {/* =================================================
          PROJECTS
      ================================================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-container">

          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
          >

            <p className="eyebrow">
              SELECTED WORK
            </p>

            <h2>
              Projects I've Built
            </h2>

          </motion.div>

          <motion.div
            className="projects-grid"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={staggerContainer}
          >

            {projects.map((project) => (

              <motion.article
                className="project-card"
                key={project.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

                <div className="project-card-top">

                  <span className="project-category">
                    {project.category}
                  </span>

                  {/* GITHUB ARROW */}

                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repository-btn"
                    aria-label={`Open ${project.title} GitHub repository`}
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                  >
                    ↗
                  </motion.a>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.tech.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

                {/* REPOSITORY BUTTON */}

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-repository"
                >
                  View Repository
                  <span>↗</span>
                </a>

              </motion.article>

            ))}

          </motion.div>

        </div>

      </section>

      {/* =================================================
          CERTIFICATES
      ================================================= */}

      <section
        id="certificates"
        className="section certificates-section"
      >

        <div className="section-container">

          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
          >

            <p className="eyebrow">
              MY ACHIEVEMENTS
            </p>

            <h2>
              Certifications & Credentials
            </h2>

          </motion.div>

          <motion.div
            className="certificates-grid"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={staggerContainer}
          >

            {certificates.map((certificate) => (

              <motion.div
                className="certificate-card"
                key={certificate.title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                }}
              >

                <div className="certificate-image-wrapper">

                  <CertificateImage
                    src={certificate.image}
                    alt={certificate.title}
                    className="certificate-image"
                  />

                  <div className="certificate-overlay">

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCertificate(
                          certificate
                        )
                      }
                    >
                      View Certificate
                    </button>

                  </div>

                </div>

                <div className="certificate-info">

                  <h3>
                    {certificate.title}
                  </h3>

                  <p>
                    {certificate.subtitle}
                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

      {/* =================================================
          CONTACT
      ================================================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="section-container">

          <motion.div
            className="contact-card"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
          >

            <div className="contact-left">

              <p className="eyebrow">
                GET IN TOUCH
              </p>

              <h2>
                Let's build something
                <span>
                  meaningful.
                </span>
              </h2>

              <p className="contact-description">
                Have a project idea, collaboration
                opportunity or simply want to connect?
                Feel free to reach out.
              </p>

            </div>

            <div className="contact-right">

              <div className="contact-line">

                <span>
                  Email
                </span>

                <a
                  href="mailto:haniisenthil@gmail.com"
                >
                  haniisenthil@gmail.com
                </a>

              </div>

              <a
                href="mailto:haniisenthil@gmail.com?subject=Portfolio%20Contact&body=Hi%20Hanisha,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                className="email-button"
              >
                Send Email
                <span>↗</span>
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer">

        <div className="footer-inner">

          <span>
            HANISHA<span>.</span>
          </span>

          <p>
            © 2026 Hanisha. Built with React.
          </p>

          <a
            href="#home"
            onClick={(event) =>
              handleNavClick(
                event,
                "home"
              )
            }
          >
            Back to top ↑
          </a>

        </div>

      </footer>

      {/* =================================================
          CERTIFICATE MODAL
      ================================================= */}

      <AnimatePresence>

        {selectedCertificate && (

          <motion.div
            className="certificate-modal"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedCertificate(null)
            }
          >

            <motion.div
              className="certificate-modal-content"
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                type="button"
                className="modal-close"
                onClick={() =>
                  setSelectedCertificate(null)
                }
              >
                ×
              </button>

              <CertificateImage
                src={
                  selectedCertificate.image
                }
                alt={
                  selectedCertificate.title
                }
                className="modal-certificate-image"
              />

              <div className="modal-title">

                <h3>
                  {selectedCertificate.title}
                </h3>

                <p>
                  {selectedCertificate.subtitle}
                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}

export default App;