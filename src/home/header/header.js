import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { VscMenu } from "react-icons/vsc";
import "./header.css";


import logo from "../../images/logo.jpg";
export default function Header() {
  var x = true;
  const Rmenu = () =>{ 
    if(x == true){
      x = false;
      document.getElementById("menu").style.display = "block";
      document.getElementById("menu").style.marginTop = "150px";
    }else {
      x = true;
      document.getElementById("menu").style.display = "none";
    }
  }

  const [menu, setMenu] = useState(false);

  const changeMenu = () => {
    if(window.scrollY >= 400) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  window.addEventListener("scroll", changeMenu);
  
  function reload(){
    var width = window.innerWidth;
    if(width < 1100 || width > 1900 || width == 1875 || width == 375 || width == 411 || width == 540 || width == 1024 || width == 768){
        window.location.reload();
    }
  }
  window.addEventListener('resize', reload);

  return (
    <div id="header">
      <a href="#">
        <img alt="logo" id="logo" src={logo} />
      </a>
      <p id="cim">Vecsernyés András</p>
      <div id="container">
        <div id = "menu2">
        <ul id="menu">
            <div className="box-wrap">
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
        <VscMenu id = "nav-toggler" onClick = {Rmenu}></VscMenu>
        <ul id="menu" className={menu ? "menu active" : "menu"}>
            <div className="box-wrap">
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
