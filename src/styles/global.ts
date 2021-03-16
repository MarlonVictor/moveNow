import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;


        box-sizing: border-box;
    }
    :root {
        --background: #F2F3F5;
        --gray-line: #DCDDE0;
        --text: #666666;
        --green: #4CD62B;
    }

    @media(max-width: 1080px) {
        html {
            // 15px
            font-size: 93.75%;
        }
    }
    
    @media(max-width: 720px) {
        html {
            // 14px
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        color: var(--text);
    }

    h1 {
        color: var(--title);
    }

    body, input, textarea, button {
        font: 400 1rem 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`