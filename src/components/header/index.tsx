import React from 'react';

import {Container, AppleIcon, Menu, PowerIcon, SoundIcon} from './style'

import Clock from '../clock'

const Header: React.FC = () => {
    return (
        <Container>
            <button>
                <AppleIcon/>
            </button>
            <Clock/>
            <Menu>
                <SoundIcon/>
                <PowerIcon/>
            </Menu>
        </Container>
    )
}

export default Header