import { Container, IconsJourney, JourneyFilter, UlList, ItemList, ItemText, Quantity, ContainerDetails, ListaMid, Head } from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { JourneyDetails, JourneyList } from '../JourneyDetails';

import TableImg from '../../assets/icons/table.svg';
import PaperPlaneImg from '../../assets/icons/paper-plane.svg';
import PlayCircleImg from '../../assets/icons/play-circle.svg';
import PenImg from '../../assets/icons/pen.svg';
import BedImg from '../../assets/icons/bed.svg';
import CheckImg from '../../assets/icons/check.svg';

export type NewFiltroJourney = {
    id: number;
    name: string;
    quantity: number;
}

export const Journey = () => {
    const filterInit = [true, false, false, false, false, false];
    const [filtro, setFiltro] = useState([]);
    const [filterSelect, setFilterSelect] = useState<typeof filterInit>(filterInit);
    const [journeys, setJourneys] = useState([]);



    const filterScreen = async () => {
        try {
            const response = await api.get('/filter');
            setFiltro(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const journeyScreen = async (filter = 0) => {
        try {
            const seg = filter === 0 ? '/journey' : `/journey/${filter}`;
            const response = await api.get(seg);
            setJourneys(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { filterScreen(); journeyScreen(); }, []);

    const clickFiltro = (id: number) => {
        let verify = [false, false, false, false, false, false]
        verify[id] = true;
        setFilterSelect(verify);
        journeyScreen(id);
    }

    const iconList = (id: number) => {
        switch (id) {
            case 0:
                return <IconsJourney> <img src={TableImg} alt="Enviando Ícone" /> </IconsJourney>
            case 1:
                return <IconsJourney> <img src={PaperPlaneImg} alt="Enviando Ícone" /> </IconsJourney>
            case 2:
                return <IconsJourney> <img src={PlayCircleImg} alt="Ativadas Ícone" /> </IconsJourney>
            case 3:
                return <IconsJourney> <img src={PenImg} alt="Configurando Ícone" /> </IconsJourney>
            case 4:
                return <IconsJourney> <img src={BedImg} alt="Ociosa Ícone" /> </IconsJourney>
            case 5:
                return <IconsJourney> <img src={CheckImg} alt="Concluída Ícone" /> </IconsJourney>
        }
    }

    return (
        <Container>
            <JourneyFilter>
                <h2>Jornadas</h2>
                <UlList>
                    {filtro?.map((filter: NewFiltroJourney) => {
                        return (
                            <ItemList key={filter.id} >
                                {iconList(filter.id)}
                                <ItemText onClick={() => clickFiltro(filter.id)} className={filterSelect[filter.id] ? 'active' : 'noActive'}>
                                    <span>{filter.name}</span>
                                    <Quantity>
                                        {filter.quantity}
                                    </Quantity>
                                </ItemText>
                            </ItemList>
                        );
                    })}
                </UlList>
            </JourneyFilter>

            <ContainerDetails>
                <ListaMid>
                    <Head>
                        <li className="name" >Nome</li>
                        <li className="destiny" >Destinatários</li>
                        <li className="success" >Sucesso</li>
                        <li className="status" >Status</li>
                    </Head>

                    {journeys?.map((info: JourneyList) => {
                        return (
                            <JourneyDetails
                                key={info.id}
                                info={info}
                                filterName={info.name}
                            >
                                {iconList(info.status)}
                            </JourneyDetails>
                        );
                    })}
                </ListaMid>
            </ContainerDetails>
        </Container>
    )
}