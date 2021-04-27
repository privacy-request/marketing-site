import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import {
  LegalPageNavItem,
  LegalPageNavSubItem,
} from "../components/typography";
import styled from "styled-components";
import { LegalPageTitle } from "../components/typography";
import { SCREEN_SIZES } from "../components/utils/constants";
import LegalPage from "../components/PrivacyCenter/LegalPage";
import assignContent from "../components/PrivacyCenter/assignContent";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
  min-width: 16rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: row;
    margin-bottom: 3rem;
  }
`;

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
  const [currentPage, setCurrentPage] = useState(
    path.substring(1, path.length - 1)
  );
  const pages = data.legalPage.edges.map((pageData) => ({
    ...pageData.node.data,
    uid: pageData.node.uid,
  }));

  const activePage = pages.find(({ uid }) => uid === currentPage);
  const {
    title,
    description,
    keywords,
    effective,
    date,
    firstSection,
    lastSection,
    body,
  } = activePage;

  const navLinks = pages.map(({ title, body, uid }, index) => ({
    title: title.text,
    index,
    uid,
    subheadings: body.map(({ primary: { heading } }, subindex) => ({
      subheading: heading ? heading.text : "",
      subindex,
    })),
  }));

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
          <NavWrapper>
            {navLinks.map(({ title, index, subheadings, uid }) => (
              <React.Fragment key={`lp-ni-${index}`}>
                <LegalPageNavItem to={`/${uid}`}>{title}</LegalPageNavItem>
                {subheadings.map(({ subheading }, subindex) => (
                  <LegalPageNavSubItem key={`lp-nav-si-${subindex}`}>
                    {subheading}
                  </LegalPageNavSubItem>
                ))}
              </React.Fragment>
            ))}
          </NavWrapper>
          <Content>
            <LegalPage
              {...{
                effective,
                date,
                firstSection,
                lastSection,
                sections,
                currentPage,
              }}
            />
          </Content>
        </NavAndContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query PrivacyCenterQuery {
    legalPage: allPrismicLegalPage {
      edges {
        node {
          uid
          data {
            title: page_title {
              text
            }
            keywords: page_keywords {
              keyword {
                text
              }
            }
            description: page_description {
              text
            }
            effective {
              text
            }
            date(formatString: "")
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
    }
  }
`;

export default PrivacyCenter;
