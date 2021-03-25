import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox';
import { Countdown } from '../components/Countdown';
import { Profile } from '../components/Profile';

import { Container, Section } from '../styles/pages/home';


interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {
    const [session] = useSession()
    const router = useRouter()

    useEffect(() => {
        if(!session) {
            router.push('/')
        }
    }, [])


    if(session) {
        return (
            <ChallengesProvider 
                level={props.level} 
                currentExperience={props.currentExperience} 
                challengesCompleted={props.challengesCompleted}
            >
                <Container>
                    <Head>
                        <title>Home | moveNow</title>
                    </Head>
    
                    <ExperienceBar />
    
                    <CountdownProvider>
                        <Section>
                            <div>
                                <Profile user={session.user} />
                                <CompletedChallenges />
                                <Countdown />
                            </div>
                            <div>
                                <ChallengeBox />
                            </div>
                        </Section>
                    </CountdownProvider>
                </Container>
            </ChallengesProvider>
        )
    } else {
        return null
    }
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {level, currentExperience, challengesCompleted} = ctx.req.cookies

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
        }
    }
}