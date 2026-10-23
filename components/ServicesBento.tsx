import Link from "next/link";
import Icon from "./Icon";
import { services } from "@/lib/services";

const spans = [4, 2, 2, 2, 2, 6];
const dark = new Set([0, 5]);

export default function ServicesBento() {
  return (
    <div className="bento">
      {services.map((sv, i) => (
        <Link
          href={`/services/${sv.slug}`}
          className={`tile${dark.has(i) ? " tile-dark" : ""}`}
          style={{ "--span": spans[i] } as React.CSSProperties}
          key={sv.slug}
        >
          <div className="icon-chip"><Icon name={sv.icon} /></div>
          <h3>{sv.title}</h3>
          <p>{sv.text}</p>
          <span className="tile-more">Learn more ›</span>
          {i === 0 && (
            <div className="mini-window" aria-hidden="true">
              <i /><i /><i />
              <div className="lines"><b style={{ width: "62%" }} /><b style={{ width: "84%" }} /><b style={{ width: "48%" }} /><b style={{ width: "70%" }} /></div>
            </div>
          )}
          {i === 5 && (
            <div className="mini-chat" aria-hidden="true">
              <span className="bubble me">Summarise this month&apos;s leads</span>
              <span className="bubble ai">42 new leads, 11 quoted. Want the top sources?</span>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
