import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import myLogo from "../../images/mylogo.svg";
import "./navigation.css";
import React, { useRef, useState } from "react";

const Navigation = () => {
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showNav = () => {
    setIsMenuOpen(!isMenuOpen);
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header>
      <img src={myLogo}></img>
      <nav ref={navRef}>
        <a href="#/">Projects</a>
        <a href="#/">Experiance</a>
        <a href="#/">Skils</a>
        <a href="#/">Education</a>
        <a href="#/">Orher</a>
      </nav>
      <button className="nav-btn" onClick={showNav}>
        {isMenuOpen ? (
          <AiOutlineClose size={32} />
        ) : (
          <AiOutlineMenu size={32} />
        )}
      </button>
    </header>
  );
};

export default Navigation;
