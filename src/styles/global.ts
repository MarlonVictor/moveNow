import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
            transition:.3s;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--blue);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover{
            background: var(--blue-dark);
        }
        ::-webkit-scrollbar-track{
            background: var(--gray-line);
            border-radius: 10px;
        }
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
    
    @media(max-width: 800px) {
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