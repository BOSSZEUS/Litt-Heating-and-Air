export default function TrustBadges() {
  return (
    <section className="py-16 px-5 bg-white" aria-label="Trust and credentials">
      <div className="max-w-wide mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
        {/* Licensed & Insured */}
        <div className="flex flex-col items-center text-center w-[180px]">
          <svg viewBox="0 0 100 100" className="w-[140px] h-[140px]" aria-hidden="true">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#555" strokeWidth="2"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#555" strokeWidth="1"/>
            <text x="50" y="35" textAnchor="middle" fill="#555" fontSize="8" fontWeight="bold" fontFamily="sans-serif">FULLY LICENSED</text>
            <g transform="translate(35, 38)">
              <rect x="2" y="0" width="26" height="20" rx="1" fill="none" stroke="#C41E2A" strokeWidth="2"/>
              <line x1="8" y1="6" x2="24" y2="6" stroke="#C41E2A" strokeWidth="1.5"/>
              <line x1="8" y1="10" x2="24" y2="10" stroke="#C41E2A" strokeWidth="1.5"/>
              <line x1="8" y1="14" x2="20" y2="14" stroke="#C41E2A" strokeWidth="1.5"/>
            </g>
            <text x="50" y="72" textAnchor="middle" fill="#555" fontSize="8" fontWeight="bold" fontFamily="sans-serif">AND INSURED</text>
          </svg>
        </div>

        {/* Serving Modesto */}
        <div className="flex flex-col items-center text-center w-[180px]">
          <svg viewBox="0 0 120 100" className="w-[160px] h-[140px]" aria-hidden="true">
            <path d="M10 20 L60 5 L110 20 L110 60 Q110 90 60 98 Q10 90 10 60 Z" fill="none" stroke="#555" strokeWidth="2"/>
            <path d="M15 24 L60 10 L105 24 L105 58 Q105 86 60 93 Q15 86 15 58 Z" fill="none" stroke="#555" strokeWidth="1"/>
            <text x="60" y="35" textAnchor="middle" fill="#555" fontSize="5" letterSpacing="1">★★★★★</text>
            <text x="60" y="55" textAnchor="middle" fill="#C41E2A" fontSize="9" fontWeight="bold" fontFamily="sans-serif">SERVING</text>
            <text x="60" y="67" textAnchor="middle" fill="#C41E2A" fontSize="9" fontWeight="bold" fontFamily="sans-serif">MODESTO CA</text>
            <text x="60" y="78" textAnchor="middle" fill="#555" fontSize="5.5" fontFamily="sans-serif">AND SURROUNDING AREAS</text>
            <text x="60" y="22" textAnchor="middle" fill="#555" fontSize="5" letterSpacing="1">★★★★★</text>
          </svg>
        </div>

        {/* Family Owned */}
        <div className="flex flex-col items-center text-center w-[180px]">
          <svg viewBox="0 0 100 100" className="w-[140px] h-[140px]" aria-hidden="true">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#555" strokeWidth="2"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#555" strokeWidth="1"/>
            <text x="50" y="25" textAnchor="middle" fill="#C41E2A" fontSize="11" fontWeight="bold" fontFamily="sans-serif">FAMILY</text>
            <g transform="translate(28, 30)">
              <path d="M22 8 L18 2 L14 8 M30 8 L26 2 L22 8" fill="none" stroke="#C41E2A" strokeWidth="2" strokeLinecap="round"/>
              <line x1="10" y1="16" x2="34" y2="16" stroke="#C41E2A" strokeWidth="2"/>
              <line x1="22" y1="8" x2="22" y2="28" stroke="#C41E2A" strokeWidth="2"/>
              <circle cx="12" cy="22" r="4" fill="none" stroke="#C41E2A" strokeWidth="1.5"/>
              <circle cx="32" cy="22" r="4" fill="none" stroke="#C41E2A" strokeWidth="1.5"/>
            </g>
            <text x="50" y="72" textAnchor="middle" fill="#555" fontSize="8" fontWeight="bold" fontFamily="sans-serif">OWNED</text>
            <text x="50" y="83" textAnchor="middle" fill="#C41E2A" fontSize="8" fontWeight="bold" fontFamily="sans-serif">BUSINESS</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
