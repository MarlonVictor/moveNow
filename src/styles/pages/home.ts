import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
    max-width: 992px;

    margin: 0 auto;
    padding: 2.5rem 2rem;

    @media(max-width: 660px) {
        padding: 2.5rem 3.5rem;
    }

    @media(max-width: 425px) {
        padding: 2.5rem 2rem;
    }
`

export const Section = styled.section`
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid: 6.25rem;
    align-content: center;

    @media(max-width: 720px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 3rem;

        padding-bottom: 4rem;

        div:first-child {
            margin-top: 1rem;
        }
    }
`