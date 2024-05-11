import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 56px;
    padding: 0 16px;
    border: 0;
    margin-top: 16px;
    border-radius:  10px;
    font-weight: 500;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.BACKGROUND_800} ;

    &:disabled{
        opacity: 0.5;
        cursor: pointer;
    }
`
