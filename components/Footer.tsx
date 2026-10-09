import { Logo, ArrowRight, MailIcon, PhoneIcon, InstagramSmall } from "@/components/Icons";
import { contact } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="cta" id="contact">
      <div className="wrap">
        <h2>
          <span className="ln">Let&apos;s build your</span>{" "}
          <span className="ln">
            growth system<span className="dot">.</span>
          </span>
        </h2>

        <div className="cta-row">
          <a href={contact.bookingUrl} className="btn btn-primary">
            Book a discovery call
            <ArrowRight />
          </a>
          <div className="contacts">
            <a href={`mailto:${contact.email}`}>
              <MailIcon />
              {contact.email}
            </a>
            <a href={contact.phoneHref}>
              <PhoneIcon />
              {contact.phone}
            </a>
            <a href={contact.instagram}>
              <InstagramSmall />
              Instagram
            </a>
          </div>
        </div>

        <div className="foot">
          <span className="logo">
            <Logo light />
            Growth Pod
          </span>
          <span>Creative systems studio for D2C brands · © 2026</span>
        </div>
      </div>
    </footer>
  );
}
