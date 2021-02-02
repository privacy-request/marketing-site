import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
        } 

        // 1 rem = 10px; 10px/16px = 62.5%
        font-size: 62.5%;
        color: ${({ theme }) => theme.colour.grey.dark};
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
        font-family: "alliance-no-1", sans-serif;
        ul {
            list-style: none;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
    }

`;
