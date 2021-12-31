import Tooltip from "react-simple-tooltip"

import { Container, HeaderLeft, User, AcmeLogo } from './styles';
import AcmeImg from '../../assets/images/acme-logo.png';

export const Header = () => {
    return (
        <Container>
            <HeaderLeft>
                <Tooltip
                    content="Antônio⠀da⠀Silva"
                    padding={10}
                    radius={10}
                    placement='right'
                    color='#FFFF'
                    background='#3E4157'
                >
                    <User>A</User>
                </Tooltip>

                <AcmeLogo>
                    <img src={AcmeImg} alt="Logo Empresa Acme." />
                </AcmeLogo>
            </HeaderLeft>
        </Container>
    )
}