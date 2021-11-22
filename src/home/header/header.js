import { useState } from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import "./header.css";

import logo from "../../images/logo.jpg";
export default function Header() {
  const [menu, setMenu] = useState(false);

  const changeMenu = () => {
    if (window.scrollY >= 400) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  window.addEventListener("scroll", changeMenu);
  return (
    <div id="header">
      <a href="/">
        <img alt="logo" id="logo" src={logo} />
      </a>
      <p id="cim">Vecsernyés András</p>
      <div id="container">
        <ul id="menu" className={menu ? "menu active" : "menu"}>
          <div class="box-wrap">
            <li>
              <div className="box">
                <Link
                  onClick={() => scroll.scrollToTop()}
                  className="menulink underline"
                  
                >
                  Top!
                </Link>
              </div>
            </li>
            <li>
              <div class="box">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  to="rolam"
                  activeClassName="selected"
                  className="menulink underline"
                >
                  Rólam
                </Link>
              </div>
            </li>
            <li>
              <div class="box">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={1500}
                  to="hobbik"
                  activeClassName="selected"
                  className="menulink underline"
                >
                  Hobbik
                </Link>
              </div>
            </li>
            <li>
              <div class="box">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={2000}
                  to="tanulmanyaim"
                  activeClassName="selected"
                  className="menulink underline"
                >
                  Tanulmányaim
                </Link>
              </div>
            </li>
            <li>
              <div class="box">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={2500}
                  to="munkassagom"
                  activeClassName="selected"
                  className="menulink underline"
                >
                  Munkásságom
                </Link>
              </div>
            </li>
            <li>
              <div class="box">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={2700}
                  to="contact"
                  activeClassName="selected"
                  className="menulink underline"
                >
                  Kapcsolat
                </Link>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
