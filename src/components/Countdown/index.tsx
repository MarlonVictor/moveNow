import { useContext } from 'react';

import { CountdownContext } from '../../contexts/CountdownContext';

import { CountdownContainer, CountdownButton } from './styles';

import { Close } from '@styled-icons/evaicons-solid/Close';
import { Play } from '@styled-icons/foundation/Play';
import { CheckCircle } from '@styled-icons/boxicons-solid/CheckCircle';


export function Countdown() {
    const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
    
    return (
        <div>
            <CountdownContainer>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </CountdownContainer>

            {hasFinished ? (
                <CountdownButton active={isActive} disabled>
                    <b>Ciclo encerrado <CheckCircle /></b>
                    <span></span>
                </CountdownButton>
            ) : (
                <>
                    {isActive ? (
                        <CountdownButton 
                            type="button" 
                            active={isActive}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo <Close />
                        </CountdownButton>
                    ) : (
                        <CountdownButton 
                            type="button" 
                            active={isActive}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo <Play />
                        </CountdownButton>
                    )}
                </>
            )}
        </div>
    )
}