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

export const Search = styled.div`
    display: flex;
    margin: 0 auto;
`;

export const InputText = styled.div`
    width: 350px;
    height: 40px;
    border: 1px solid var(--input-color);
    border-radius: 5px;
    opacity: 1;

    display: flex;
    align-items: center;
    padding-left: 12px;

    background-color: var(--white-light);

    svg {
        transform: rotate(95deg);
    }

    :hover{
        box-shadow: 2px 2px 5px 2px var(--search-hover);
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    font-size: 15px;
    font-family: 'gotham-book', 'sans-serif';

    ::placeholder{
        color: var(--text-lighter);
        font-family: 'gotham-book'
        opacity: 1;
    }
`;


export const BtnNewModal = styled.button`
    width: 158px;
    height: 40px;
    margin-left: 15px;
    position: relative;
    cursor: pointer;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--blue);
    
    :hover{
        opacity: 1;
        background: transparent linear-gradient(90deg, #00E1FF,  var(--blue));
    }
`;



export const Text = styled.div`
    position:absolute;
    font-family: 'gotham-book', 'sans-serif';
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        margin-right: 4px;
        height:17px;
        width: 17px;
    }

    p {
        color: var(--white-light);
        font-size: 14px;
        font-weight: normal;
        line-height:10px;
    }
`;

export const SearchIcon = styled.div`
    margin-right: -2px;
    width: 14px;
    fill: var(--blue);
`;

export const BtnIcon = styled.div`
    margin-top: 2px;
    margin-right: 6px;
    width: 17px;
    fill: var(--white-light);
`;

