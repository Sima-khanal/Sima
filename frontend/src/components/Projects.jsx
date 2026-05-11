const projects = [
  {
    title: "Blood Donation Management System",
    desc: "A complete blood bank system with admin, donor, and agent modules.",
    link: "#"
  },
  {
    title: "BMI Calculator",
    desc: "Modern BMI calculator with beautiful UI and health tracking.",
    link: "#"
  },
  {
    title: "Portfolio Website",
    desc: "Responsive animated portfolio built using React and modern UI design.",
    link: "#"
  },

  // Travel Websites
  {
    title: "Corsa Nepal Adventure",
    desc: "Travel & trekking website for Nepal adventure packages.",
    link: "https://corsanepaladventure.com/"
  },
  {
    title: "Nepal Himalaya Tours",
    desc: "Tour booking and travel agency website.",
    link: "https://nepalhimalayatours.com/"
  },
  {
    title: "Barefoot Adventure",
    desc: "Adventure travel website with trekking packages and guides.",
    link: "https://barefootadv.com/"
  },

  // WordPress Themes
  {
    title: "WordPress Theme - PureNote",
    desc: "Minimal blog & news WordPress theme.",
    link: "https://wordpress.org/themes/purenote/"
  },
  {
    title: "WordPress Theme - News Express",
    desc: "Modern news & magazine WordPress theme.",
    link: "https://wordpress.org/themes/news-express/"
  },
  {
    title: "WordPress Theme - Azure News",
    desc: "Clean responsive news portal WordPress theme.",
    link: "https://wordpress.org/themes/azure-news/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <h2>My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              {/* LIVE DEMO BUTTON */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                Live Demo
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}