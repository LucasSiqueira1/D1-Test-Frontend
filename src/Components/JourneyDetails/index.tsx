import React from 'react';

import { Container, Table, StatusTable } from './styles';

export type JourneyLista = {
    id: number;
    name: string;
    success: number;
    recipients: string;
    status: number;
}

type JourneyProps = {
    info: JourneyLista;
    filterName: string;
    children: any;
}

export const JourneyDetails = ({ info, filterName, children }: JourneyProps) => {
    return (
        <Container>
            <Table>
                <b>{info.name}</b>
                <span className="destinatario">{info.recipients}</span>
                <span className="sucesso">{info.success}</span>

                <StatusTable>
                    {children}
                    <p>{filterName}</p>
                </StatusTable>
            </Table>
        </Container>
    );
}
