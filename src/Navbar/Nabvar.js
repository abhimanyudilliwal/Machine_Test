import React from 'react'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import {NavLink,Route} from 'react-router-dom'

function Nabvar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Route>
                    <Nav className="ml-auto">
                        
                       <NavLink activeClassName='activeclass' className='Name' exact to='/' >Home</NavLink>
                       <NavLink activeClassName='activeclass' className='Name' exact to='/About'  >about</NavLink>
                       <NavLink activeClassName='activeclass' className='Name' exact to='/Page' >page</NavLink>
                       <NavLink activeClassName='activeclass' className='Name' exact to='/user/' >User</NavLink>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Route>
                    
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}

export default Nabvar;
