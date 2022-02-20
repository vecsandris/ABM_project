import React, { Component } from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div id = "footer">
                <div id="contact">
                <nav>
                  <ul>
                    <li>
                      <a href= "mailto:vecsernyesan2002@gmail.com"><HiOutlineMail /></a>
                    </li>
                    <li>
                      <a href = "https://www.instagram.com/vecsernyes.andras/" target = "_blank" rel = "noreferrer"><AiOutlineInstagram /></a>
                    </li>
                    <li>
                      <a href = "https://www.facebook.com/andras.vecsernyes" target = "_blank" rel = "noreferrer"><BsFacebook /></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
        )
    }
}
