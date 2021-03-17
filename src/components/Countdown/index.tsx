import { useEffect, useState } from 'react';
import { CountdownContainer, CountdownButton } from './styles';

import { Close } from '@styled-icons/evaicons-solid/Close';
import { Play } from '@styled-icons/foundation/Play';
import { CheckCircle } from '@styled-icons/boxicons-solid/CheckCircle';


let countdownTimeout: NodeJS.Timeout

export function Countdown() {
    const [isActive, setIsActive] = useState(false)
    const [time, setTime] = useState(0.05 * 60)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.05 * 60)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)

        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
        }
    }, [isActive, time])

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