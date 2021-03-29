import styled, { css } from 'styled-components';

interface Props {
    active: boolean;
}


export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${({ theme }) => theme.title};
    margin-top: -5px;

    > div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background: ${({ theme }) => theme.card};
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
        border-radius: 5px;

        font-size: 8rem;
        text-align: center;

        &:last-child {
            @media(max-width: 720px) {
                margin-top: 1rem;
            }
        }

        @media(max-width: 425px) {
            font-size: 7rem;
        }

        span:first-child {
            flex: 1;
            border-right: 1px solid ${({ theme }) => theme.grayLine};
        }

        span:last-child {
            flex: 1;
            border-left: 1px solid ${({ theme }) => theme.grayLine};
        }
    }

    > span {
        font-size: 6rem;
        margin: 0 0.5rem;
    }
`

export const CountdownButton = styled.button<Props>`
    width: 100%;
    height: 4.5rem;
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    border: 0;
    border-radius: 5px;

    font-size: 1.20rem;
    font-weight: 600;

    transition: background-color 0.2s;

    svg {
        width: 1.6rem;
        height: 1.6rem;

        margin-left: 0.5rem;
    }

    &:disabled {
        flex-direction: column;
        justify-content: space-between;

        padding-top: 1.4rem;
        
        background: ${({ theme }) => theme.card};
        color: ${({ theme }) => theme.text};

        cursor: not-allowed;

        span {
            width: 100%;
            height: .2rem;
            
            background: var(--green);
            border-radius: 0 0 5px 5px;
        }

        svg {
            color: var(--green);
        }
    }

    ${({ active }) => 
        active ? css`
            background: ${({ theme }) => theme.card};
            color: ${({ theme }) => theme.title};

            svg {
                color: var(--red);
            }

            &:not(:disabled):hover {
                background: var(--red);
                color: #FFF;

                svg {
                    color: #FFF;
                }
            }
        `
        : css`
            background: var(--blue);
            color: #FFF;

            &:not(:disabled):hover {
                background: var(--blue-dark);
            }
        `
    }
`