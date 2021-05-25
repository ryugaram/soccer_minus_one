import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import style from "../module.css/UtilsNationNavbar.module.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const NationNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home" className={style.home}>
          Home
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className={style.leagues}>
          <Nav className={style.ul} navbar>
            <NavItem style={{ marginRight: 50 }}>
              <Link to="/Leagues/2021">Premier League</Link>
            </NavItem>
            <NavItem style={{ marginRight: 50 }}>
              <Link to="/Leagues/2014">La Liga</Link>
            </NavItem>

            <NavItem style={{ marginRight: 50 }}>
              <Link to="/Leagues/2019">Serie A</Link>
            </NavItem>
            <NavItem style={{ marginRight: 50 }}>
              <Link to="/Leagues/2015">Ligue1</Link>
            </NavItem>
            <NavItem style={{ marginRight: 50 }}>
              <Link
                disabled
                to="/Leagues/2012"
                style={{
                  color: "gray",
                  cursor: "not-allowed",
                  pointerEvents: "none",
                }}
              >
                Bundesliga
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NationNavbar;
