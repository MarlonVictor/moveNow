import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Provider, signOut } from 'next-auth/client';

import Cookies from 'js-cookie';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { lightTheme, darkTheme } from '../styles/themes';

import 'react-toastify/dist/ReactToastify.css';


export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const [theme, setTheme] = useState('')

    function toggleTheme() {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    useEffect(() => {
        const storedTheme = Cookies.get('theme')
        setTheme(storedTheme || 'light')
    }, [])

    useEffect(() => {
        Cookies.set('theme', theme)
    }, [theme])

    
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Provider session={pageProps.session}>
                <GlobalStyle />
                {router.pathname !== "/" && (
                    <>
                        <button onClick={toggleTheme}>Change</button>
                        <button onClick={(): Promise<void> => signOut({callbackUrl: 'http://localhost:3000/'})}>Quit</button>
                    </>
                )}
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    )
}