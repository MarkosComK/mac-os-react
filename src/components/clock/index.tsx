import React from 'react';

import { Container, Time } from './style'

const Clock: React.FC = () => {
    return (
        <Container>
            <Time>
                {18+3} : 00
            </Time>
        </Container>
    )
}

export default Clock