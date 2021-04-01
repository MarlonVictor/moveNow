import { useContext, useState } from 'react';
import { signOut } from 'next-auth/client';

import { ThemeContext } from '../../contexts/ThemeContext';

import { House } from '@styled-icons/bootstrap/House';
import { Github } from '@styled-icons/fa-brands/Github';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';
import { MenuOpen } from '@styled-icons/material-twotone/MenuOpen';

import { LogOut } from '@styled-icons/boxicons-regular/LogOut';
import { Lightbulb } from '@styled-icons/bootstrap/Lightbulb';
import { LightbulbOff } from '@styled-icons/bootstrap/LightbulbOff';

import { Overlay, Container, Content, ToggleButton } from './styles';


export function SideBar() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [isOpened, setIsOpened] = useState(false)

    return (
        <>
            <Overlay 
                className={isOpened ? 'visible' : 'invisible'}
                onClick={() => setIsOpened(false)}
            />
            <Container style={{left: `${isOpened ? '0' : '-7rem'}`}}>
                <Content>
                    <img src="/logo.png" alt="moveNow Logo" />

                    <main>
                        <House />
                        {theme === 'light' ? (
                            <LightbulbOff onClick={toggleTheme} />
                        ) : (
                            <Lightbulb onClick={toggleTheme} />
                        )}
                        <LogOut onClick={(): Promise<void> => signOut()} />
                    </main>

                    <footer>
                        <a href="https://github.com/MarlonVictor/moveNow" target="_blanc">
                            <Github />
                        </a>
                        <a href="https://www.linkedin.com/in/marlon-victor-2548b51a2" target="_blanc">
                            <Linkedin />
                        </a>
                    </footer>
                </Content>

                <ToggleButton onClick={() => setIsOpened(!isOpened)}>
                    <MenuOpen />
                </ToggleButton>
            </Container>
        </>
    )
}