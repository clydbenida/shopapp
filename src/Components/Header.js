import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useAuth } from '../Contexts/AuthContext'

const Header = () => {
   const { currentUser, logout } = useAuth()

   return (
      <Navbar>
         <Container>
            <Link className='navbar-brand' to="/">ShopApp</Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
               <Nav className=''>
                  <Link className='nav-link' to="/">Home</Link>
                  <Link className='nav-link' to="/products">Products</Link>
                  {currentUser ? (
                     <Link to='#' className='nav-link' onClick={() => logout()}>Logout</Link>
                  ) : (
                     <Link className='nav-link' to="/login">Login</Link>
                  )}
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Header;
