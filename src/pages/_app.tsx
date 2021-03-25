import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import { ThemeProvider } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from '../styles/global';
import { lightTheme, darkTheme } from '../styles/themes';


export default function MyApp({ Component, pageProps }: AppProps) {
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
            <GlobalStyle />
            {/* <button onClick={toggleTheme}>Change</button> */}
            <Component {...pageProps} />
        </ThemeProvider>
    )
}