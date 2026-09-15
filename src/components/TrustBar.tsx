import "./TrustBar.scss";

const ITEMS = [
  {
    label: "Safety focused",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2.5 4.5 5.4v5.2c0 4.6 3.2 8.9 7.5 10.4 4.3-1.5 7.5-5.8 7.5-10.4V5.4L12 2.5z"
          stroke="#d9a748"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="m8.7 11.8 2.3 2.4 4.3-4.6"
          stroke="#d9a748"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "CPR & First Aid certified",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 20.3S3.8 15.5 3.8 9.9c0-2.8 2.2-4.9 4.7-4.9 1.5 0 2.8.7 3.5 1.8.7-1.1 2-1.8 3.5-1.8 2.5 0 4.7 2.1 4.7 4.9 0 5.6-8.2 10.4-8.2 10.4z"
          stroke="#d9a748"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 11.6h2l1.2-2.4 2 4.4 1.3-2h2.5"
          stroke="#d9a748"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "TSA & airline experience",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M21 15.3v-1.9l-7.8-4.8V3.4a1.2 1.2 0 0 0-2.4 0v5.2L3 13.4v1.9l7.8-2.2v5l-1.9 1.4v1.3L12 20.7l3.1 1.1v-1.3l-1.9-1.4v-5l7.8 2.2z"
          fill="#d9a748"
          transform="rotate(45 12 12)"
        />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <div className="trustbar" role="list" aria-label="Credentials">
      <div className="container trustbar__inner">
        {ITEMS.map((item) => (
          <div className="trustbar__item" role="listitem" key={item.label}>
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
