import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import isMobileScreen from "../components/utils/isMobileScreen";
import { CompanyPageParagraph } from "../components/typography";
import {
  Wrapper,
  Content,
  Blob,
  Card,
  Ellipse,
} from "../components/About/About.styles";
import CoreValues from "../components/About/CoreValues/CoreValues";
import TeamMembers from "../components/About/TeamMembers/TeamMembers";
import PageHero from "../components/PageHero/PageHero";

const AboutPage = ({ data, path }) => {
  if (!data.prismicAboutPage?.data) return null;
  const {
    page_description,
    page_keywords,
    page_title,
    page_sharing_image,
    subheadline,
    content,
    headline,
    team_members,
    core_values,
    twitter_logo,
    linkedin_logo,
    core_values_rotate_speed,
  } = data.prismicAboutPage.data;
  const isMobile = isMobileScreen();
  return (
    <Layout
      navigationData={data.prismicNavigation.data}
      footerData={data.prismicFooter.data}
    >
      <Seo
        title={page_title.text}
        desc={page_description.text}
        path={path}
        keywords={page_keywords}
        banner={page_sharing_image.url}
      />
      <Wrapper>
        <PageHero headline={headline.text} subheadline={subheadline.text} />
        <Content isMobile={isMobile}>
          <Card>
            {content.richText.map((paragraph, index) => (
              <CompanyPageParagraph key={`company-paragraph-${index}`}>
                {paragraph.text}
              </CompanyPageParagraph>
            ))}
          </Card>
          {!isMobile && <Blob />}
          <Ellipse />
        </Content>
        <CoreValues
          rotateSpeed={core_values_rotate_speed}
          coreValues={core_values}
        />
        <TeamMembers
          teamMembers={team_members}
          twitterLogo={twitter_logo}
          linkedInLogo={linkedin_logo}
        />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicAboutPage {
      data {
        headline {
          text
        }
        content {
          richText
        }
        page_description {
          text
        }
        page_keywords {
          keyword {
            text
          }
        }
        page_sharing_image {
          url
        }
        page_title {
          text
        }
        subheadline {
          text
        }
        core_values_rotate_speed
        linkedin_logo {
          alt
          dimensions {
            height
            width
          }
          url
        }
        twitter_logo {
          alt
          dimensions {
            height
            width
          }
          url
        }
        team_members {
          avatar {
            alt
            dimensions {
              height
              width
            }
            url
          }
          linkedin {
            url
          }
          name {
            text
          }
          title {
            text
          }
          twitter {
            url
          }
        }
        core_values {
          description {
            text
          }
          title {
            text
          }
        }
      }
    }
  }
`;

export default AboutPage;
