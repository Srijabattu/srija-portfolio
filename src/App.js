import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

/**
 * Paste this file into src/App.js (or src/App.jsx).
 * Make sure:
 * - Tailwind is configured (index.css contains @tailwind directives)
 * - You installed react-icons and framer-motion: npm install react-icons framer-motion
 * - Add /public/profile.jpg and /public/Srija_resume.pdf
 */

const projectsData = [
  {
    title: "WrenchMate",
    desc: "Automotive service booking web app with React & Firebase. Real-time updates and WhatsApp checkout.",
    tech: ["React", "Firebase", "Firestore"],
    live: "https://user-app-6aaf1.web.app",
    repo: "https://github.com/Srijabattu/WrenchMate",
  },
  {
    title: "Dhaathri Dairy Farm",
    desc: "Farm operations dashboard built with React and Firebase. Image uploads and inventory modules.",
    tech: ["React", "Firestore"],
    live: "https://dhathri-website-b606f.web.app",
    repo: "https://github.com/Srijabattu/Dhaathri",
  },
  {
    title: "Smart Attendance App",
    desc: "Cross-platform attendance solution for SIH 2025 (Flutter frontend, Node backend).",
    tech: ["Flutter", "Node.js", "MongoDB"],
    live: "#",
    repo: "https://github.com/Srijabattu/sih-smart-attendance-app",
  },
];

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold mb-3">
              Hi, I’m <span className="text-indigo-600">Srija</span> — AI & Web
              Developer
            </h2>
            <p className="text-gray-700 mb-6">
              I build data-driven, real-time web applications using React,
              Firebase, and Python. Currently pursuing B.Tech in Data Science &
              AI at IcfaiTech.
            </p>
            <div className="flex gap-3">
              <a
                href="#projects"
                className="px-5 py-2 bg-indigo-600 text-white rounded-md"
              >
                View Projects
              </a>
              <a
                href="mailto:battusrija37@gmail.com"
                className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-md"
              >
                Contact
              </a>
              <a
                href="/Srija_resume.pdf"
                download
                className="px-4 py-2 ml-4 rounded bg-gray-900 text-white text-sm"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Stat label="CGPA" value="8.8" />
              <Stat label="Internships" value="2" />
              <Stat label="Projects" value="6+" />
              <Stat label="Certs" value="5" />
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-md p-6"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <img
                src="/profile.jpg"
                alt="Srija Battu"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">Srija Battu</h3>
                <p className="text-sm text-gray-500">
                  Hyderabad, Telangana
                </p>
                <div className="mt-2 flex gap-3 text-sm">
                  <a
                    href="https://www.linkedin.com/in/srija-battu"
                    className="underline"
                  >
                    LinkedIn
                  </a>
                  <a href="https://github.com/Srijabattu" className="underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-600">Top Skills</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Python", "React", "Firebase", "Machine Learning", "HTML/CSS", "SQL"].map(
                  (s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-md"
                    >
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </section>

        <ProjectsSection />

        <SkillsSection />

        <ExperienceSection />

        <ContactSection />
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Srija Battu — Built with React & Tailwind
        </div>
      </footer>
    </div>
  );
}

/* ---------- components ---------- */

