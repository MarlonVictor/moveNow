import { createContext, ReactNode, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Cookies from "js-cookie";

import { lightTheme, darkTheme } from '../styles/themes';


interface ThemeContextData {
    theme: DefaultTheme
    toggleTheme(): void
}

interface ThemesProviderProps {
    children: ReactNode;
}
  
export const ThemeContext = createContext({} as ThemeContextData)

export function ThemesProvider({ children }: ThemesProviderProps) {
    const [theme, setTheme] = useState('')

    useEffect(() => {
        const storedTheme = Cookies.get('theme')
        setTheme(storedTheme || 'light')
    }, [])

    useEffect(() => {
        Cookies.set('theme', theme)
    }, [theme])

    function toggleTheme() {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}