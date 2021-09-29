import React from 'react';

import {Icon, Container, SafariIcon, CalculatorIcon, FilesIcon, MapsIcon, NotesIcon, TerminalIcon} from './style'

const Taskbar: React.FC = () => {
    return (
        <Container>
            <Icon>
                <SafariIcon/>
            </Icon>
            <Icon>
                <CalculatorIcon/>
            </Icon>
            <Icon>
                <FilesIcon/>
            </Icon>
            <Icon>
                <MapsIcon/>
            </Icon>
            <Icon>
                <NotesIcon/>
            </Icon>
            <Icon>
                <TerminalIcon/>
            </Icon>
        </Container>
    )
}

export default Taskbar