import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { MyLudus } from "./myLudus";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { LuSwords } from "react-icons/lu";
import { drinkWine } from "../slices/Player";

export const Mainpage = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [imgSrc, setimgSrc] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setimgSrc(e.target.src);
    setShow(true);
  };
  let gladColors = {
    Retiarius: "rgb(202, 215, 230)",
    Secutor: "rgb(227, 189, 139)",
    Murmillo: "rgb(227, 189, 139)",
    Dimachaerus: "rgb(227, 139, 139)",
    Hoplomachus: "rgb(203, 230, 161)",
    Thraex: "rgb(227, 161, 230)",
    Gladriatrix: "rgb(230, 223, 161)",
  };
  const { gladiators, items, aggressive, defensive, balanced, wine, eCards } =
    useSelector((store) => store.player);
  console.log(gladiators);
  const handleWine = (i) => {
    dispatch(drinkWine(i));
  };
  console.log(eCards);
  return (
    <div className="mainPage">
      <MyLudus />
      <div className="tabInventory">
        <Modal className="picker-modal" show={show} onHide={handleClose}>
          <img src={imgSrc} alt="" />
        </Modal>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Gladiators">
            <div className="mainPage-gladiators">
              {gladiators.map((gladiator, index) => {
                let atkb = 0;
                let defb = 0;
                if (gladiator[0].style == "aggressive") {
                  atkb = aggressive.atk;
                  defb = aggressive.def;
                } else if (gladiator[0].style == "defensive") {
                  atkb = defensive.atk;
                  defb = defensive.def;
                } else {
                  atkb = balanced.atk;
                  defb = balanced.def;
                }
                let bcolor = gladColors[gladiator[0].type];
                let goTolink = "/gladiator-styles/" + gladiator[0].type;
                return (
                  <div key={index}>
                    <img src={gladiator[0].img} onClick={handleShow} alt="" />
                    <p>
                      Style :
                      <Link to={goTolink} style={{ backgroundColor: bcolor }}>
                        {" "}
                        {gladiator[0].type}
                      </Link>
                    </p>
                    <p>Fighting : {gladiator[0].style}</p>
                    <p>Current HP : {gladiator[0].hp}</p>
                    <p>Current ATK Bonus : {atkb}</p>
                    <p>Current Def Bonus : {defb}</p>
                    <button
                      disabled={
                        wine == 0 ||
                        gladiators[index][0].fhp == gladiators[index][0].hp
                      }
                      onClick={() => handleWine(index)}
                    >
                      Drink Wine
                    </button>
                  </div>
                );
              })}
              <Link to="/preparation" className="main-toArena">
                <LuSwords size={20} /> GO TO ARENA <LuSwords size={20} />
              </Link>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Items">
            <div className="mainPage-items">
              {items.map((item, index) => {
                return (
                  <div className="itemCard-main" key={index}>
                    <img src={item?.img} alt="" />
                  </div>
                );
              })}
            </div>
          </Tab>
          <Tab eventKey="contact" title="Action Cards">
            <div className="mainPage-items">
              {eCards.map((item, index) => {
                return (
                  <div className="itemCard-main" key={index}>
                    <img src={item?.img} alt="" />
                  </div>
                );
              })}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
