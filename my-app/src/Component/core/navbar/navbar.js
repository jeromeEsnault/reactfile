import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LogoMaison from "img/logo192.png"

function Header() {
    return (

        <Navbar bg="redfull" expand="lg" fixed="top" >
            <Navbar.Brand href="#presentation">
                <img
                    src={LogoMaison}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt=" logo personnel de Jerome Esnault"
                />  </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#presentation">Présentation</Nav.Link>
                    <Nav.Link href="#competences">Compétences</Nav.Link>
                    <Nav.Link href="#projets">Projets</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>



    );
}

export default Header;