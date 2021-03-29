import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { ChallengesContext } from "./ChallengesContext";


interface CountdownContextData {
    minutes: number;
    seconds: number;
    initialValue: number;
    hasFinished: boolean;
    isActive: boolean;
    setInitialTime: (time: number) => void;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

let countdownTimeout: any

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext)

    const [isActive, setIsActive] = useState(false)
    const [initialValue, setInitialValue] = useState(25 * 60)
    const [time, setTime] = useState(initialValue)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    function startCountdown() {
        setIsActive(true)
    }

    function setInitialTime(time: number) {
        setInitialValue(time)
        setTime(time)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setHasFinished(false)
        setTime(initialValue)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)

        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])


    return (
        <CountdownContext.Provider
            value={{
                minutes,
                seconds,
                initialValue,
                hasFinished,
                isActive,
                setInitialTime,
                startCountdown,
                resetCountdown
            }}
        >
            {children}
        </CountdownContext.Provider>
    )
}