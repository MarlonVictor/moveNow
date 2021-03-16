import Head from 'next/head';

import { Container } from '../styles/pages/home';
import { ExperienceBar } from '../components/ExperienceBar';


export default function Home() {
    return (
        <Container>
            <Head>
                <title>Home | moveNow</title>
            </Head>
            <ExperienceBar />
        </Container>
    )
}