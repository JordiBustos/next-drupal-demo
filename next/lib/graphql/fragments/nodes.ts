import { graphql } from "@/lib/gql";

export const FRAGMENT_NODE_UNION = graphql(`
  fragment FragmentNodeUnion on NodeInterface {
    __typename
    id
    title
    status
    path
    langcode {
      id
    }
    created {
      timestamp
    }
    changed {
      timestamp
    }
    metatag {
      ...FragmentMetaTag
    }
    ...FragmentNodeArticle
    ...FragmentNodeStay
    ...FragmentNodeFrontpage
    ...FragmentNodePage
  }
`);

export const FRAGMENT_NODE_ARTICLE = graphql(`
  fragment FragmentNodeArticle on NodeArticle {
    excerpt
    sticky
    body {
      ...FragmentTextSummary
    }
    image {
      ...FragmentImage
    }
    author {
      __typename
      ... on User {
        ...FragmentUser
      }
    }
    translations {
      ...FragmentNodeTranslation
    }
  }
`);

export const FRAGMENT_NODE_STAY = graphql(`
  fragment FragmentNodeStay on NodeStay {
    sticky
    bodyText
    images {
      mediaImage {
        ...FragmentImage
      }
    }
    author {
      __typename
      ... on User {
        ...FragmentUser
      }
    }
    pricePerGuest
    activities
    checkIn
    checkOut
    extraInformation
    location {
      country {
        name
      }
      locality
      givenName
      familyName
    }
    maximumGuests
    neighborhoodHighlights
    translations {
      ...FragmentNodeTranslation
    }
  }
`);

export const FRAGMENT_NODE_FRONTPAGE = graphql(`
  fragment FragmentNodeFrontpage on NodeFrontpage {
    contentElements {
      ... on ParagraphInterface {
        __typename
        id
        # Here we include only the paragraph types that can actually be used in the field
        # contentElements for this node type. Using the generated union type, we can be sure
        # that all fragments we use here can actually be used.
        ... on NodeFrontpageContentElementsUnion {
          ...FragmentParagraphFormattedText
          ...FragmentParagraphLink
          ...FragmentParagraphImage
          ...FragmentParagraphVideo
          ...FragmentParagraphFileAttachments
          ...FragmentParagraphHero
          ...FragmentParagraphAccordion
          ...FragmentParagraphListingArticle
          ...FragmentParagraphLiftupArticle
          ...FragmentParagraphLiftupStay
        }
      }
    }
    translations {
      ...FragmentNodeTranslation
    }
  }
`);

export const FRAGMENT_NODE_PAGE = graphql(`
  fragment FragmentNodePage on NodePage {
    contentElements {
      ... on ParagraphInterface {
        __typename
        id
        # Here we include only the paragraph types that can actually be used in the field
        # contentElements for this node type. Using the generated union type, we can be sure
        # that all fragments we refer to here can actually be used.
        ... on NodePageContentElementsUnion {
          ...FragmentParagraphFormattedText
          ...FragmentParagraphLink
          ...FragmentParagraphImage
          ...FragmentParagraphVideo
          ...FragmentParagraphFileAttachments
          ...FragmentParagraphHero
          ...FragmentParagraphAccordion
          ...FragmentParagraphListingArticle
          ...FragmentParagraphAccordion
          ...FragmentParagraphLiftupArticle
        }
      }
    }
    translations {
      ...FragmentNodeTranslation
    }
  }
`);

export const FRAGMENT_ARTICLE_TEASER = graphql(`
  fragment FragmentArticleTeaser on NodeArticle {
    __typename
    id
    image {
      ...FragmentImage
    }
    path
    title
    sticky
    excerpt
    created {
      timestamp
    }
    author {
      __typename
      ... on User {
        ...FragmentUser
      }
    }
  }
`);

export const FRAGMENT_STAY_TEASER = graphql(`
  fragment FragmentStayTeaser on NodeStay {
    __typename
    id
    images {
      id
      mediaImage {
        ...FragmentImage
      }
    }
    path
    title
    sticky
    created {
      timestamp
    }
    author {
      __typename
      ... on User {
        ...FragmentUser
      }
    }
    pricePerGuest
  }
`);
