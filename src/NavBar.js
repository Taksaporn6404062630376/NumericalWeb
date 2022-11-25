import React from 'react';
import {Navbar,Container,Nav,Dropdown} from 'react-bootstrap';

var mystyle={
    color: "White",fontSize: "150%"
};

export const NavBar = () => {
    return(
        <Navbar bg="primary" sticky="top" expand="md">
            <Container>
                <Navbar.Brand href="/h">
                    <label style={mystyle}>Web React</label>
                </Navbar.Brand>
                
                <>
                <Nav className="me-right">
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="nav-dropdown-dark">Root of equation</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/bisection">Bisection</Dropdown.Item>
                            <Dropdown.Item href="/falsepo">False-Position</Dropdown.Item>
                            <Dropdown.Item href="/onepoint">One-Point</Dropdown.Item>
                            <Dropdown.Item href="/newtonraphson">Newton-Raphson</Dropdown.Item>
                            <Dropdown.Item href="/secant">Secant</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="nav-dropdown-dark">Linear Algebra equation</Dropdown.Toggle>
                        
                        <Dropdown.Menu>
                            <Dropdown.Item href="/cramer">Cramer's rule</Dropdown.Item>
                            <Dropdown.Item href="/inverse">Matrix inversion</Dropdown.Item>
                            {/* <Dropdown.Item href="/ludecomposition">LU Decomposition</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-variants">Interpolation</Dropdown.Toggle>
                        
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/newton">Newton's divided-difference</Dropdown.Item>
                            <Dropdown.Item href="#/largrange">Largrange polynomials</Dropdown.Item>
                            <Dropdown.Item href="#/spline">Spline interpolation</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                </>

                {/* </NavBar.Collapse> */}

            </Container>
        </Navbar>
    );


};