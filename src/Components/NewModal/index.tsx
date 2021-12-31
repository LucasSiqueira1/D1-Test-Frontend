import React from 'react';

import { Container, BoxVisible, Principal, PrincipalUp, Line, InputModal, PrincipalDown, BtnContinuar, BtnCancelar } from './styles';

export const NewModal = () => {

    return (
        <Container >
            <BoxVisible >
                <Principal >
                    <PrincipalUp>
                        <h3>Nova Jornada</h3>

                        <Line />
                        <span>Dê um <b>nome</b> para essa Jornada</span>
                        <InputModal />
                        <p>Você poderá alterar essa informação depois.</p>
                    </PrincipalUp>

                    <PrincipalDown>
                        <BtnContinuar >Continuar</BtnContinuar>
                        <BtnCancelar >Cancelar</BtnCancelar>
                    </PrincipalDown>

                </Principal>
            </BoxVisible>
        </Container>
    );
}
