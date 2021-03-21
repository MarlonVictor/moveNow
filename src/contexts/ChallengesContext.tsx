import { createContext, ReactNode, useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import  Cookies from 'js-cookie';

import challenges from '../../challenges.json';


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

toast.configure()

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children, ...rest } : ChallengesProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    // power calculation to define the experience factor
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))

    }, [level, currentExperience, challengesCompleted])

    function levelUp() {
        setLevel(level + 1)
    }


    function startNewChallenge() {
        // generate a random number from 0 to the number of challenges we have in JSON 
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        toast.info(`🎉 Novo desafio valendo ${challenge.amount} xp!`, {
            position: 'top-right',  
        })
    }

    function resetChallenge() {
        setActiveChallenge(null)

        toast.info('😥 Na próxima você consegue!', {
            position: 'top-right',  
        })
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge
        let finalExperience = currentExperience + amount

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()

            toast.info(`😍 Incrível! Você subiu para o level ${level + 1}`, {
                position: 'top-right',  
            })

        } else {
            toast.info('😎 Mandou bem!', {
                position: 'top-right',  
            })
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    return (
        <ChallengesContext.Provider 
            value={{ 
                level, 
                currentExperience, 
                challengesCompleted, 
                experienceToNextLevel, 
                activeChallenge, 
                levelUp, 
                startNewChallenge,
                resetChallenge, 
                completeChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}