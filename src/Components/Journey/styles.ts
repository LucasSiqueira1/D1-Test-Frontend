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
