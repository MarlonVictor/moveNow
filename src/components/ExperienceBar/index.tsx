import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Header, ProgressBarContainer, ProgressBar, CurrentExperience } from './styles';


export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const calcPercentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <Header>
            <span>0 xp</span>

            <ProgressBarContainer>
                <ProgressBar percentToNextLevel={calcPercentToNextLevel}/>
                <CurrentExperience percentToNextLevel={calcPercentToNextLevel}>
                    {currentExperience}xp
                </CurrentExperience>
            </ProgressBarContainer>

            <span>{experienceToNextLevel} xp</span>
        </Header>
    )
}