import React from 'react';
import { Header } from '../Header';
import { NewModal } from '../NewModal';

import { Container, Content } from './styles';

export const Dashboard = () => {
    return (
        <Container>
            <Content>
                <Header />
            </Content>
        </Container>
    );
}
