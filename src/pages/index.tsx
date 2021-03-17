import Head from 'next/head';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from '../components/ExperienceBar';
import { Countdown } from '../components/Countdown';
import { Profile } from '../components/Profile';

import { Container, Section } from '../styles/pages/home';


export default function Home() {
    return (
        <Container>
            <Head>
                <title>Home | moveNow</title>
            </Head>
            <ExperienceBar />

            <Section>
                <div>
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                </div>
            </Section>
        </Container>
    )
}