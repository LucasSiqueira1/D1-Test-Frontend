import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height: 100%;
    z-index: 1; 

    .display-flex {
        display: flex;
    }
    .display-none {
        display: none;
    }
`;

export const BoxVisible = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.4);
`;

export const Principal = styled.div`
    width: 600px;
    height: 310px;

    position:fixed;
    top:40%;
    left:50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 50px;

    background-color: var(--white-light);
    border-radius: 7px;

    transform: translate(-50%,-50%);
`;

export const PrincipalUp = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h3{
        color: var(--text-modal);
        margin-top: 15px;
        margin-bottom: 10px;
    }

    span {
        margin-top: 25px;
        font-family: 'Gotham-Book';
        font-size: 18px; 
        color: var(--span-modal);
    }

    p {
        margin-top:3px;
        color: var(--text-modal);
        font-family: 'Gotham-Book';
        font-size: 17px;
    }
`;

export const Line = styled.div`
    width: 95%;
    height: 2px;
    margin-top: 15px;
    background-color: var(--icons-white);
`;

export const InputModal = styled.input`
    width: 95%;
    height: 44px;
    margin-top: 5px;
    margin-bottom: 2px;
    font-family: 'Gotham-book';
    font-size: 18px;
    border-radius: 6px;
    border: 1px solid var(--input-color);

    background-color: var(--white-light);
`;

export const PrincipalDown = styled.div`
    width: 40%;
    margin-top: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BtnContinuar = styled.button`
    font-family: 'Gotham-Bold';
    font-size: 18px;
    color: var(--blue);
    cursor: pointer;
`;

export const BtnCancelar = styled.button`
    font-family: 'Gotham-Bold';
    font-size: 18px;
    color: var(--text-modal);
    cursor: pointer;
`;

