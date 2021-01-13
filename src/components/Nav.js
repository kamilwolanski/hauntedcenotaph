import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import NavMenuBar from "./NavBarMenu";
import redMobile from "../img/red-mobile.png";
import Fade from "react-reveal/Fade";

const Nav = () => {
  const windowWidth = window.innerWidth;

  const [isNavActive, setIsNavActive] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [widthOfWindow, setWidthOfWindow] = useState(windowWidth);

  const navigationRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleObserver);
    window.addEventListener("resize", (e) =>
      setWidthOfWindow(e.target.innerWidth)
    );
    if (widthOfWindow > 848) {
      setIsOpenMenu(false);
    }
  }, [widthOfWindow]);

  const handleObserver = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > 0) {
      setIsNavActive(true);
    } else {
      setIsNavActive(false);
    }

  };
  return (
    <>
      <Fade>
        <nav
          className={`nav ${isNavActive && "nav-active"} ${
            widthOfWindow < 848 && "nav-active"
          }`}
          ref={navigationRef}
        >
          <ul className="nav-items">
            <li className="nav__item nav__item-menu-item">
              <NavLink
                to="/music"
 
                activeClassName="is-active"
              >
                <p>music</p>
              </NavLink>
              <ul className="drop-down">
                <NavLink to="/music/abbysal-menace" activeClassName="is-active">
                  <li>Abyssal Menace</li>
                </NavLink>
                <NavLink
                  to="/music/haunted-cenopath"
                  activeClassName="is-active"
                >
                  <li>Haunted Cenotaph</li>
                </NavLink>
                <NavLink
                  to="/music/nightmares-from-beyond"
                  activeClassName="is-active"
                >
                  <li>Nightmares from Beyond</li>
                </NavLink>
              </ul>
            </li>

            <NavLink
              to="/band"
              className="nav__item nav__item-menu-item"
              activeClassName="is-active"
            >
              <li>
                <p>band</p>
              </li>
            </NavLink>
            <NavLink to="/" className="nav__item logo">
              <div className="nav__logo">
                <img src={redMobile} alt="logo" className="nav__logo-img" />
              </div>
            </NavLink>
            <NavLink to="/" className="nav__item nav__item-menu-item">
              <li>
                <p>history</p>
              </li>
            </NavLink>
            <NavLink to="/contact" className="nav__item nav__item-menu-item">
              <li>
                <p>contact</p>
              </li>
            </NavLink>
          </ul>

          <button
            className={`menu-btn ${isOpenMenu && "open"}`}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <div className="menu-btn__burger"></div>
          </button>
        </nav>
      </Fade>
      <NavMenuBar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} navigationRef={navigationRef}/>
    </>
  );
};

export default Nav;
