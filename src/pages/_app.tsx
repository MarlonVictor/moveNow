import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Provider } from 'next-auth/client';

import Cookies from 'js-cookie';

import { ThemesProvider } from '../contexts/ThemeContext';
import { GlobalStyle } from '../styles/global';

import 'react-toastify/dist/ReactToastify.css';


export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider session={pageProps.session}>
            <ThemesProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemesProvider>
        </Provider>
    )
}