import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 8vh;

    display: flex;
    align-items: flex-start;
`;


export const IconsJourney = styled.div`
    width: 22px;
    height: 22px;
    margin-right: 10px;
    flex-shrink: 0;
`;

export const JourneyFilter = styled.div`
    width: 15vw;
    margin-left: 20px;
    margin-right: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        color: var(--text-color);
        font-size: 19px;
    }
`;

export const UlLista = styled.ul`
    margin-top: 35px;
    width: 100%;
`

export const ItemLista = styled.div`
    margin-bottom: 18px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    strong{ 
        width:27px;
        height:27px;
    }

    .ativo{
        span{
            font-family: 'Gotham-Bold';
            font-size: 16px;
            color: var(--blue);
        }
        strong{
            background-color: var(--blue);
            color: var(--white-light);
        }
    }

    .notAtivo{
        :hover{
            span{
                color: var(--blue);
            }
            strong{
                background-color: var(--box-lighter);
            }
        }
    }
`;

export const ItemText = styled.div`
    width: 100%;
    height: 25px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    span{
        font-family: 'Gotham-Book';
        font-size: 17px;
        color: var(--text-color);
    }
`;

export const Quantidade = styled.strong`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px;
    border-radius: 50%; 
    font-size: 13px;

    background-color: var(--icons-white);
    color: var(--text-lighter);
`;

export const ContainerDetails = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ListaMeio = styled.div`
    width: 800px;
    height: 100%;
    margin-top: 55px; 

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Head = styled.ul`
    display: grid;
    grid-template-columns: 8fr 3fr 1fr 3fr 2fr 4fr;
    grid-template-areas: "name destinatario . successo . status";
    padding: 3px 15px;
    margin-top:-2px;

    li {
        color: var(--text-lighter);
        font-family: 'Gotham-Book';
        font-size: 15px;
    }

    .name{
        grid-area: name;
    }

    .destinatario{
        grid-area: destinatario;
        justify-self: center;
    }

    .successo{
        grid-area: successo;
        justify-self: center;
    }

    .status{
        grid-area: status;
    }
`;