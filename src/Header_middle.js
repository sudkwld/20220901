//react router-route-dom
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useState } from 'react';
//react bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// icon
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaRegLightbulb } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';

function Header_middle() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='header-middle'>
        <div className='logo-title'>
        <Nav.Link onClick={()=> {navigate('')}}><img src='/img/header-logo.png' alt='logo' /></Nav.Link>
        </div>
        <form className='search-container'>
          <input type='search' placeholder='Search Product ...' className='search-input' />
          <span className='mag'><AiOutlineSearch /></span>
        </form>
        <div className='header-icons'>
          <div className='header-icon-box'>
            <Nav.Link href="/Member" id='icon-detail'>
              <VscAccount className='header-icon-img' />
              <span>Account</span>
            </Nav.Link>
          </div>
          <div className='header-icon-box'>
            <Nav.Link href="/Cart" id='icon-detail'>
              <AiOutlineHeart className='header-icon-img' />
              <span>Wishlist</span>
            </Nav.Link>
          </div>
          <div className='header-icon-box'>
            <Nav.Link href="/Cart" id='icon-detail'>
              <AiOutlineShoppingCart className='header-icon-img' />
              <span>Cart</span>
            </Nav.Link>
          </div>
        </div>
      </div>
      <div className='header-bottom'>
        <div className='navigation'>
          <a href='#' id='nav-main'><AiOutlineMenu className='hamburger-icon' />Browse Categories</a>
          <div className='navigation-content'>
            <Nav.Link onClick={()=> {navigate('/detail/1')}}>Daily offers</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail/1')}}>Gift Ideas</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail/1')}}>Beds</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail/1')}}>Lighting</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail/1')}}>Sofa & Sleeper Sofas</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail/1')}}>Storage</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail/1')}}>Armchairs & Chaises</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail/1')}}>Decoration</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail/1')}}>Kitchen Cabinets</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail/1')}}>Coffee & Tables</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail/1')}}>Outdoor Furniture</Nav.Link>
          </div>
        </div>
        <div className='menu'>
          <ul className='menu-sub'>
            <li className='menu-nav'><Nav.Link onClick={()=> {navigate('')}}>Home<RiArrowDropDownLine /></Nav.Link></li>
            <li className='menu-nav'><Nav.Link onClick={()=> {navigate('/detail/1')}}>Shop<RiArrowDropDownLine /></Nav.Link></li>
            <li className='menu-nav'><Nav.Link onClick={()=> {navigate('/detail/1')}}>Product<RiArrowDropDownLine /></Nav.Link></li>
            <li className='menu-nav'><Nav.Link onClick={()=> {navigate('/detail/1')}}>Pages<RiArrowDropDownLine /></Nav.Link></li>
            <li className='menu-nav'><Nav.Link onClick={()=> {navigate('')}}>Blog<RiArrowDropDownLine /></Nav.Link></li>
            <li className='menu-nav'><Nav.Link onClick={()=> {navigate('/detail/1')}}>Elements<RiArrowDropDownLine /></Nav.Link></li>
          </ul>
        </div>
        <div className='bulb'>
          <FaRegLightbulb className='bulb-icon' />
          Clearance <span>Up to 30% Off</span>
        </div>
      </div>
      <Navbar bg="light" expand="lg" id='header-min'>
        <Container>
          <Navbar.Brand href="#home"><img src='/img/header-logo.png' alt='logo'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=> {navigate('')}}>Home</Nav.Link>
              <Nav.Link onClick={()=> {navigate('/detail/1')}}>Shop</Nav.Link>
              <Nav.Link onClick={()=> {navigate('/detail/1')}}>Product</Nav.Link>
              <Nav.Link onClick={()=> {navigate('/detail/1')}}>Pages</Nav.Link>
              <Nav.Link onClick={()=> {navigate('')}}>Blog</Nav.Link>
              <Nav.Link onClick={()=> {navigate('/detail/1')}}>Elements</Nav.Link>  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Header_middle;