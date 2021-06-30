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

        body {
            overflow-x: hidden;
        }

        // 1 rem = 10px; 10px/16px = 62.5%
        font-size: 62.5%;
        color: ${({ theme }) => theme.colour.grey.dark};
        ul {
            list-style: none;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
    }

`;
