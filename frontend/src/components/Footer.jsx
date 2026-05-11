import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  // Show button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">

        <div className="footer-content">

          <p>© 2026 Sima Khanal. All rights reserved.</p>

          {/* Social Links */}
          <div className="socials">
            <a href="https://github.com/Sima-khanal" target="_blank">
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sima-khanal-23b210245/"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/9779823900684"
              target="_blank"
            >
              WhatsApp
            </a>
          </div>

        </div>

      </footer>

      {/* SCROLL TO TOP BUTTON */}
      {showTop && (
        <button className="scroll-top" onClick={scrollTop}>
          ↑
        </button>
      )}
    </>
  );
}