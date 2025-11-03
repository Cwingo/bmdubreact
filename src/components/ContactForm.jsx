import { useState } from "react";
import "../styles/ContactForm.css";

const FORMSPREE_CONTACT = "https://formspree.io/f/mqayndwk";

export default function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!data.name || !data.email || !data.message) {
      setStatus({ sending: false, ok: false, msg: "Please fill out all fields." });
      return;
    }
    setStatus({ sending: true, ok: null, msg: "" });
    try {
      const res = await fetch(FORMSPREE_CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "bmDub • Contact Form",
          ...data
        })
      });
      if (res.ok) {
        setStatus({ sending: false, ok: true, msg: "Thanks! Your message was sent." });
        setData({ name: "", email: "", message: "" });
      } else {
        setStatus({ sending: false, ok: false, msg: "Something went wrong. Try again." });
      }
    } catch {
      setStatus({ sending: false, ok: false, msg: "Network error. Try again." });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3>Contact</h3>
      <label>Name
        <input
          value={data.name}
          onChange={(e)=>setData({...data, name:e.target.value})}
          required
        />
      </label>
      <label>Email
        <input
          type="email"
          value={data.email}
          onChange={(e)=>setData({...data, email:e.target.value})}
          required
        />
      </label>
      <label>Message
        <textarea
          rows="5"
          value={data.message}
          onChange={(e)=>setData({...data, message:e.target.value})}
          required
        />
      </label>
      <button disabled={status.sending} type="submit">
        {status.sending ? "Sending..." : "Send"}
      </button>
      {status.msg && (
        <p className={`form-note ${status.ok ? "ok" : "err"}`}>{status.msg}</p>
      )}
    </form>
  );
}
