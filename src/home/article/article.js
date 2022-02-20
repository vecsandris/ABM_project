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
              
            </p>
          </div>
        </div>
        <div id="fotozas" className="row">
          <div className="column">
            <h1 className="kiscim"><a href = "https://instagram.com/vecsernyes.andras">Instagram!</a></h1>
            <p>
              A fotózás is az életem része, bár ennek sok időt nem szánok,
              illetve ironikusan hangozhat, de a képeim telefonnal vannak
              készitve. Minden jobb fotóm igy készült vagy a barátaim lőtték a
              saját kamerájukkal rólam. Ennek ellenére fontosnak tartom, hisz
              egy weboldal design-hoz szükség van sok nagyon jó minőségű képre.
            </p>
            <p>
              A szabadidős programok,városjárás vagy akár történelmi helyszinek
              látogatása is nagyon vonz, ezt szivesen teszem a barátaimmal. Az
              adrenalin és az extrémebb dolgok is magukhoz kötöttek. Voltam már
              siklóernyőzni, lőttek már ki óriás csúzlival és rengeteg tervem
              van még, mit meg fogok valósitani.
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
              az izgalmas része csak a szakgimnáziumban jött, amikor
              elkezdhettem a műszaki informatikus szakmámat tanulni. Ez időszak
              alatt én megpróbálkoztam a robotikával, aminek keretében lego
              robotokat kellett programozni bizonyos feladatok ellátására. Még
              Olaszországban is voltam kint az Erasmus cserediák programban egy
              hétig, de nem fogott meg ez a terület.
            </p>
            <p>
              Érettségim és szakmám a Szily Kálmán Műszaki Szakgimnáziumában
              szereztem meg egy négy éves képzés keretein belül. Ekkor kaptam
              egy rendszerüzemeltető képesitést, melyre megalapozva mentem
              tovább az OKJ-s 2 éves képzésre. Itt már szoftverfejlesztőként
              tanultam, de emellett otthon folyamatosan fejlesztettem magam,
              mert nagyon izgalmasnak tartottam a webfejlesztést. Tudásra éhesen
              néha többet foglalkoztam az önfejlesztéssel, mint az iskolai
              tananyaggal.
            </p>
          </div>
        </div>
        <div id="munkassagom" className="row">
          <div className="column">
            <h1 className="kiscim">Munkásságom</h1>
            <p>
              Amit itt most látnak oldal, az első olyan munkámnak mondhatom,
              melyre büszke vagyok.Azzal a céllal épitettem fel, hogy
              megmutassam magamnak mire vagyok képes. Siker élményem ez tetőzte
              meg.Munkásságomhoz sorolhatom hogy részt vettem családi napon,
              melyen a nyolc osztályt végzett tanulókat kellett az informatikus
              pályára csábitani. Választhattam, hogy mivel teszem meg ezt, nagy
              meglepetésre a webfejlesztéssel.
            </p>
            <p>
              Egy középiskolai barátom tanitott rengeteget. Megmutatta az új és
              okosabb megoldásokat, mellyel el tudtam indulni egy olyan úton,
              ami sikerre vezet. A következő kép, amit a bekezdés alatt látni,
              az első, használhatónak mondható weboldalam, melyet szerencsére
              nem tettem közzé.
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
