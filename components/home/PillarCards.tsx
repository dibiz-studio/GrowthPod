"use client";

import { WebIcon, GrowthIcon, InstaIcon } from "@/components/Icons";
import { pillars } from "@/lib/site-data";
import { useServiceTab } from "@/components/home/ServiceTabContext";

const icons = { web: WebIcon, growth: GrowthIcon, insta: InstaIcon };

/** Hero service cards — clicking one opens the matching tab in the Services section */
export default function PillarCards() {
  const { select } = useServiceTab();

  return (
    <div className="pillars">
      {pillars.map((p, i) => {
        const Icon = icons[p.icon];
        return (
          <a key={p.title} href="#services" className="pillar" onClick={() => select(i)}>
            <span className="ic">
              <Icon />
            </span>
            <span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </span>
          </a>
        );
      })}
    </div>
  );
}
