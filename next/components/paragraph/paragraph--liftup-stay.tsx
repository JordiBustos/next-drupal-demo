// import { ArticleTeasers } from "@/components/article/article-teasers";
import type { FragmentParagraphLiftupStayFragment } from "@/lib/gql/graphql";

export function ParagraphLiftupStay({
  paragraph,
}: {
  paragraph: FragmentParagraphLiftupStayFragment;
}) {
  console.log("me", paragraph);
  return (
    <section>
      <h1>hola hola jeje</h1>
    </section>
  );
}
