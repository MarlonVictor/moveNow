import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E83F5B;
        --green: #4CD62B;
        --blue: #007580;
        --blue-dark: #006570;
    }

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        transition: background-color 0.3s;

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
            background: #DCDDE0;
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