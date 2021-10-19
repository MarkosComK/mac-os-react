import React from 'react';

import { Container, Time } from './style'

const Clock: React.FC = (props) => {
    var date = new Date()
    var hour = date.toLocaleTimeString()
    return (
        <Container>
            <Time>
                {hour}
            </Time>
        </Container>
    )
}

export default Clock