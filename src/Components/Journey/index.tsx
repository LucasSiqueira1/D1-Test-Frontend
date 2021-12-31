import { Container, IconsJourney, JourneyFilter } from './styles';

import TableImg from '../../assets/icons/table.svg';
import PaperPlaneImg from '../../assets/icons/paper-plane.svg';
import PlayCircleImg from '../../assets/icons/play-circle.svg';
import PenImg from '../../assets/icons/pen.svg';
import BedImg from '../../assets/icons/bed.svg';
import CheckImg from '../../assets/icons/check.svg';

export const Journey = () => {

    return (
        <Container>
            <JourneyFilter>
                <h2>Jornadas</h2>
                <IconsJourney> <img src={TableImg} alt="Enviando Ícone" /> </IconsJourney>
                <IconsJourney> <img src={PaperPlaneImg} alt="Enviando Ícone" /> </IconsJourney>
                <IconsJourney> <img src={PlayCircleImg} alt="Ativadas Ícone" /> </IconsJourney>
                <IconsJourney> <img src={PenImg} alt="Configurando Ícone" /> </IconsJourney>
                <IconsJourney> <img src={BedImg} alt="Ociosa Ícone" /> </IconsJourney>
                <IconsJourney> <img src={CheckImg} alt="Concluída Ícone" /> </IconsJourney>

            </JourneyFilter>
        </Container>
    )
}