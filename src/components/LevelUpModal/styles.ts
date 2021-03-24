import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.bgGradient}
`

export const Container = styled.div`
    padding: 2rem 3rem;
    width: 100%;
    max-width: 400px;

    position: relative;
    text-align: center;

    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    background: ${({ theme }) => theme.card};

    header {
        font-size: 8.75rem;
        font-weight: 600;
        color: var(--blue);

        background: url('/icons/levelup.svg') no-repeat center;
        background-size: contain;
    }

    strong {
        font-size: 2.25rem;
        color: ${({ theme }) => theme.title};
    }
    p {
        margin-top: 0.25rem;

        font-size: 1.25rem;
        color: ${({ theme }) => theme.text};
    }

    button {
        position: absolute;
        top: 0;
        right: 0;

        font-size: 0;
        border: none;
        background: transparent;
    }
`