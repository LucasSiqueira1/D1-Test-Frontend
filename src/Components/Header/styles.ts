import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 110px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;

    background-color: var(--background);
`;

export const HeaderLeft = styled.div`
    width: 50%;
    height: 100%;
    position: relative;

    display: flex;
    align-items: center;
`;

export const User = styled.div`
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--blue);
    color: var(--white-light);
    border-radius: 50%;
`;

export const AcmeLogo = styled.div`
    width: 120px;
    height: 40px;
    margin-left: 50px;
    position: absolute;
    padding: 5px 10px 3px 20px;
    border: 1px solid var(--box-lighter);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--white-light);
    img {
        width: 100%;
    }
`;