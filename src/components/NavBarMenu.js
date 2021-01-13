import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { SiApplemusic } from "react-icons/si";
import { RiTeamFill, RiMessage2Line } from "react-icons/ri";
import { FaMonument, FaArrowDown } from "react-icons/fa";
import "./NavMenuBar.scss";

const NavBarMenu = ({ isOpenMenu, setIsOpenMenu, navigationRef }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const navRef = useRef();

  useEffect(() => {
    function closeMenu(e) {
        
      if(navRef.current.contains(e.target) || e.target.classList.contains("menu-btn") || e.target.classList.contains("menu-btn__burger")) {
        return
      }

      setIsOpenMenu(false);
    }
    window.addEventListener("click", closeMenu, true);

    return () => {
        window.removeEventListener("click", closeMenu, true);
    }
  }, []);

  return (
    <nav
      className={`mobile-nav ${isOpenMenu && "mobile-nav-active"}`}
      ref={navRef}
    >
      <ul className="mobile-nav__items">
        <NavLink
          exact
          to="/"
          activeClassName="is-active"
          className="mobile-nav__item"
          onClick={() => setIsOpenMenu(false)}
        >
          <li>
            <AiFillHome /> Home
          </li>
        </NavLink>
        <li className="mobile-nav__item mobile-nav__item--music">
          <p className="">
            <NavLink
              to="/music"
              activeClassName="is-active"
              onClick={() => setIsOpenMenu(false)}
            >
              <SiApplemusic /> Music
            </NavLink>
            <span onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
              <FaArrowDown />
            </span>
          </p>
          <ul className={`sub-mobile-menu-items ${isSubMenuOpen && "active"}`}>
            <NavLink
              to="/music/abbysal-menace"
              activeClassName="is-active"
              onClick={() => setIsOpenMenu(false)}
            >
              <li>Abyssal menace</li>
            </NavLink>
            <NavLink
              to="/music/haunted-cenopath"
              activeClassName="is-active"
              onClick={() => setIsOpenMenu(false)}
            >
              <li>Haunted cenotaph</li>
            </NavLink>
            <NavLink
              to="/music/nightmares-from-beyond"
              activeClassName="is-active"
              onClick={() => setIsOpenMenu(false)}
            >
              <li>Nightmares from beyond</li>
            </NavLink>
          </ul>
        </li>

        <NavLink
          to="/band"
          activeClassName="is-active"
          className="mobile-nav__item"
          onClick={() => setIsOpenMenu(false)}
        >
          <li>
            <RiTeamFill /> Band Members
          </li>
        </NavLink>
        <a className="mobile-nav__item">
          <li>
            <FaMonument /> History
          </li>
        </a>
        <NavLink
          to="/contact"
          activeClassName="is-active"
          className="mobile-nav__item"
          onClick={() => setIsOpenMenu(false)}
        >
          <li>
            <RiMessage2Line /> Contact
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBarMenu;
