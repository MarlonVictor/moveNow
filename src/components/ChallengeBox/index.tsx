import { ChallengeBoxContainer, ChallengeNotActive, ChallengeActive } from './styles';

export function ChallengeBox() {
    const hasActiveChallenge = true

    return (
        <ChallengeBoxContainer>
            {hasActiveChallenge ? (
                <ChallengeActive>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio!</strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>

                    <footer>
                        <button type="button">Falhei</button>
                        <button type="button">Completei</button>
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