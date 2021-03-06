import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 50px;
    padding-left: 10px;
    padding-right: 15px;
    margin-top: 12px;
    border-radius: 5px;

    display: flex;
    align-items: center;

    background-color: var(--white-light);
`;

export const Table = styled.div`
    width: 100vh;

    display: grid;
    grid-template-columns: 8fr 3fr 1fr 3fr 2fr 4fr;
    grid-template-areas: "name destiny . success . status";

    b{
        grid-area: name;
        font-size: 15px;
    }
    span{
        font-size: 14px;
        font-family: 'Gotham-Book';
    }
    .destiny{
        grid-area: destiny;
        justify-self: center;
    }
    .success{
        grid-area: success;
        justify-self: center;
    }
`;

export const StatusTable = styled.div`
    grid-area: status;

    display: flex;
    align-items: center;

    p{
        font-family: 'Gotham-Book';
        color: var(--text-color);
        font-size: 14px;
    }
`;



