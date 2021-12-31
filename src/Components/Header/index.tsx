import { useState } from "react";
import { NewModal } from "../NewModal";

import Tooltip from "react-simple-tooltip"

import { Container, HeaderLeft, User, AcmeLogo, Search, Input, BtnNewModal, BtnIcon, InputText, SearchIcon } from './styles';
import AcmeImg from '../../assets/images/acme-logo.png';
import SearchImg from '../../assets/icons/search.svg';
import PlusImg from '../../assets/icons/plus.svg';



export const Header = () => {
    const [mostrarModal, setMostrarModal] = useState(false);

    const clickModal = () => {
        setMostrarModal(!mostrarModal);
    };

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

            <NewModal isOpen={mostrarModal} clickClose={clickModal} />

            <Search>
                <InputText>
                    <SearchIcon><img src={SearchImg} alt="Pesquisar Ícone" /></SearchIcon>
                    <Input type="text" placeholder="Buscar" />
                </InputText>

                <BtnNewModal onClick={clickModal}>
                    <div className="effect" />
                    <div className="text">
                        <BtnIcon><img src={PlusImg} alt="Mais Ícone" /></BtnIcon>
                        <p>Nova Jornada</p>
                    </div>
                </BtnNewModal>
            </Search>
        </Container>
    )
}