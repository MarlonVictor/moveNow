import styled from 'styled-components';


export const Overlay = styled.div`
    z-index: 1;
    position: fixed;
    top: 0; left: 0; bottom: 0; right: 0;

    background: ${({ theme }) => theme.bgGradient};

    @media(min-width: 720px) {
        visibility: hidden !important;
    }

    &.invisible {
        visibility: hidden;
    }
`

export const Container = styled.aside`
    z-index: 2;
    height: 100vh;

    background: ${({ theme }) => theme.card};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.03);

    transition: left .5s;

    @media(max-width: 720px) {
        position: fixed;
        top: 0;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 2rem;
    height: 100%;

    img {
        width: 3rem;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
            width: 2.2rem;
            margin: 1rem 0;

            color: #a1afb1;
            transition: color .3s;

            &:hover {
                color: var(--blue);
                cursor: pointer;
            }
        }

        svg:first-child {
            color: var(--blue);
            position: relative;
        }

        svg:last-child {
            transform: translateX(-3px);
        }
    }

    footer {
        display: flex;
        justify-content: space-between;

        svg {
            width: 1.3rem;

            &:hover {
                opacity: 50%;
            }
        }
    }
`

export const ToggleButton = styled.button`
    position: absolute;
    bottom: 1.3rem; right: -55px;

    height: 3rem;

    border: none;
    outline: none;
    background: transparent;

    svg {
        width: 3rem;
        color: ${({ theme }) => theme.title};
    }

    @media(min-width: 720px) {
        display: none;
    }
`