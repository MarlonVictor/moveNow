import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;


        box-sizing: border-box;
    }
    
    :root {
        --background: #F2F3F5;
        --white: #FFF;
        --gray-line: #DCDDE0;
        --text: #666666;
        --title: #2E384D;
        --green: #4CD62B;
        --red: #E83F5B;
        --blue: #007580;
        --blue-dark: #006570;
    }
    
    .Toastify__toast--info {
        background: var(--blue);
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