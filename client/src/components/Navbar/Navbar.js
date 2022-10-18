import React, { useState } from "react";
import Logo from '../common/Logo/Logo'
import './Navbar.css'
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Navbar.style";
//import LogoImg from "../assets/logo.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <div className="navbar_main">
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
        <Logo />
          <LeftContainer>        
            <NavbarLinkContainer>
              {/* <NavbarLink to="/"> Home</NavbarLink> */}
              <NavbarLink to="/menu"> Menu</NavbarLink>
              <NavbarLink to="/account"> Contact Us</NavbarLink>
              <NavbarLink to="/about"> About Us</NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            {/* <Logo src={LogoImg}></Logo> */}
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/menu"> Menu</NavbarLinkExtended>
            <NavbarLinkExtended to="/account"> Contact Us</NavbarLinkExtended>
            <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
      </div>
  );
}

export default Navbar;