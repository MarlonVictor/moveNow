import styled from 'styled-components';


export const CompletedChallengesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 2.75rem 0;
    padding-bottom: 1rem;

    border-bottom: 1px solid ${({ theme }) => theme.grayLine};
    font-weight: 500;

    span:first-child {
        font-size: 1.2rem;
    }
    
    span:last-child {
        font-size: 1.4rem;
    }
`