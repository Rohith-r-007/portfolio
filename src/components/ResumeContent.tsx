export default function ResumeContent() {
  const card =
    "rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-sm p-6 transition-all duration-300";

  const badge =
    "px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200";

  const heading =
    "text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100";

  const subText = "text-neutral-600 dark:text-neutral-400";

  const skills = [
    {
      title: "Languages",
      items: ["Python", "Java", "JavaScript", "SQL"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT"],
    },
    {
      title: "Tools & Database",
      items: ["MongoDB", "Docker", "Git", "Postman", "Selenium", "K6"],
    },
  ];

  const projects = [
    {
      title: "Gatherly",
      description:
        "Full-stack MERN event management platform with JWT authentication, event booking, Docker and cloud deployment.",
    },
    {
      title: "Food Reels Platform",
      description:
        "Short-form food discovery platform built with the MERN stack and ImageKit.",
    },
    {
      title: "Selenium UI Automation",
      description:
        "Automated UI testing using Selenium and Docker.",
    },
  ];

  return (
    <section className="relative z-20 max-w-5xl mx-auto mt-32 mb-20 px-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
        Resume
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
        Final-year Electronics & Communication Engineering student passionate
        about software development, full-stack web applications, automation,
        and solving real-world problems.
      </p>

      <a
        href="/resume.pdf"
        download="Rohith_R_Resume.pdf"
        className="inline-flex items-center mt-8 rounded-xl bg-neutral-900 dark:bg-white px-6 py-3 font-medium text-white dark:text-black transition hover:scale-[1.02] hover:shadow-lg"
      >
        Download Resume
      </a>

      {/* Education */}
      <div className="mt-20">
        <h2 className={`${heading} mb-8`}>Education</h2>

        <div className="space-y-6">
          <div className={card}>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              B.Tech Electronics & Communication Engineering
            </h3>

            <p className={`${subText} mt-1`}>
              Vellore Institute of Technology • Graduating 2027
            </p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-20">
        <h2 className={`${heading} mb-8`}>Experience</h2>

        <div className="space-y-8">
          <div className={card}>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Software Engineer Intern
            </h3>

            <p className={`${subText} mt-1`}>
              Netraga • May 2026 – Present
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Developed full-stack MERN web applications.</li>
              <li>Built RESTful APIs with JWT authentication.</li>
              <li>Integrated MongoDB.</li>
              <li>Containerized applications using Docker.</li>
              <li>Deployed using Vercel, Render and MongoDB Atlas.</li>
            </ul>
          </div>

          <div className={card}>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Performance Testing Intern
            </h3>

            <p className={`${subText} mt-1`}>
              NStore Retech Pvt. Ltd. • Jun 2025 – Jul 2025
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Developed Selenium UI automation scripts.</li>
              <li>Containerized test execution using Docker.</li>
              <li>Performed regression and load testing using K6.</li>
              <li>Reported software defects.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mt-20">
        <h2 className={`${heading} mb-8`}>Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((section) => (
            <div key={section.title} className={card}>
              <h3 className="font-semibold mb-3 text-neutral-900 dark:text-white">
                {section.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {section.items.map((skill) => (
                  <span key={skill} className={badge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mt-20">
        <h2 className={`${heading} mb-8`}>Projects</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.title} className={card}>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-20">
        <h2 className={`${heading} mb-8`}>Achievements</h2>

        <div className={card}>
          <ul className="list-disc ml-6 space-y-3 text-neutral-700 dark:text-neutral-300">
            <li>
              Completed internships in Software Development and Performance
              Testing.
            </li>
            <li>
              Built and deployed two full-stack MERN applications.
            </li>
            <li>Solved 74+ LeetCode problems.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}