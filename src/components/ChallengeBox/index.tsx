import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { ChallengeBoxContainer, ChallengeNotActive, ChallengeActive } from './styles';


export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <ChallengeBoxContainer>
            {activeChallenge ? (
                <ChallengeActive>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio!</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" onClick={handleChallengeFailed}>Falhei</button>
                        <button type="button" onClick={handleChallengeSucceeded}>Completei</button>
                    </footer>
                </ChallengeActive>

            ) : (
                <ChallengeNotActive>
                    <strong>Inicie um ciclo para receber desafios a serem completados</strong> 
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Complete-os e ganhe experiência e avance de level 
                    </p>
                </ChallengeNotActive>
            )}
        </ChallengeBoxContainer>
    )
}