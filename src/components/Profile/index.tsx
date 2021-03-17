import { ProfileContainer } from './styles';


export function Profile() {
    return (
        <ProfileContainer>
            <img src="https://github.com/MarlonVictor.png" alt="Marlon Victor" />
            <div>
                <strong>Marlon Victor</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </ProfileContainer>
    )
}