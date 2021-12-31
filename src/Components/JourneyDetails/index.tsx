import { Container, Table, StatusTable } from './styles';

export type JourneyList = {
    id: number;
    name: string;
    success: number;
    destiny: string;
    status: number;
}

type JourneyProps = {
    info: JourneyList;
    filterName: string;
    children: any;
}

export const JourneyDetails = ({ info, filterName, children }: JourneyProps) => {
    return (
        <Container>
            <Table>
                <b>{info.name}</b>
                <span className="destinatario">{info.destiny}</span>
                <span className="sucesso">{info.success}</span>

                <StatusTable>
                    {children}
                    <p>{filterName}</p>
                </StatusTable>
            </Table>
        </Container>
    );
}
