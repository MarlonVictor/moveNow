import styled from 'styled-components';


export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: var(--title);

    > div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background: var(--white);
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
        border-radius: 5px;

        font-size: 8rem;
        text-align: center;

        span:first-child {
            flex: 1;
            border-right: 1px solid #F0F1F3;
        }

        span:last-child {
            flex: 1;
            border-left: 1px solid #F0F1F3;
        }
    }

    > span {
        font-size: 6rem;
        margin: 0 0.5rem;
    }
`

export const CountdownButton = styled.button`
    width: 100%;
    height: 4.5rem;
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border: 0;
    border-radius: 5px;

    background: var(--blue);
    color: var(--white);

    font-size: 1.20rem;
    font-weight: 600;

    transition: background-color 0.2s;

    &:hover {
        background: var(--blue-dark);
    }
`