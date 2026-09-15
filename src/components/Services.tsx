import "./Services.scss";

const stroke = {
  fill: "none",
  stroke: "#142c4c",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SeniorIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="9.5" cy="5.5" r="2.6" {...stroke} />
    <path d="M9.5 8.6v6M9.5 14.6 7.6 20.5M9.5 14.6l1.9 5.9M9.5 10.4l3 2.3" {...stroke} />
    <path d="M15.5 12.6v8" {...stroke} />
    <path
      d="M18.9 9.4c-.9-1.6-3-1.7-3.9-.3-.6.9-.3 2 .5 2.7l3.4 2.9 3.4-2.9c.8-.7 1.1-1.8.5-2.7-.9-1.4-3-1.3-3.9.3z"
      fill="#d9a748"
      stroke="#c99436"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const AccessibilityIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="4.4" r="2.1" {...stroke} />
    <path d="M11 6.8v5.4h5l2 6.5" {...stroke} />
    <path d="M11 8.6h3.4" {...stroke} />
    <path d="M14.6 12.2a5.2 5.2 0 1 1-5-4.7" {...stroke} />
  </svg>
);

const FamilyIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="8" cy="5.8" r="2.4" {...stroke} />
    <path d="M8 9v6.4M8 15.4 6.2 20.5M8 15.4l1.8 5.1M8 10.8l-2.6 2M8 11l3 1.7" {...stroke} />
    <circle cx="16.4" cy="8.2" r="1.8" {...stroke} />
    <path d="M16.4 10.4v5M16.4 15.4l-1.4 4.1M16.4 15.4l1.4 4.1M16.4 11.8l-2 1.4" {...stroke} />
  </svg>
);

const MinorsIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="5.6" r="2.3" {...stroke} />
    <path d="M12 8.6v7.8M12 16.4l-2.2 4.3M12 16.4l2.2 4.3" {...stroke} />
    <path d="M8.6 11.2c0-1.9 1.5-3 3.4-3s3.4 1.1 3.4 3v2.4H8.6V11.2z" {...stroke} />
    <path d="M10.3 8.4V7.1M13.7 8.4V7.1" {...stroke} />
  </svg>
);

const PatientIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 20.8S4 15.7 4 10.1C4 7.2 6.2 5 8.8 5c1.5 0 2.7.7 3.2 1.8C12.5 5.7 13.7 5 15.2 5 17.8 5 20 7.2 20 10.1c0 5.6-8 10.7-8 10.7z"
      {...stroke}
    />
    <path d="M12 8.4v4.4M9.8 10.6h4.4" stroke="#c99436" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SERVICES = [
  {
    icon: SeniorIcon,
    title: "Seniors",
    copy: "Compassionate, patient support for safe, comfortable journeys — from the terminal to the gate and beyond.",
  },
  {
    icon: AccessibilityIcon,
    title: "Disabilities",
    copy: "Assistance at every step of the way, provided with dignity, respect, and zero rush.",
  },
  {
    icon: FamilyIcon,
    title: "Custody Travel",
    copy: "Reliable, documented, caring support for court-ordered and family travel.",
  },
  {
    icon: MinorsIcon,
    title: "Unaccompanied Minors",
    copy: "Safe, attentive escort so your child travels with confidence — and you can too.",
  },
  {
    icon: PatientIcon,
    title: "Patient Delivery",
    copy: "Non-medical patient escort to and from medical appointments and facilities.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-head is-center">
          <p className="eyebrow">Companion Travel Services</p>
          <h2 className="section-title">
            Who I travel with
            <span className="script">because everyone deserves help in the air</span>
          </h2>
          <p className="section-lede">
            One service, tailored to the person in front of me. Whatever brings
            you through the airport, I&rsquo;m there from check-in to arrival.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s) => (
            <article className="service-card" key={s.title}>
              <span className="service-card__icon" aria-hidden="true">
                {s.icon}
              </span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__copy">{s.copy}</p>
            </article>
          ))}
        </div>

        <p className="services__note">
          Something else in mind? Every engagement is planned around you —{" "}
          <a href="#contact">let&rsquo;s talk</a>.
        </p>
      </div>
    </section>
  );
}
