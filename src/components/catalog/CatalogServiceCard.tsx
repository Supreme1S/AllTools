import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProtocolIcon } from "@/components/ProtocolIcon";
import type { Service } from "@/types";

export function CatalogServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <Link
      href={`/tools/${service.slug}`}
      className={`catalog-card-shell catalog-card-enter stagger-${Math.min(index + 1, 12)}`}
    >
      <article className="catalog-card">
        <div className="catalog-card-head">
          <ProtocolIcon
            name={service.name}
            image={service.image}
            domain={service.domain}
            size={52}
            className="catalog-card-icon"
          />
          <div className="catalog-card-head-text">
            <h2 className="catalog-card-name">{service.name}</h2>
            <p className="catalog-card-domain">{service.domain}</p>
          </div>
          <ArrowUpRight size={18} className="catalog-card-corner" aria-hidden />
        </div>

        <p className="catalog-card-desc">{service.short_description}</p>

        <div className="catalog-card-foot">
          <span className="catalog-card-category">{service.category}</span>
          <span className="catalog-card-link">Подробнее</span>
        </div>
      </article>
    </Link>
  );
}
