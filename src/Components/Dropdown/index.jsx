import React from "react";
import { NavDropdown } from "react-bootstrap";
import './index.css'
const DropdownComponent = (props) => {
  const items = props.items;
  return (
    <NavDropdown title={props.title} id="dropdown">
      {items.map((item, key) => {
        return <NavDropdown.Item href="#action3">{item}</NavDropdown.Item>;
      })}
      {/* <NavDropdown.Item href="#action3">
        Student Recruitment & Marketing
      </NavDropdown.Item>
      <NavDropdown.Item href="#action4">
        Analytics and Consulting
      </NavDropdown.Item>
      <NavDropdown.Item href="#action4">Case Studies</NavDropdown.Item>
      <NavDropdown.Item href="#action4">
        Student Recruitmeent Guides
      </NavDropdown.Item> */}
    </NavDropdown>
  );
};

export default DropdownComponent;
