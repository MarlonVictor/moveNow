import styled from 'styled-components';


export const Background = styled.div`
    flex: 1;
    display: flex;

    height: 100vh;
    width: 100%;

    background: var(--blue) url('/background.svg') no-repeat center left;
    background-size: 770px;
`

export const Container = styled.section`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin: 17rem 13rem;

    img {
        margin-bottom: 6rem;
        width: 26rem;
    }

    h1 {
        color: #fff;
        font-size: 2.3rem;
    }

    p {
        display: flex;
        align-items: center;

        color: #DCDDE0;
        font-size: 1.2rem;

        max-width: 350px;
        margin: 2.3rem 0;

        svg {
            margin-right: 2rem;
            width: 3.5rem;
        }
    }

    @media(max-width:1300px) {
        margin: 0;
        justify-content: center;

        h1 {
            text-align: center;
        }
    }

    @media(max-width: 660px) {
        main {
            text-align: center;
        }

        img {
            width: 20rem;
        }
    }
    
    @media(max-width: 425px) {
        p, button {
            max-width: 20rem;
        }
    }
`

export const LoginButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    height: 5rem;

    border: none;
    border-radius: 5px;
    color: #DCDDE0;

    background: linear-gradient(90deg, var(--blue-dark) 0%, rgba(40, 40, 70, 0.2) 100%);
    outline: none;

    transition: .2s;

    span {
        flex: 1;
    }

    svg {
        width: 5rem; 
        padding-right: 20px;

        transition: transform .5s;
    }

    &:hover {
        color: #fff;

        svg {
            transform: translateX(5px);
        }
    }
`