export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "PHP",
    "WordPress",
    "Laravel",
    "MySQL",
    "Elementor",
    "PHP Mailer",
    "Tailwind CSS",
    "Git & GitHub",
    "API Integration",
    "Responsive Design"
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <h2>My Skills</h2>

        <p className="skills-desc">
          I specialize in full-stack web development, WordPress customization,
          backend systems, and modern UI/UX design.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}