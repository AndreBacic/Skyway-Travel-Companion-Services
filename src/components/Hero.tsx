import sharon from "../../assets/sharon-peterson.png";
import heroWing from "../../assets/hero-wing.jpg";
import "./Hero.scss";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6.5 9.8 17.2 4 11.6"
        stroke="#c99436"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20.5S3.5 15.4 3.5 9.6C3.5 6.7 5.8 4.5 8.4 4.5c1.5 0 2.9.7 3.6 1.9.7-1.2 2.1-1.9 3.6-1.9 2.6 0 4.9 2.2 4.9 5.1 0 5.8-8.5 10.9-8.5 10.9z"
        fill="#d9a748"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroWing})` }}
        role="presentation"
      />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Retired Flight Attendant · 33 Years in the Sky</p>
          <h1 className="hero__title">
            More than travel.
            <span className="hero__script">It&rsquo;s peace of mind.</span>
          </h1>
          <p className="hero__lede">
            For 33 years, Sharon Peterson looked after passengers when it mattered
            most — first at American Airlines, now privately, one journey at a
            time. Compassionate, experienced, and always in charge of the worry.
          </p>
          <div className="hero__actions">
            <a className="btn btn-gold" href="#contact">
              Book a Companion
            </a>
            <a className="btn btn-outline" href="#services">
              See what I offer
            </a>
          </div>
          <ul className="hero__proof">
            <li>
              <CheckIcon /> CPR &amp; First Aid certified
            </li>
            <li>
              <CheckIcon /> TSA &amp; airline security know-how
            </li>
            <li>
              <CheckIcon />
              <HeartIcon /> Care that travels with you
            </li>
          </ul>
        </div>

        <div className="hero__portrait">
          <figure className="hero__photo">
            <img src={sharon} alt="Portrait of Sharon Peterson in a navy blazer with a classic flight-attendant scarf" width={600} height={600} />
          </figure>
          <div className="hero__badge hero__badge--years">
            <strong>33</strong>
            <span>years of service<br />1988–2021</span>
          </div>
          <div className="hero__badge hero__badge--name">
            <span className="hero__badge-line">Sharon Peterson</span>
            <span>Travel Companion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
