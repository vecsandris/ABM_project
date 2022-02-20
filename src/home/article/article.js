import React, { Component } from "react";
import "../header/header.js";
import "../footer/footer.js";
import "./article.css";

import rolam from "../../images/rolam2.jpg";
import hobbi from "../../images/rolam1.jpeg";
import suli from "../../images/suli.jpg";
import thingz from "../../images/thingz.png";
import kep7 from "../../images/kep7.jpg";

export default class Article extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize());
  }
  handleResize = () => {
    if (window.innerWidth <= 1000) {
      let classRow = document.getElementsByClassName("row");
      console.log(classRow);
      for (let i = 0; i < classRow.length; i++) {
        console.log(classRow[i]);
        if (classRow[i].firstChild.className === "column") {
          console.log(classRow[i].firstChild.firstChild.nodeName);
          if (classRow[i].firstChild.firstChild.nodeName === "IMG") {
            classRow[i].style.flexDirection = "column-reverse";
          }
        }
      }
    }
  };
  render() {
    return ( 
      <div id="article">
        <div id="rolam" className="row">
          <div className="column">
            <h1 className="kiscim">Rólam</h1>
            <p>
              Vecsernyés András vagyok, Budapesten születtem 2002-ben. Szeretek
              önállóan dolgozni, ellenben nem félek segitségek kérni.Kedves,
              türelmes és segitőkész vagyok, amit szorgalmam fűszerez meg.
              Jó a szervezőképességem és képes vagyok átlátni a nagyobb rendszereket,
              azoknak működését.
            </p>
          </div>
          <div className="column">
            <img id="elso" alt="rolam" src={rolam} />
          </div>
        </div>
        <div id="hobbik" className="row">
          <div className="column">
            <img id="masodik" alt="rolam" src={hobbi} />
          </div>
          <div className="column">
            <h1 className="kiscim">Hobbik</h1>
            <p>
              A weboldalak készitése és fejlesztése  az egyik kedvenc időtöltésem.
              Szeretek alkotni ls felfedezni benne új dolgokat, például megtanulni ezen
              szakma fortélyait és olyan oldalakat csinálni, melyek megállják helyüket.
            </p>
            <p>
              Szeretek sportolni, mozogni, enélkül nem is birnék élni. A focitól az extrémig,
              a legtöbb sportban szivesen részt veszek. Ilyen a siklóernyőzés, kosarazás, ping-pong,
              röplabda és még sorolhatnám.
            </p>
          </div>
        </div>
        <div id="fotozas" className="row">
          <div className="column">
            <h1 className="kiscim"><a href = "https://instagram.com/vecsernyes.andras">Instagram!</a></h1>
            <p>
              A fotózás is az életem része, bármi megihlet,
              igyekszem a legjobb formájában megörökiteni.
              Büszke is vagyok magamra, mert a legjobb fotóim
              telefonnal készültek. 
            </p>
            <p>
              A társasjátékok sem maradhatnak ki, hiszen a sakkal
              még fejlődhetek is. Persze inkább a kártyajátékok felé
              hajlok, mint a poker.
            </p>
          </div>
          <div className="column">
            <img id="masodik" alt="rolam" src={kep7} />
          </div>
        </div>
        <div id="tanulmanyaim" className="row">
          <div className="column">
            <img id="harmadik" alt="suli" src={suli}></img>
          </div>
          <div className="column">
            <h1 className="kiscim">Tanulmányaim</h1>
            <p>
              Tanulmányaim az Ady Endre általános iskolában kezdtem, de számomra
              az izgalmas része csak a Szily Kálmán szakgimnáziumába jött. Itt
              megismerkedtem az informatikával, de főleg a webfejlesztéssel. 
            </p>
            <p>
              Elvégeztem a szakgimnáziumot és az érettségit majd folytattam a
              felnőttképzésen, mint szoftverfejlesztő. Itt már többet tudtam
              foglalkozni azzal, ami számomra fontos volt, a weboldalakkal
              és a céljaimmal.
            </p>
          </div>
        </div>
        <div id="munkassagom" className="row">
          <div className="column">
            <h1 className="kiscim">Munkásságom</h1>
            <p>
              Ez az oldal az első olyan munkám, ami ki is került mindenki elé.
              Streameléshez is készitettem weboldalt(legutolsó kép), amit szerencsére
              nem tettem ki.
            </p>
            <p>
              Családi napokon is tartottam kiselőadást a webfejlesztésről a középiskolába
              jelenkezőknek, illetve robotikával is foglalkoztam egy erasmus programon belül
              Olaszországban, de ez a terület nem fogott meg.
            </p>
            <div id="column">
              <img id="negyedik" alt="elsooldalam" src={thingz}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
