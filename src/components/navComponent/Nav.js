import "./nav.css";
import { useState, useEffect } from "react";
import myLogo from "../../images/mylogo.svg";
import IconBtn from "../iconBtnComponent/IconBtn";
import { GiSkills } from "react-icons/gi";
import { IoSchoolOutline } from "react-icons/io5";
import { RiPsychotherapyLine } from "react-icons/ri";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineBook,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
const Nav = () => {
  const [expanded, setExpanded] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  function toggleMenu() {
    setExpanded(!expanded);
  }

  const handleToggle = () => {
    return expanded ? (
      <AiOutlineClose size={30} onClick={() => toggleMenu()} />
    ) : (
      <AiOutlineMenu size={30} onClick={() => toggleMenu()} />
    );
  };

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  const Nav = () => {
    return (
      <div className="nav-menu">
        <ol className="nav-menu-list">
          <li>
            <IconBtn
              icon={<AiOutlineFundProjectionScreen size={30} />}
              text="Projects"></IconBtn>
          </li>
          <li>
            <IconBtn
              icon={<AiOutlineBook size={30} />}
              text="Experiance"></IconBtn>
          </li>
          <li>
            <IconBtn icon={<GiSkills size={30} />} text="Skils"></IconBtn>
          </li>
          <li>
            <IconBtn
              icon={<IoSchoolOutline size={30} />}
              text="Education"></IconBtn>
          </li>
          <li>
            <IconBtn
              icon={<RiPsychotherapyLine size={30} />}
              text="Other"></IconBtn>
          </li>
        </ol>
      </div>
    );
  };

  const expandedNav = () => {
    return (
      <div className="expanded-nav-container">
        <div className="logo-toggle_container">
          <img className="logo" src={myLogo}></img>
        </div>
        {Nav()}
      </div>
    );
  };

  const collepsedNav = () => {
    return (
      <div className="collepsed-nav-container">
        <div className="logo-toggle_container">
          <img className="logo" src={myLogo}></img>
          {toggleButton()}
        </div>
      </div>
    );
  };

  const toggleButton = () => {
    return <div className="nav-toggle"> {handleToggle()}</div>;
  };

  const handleNavMenu = () => {
    if (screenSize >= 425) {
      if (expanded) {
        return expandedNav();
      }
      return collepsedNav();
    } else {
      return collepsedNav();
    }
  };

  return <div className="container">{handleNavMenu()}</div>;
};
export default Nav;
