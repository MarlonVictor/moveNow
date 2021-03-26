import Head from 'next/head';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';

import { Github } from '@styled-icons/fa-brands/Github';
import { RightArrowAlt }  from '@styled-icons/boxicons-regular/RightArrowAlt';

import { Background, Container, LoginButton } from '../styles/pages/login';


export default function Login() {
    const [session] = useSession()
    const router = useRouter()

    if (session) {
        router.push('/home')
    }

    return (
        <Background>
            <Head>
                <title>Login | moveNow</title>
            </Head>

            <Container>
                <div>
                    <main>
                        <img src="/full-logo.png" alt="Logo da MoveNow" />
                    </main>
                    <h1>Bem-vindo</h1>

                    <p>
                        <Github />
                        Faça login com seu Github para começar
                    </p>

                    <LoginButton onClick={(): Promise<void> => signIn('github', {callbackUrl: 'http://localhost:3000/home'})}>
                        <span>Entrar com Github</span>
                        <RightArrowAlt />
                    </LoginButton>
                </div>
            </Container>
            
        </Background>
    )
}