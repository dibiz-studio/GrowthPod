export default function About() {
  return (
    <section className="sec about" id="about">
      <div className="wrap about-grid">
        <div className="portrait">
          <span className="blob" aria-hidden="true"></span>
          <div className="img" role="img" aria-label="Snigdha Singh, founder of Growth Pod"></div>
          <div className="tag">
            <b>Snigdha Singh</b>
            <span>Founder, Growth Pod</span>
          </div>
        </div>
        <div>
          <span className="kicker">Why Growth Pod exists</span>
          <h2>Built from both sides of the table.</h2>
          <p>
            I started my career in tech, working on automation and business processes for MNCs. That made me look
            at problems a little differently — how things work, where they break and how to make them work better.
          </p>
          <p>
            Then I built my own home decor brand, The Orby House, and landed on the other side of the table —
            marketing, content, shoots, creatives, ads, the whole thing. That&apos;s when I saw the gap: finding
            someone who could connect creative + business + numbers was surprisingly difficult.
          </p>
          <p>That experience led me to build Growth Pod.</p>
          <blockquote>Build better creative. Build it with a system. And make it work harder for the brand.</blockquote>
        </div>
      </div>
    </section>
  );
}
