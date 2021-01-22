import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        @font-face {
            font-family: "alliance-no-1";
            src: url("/fonts/AllianceNo1-Light.otf");
            font-weight: normal;
        }

        @font-face {
            font-family: "alliance-no-1";
            src: url("/fonts/AllianceNo1-Bold.ttf");
            font-weight: bold;
        }
        font-family: "alliance-no-1";
    }

`;