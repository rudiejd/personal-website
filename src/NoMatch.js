import React from 'react';
import Title from './components/Title';
import {Container} from 'react-bootstrap';




export const NoMatch = () => {
    return (
            <Container>

                <Title text="404: looks like i couldn't find that" />
                <p>"the quiet sense of something lost"</p>
            </Container>
    )

}