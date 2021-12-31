import { Header } from '../Header';
import { Journey } from '../Journey';
import { SideBar } from '../SideBar';

import { Container, Content } from './styles';

export const Dashboard = () => {
    return (
        <Container>
            <SideBar />
            <Content>
                <Journey />
                <Header />
            </Content>
        </Container>
    );
}
