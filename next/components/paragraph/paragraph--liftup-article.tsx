import { ArticleTeasers } from "@/components/article/article-teasers";
import type { FragmentParagraphLiftupArticleFragment } from "@/lib/gql/graphql";

export function ParagraphLiftupArticle({
  paragraph,
}: {
  paragraph: FragmentParagraphLiftupArticleFragment;
}) {
  console.log(paragraph);
  return (
    <section>
      <ArticleTeasers
        articles={paragraph.articles}
        heading={paragraph.heading}
      />
    </section>
  );
}
