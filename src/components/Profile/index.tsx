import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { ProfileContainer } from './styles';


export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <ProfileContainer>
            <img src="https://github.com/MarlonVictor.png" alt="Marlon Victor" />
            <div>
                <strong>Marlon Victor</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </ProfileContainer>
    )
}