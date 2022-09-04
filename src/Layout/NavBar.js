import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Navigate, useNavigate } from 'react-router-dom';
import {UserAuth} from '../contexs/AuthContext'

const NavBar = () =>{

  const {user,logout} = UserAuth();

  const navigate  = useNavigate();

  const handleLogout =  async () =>{
    try{
      await logout()
      navigate('/login')
      console.log('You are Logout')
    }catch (e){
      console.log(e.message)
    }
  }
    
        return(
            

            
        <div>

        
        <Navbar bg="dark" variant='dark' expand="lg">
        <Container fluid>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
            {user && 
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '250px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/counter">Redux counter</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            }
            
            
          
          <Navbar.Collapse className="justify-content-end">
            
          <Nav>

          <Navbar.Text>
                {user && user.email}
          </Navbar.Text>|
                {user && <Nav.Link onClick={handleLogout}>Log out</Nav.Link>  }
          
                {!user && <Nav.Link href="/login">Login</Nav.Link>}
                {!user && <Nav.Link href="/signup">Sign up</Nav.Link>  }
            
            
              
          </Nav>
        </Navbar.Collapse>
        </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    
      );
};


export default NavBar;
