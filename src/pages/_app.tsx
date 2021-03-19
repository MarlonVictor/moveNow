import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from '../styles/global';

import { ChallengesProvider } from '../contexts/ChallengesContext';


export default function MyApp({ Component, pageProps }) {
    return (
        <ChallengesProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </ChallengesProvider>
    )
}