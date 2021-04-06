import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import LegalPageLayout from "../components/LegalPage/LegalPageLayout";
import LegalPageSection from "../components/LegalPage/LegalPageSection";

const LegalPage = ({ data, path }) => {
  const { description, keywords, title, body } = data.legalPage.data;
  const content = body.map((section) => ({
    heading: section.primary.heading.text,
    paragraphs: section.items.map((p) => p.paragraph.text),
  }));
  return (
    <Layout>
      <SEO
        title={title.text}
        desc={description.text}
        path={path}
        keywords={keywords}
      />
      <LegalPageLayout title={title.text}>
        {content.map(({ heading, paragraphs }) => (
          <LegalPageSection {...{ heading, paragraphs }} />
        ))}
      </LegalPageLayout>
    </Layout>
  );
};

export const query = graphql`
  query LegalPageQuery($slug: String) {
    legalPage: prismicLegalPage(uid: { eq: $slug }) {
      id
      data {
        description: page_description {
          text
        }
        keywords: page_keywords {
          keyword {
            text
          }
        }
        title: page_title {
          text
        }
        body {
          ... on PrismicLegalPageBodyTextSection {
            id
            primary {
              heading {
                text
              }
            }
            items {
              paragraph {
                text
              }
            }
          }
        }
      }
    }
  }
`;

export default LegalPage;
