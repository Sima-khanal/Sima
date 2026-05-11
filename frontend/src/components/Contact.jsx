import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post(
        https://sima.loveslife.biz/backend/contact.php",
        form
      );

      setStatus(res.data.message);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="contact-form"
      >

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          disabled={loading}
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          disabled={loading}
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message..."
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="status">{status}</p>}

      </form>
    </section>
  );
}
