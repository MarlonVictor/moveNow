import styled from 'styled-components';


export const CompletedChallengesContainer = styled.div`
    margin: 2.75rem 0;

    main {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-bottom: 1rem;
        border-bottom: 1px solid ${({ theme }) => theme.grayLine};

        font-weight: 500;

        span:first-child {
            font-size: 1.2rem;
        }
        
        span:last-child {
            font-size: 1.4rem;
        }
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    button {
        padding: 2px;
        width: 100%;

        font-size: .8rem;
        color: ${({ theme }) => theme.text};
        
        background: ${({ theme }) => theme.grayLine};
        border: 1px solid rgba(0, 0, 0, 0.1);

        transition: filter .3s;

        &:hover {
            filter: brightness(90%);
        }

        &:disabled {
            background: transparent;
            border-color: transparent;

            filter: brightness(100%);
            cursor: default;
        }
    }
`