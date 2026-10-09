import { frames, steps, type Frame } from "@/lib/site-data";

function FrameCard({ frame }: { frame: Frame }) {
  return (
    <div className={`frame ${frame.type}`} role="img" aria-label={frame.label}>
      {frame.type === "story" && (
        <div className="bar">
          <i></i>
          <i></i>
          <i></i>
        </div>
      )}
      <span className="fmt">{frame.fmt}</span>
      <p className="hook">
        {frame.hook}
        {frame.note && <small>{frame.note}</small>}
        {frame.button && (
          <>
            <br />
            <span className="mini">{frame.button}</span>
          </>
        )}
      </p>
    </div>
  );
}

export default function HowWeWork() {
  return (
    <section className="shoot" id="how">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker">How we work</span>
            <h2>One shoot. A whole stack of creative.</h2>
          </div>
          <p>Every concept is captured with multiple hooks, then cut for every format and channel you run.</p>
        </div>

        <div className="frames">
          {frames.map((f) => (
            <FrameCard key={f.type} frame={f} />
          ))}
        </div>

        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
