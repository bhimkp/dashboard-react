import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import "./index.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="ml-4" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavbarText className="text-white">
                Statistics for Nick - Fiorucci
              </NavbarText>
              {/* <hr /> */}
            </NavItem>
          </Nav>
          <NavbarText className="d-inline-block align-top mr-5 text-white bgc">
            Back to Stats
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
