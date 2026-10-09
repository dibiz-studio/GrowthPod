"use client";

import { useRef, type KeyboardEvent } from "react";
import { services, type Offer } from "@/lib/site-data";
import { useServiceTab } from "@/components/home/ServiceTabContext";

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className={`offer${offer.highlight ? " hl" : ""}`}>
      {offer.label && <small>{offer.label}</small>}
      <h4>
        {offer.title}
        {offer.isNew && (
          <>
            {" "} 
            <span className="new">New</span>
          </>
        )}
      </h4>
      <ul>
        {offer.items?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ListOffer({ offer }: { offer: Offer }) {
  return (
    <div className="offer">
      <span className="n">{offer.n}</span>
      <h4>{offer.title}</h4>
      <p>{offer.text}</p>
    </div>
  );
}

export default function Services() {
  const { active, changed, select } = useServiceTab();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const count = services.length;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (i + 1) % count;
    if (e.key === "ArrowLeft") next = (i - 1 + count) % count;
    if (next !== null) {
      e.preventDefault();
      select(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker">Services</span>
            <h2>Three systems, one goal: growth</h2>
          </div>
          <p>Start with the one you need now. Each one plugs into the next as you scale.</p>
        </div>

        <div className="tabs" role="tablist" aria-label="Services">
          {services.map((s, i) => (
            <button
              key={s.tab}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              className="tab"
              role="tab"
              id={`t${i}`}
              aria-controls={`p${i}`}
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span>{i + 1}</span>
              {s.tab}
            </button>
          ))}
        </div>

        {services.map((s, i) => {
          const fade = changed && active === i;
          return (
            <div
              key={fade ? `p${i}-${active}-on` : `p${i}`}
              className={`panel${fade ? " fade" : ""}`}
              role="tabpanel"
              id={`p${i}`}
              aria-labelledby={`t${i}`}
              hidden={active !== i}
            >
              <div>
                <h3>{s.title}</h3>
                <p className="desc">{s.desc}</p>
                <div className="meta">
                  {s.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <a href="https://calendly.com/snigdha-growthpod/30min" className="btn btn-black">
                  {s.cta}
                </a>
              </div>

              {s.layout === "two" && (
                <div className="offers two">
                  {s.offers.map((o) => (
                    <OfferCard key={o.title} offer={o} />
                  ))}
                </div>
              )}
              {s.layout === "list" && (
                <div className="offers list">
                  {s.offers.map((o) => (
                    <ListOffer key={o.title} offer={o} />
                  ))}
                </div>
              )}
              {s.layout === "single" && (
                <div className="offers">
                  {s.offers.map((o) => (
                    <OfferCard key={o.title} offer={o} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
