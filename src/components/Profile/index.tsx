import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { ProfileContainer } from './styles';


export function Profile({ user }: any) {
    const { level } = useContext(ChallengesContext)

    return (
        <ProfileContainer>
            <img src={user.image} alt={user.name} />
            <div>
                <strong>{user.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </ProfileContainer>
    )
}