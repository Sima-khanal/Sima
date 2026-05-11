import SimaImg from "../assets/Sima.jpg";
import cv from "../assets/Sima.pdf";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* Image */}
        <div className="about-img">
          <img src={SimaImg} alt="profile" />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I'm Sima Khanal, a creative full-stack web developer with a passion
            for building modern and visually appealing applications. I enjoy
            solving problems and transforming ideas into real-world digital experiences.
          </p>

          {/* Skills Grid */}
          <div className="about-skills">

            <div className="skill-box">
              <h3>WordPress</h3>
              <p>Theme Development, Plugin Development</p>
            </div>

            <div className="skill-box">
              <h3>Page Builder</h3>
              <p>Elementor Page Builder</p>
            </div>

            <div className="skill-box">
              <h3>Backend</h3>
              <p>PHP Mailer, PHP</p>
            </div>

            <div className="skill-box">
              <h3>Web Apps</h3>
              <p>Website Builder & Custom Systems</p>
            </div>
          
              <a
              href="/assets/Sima-CV.pdf"
              download
              className="cv-btn"
            >
              Download CV
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}