import React, { useRef } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import styled from "styled-components";
import { LegalPageTitle } from "../components/typography";
import { SCREEN_SIZES } from "../components/utils/constants";
import LegalPage from "../components/PrivacyCenter/LegalPage";
import assignContent from "../components/PrivacyCenter/assignContent";
import PrivacyNav from "../components/PrivacyCenter/PrivacyNav";

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.width.section};
  margin: 4.4rem auto;
  padding: 0 3rem;
`;

const Title = styled(LegalPageTitle)`
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 5rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    padding-bottom: 3rem;
  }
`;

const NavAndContentWrapper = styled.div`
  display: flex;
  margin-top: 7rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column;
    margin-top: 4rem;
  }
`;

const Content = styled.div`
  margin: auto;
`;

const PrivacyCenter = ({ data, path }) => {
  const {
    title,
    description,
    keywords,
    firstSection,
    lastSection,
    body,
  } = data.legalPage.data;

  const uid = data.legalPage.uid;

  const sections = body.map((section, index) => {
    const tocNumber = index + 1;
    return {
      heading: section.primary.heading.text,
      tocNumber,
      content: section.items.map((subSection, index) =>
        assignContent({
          content: subSection.content.raw,
          subheading: subSection.subheading,
          tocNumber,
          tocSubNumber: index + 1,
        })
      ),
    };
  });

  const replaceSpacesWithDashes = (str) =>
    str.replace(/\s+/g, "-").toLowerCase();

  return (
    <Layout>
      <SEO
        title={title.text}
        desc={description.text}
        path={path}
        keywords={keywords}
      />
      <Wrapper>
        <Title>{title.text}</Title>
        <NavAndContentWrapper>
          <PrivacyNav
            sections={sections}
            currentRoute={uid}
            replaceSpacesWithDashes={replaceSpacesWithDashes}
          />
          <Content>
            <LegalPage
              {...{
                firstSection,
                lastSection,
                sections,
                uid,
                replaceSpacesWithDashes,
              }}
            />
          </Content>
        </NavAndContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query LegalPageQuery($slug: String) {
    legalPage: prismicLegalPage(uid: { eq: $slug }) {
      uid
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
        firstSection: first_section {
          raw
        }
        lastSection: last_section {
          raw
        }
        body {
          ... on PrismicLegalPageBodyNumberedSection {
            id
            primary {
              heading {
                text
              }
            }
            items {
              content {
                raw
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

export default PrivacyCenter;
