import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { CompletedChallengesContainer, ButtonContainer } from './styles';


interface ChangeTimerProps {
    name: string;
    value: number;
}

export function CompletedChallenges() {
    const { challengesCompleted, activeChallenge } = useContext(ChallengesContext)
    const { initialValue, setInitialTime, isActive } = useContext(CountdownContext)

    function ChangeTimer({ name, value }: ChangeTimerProps) {
        if(isActive || activeChallenge) {
            return (
                <button disabled>
                    {name}
                </button>
            )
        } else {
            return (
                <button 
                    onClick={() => setInitialTime(value)}
                    style={{ filter: `${initialValue === value && 'brightness(80%)'}` }}
                >
                    {name}
                </button>
            )
        }
    }

    return (
        <CompletedChallengesContainer>
            <main>
                <span>Desafios Completos</span>
                <span>{challengesCompleted}</span>
            </main>

            <ButtonContainer>
                <ChangeTimer name="25 min" value={25 * 60} />
                <ChangeTimer name="10 min" value={10 * 60} />
                <ChangeTimer name="10 seg" value={10} />
            </ButtonContainer>
        </CompletedChallengesContainer>
    )
}