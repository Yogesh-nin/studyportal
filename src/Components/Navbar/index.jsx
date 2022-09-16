import {Navbar, Button, Container, Nav, Offcanvas } from 'react-bootstrap'
import React, {useState} from 'react'
import DropdownComponent from '../Dropdown'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
import './index.css'
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
    const [height, setHeight] = useState("");
    const navigate = useNavigate();

    const changeHeight = () =>{
        if (window.scrollY >= 60) {
            setHeight("changeHeight")
        }
        else{
            setHeight("");
        }
    }
    window.addEventListener("scroll", changeHeight );
  return (
    <Navbar sticky="top" expand="lg" className={`px-4 navbar ${height}`}>
          <Container className="px-4">
            
            <Navbar.Brand href="">
                <span className="d-block d-md-none small-logo"></span>
                <img className="d-none d-md-block" src={logo} width="263px" height="61px" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 align-items-center">

                  {/* About */}
                  <DropdownComponent title="About" items={["About Us", " Our Story", " Team", "Partners", "Advisory Board"]} />

                  {/* For Studennts */}
                  <DropdownComponent title="For Students" items={["Study Options", "StudyPortals Scholarship", " What Our students Say"]} />

                  {/* For Institutuions */}
                  <DropdownComponent title="For Institutions" items={["Student Recruitment & Marketing", " Analytics and Consulting", " Case Studies", " Student Recruitmeent Guides"]} />

                  {/* Careers */}
                  <DropdownComponent title="Career" items={["Career", "Our Mission and Core values"]} />

                  {/* News & Insights */}
                  <DropdownComponent title="News & Insights" items={["Intelligence Projects", "News", "Blog articles"]} />

                  <DropdownComponent title="Initiatives" items={["Global Access Initiative", "#StandWithUkraine initiative", "Global Student Satisfaction Awards"]} />

                  {/* Events */}
                  <DropdownComponent title="Events" items={["Studyportals Academy"]} />

                  <Button className="contact-btn" onClick={()=> navigate('/contact')}>Contact</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  )
}

export default NavbarComponent