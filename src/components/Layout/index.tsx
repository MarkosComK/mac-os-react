import React from 'react';
import Header from '../header'
import Taskbar from '../taskbar'

import {Container, Wrapper} from './style';

const Layout: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Header />
                {/* <Desktop /> */}
                <Taskbar />
            </Wrapper>
        </Container>
    )
}

export default Layout