import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';

class NavigationBar extends React.Component{
    render(){
        return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav classname="ms-auto">
            <Navbar.Brand href="#home">Qtemu</Navbar.Brand>
            <Nav.Link href="#home">Create Meetup</Nav.Link>
            <Nav.Link href="#features">Explore</Nav.Link>
            <Nav.Link className="navbar-right"href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        );
    }
}

export default NavigationBar;