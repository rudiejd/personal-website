import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
background-color:#303133;
`;

export const Navigation = () => (
    <Styles>
        <Navbar expand="lg" className="navbar-dark">
            <Container>
                <Navbar.Brand href="/">jd rudie</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Link to="/projects" className="nav-link">projects and research</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <a href="https://docs.google.com/document/d/1L8tglPGOg881KT1vB1L6vw9Ocs5lJfy5B3E9LdDZk2s/edit?usp=sharing" className="nav-link">resume</a>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Styles>
)
