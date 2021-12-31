import { Container, IconsJourney, JourneyFilter, UlLista, ItemLista, ItemText, Quantidade } from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

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
    //inicializando com a primeira opção marcada
    const filtroInicial = [true, false, false, false, false, false];
    const [filtro, setFiltro] = useState([]);
    const [filtroSelecionado, setFiltroSelecionado] = useState(filtroInicial);
    const [journeys, setJourneys] = useState([]);

    const FiltroTela = async () => {
        const response = await api.get('/filter');
        setFiltro(response.data);
    }

    const JourneyTela = async (filter = 0) => {
        let seg = '';
        filter === 0 ? seg = '/journey' : seg = `/journey/${filter}`;
        const response = await api.get(seg);
        //console.log(response.data)
        setJourneys(response.data);
    }

    useEffect(() => { FiltroTela(); JourneyTela(); }, []); //executa uma vez

    const clickFiltro = (id: number) => {
        let verificar = [false, false, false, false, false, false]
        verificar[id] = true;
        setFiltroSelecionado(verificar);
        JourneyTela(id);//retorna o id mostrado na tela
    }
    const IconLista = (id: number) => {
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
                <UlLista>
                    {filtro.map((filter: NewFiltroJourney) => {
                        return (
                            <ItemLista key={filter.id} >
                                {IconLista(filter.id)}
                                <ItemText onClick={() => clickFiltro(filter.id)} className={filtroSelecionado[filter.id] ? 'ativo' : 'ntAtivo'}>
                                    <span>{filter.name}</span>
                                    <Quantidade>
                                        {filter.quantity}
                                    </Quantidade>
                                </ItemText>
                            </ItemLista>
                        );
                    })}
                </UlLista>
            </JourneyFilter>
        </Container>
    )
}