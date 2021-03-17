import { typographyTheme } from "../typography";

export default Object.assign(
  {
    colour: {
      blue: {
        dark: "#009DFF",
        medium: "#4DA9DA",
        light: "#F7FCFF",
      },
      grey: {
        dark: "#203546",
        medium: "#E3E3E3;",
        light: "#E6F5FF",
      },
      white: "#FFFFFF",
      yellow: "#FFF170",
      gradient: {
        text: {
          blue:
            "linear-gradient(92.13deg, #009DFF 3.73%, #6BCBFF 60.51%, #8FD8FF 86.59%)",
        },
        background: {
          light:
            "linear-gradient(360deg, #FFFFFF 11.41%, rgba(255, 255, 255, 0) 53.93%)",
          medium: "linear-gradient(183.3deg, #6BCBFF 27.45%, #8FD8FF 95.76%)",
          dark: "linear-gradient(182.55deg, #203546 29.62%, #2D485E 83.17%)",
          yellow: "linear-gradient(183.3deg, #6BCBFF 27.45%, #8FD8FF 95.76%)",
        },
      },
    },
    width: {
      site: "144rem",
      section: "120rem",
      productPage: "123.3rem",
      productPageHero: "82rem",
      sectionColumLg: "70rem",
      sectionColum: "49rem",
      heroHeadline: "52rem",
      bookADemo: "83.4rem",
    },
    padding: {
      site: "3rem",
    },
    margin: {
      navItemDesktop: "3.7rem",
      homepageHero: {
        desktop: "0 0 2.7rem auto",
        mobile: "1.2rem 0 3.9rem 0",
      },
      homepageHeader: "5.6rem",
      homepageSections: "0rem",
      customerLogos: {
        desktop: "4.2rem",
        mobile: "3.2rem",
      },
      paragraph: "2.8rem",
      homepageHeadline: {
        desktop: "1.2rem",
        mobile: "1rem",
      },
    },
    height: {
      appBar: {
        desktop: "10rem",
        mobile: "7.9rem",
      },
      callToAction: "4.8rem",
    },
    borderRadius: {
      button: "4rem",
      bookADemo: "1rem",
      input: "0.8rem",
    },
  },
  typographyTheme
);
