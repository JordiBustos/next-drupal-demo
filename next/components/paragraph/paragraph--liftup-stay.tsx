import { StayTeasers } from "@/components/stay/stay-teasers";
import type { FragmentParagraphLiftupStayFragment } from "@/lib/gql/graphql";

export function ParagraphLiftupStay({
  paragraph,
}: {
  paragraph: FragmentParagraphLiftupStayFragment;
}) {
  return (
    <section>
      <StayTeasers stays={paragraph.stays} heading={paragraph.heading} />
    </section>
  );
}
