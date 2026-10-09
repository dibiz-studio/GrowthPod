import { bubbles, finalBubble } from "@/lib/site-data";

export default function Familiar() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker">Sound familiar?</span>
            <h2>This is for you if you&apos;ve ever thought…</h2>
          </div>
        </div>
        <div className="bubbles">
          {bubbles.map((b) => (
            <p key={b.text} className={`bubble${b.tone ? ` ${b.tone}` : ""}`}>
              {b.text}
            </p>
          ))}
        </div>
        <div className="familiar-end">
          <p className="bubble o">{finalBubble}</p>
        </div>
      </div>
    </section>
  );
}
