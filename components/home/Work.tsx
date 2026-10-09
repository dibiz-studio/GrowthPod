import { ArrowUpRight } from "@/components/Icons";
import { clients, type Client } from "@/lib/site-data";

function WorkRow({ client }: { client: Client }) {
  return (
    <a
      href={client.url}
      className="work-row"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${client.name} website (opens in a new tab)`}
    >
      <b>{client.name}</b>
      <span className="go">
        <ArrowUpRight />
      </span>
    </a>
  );
}

export default function Work() {
  const left = clients.slice(0, 5);
  const right = clients.slice(5);

  return (
    <section className="sec" id="work">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker">Selected work</span>
            <h2>Websites we&apos;ve shipped</h2>
          </div>
          <p>D2C stores across wellness, fashion, food and lifestyle.</p>
        </div>
        <div className="work-cols">
          <div className="work-list">
            {left.map((c) => (
              <WorkRow key={c.name} client={c} />
            ))}
          </div>
          <div className="work-list">
            {right.map((c) => (
              <WorkRow key={c.name} client={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
