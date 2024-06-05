import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosHeart } from "react-icons/io";
import './App.css';
import Button from 'react-bootstrap/Button';
import { NavLink, Outlet } from 'react-router-dom';


function Navbars() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/" className='nou'>Nourishment</Navbar.Brand>
          <Nav className="a me-auto fw-bold ms-5">
            
       <NavLink to="/" className='home text-decoration-none text-reset'>HOME</NavLink>
       <NavLink to="/Menuitems" className="ms-5 text-decoration-none text-reset">MENU</NavLink>
        <NavLink to="/fav" className="ms-5 text-decoration-none text-reset">FAVOURITES< IoIosHeart /></NavLink>
        <NavLink to="/Search" className="ms-5 text-decoration-none text-reset">SEARCH</NavLink>
        <NavLink to="/Boonies" className="ms-5 text-decoration-none text-reset">BOONIES</NavLink>
        </Nav>
        </Container>
      </Navbar>

      <Outlet/>
    </>
    
  );
}

export default Navbars;