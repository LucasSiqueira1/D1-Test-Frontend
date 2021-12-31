import React from 'react';
import { Header } from '../Header';
import { NewModal } from '../NewModal';
import { SideBar } from '../SideBar';

import { Container, Content } from './styles';

export const Dashboard = () => {
    return (
        <Container>
            <SideBar />
            <Content>
                <Header />
            </Content>
        </Container>
    );
}
