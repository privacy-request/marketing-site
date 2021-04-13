import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import LegalPageLayout from "../components/LegalPage/LegalPageLayout";
import LegalPageSection from "../components/LegalPage/LegalPageSection";
import { LegalPageParagraph } from "../components/typography";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 83rem;
  margin: auto;
`;

const LegalPage = ({ data, path }) => {
  const {
    description,
    keywords,
    title,
    date,
    effective,
    introduction,
    body,
  } = data.legalPage.data;
  const sections = body.map((section) => ({
    heading: section.primary.heading.text,
    tocNumber: section.primary.tocNumbr,
    subSections: section.items.map((item) => ({
      subheading: item.subheading,
      paragraph: item.paragraph,
    })),
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
        <Wrapper>
          <LegalPageParagraph>{`${effective.text} ${date}`}</LegalPageParagraph>
          {introduction.map((paragraph) => (
            <LegalPageParagraph>{paragraph.paragraph.text}</LegalPageParagraph>
          ))}
          {sections.map((section, index) => (
            <LegalPageSection {...section} tocNumber={index + 1} />
          ))}
        </Wrapper>
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
        date(formatString: "")
        effective {
          text
        }
        introduction {
          paragraph {
            text
          }
        }
        body {
          ... on PrismicLegalPageBodyNumberedSection {
            id
            primary {
              heading {
                text
              }
              tocNumber: toc_number
            }
            items {
              paragraph {
                text
              }
              subheading {
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
