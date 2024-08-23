import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import type { FragmentStayTeaserFragment } from "@/lib/gql/graphql";
interface StayTeaserProps {
  stay: FragmentStayTeaserFragment;
}

export function StayTeaser({ stay }: StayTeaserProps) {
  const { t } = useTranslation();
  const host = stay.author?.name;
  const firstImage = stay.images[0].mediaImage 

  console.log(stay)
  return (
    <Link
      href={stay.path}
      className="relative grid h-full rounded-md border border-finnishwinter p-4 transition-all hover:shadow-md"
    >
      {firstImage && (
        <Image
          src={firstImage.url}
          width={384}
          height={240}
          alt={firstImage.alt}
          className="max-w-full object-cover"
        />
      )}
      <h3 className="my-2 line-clamp-2 text-heading-xs font-medium">
        {stay.title}
      </h3>
      <div className="mb-4 line-clamp-2 text-md text-scapaflow">
        {host && <>{t("hosted-by", { host })} </>}
      </div>
      <p>
        <span className="font-bold me-1">
          ${stay.pricePerGuest}
        </span>
        {t("per-guest")}
      </p>
    </Link>
  );
}
