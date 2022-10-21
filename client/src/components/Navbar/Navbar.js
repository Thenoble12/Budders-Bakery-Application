import React, { useState, useEffect } from "react";
import Logo from '../common/Logo/Logolarge'
// import handleResize from "./useViewport";
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

function Navbar({ onLogout, user }) {
  const [ extendNavbar, setExtendNavbar ] = useState(false);  
  // const { width } = handleResize();
  // const breakpoint = 700;
    
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout(null));
  }
 
  return (
    <div className="navbar_main">
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>        
          <LeftContainer>     
           <Logo/>              
            <NavbarLinkContainer>
              <NavbarLink to="/"> Menu</NavbarLink>
              <NavbarLink to="/about"> About Us</NavbarLink>
              {user ? (
                <NavbarLink to="/account">{user.username}</NavbarLink>, 
                <NavbarLink onClick={handleLogout}>Logout</NavbarLink>              
              ):(
                <NavbarLink to="/register">Guest</NavbarLink>,
                <NavbarLink to="/login"> Login</NavbarLink>
              )}
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
            {/* <NavbarLinkExtended to="/"> Home</NavbarLinkExtended> */}
            <NavbarLinkExtended to="/"> Menu</NavbarLinkExtended>
            <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
            {user ? (
                <NavbarLinkExtended to="/account">{user.username}</NavbarLinkExtended>, 
                <NavbarLinkExtended onClick={handleLogout}>Logout</NavbarLinkExtended>              
             ):(
                <NavbarLinkExtended to="/register">Guest</NavbarLinkExtended>,
                <NavbarLinkExtended to="/login"> Login</NavbarLinkExtended>
            )}
            
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
      </div>
  );
}

export default Navbar

