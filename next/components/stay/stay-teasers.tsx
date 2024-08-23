import Link from "next/link";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { StayTeaser } from "@/components/stay/stay-teaser";
import type { FragmentStayTeaserFragment } from "@/lib/gql/graphql";
import ArrowIcon from "@/styles/icons/arrow-down.svg";

import { buttonVariants } from "@/ui/button";

interface PromotedStaysProps {
  stays?: FragmentStayTeaserFragment[];
  heading: string;
}

export function StayTeasers({ stays, heading }: PromotedStaysProps) {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="text-heading-sm font-bold md:text-heading-md">
        {heading}
      </h2>
      <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {stays?.map((stay) => (
          <li key={stay.id}>
            <StayTeaser stay={stay} />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        {!stays?.length && <p className="py-4">{t("no-content-found")}</p>}
        {stays?.length && (
          <Link
            href="/all-stays"
            className={clsx(
              buttonVariants({ variant: "primary" }),
              "text-base mr-4 mt-4 inline-flex px-5 py-3",
            )}
          >
            {t("all-stays")}
            <ArrowIcon aria-hidden className="ml-3 h-6 w-6 -rotate-90" />
          </Link>
        )}
      </div>
    </>
  );
}
