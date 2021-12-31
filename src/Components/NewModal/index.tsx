import React from 'react';

import { Container, BoxVisible, Principal, PrincipalUp, Line, InputModal, PrincipalDown, BtnContinuar, BtnCancelar } from './styles';

type NewOpenModal = {
    isOpen: boolean;
    clickClose: any;
}

export const NewModal = ({ clickClose, isOpen }: NewOpenModal) => {
    const Modal = isOpen ? "display-flex" : "display-none";

    return (
        <Container >
            <BoxVisible className={Modal}>
                <Principal >
                    <PrincipalUp>
                        <h3>Nova Jornada</h3>

                        <Line />
                        <span>Dê um <b>nome</b> para essa Jornada</span>
                        <InputModal />
                        <p>Você poderá alterar essa informação depois.</p>
                    </PrincipalUp>

                    <PrincipalDown>
                        <BtnContinuar onClick={clickClose} >Continuar</BtnContinuar>
                        <BtnCancelar onClick={clickClose} >Cancelar</BtnCancelar>
                    </PrincipalDown>

                </Principal>
            </BoxVisible>
        </Container>
    );
}
