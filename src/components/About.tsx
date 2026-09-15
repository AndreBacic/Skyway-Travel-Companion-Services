import "./About.scss";

const CREDENTIALS = [
  "TSA checkpoints, airline procedures & special-assistance programs",
  "CPR & First Aid certified — prepared for the unexpected",
  "Calm, practiced crisis response from three decades aloft",
  "Discreet, unhurried support that protects your dignity",
];

const STATS = [
  { value: "33", unit: "years", label: "of in-flight service" },
  { value: "1988", unit: "–2021", label: "American Airlines flight attendant" },
  { value: "1", unit: "promise", label: "from check-in to arrival, you're covered" },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Meet Sharon</p>
          <h2 className="section-title">
            A seasoned flight attendant who treats every passenger like family
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__story">
            <p>
              Sharon Peterson spent 33 years as a flight attendant for American
              Airlines, learning first-hand what makes travel feel effortless:
              anticipation, preparation, and a touch of grace. She knows the
              rhythms of airports and cabins, the language of special
              assistance, and the quiet, reassuring way to steady someone on a
              stressful day of travel.
            </p>
            <p>
              Since retiring, she has turned that expertise into a private
              companion service — guiding seniors, families, children, and
              patients through every step of the journey. You get a calm,
              capable presence who has seen it all, and still shows up with a
              smile.
            </p>

            <ul className="about__checks">
              {CREDENTIALS.map((c) => (
                <li key={c}>
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10.5" fill="#f7ecd7" />
                    <path
                      d="m8 12.4 2.7 2.8L16 9.6"
                      fill="none"
                      stroke="#b07f2a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <aside className="about__stats" aria-label="At a glance">
            {STATS.map((s) => (
              <div className="about__stat" key={s.label}>
                <span className="about__stat-value">
                  {s.value}
                  <i>{s.unit}</i>
                </span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}

            <blockquote className="about__quote">
              <p>&ldquo;From check-in to arrival, I&rsquo;m here to take the
              worry out of travel.&rdquo;</p>
              <cite>— Sharon Peterson</cite>
            </blockquote>
          </aside>
        </div>
      </div>
    </section>
  );
}
