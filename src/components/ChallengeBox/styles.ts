import styled from 'styled-components';


export const ChallengeBoxContainer = styled.div`
    height: 100%;

    background: ${({ theme }) => theme.card};
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    margin-left: 2.3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    @media(max-width: 720px) {
        margin-left: 0;
    }
`

export const ChallengeNotActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 80%;

    strong {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
    }

    p {
        display: flex;
        align-items: center;
        text-align: start;

        line-height: 1.4;

        margin-top: 3rem;

        img {
            margin-right: 1.5rem;
            width: 2.7rem;
        }
    }
`

export const ChallengeActive = styled.div`
    height: 100%;
    
    display: flex;
    flex-direction: column;

    > div {
        display: flex;
        flex-direction: column;

        height: 100%;
        padding: 1.5rem 2rem;
    }

    header {
        color: ${({ theme }) => theme.title};
        font-weight: 600;
        font-size: 1.25rem;

        padding: 0 2rem 1.5rem;
        border-bottom: 1px solid ${({ theme }) => theme.grayLine};
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        strong {
            font-size: 2rem;
            font-weight: 600;
            color: ${({ theme }) => theme.title};

            margin: 1.5rem 0 1rem;
        }

        p {
            line-height: 1.5;
        }
    }

    footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-top: 1px solid ${({ theme }) => theme.grayLine};

        button {
            height: 4.4rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 0;

            color: #FFF;
            font-size: 1.2rem;
            font-weight: 500;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(.9);
            }
        }

        button:first-child {
            color: ${({ theme }) => theme.btnRed.color};
            background: ${({ theme }) => theme.btnRed.background};

            border-radius: 0px 0px 0px 5px;
            border-right: 1px solid ${({ theme }) => theme.grayLine};
        }

        button:last-child {
            color: ${({ theme }) => theme.btnGreen.color};
            background: ${({ theme }) => theme.btnGreen.background};

            border-radius: 0px 0px 5px 0px;
            border-left: 1px solid ${({ theme }) => theme.grayLine};
        }
    }
`