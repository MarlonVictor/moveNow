import { Header, ProgressBarContainer, ProgressBar, CurrentExperience } from './styles';

export function ExperienceBar() {
    return (
        <Header>
            <span>0 xp</span>

            <ProgressBarContainer>
                <ProgressBar percentToNextLevel={20}/>
                <CurrentExperience percentToNextLevel={20}>
                    120 xp
                </CurrentExperience>
            </ProgressBarContainer>

            <span>600 xp</span>
        </Header>
    )
}