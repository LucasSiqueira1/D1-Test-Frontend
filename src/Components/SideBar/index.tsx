import Tooltip from 'react-simple-tooltip';

import { Bar, Container, Line, SideBarIcons, SideLowIcons, Icons } from './styles';

import D1Img from '../../assets/images/logoBranco.png';
import ChartPieImg from '../../assets/icons/chart-pie.svg';
import RocketImg from '../../assets/icons/rocket.svg';
import UserFriendsImg from '../../assets/icons/user-friends.svg';
import CcmCloudImg from '../../assets/icons/ccm-cloud.svg';
import ExternalLinkAltSolidImg from '../../assets/icons/external-link-alt-solid.svg';
import GemImg from '../../assets/icons/gem.svg';
import ToolsImg from '../../assets/icons/tools.svg';
import ExchangeImg from '../../assets/icons/exchange-alt.svg';
import SignOutAltImg from '../../assets/icons/sign-out-alt.svg';



export const SideBar = () => {
    return (
        <Bar>
            <Container>
                <img src={D1Img} alt="Logo Branco D1" />

                <SideBarIcons>
                    <Tooltip
                        content="Análises"
                        placement='right'
                        padding={12}
                        border='none'
                        radius={8}
                        color='#c5c8d1'
                        background='#FFFF'
                    >
                        <Icons><img src={ChartPieImg} alt="Análises Ícone" /></Icons>
                    </Tooltip>

                    <Tooltip
                        content="Jornadas"
                        placement='right'
                        padding={12}
                        radius={8}
                        border='none'
                        background='#FFFF'
                        color='#c5c8d1'
                    >
                        <Icons><img src={RocketImg} alt="Jornadas Ícone" /></Icons>
                    </Tooltip>

                    <Tooltip
                        content="Clientes"
                        placement='right'
                        padding={12}
                        radius={8}
                        border='none'
                        background='#FFFF'
                        color='#c5c8d1'
                    >
                        <Icons><img src={UserFriendsImg} alt="Clientes Ícone" /></Icons>
                    </Tooltip>

                    <Tooltip
                        content="CCM⠀Cloud"
                        placement='right'
                        padding={12}
                        radius={8}
                        border='none'
                        background='#FFFF'
                        color='#c5c8d1'
                    >
                        <Icons><img src={CcmCloudImg} alt="CCM Cloud Ícone" /></Icons>
                    </Tooltip>

                    <Tooltip
                        content="Versão⠀01"
                        placement='right'
                        padding={12}
                        radius={8}
                        border='none'
                        background='#FFFF'
                        color='#c5c8d1'
                    >
                        <Line />
                        <Icons><img src={ExternalLinkAltSolidImg} alt="Versão Ícone" /></Icons>

                    </Tooltip>
                </SideBarIcons>


                <SideLowIcons>
                    <Tooltip
                        content="Administração"
                        placement='right'
                        padding={12}
                        radius={8}
                        border='none'
                        background='#FFFF'
                        color='#c5c8d1'
                    >
                        <Icons><img src={GemImg} alt="Administração Ícone" /></Icons>
                    </Tooltip>

                    <Tooltip
                        content="Help⠀Desk"
                        placement='right'
                        padding={12}
                        radius={8}
                        border='none'
                        background='#FFFF'
                        color='#c5c8d1'
                    >
                        <Icons><img src={ToolsImg} alt="Help Desk Ícone" /></Icons>
                    </Tooltip>

                    <Tooltip
                        content="Trocar⠀Conta"
                        placement='right'
                        padding={12}
                        radius={8}
                        border='none'
                        background='#FFFF'
                        color='#c5c8d1'
                    >
                        <Icons><img src={ExchangeImg} alt="Trocar Conta Ícone" /></Icons>
                    </Tooltip>

                    <Tooltip
                        content="Sair"
                        placement='right'
                        padding={12}
                        radius={8}
                        border='none'
                        background='#FFFF'
                        color='#c5c8d1'
                    >
                        <Icons><img src={SignOutAltImg} alt="Sair Ícone" /></Icons>
                    </Tooltip>
                </SideLowIcons>
            </Container>
        </Bar >
    );
}