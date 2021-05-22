import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import { withPreview } from "gatsby-source-prismic";
import isMobileScreen from "../components/utils/isMobileScreen";
import {
  CompanyPageTitle,
  CompanyPageSubTitle,
  CompanyPageParagraph,
} from "../components/typography";
import AboutContentEllipse from "../../assets/aboutContentEllipse.svg";
import {
  Wrapper,
  HeroBackground,
  Hero,
  Content,
  Blob,
  Card,
} from "../components/About/About.styles";
import CoreValues from "../components/About/CoreValues/CoreValues";
import TeamMembers from "../components/About/TeamMembers/TeamMembers";

const AboutPage = ({ data, path }) => {
  const {
    page_description,
    page_keywords,
    page_title,
    subheadline,
    content,
    headline,
    team_members,
    core_values,
    twitter_logo,
    linkedin_logo,
  } = data.prismicAboutPage.data;
  const isMobile = isMobileScreen();

  return (
    <Layout
      navigationBarData={data.prismicNavigationBar.data}
      footerData={data.prismicFooter.data}
      cookieBannerData={data.prismicCookieBanner.data}
    >
      <Seo
        title={page_title.text}
        desc={page_description.text}
        path={path}
        keywords={page_keywords}
      />
      <Wrapper>
        <Hero>
          <CompanyPageTitle>{headline.text}</CompanyPageTitle>
          <CompanyPageSubTitle>{subheadline.text}</CompanyPageSubTitle>
          {!isMobile && <HeroBackground />}
        </Hero>
        <Content isMobile={isMobile}>
          <Card>
            {content.raw.map((paragraph) => (
              <CompanyPageParagraph>{paragraph.text}</CompanyPageParagraph>
            ))}
          </Card>
          {!isMobile && <Blob />}
          <AboutContentEllipse />
        </Content>
        <CoreValues coreValues={core_values} />
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
    prismicNavigationBar {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    prismicAboutPage {
      data {
        headline {
          text
        }
        content {
          raw
        }
        page_description {
          text
        }
        page_keywords {
          keyword {
            text
          }
        }
        page_title {
          text
        }
        subheadline {
          text
        }
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

export default withPreview(AboutPage);
