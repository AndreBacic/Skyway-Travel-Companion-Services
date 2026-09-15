import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../config/emailjs";
import "./Contact.scss";

type Status = "idle" | "sending" | "success" | "error";

const PHONE = "(910) 538-3247";
const PHONE_HREF = "tel:+19105383247";
const EMAIL = "SkywayTravelCompanion@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      form.reset();
      setStatus("success");
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
      setErrorMsg(
        "Your message couldn't be sent just now. Please call or email Sharon directly and she'll get right back to you."
      );
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="eyebrow">Let&rsquo;s Connect</p>
          <h2 className="section-title">
            Ready when you are
            <span className="script">you&rsquo;re in good hands</span>
          </h2>
          <p className="contact__lede">
            Tell Sharon a little about the traveler and the trip. She&rsquo;ll
            follow up personally to plan every detail — no questions are too
            small when it comes to someone you care about.
          </p>

          <div className="contact__channels">
            <a className="contact__channel" href={PHONE_HREF}>
              <span className="contact__channel-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.8 3.8 9 3.2c.5-.1 1 .1 1.2.6l1.2 2.9c.2.4.1.9-.3 1.2l-1.4 1.1c1 2 2.6 3.6 4.6 4.6l1.1-1.4c.3-.4.8-.5 1.2-.3l2.9 1.2c.5.2.7.7.6 1.2l-.6 2.2c-.2.8-.9 1.4-1.7 1.5C10.9 18 6 13.1 5.3 5.5c-.1-.8.5-1.5 1.5-1.7z"
                    stroke="#c99436"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <b>Call or text</b>
                {PHONE}
              </span>
            </a>
            <a className="contact__channel" href={`mailto:${EMAIL}`}>
              <span className="contact__channel-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="#c99436" strokeWidth="1.7" />
                  <path d="m4.5 7 7.5 5.6L19.5 7" stroke="#c99436" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <b>Email</b>
                {EMAIL}
              </span>
            </a>
            <div className="contact__channel">
              <span className="contact__channel-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8.5" stroke="#c99436" strokeWidth="1.7" />
                  <path d="M12 7.5V12l3 2" stroke="#c99436" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <span>
                <b>Availability</b>
                Weekdays &amp; weekends, by arrangement
              </span>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="from_name">Your name *</label>
              <input id="from_name" name="from_name" type="text" autoComplete="name" required placeholder="Jane Smith" />
            </div>
            <div className="form-field">
              <label htmlFor="reply_to">Email *</label>
              <input id="reply_to" name="reply_to" type="email" autoComplete="email" required placeholder="jane@example.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(910) 555-0123" />
            </div>
            <div className="form-field">
              <label htmlFor="travel_date">Travel date (optional)</label>
              <input id="travel_date" name="travel_date" type="date" />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="service_needed">Type of travel needed *</label>
            <select id="service_needed" name="service_needed" required defaultValue="Seniors">
              <option>Seniors</option>
              <option>Disabilities</option>
              <option>Custody travel</option>
              <option>Unaccompanied minor</option>
              <option>Patient delivery</option>
              <option>Something else</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">Tell Sharon about the trip *</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Who is traveling, departure and destination airports, and anything you'd like her to know…"
            />
          </div>

          <button className="btn btn-gold contact__submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <p
            className={`form-status${status === "success" ? " is-success" : ""}${status === "error" ? " is-error" : ""}`}
            role="status"
            aria-live="polite"
          >
            {status === "success" &&
              "Thank you! Sharon will reach out to you shortly to plan the details."}
            {status === "error" && <>{errorMsg} </>}
          </p>
        </form>
      </div>
    </section>
  );
}