function Header({ navOpen, setNavOpen }) {
  return (
    <header className="bg-white shadow sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
            SB
          </div>
          <div>
            <h1 className="text-lg font-semibold">Srija Battu</h1>
            <p className="text-sm text-gray-500">B.Tech - Data Science & AI</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="space-x-4 hidden md:block">
          <a href="#projects" className="text-sm hover:text-indigo-600">
            Projects
          </a>
          <a href="#skills" className="text-sm hover:text-indigo-600">
            Skills
          </a>
          <a href="#experience" className="text-sm hover:text-indigo-600">
            Experience
          </a>
          <a href="#contact" className="text-sm hover:text-indigo-600">
            Contact
          </a>
          <a
            href="/Srija_resume.pdf"
            download
            className="ml-4 inline-block px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm"
          >
            Resume
          </a>
        </nav>

        {/* Mobile nav button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="p-2 rounded-md border"
            aria-label="Toggle menu"
          >
            {navOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Mobile nav panel */}
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 right-0 top-full bg-white shadow-md md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#projects" className="text-sm" onClick={() => setNavOpen(false)}>
                Projects
              </a>
              <a href="#skills" className="text-sm" onClick={() => setNavOpen(false)}>
                Skills
              </a>
              <a href="#experience" className="text-sm" onClick={() => setNavOpen(false)}>
                Experience
              </a>
              <a href="#contact" className="text-sm" onClick={() => setNavOpen(false)}>
                Contact
              </a>
              <a
                href="/Srija_resume.pdf"
                download
                className="inline-block px-3 py-2 bg-indigo-600 text-white rounded-md text-sm"
                onClick={() => setNavOpen(false)}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

/* Projects */
function ProjectsSection() {
  return (
    <section id="projects" className="mt-14">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Selected Projects</h3>
        <p className="text-sm text-gray-500">Filter: All • Web • AI • IoT</p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((p) => (
          <motion.article
            key={p.title}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-semibold text-lg">{p.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              {p.live && (
                <a href={p.live} className="text-sm text-indigo-600 underline" target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
              {p.repo && (
                <a href={p.repo} className="text-sm text-gray-700 underline" target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* Skills */
function SkillsSection() {
  return (
    <section id="skills" className="mt-14">
      <h3 className="text-2xl font-semibold">Skills</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <SkillCard title="Programming" items={["Python", "C", "SQL", "JavaScript", "Java"]} />
        <SkillCard title="Frameworks & Tools" items={["React", "Django", "Scikit-learn", "Bootstrap", "Firebase"]} />
        <SkillCard title="Cloud & IoT" items={["ESP32", "ThingSpeak", "Firebase"]} />
        <SkillCard title="Soft Skills" items={["Leadership", "Communication", "Teamwork", "Problem Solving"]} />
      </div>
    </section>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h4 className="font-semibold">{title}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

/* Experience */
function ExperienceSection() {
  const items = [
    {
      title: "Web Dev Intern - WrenchMate",
      date: "Jun 2025 - Jul 2025",
      bullets: ["Built & maintained React app using Firebase", "Improved UI and backend flows"],
    },
    {
      title: "Intern - Dhaathri Dairy Farm",
      date: "Jun 2025 - Jul 2025",
      bullets: ["Developed responsive web app", "Implemented image uploads and Firestore CRUD"],
    },
  ];

  return (
    <section id="experience" className="mt-14">
      <h3 className="text-2xl font-semibold">Experience</h3>
      <div className="mt-6 space-y-4">
        {items.map((it) => (
          <TimelineItem key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({ title, date, bullets = [] }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

/* Contact */
function ContactSection() {
  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields.");
      return;
    }

    // ===== Example Firestore integration (optional) =====
    // Uncomment after you add src/firebase.js with a proper config export: { db }
    //
    // import { collection, addDoc, serverTimestamp } from "firebase/firestore";
    // import { db } from "./firebase";
    //
    // try {
    //   await addDoc(collection(db, "contacts"), { name, email, message, createdAt: serverTimestamp() });
    //   alert("Thanks! Message sent.");
    //   e.target.reset();
    // } catch (err) {
    //   console.error(err);
    //   alert("Failed to send message.");
    // }
    //
    // ===================================================

    // For now, just show a success message and reset form
    alert("Demo: message captured locally. Add Firestore to save messages.");
    e.target.reset();
  }

  return (
    <section id="contact" className="mt-14 mb-24 grid md:grid-cols-2 gap-8 items-start">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold">Get in touch</h3>
        <p className="text-sm text-gray-600 mt-2">
          Feel free to reach out for collaborations or job opportunities.
        </p>
        <div className="mt-4">
          <form onSubmit={handleSubmit}>
            <label className="block text-sm mt-3">Name</label>
            <input name="name" className="w-full mt-1 px-3 py-2 border rounded" />
            <label className="block text-sm mt-3">Email</label>
            <input name="email" className="w-full mt-1 px-3 py-2 border rounded" />
            <label className="block text-sm mt-3">Message</label>
            <textarea name="message" className="w-full mt-1 px-3 py-2 border rounded" rows={4} />
            <button type="submit" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">
              Send
            </button>
          </form>
        </div>
      </div>

      <div>
        <div className="bg-white p-6 rounded-xl shadow mb-4">
          <h4 className="font-semibold">Contact Info</h4>
          <p className="text-sm text-gray-600 mt-2">Hyderabad, Telangana • +91-9154830704</p>
          <p className="text-sm text-gray-600">battusrija37@gmail.com</p>
          <div className="mt-3 flex gap-3">
            <a href="https://github.com/Srijabattu" className="underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/srija-battu" className="underline">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h4 className="font-semibold">Resume</h4>
          <p className="text-sm text-gray-600 mt-2">Download my resume for full details and project links.</p>
          <a href="/Srija_resume.pdf" download className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded">
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
