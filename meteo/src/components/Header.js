import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCloud, FaCalendarAlt } from 'react-icons/fa';

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
            <FaCloud /> Meteo App
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
                Home
            </Nav.Link>
            <Nav.Link href="#" onClick={(e) => e.preventDefault()}>
                <FaCalendarAlt /> Previsioni
            </Nav.Link>
        </Nav>
    </Navbar>
);

export default Header;
