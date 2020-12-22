import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 1px solid var(--lightBlue);
    border-color:${props => props.cart ? 'var(--mainRed)' : 'var(--mainPurple)'};
    color: ${props => props.cart ? 'var(--mainRed)' : 'var(--mainPurple)'};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: ${props => props.cart ? 'var(--mainWhite)' : 'var(--mainPurple)'};
        color: ${props => props.cart ? 'var(--mainRed)' : 'var(--mainDark)'};
    }
    &:focus {
        outline: none;
    }
    &:disabled {
        opacity: 0.65;
    }
`;