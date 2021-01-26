import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Container = styled.div`
  height: 10rem;
  max-width: ${({ theme }) => theme.dimensions.site_max_width};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.page_horizontal};
`;

const Logo = styled.div``;

const LogoIcon = styled.img`
  margin-right: 1.4rem;
`;

const LogoText = styled.img``;

const AppBar = ({ path }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowResize = () => {
    const mobileThresholdMet = window.innerWidth < 1000;
    mobileThresholdMet !== isMobile && setIsMobile(mobileThresholdMet);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          allPrismicNavigationBar {
            edges {
              node {
                data {
                  product_pages_nav {
                    text
                  }
                  get_a_demo_button {
                    text
                  }
                  logo_text {
                    url
                    alt
                  }
                  logo_icon {
                    url
                    alt
                  }
                  customers_page_nav {
                    text
                  }
                }
              }
            }
          }
          allPrismicProductPage {
            edges {
              node {
                data {
                  page_title {
                    text
                  }
                }
                uid
              }
            }
          }
        }
      `}
      render={(data) => {
        const {
          product_pages_nav,
          customers_page_nav,
          get_a_demo_button,
          logo_text,
          logo_icon,
        } = data.allPrismicNavigationBar.edges[0].node.data;
        const getADemoBtnText = get_a_demo_button.text;
        const productPagesNavText = product_pages_nav.text;
        const customersPageNavText = customers_page_nav.text;

        const productPages = data.allPrismicProductPage.edges.map((page) => {
          const url = page.node.uuid;
          const title = page.node.data.page_title.text;
          return { url, title };
        });

        const navProps = {
          getADemoBtnText,
          productPagesNavText,
          productPages,
          customersPageNavText,
          path,
        };
        return (
          <Container>
            <Logo>
              <LogoIcon src={logo_icon.url} />
              <LogoText src={logo_text.url} />
            </Logo>
            {isMobile ? (
              <NavMobile {...navProps} />
            ) : (
              <NavDesktop {...navProps} />
            )}
          </Container>
        );
      }}
    />
  );
};

export default AppBar;
