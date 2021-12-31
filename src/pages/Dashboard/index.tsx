import { Header } from '../../Components/Header';
import { Journey } from '../../Components/Journey';
import { SideBar } from '../../Components/SideBar';
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
