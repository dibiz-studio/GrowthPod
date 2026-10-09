import { ArrowRight } from "@/components/Icons";
import { clients } from "@/lib/site-data";
import PillarCards from "@/components/home/PillarCards";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-top">
          <span className="hero-badge">
            <span className="av" role="img" aria-label="Snigdha Singh"></span>
            A creative systems studio for D2C brands
          </span>
        </div>

        <h1>
          <span className="ln">
            <span>Creative systems that</span>
          </span>{" "}
          <span className="ln">
            <span>
              grow D2C brands<span className="dot">.</span>
            </span>
          </span>
        </h1>

        <div className="hero-bottom">
          <p>
            We design the websites that convert and build the creative engine that feeds your ads and your
            Instagram. Strategy, shoots, edits and performance, run as one system.
          </p>
          <div className="hero-ctas">
            <a href="https://calendly.com/snigdhasingh-dibizsolution/discovery-call" className="btn btn-primary">
              Book a discovery call
              <ArrowRight />
            </a>
            <a href="#services" className="btn btn-outline">
              See services
            </a>
          </div>
        </div>

        <PillarCards />

        
      </div>
    </section>
  );
}
