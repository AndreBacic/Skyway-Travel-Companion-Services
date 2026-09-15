import "./Footer.scss";

const PHONE_HREF = "tel:+19105383247";
const EMAIL = "SkywayTravelCompanion@gmail.com";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 64 64">
              <path
                d="M32 8c-1.7 0-3 1.2-3.2 2.9l-.6 5.9L10.9 26.6c-1.2.7-1.2 2.5 0 3.3L30 40v8h4v-8c4.4-2.1 9.1-4.8 14.6-8.1-2.6-.5-5.2-.4-7.6.4v-4l-1.2-4 16.2-4.4c1.1-.3 1.4-1.9.3-2.5l-4.7-2.6c-.4-.2-1-.2-1.5-.1L37.4 16l-2.9-13.1C34.2 9.2 32.9 8 32 8z"
                fill="#d9a748"
              />
              <path
                d="M17 48c9.3 4.6 20.7 4.6 30 0"
                fill="none"
                stroke="#d9a748"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <div>
            <p className="footer__name">
              Skyway <span>Travel Companion Services</span>
            </p>
            <p className="footer__tagline">
              Experienced. Compassionate. Care that travels with you.
            </p>
          </div>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer__contact">
          <a href={PHONE_HREF}>(910) 538-3247</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>

      <div className="footer__legal">
        <div className="container">
          <p>
            &copy; {year} Skyway Travel Companion Services · Sharon Peterson
          </p>
          <p className="footer__disclaimer">
            Skyway Travel Companion Services is privately owned by Sharon
            Peterson and is not affiliated with American Airlines or any
            airline.
          </p>
        </div>
      </div>
    </footer>
  );
}
