import React from "react";
import { Link } from "react-router-dom";
import items from "../Items.js";
import ludus1 from "../images/ludus/ludus1.png";
import ludus2 from "../images/ludus/ludus2.png";
import ludus3 from "../images/ludus/ludus3.png";
import { FaWineBottle } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { GiBroadsword } from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { getLudus } from "../slices/Player.jsx";

export const Ludus = () => {
  const dispatch = useDispatch();
  const ludusSelect = (e) => {
    let rand;
    let atkItem = [0, 1, 2, 3, 10, 11, 12, 15, 16, 17, 18];
    let defItem = [4, 5, 8, 9];
    let balItem = [6, 7, 13, 14];
    let tempItem = [];
    let setLudus = {
      name: "",
      coin: 0,
      wine: 0,
      item: [],
      Allatkb: 0,
      Alldefb: 0,
      Defatkb: 0,
      Defdefb: 0,
      Atkdefb: 0,
      Atkatkb: 0,
      isHeal: false,
    };
    console.log(e.target.parentElement);
    if (e.target.parentElement.id == "defensiveLudus") {
      for (let i = 0; i < 5; i++) {
        rand = Math.floor(Math.random() * defItem.length);
        tempItem.push(items[defItem[rand]]);
      }
      for (let i = 0; i < 5; i++) {
        rand = Math.floor(Math.random() * 21);
        tempItem.push(items[rand]);
      }
      setLudus.item = tempItem;
      setLudus.name = "Albinius' Ludus";
      setLudus.wine = 1;
      setLudus.coin = 11;
      setLudus.Alldefb = 1;
      setLudus.Defatkb = 1;
      setLudus.Defdefb = 1;
    } else if (e.target.parentElement.id == "aggressiveLudus") {
      setLudus.name = "Variatus' Ludus";
      for (let i = 0; i < 6; i++) {
        rand = Math.floor(Math.random() * atkItem.length);
        tempItem.push(items[atkItem[rand]]);
      }
      for (let i = 0; i < 5; i++) {
        rand = Math.floor(Math.random() * 21);
        tempItem.push(items[rand]);
      }
      setLudus.item = tempItem;
      setLudus.coin = 11;
      setLudus.Allatkb = 1;
      setLudus.Atkatkb = 1;
      setLudus.Atkdefb = 1;
    } else {
      setLudus.name = "Vesuvilius' Ludus";
      for (let i = 0; i < 5; i++) {
        rand = Math.floor(Math.random() * balItem.length);
        tempItem.push(items[balItem[rand]]);
      }
      for (let i = 0; i < 5; i++) {
        rand = Math.floor(Math.random() * 21);
        tempItem.push(items[rand]);
      }
      setLudus.item = tempItem;
      setLudus.coin = 12;
      setLudus.Alldefb = 1;
      setLudus.Allatkb = 1;
      setLudus.isHeal = true;
    }
    dispatch(getLudus(setLudus));
    setTimeout(() => {
      document.getElementById("goPick").click();
    }, 500);
  };

  return (
    <div className="ludusPage">
      <h1>Pick Your Ludus</h1>
      <div className="luduses">
        <div onClick={ludusSelect} id="defensiveLudus" className="ludus">
          <img src={ludus1} alt="" />
          <h5>Albinius' Ludus</h5>
          <p>
            <b>+5</b> items for defensive gladiators
          </p>
          <p>
            <b>+5</b> random items
          </p>

          <p>
            <b>+11</b> <GiTwoCoins /> coin <b>+1</b> <FaWineBottle /> wine
          </p>
          <p>
            <b>+1</b> <FaShieldAlt /> def for all gladiators
          </p>
          <p>
            <b>+1</b> <FaShieldAlt /> def <b>+1</b> <GiBroadsword /> atk for
            defensive gladiators
          </p>
          <br />
        </div>
        <div onClick={ludusSelect} id="aggressiveLudus" className="ludus">
          <img src={ludus2} alt="" />
          <h5>Variatus' Ludus</h5>
          <p>
            <b>+6</b> items for aggressive gladiators
          </p>
          <p>
            <b>+5</b> random items
          </p>
          <p>
            <b>+11</b> <GiTwoCoins /> coin
          </p>
          <p>
            <b>+1</b> <GiBroadsword /> atk for all gladiators
          </p>
          <p>
            <b>+1</b> <GiBroadsword /> atk <b>+1</b> <FaShieldAlt /> def for
            aggressive gladiators
          </p>
          <br />
        </div>
        <div onClick={ludusSelect} id="balancedLudus" className="ludus">
          <img src={ludus3} alt="" />
          <h5>Vesuvilius' Ludus</h5>
          <p>
            <b>+5</b> items for balanced gladiators
          </p>
          <p>
            <b>+5</b> random items
          </p>
          <p>
            <b>+12</b> <GiTwoCoins /> coin
          </p>
          <p>
            <b>+1</b> <FaShieldAlt /> def <b>+1</b> <GiBroadsword /> atk for all
            gladiators
          </p>
          <p>
            <b>+1</b> <GiHealthNormal /> heal for all gladiators at the end of
            each stage
          </p>
        </div>
      </div>
      <Link
        id="goPick"
        style={{ display: "none" }}
        to={"/gladiator-pick"}
      ></Link>
    </div>
  );
};
