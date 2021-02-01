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
        medium: "#E6F5FF",
        light: "#E6F5FF",
      },
      white: "#FFFFFF",
      yellow: "#FFF170",
      gradient: {
        text: {
          blue:
            "linear-gradient(92.13deg, #009DFF 3.73%, #6BCBFF 60.51%, #8FD8FF 86.59%)",
        },
        backgrounds: {
          light:
            "linear-gradient(360deg, #FFFFFF 11.41%, rgba(255, 255, 255, 0) 53.93%)",
          medium: "linear-gradient(183.3deg, #6BCBFF 27.45%, #8FD8FF 95.76%)",
          dark: "linear-gradient(182.55deg, #203546 29.62%, #2D485E 83.17%)",
          yellow: "linear-gradient(183.3deg, #6BCBFF 27.45%, #8FD8FF 95.76%)",
        },
      },
    },
    spacing: {
      pageHorizontal: "5rem",
      navItems: "3.7rem",
    },
    dimensions: {
      siteMaxWidth: "124rem",
      appBarHeight: "10rem",
      appBarHeightMobile: "7.9rem",
      callToActionHeight: "4.8rem",
    },
    borderRadius: {
      button: "4rem",
    },
  },
  typographyTheme
);
