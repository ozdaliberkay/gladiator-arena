import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import gladiators from "../gladiators";
import { GiTwoCoins } from "react-icons/gi";
import { LiaCoinsSolid } from "react-icons/lia";
import { useSelector, useDispatch } from "react-redux";
import { buyGladiator, setGladiators } from "../slices/Player";

export const Gladiators = () => {
  const dispatch = useDispatch();
  const [warn, setwarn] = useState("");
  const [gladiatorList, setgladiatorList] = useState([]);

  const [show, setShow] = useState(false);
  const [imgSrc, setimgSrc] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setimgSrc(e.target.src);
    setShow(true);
  };
  const { coins } = useSelector((store) => store.player);
  const getGladiator = (e) => {
    let x = e.target.parentElement.previousSibling.src;
    let z = x.split(/\/gladiator-arena/);
    let y = "/gladiator-arena" + z[1];
    let pickedGladiator = gladiators.filter((pick) => pick.img == y);

    if (e.target.innerHTML == "Select") {
      if (pickedGladiator[0].cost <= coins) {
        setgladiatorList([...gladiatorList, pickedGladiator]);
        dispatch(buyGladiator(pickedGladiator[0].cost));
        e.target.innerHTML = "Selected";
      }
    } else {
      for (x in gladiatorList) {
        if (gladiatorList[x][0].name == pickedGladiator[0].name) {
          let tempList = gladiatorList;
          tempList.splice(x, 1);
          setgladiatorList(tempList);
          dispatch(buyGladiator(-pickedGladiator[0].cost));
        }
      }
      e.target.innerHTML = "Select";
    }
  };
  const handleSelection = () => {
    if (gladiatorList.length < 3) {
      setwarn("*You must choose at least 3 gladiators");
      setTimeout(() => {
        setwarn("");
      }, 2300);
    } else {
      dispatch(setGladiators(gladiatorList));
      document.getElementById("toMyludusFromPick").click();
    }
  };
  return (
    <>
      <div className="pickerMenu">
        <div className="picker-coins">
          <div className="st">
            <LiaCoinsSolid />
            {coins}
          </div>
        </div>
        <h1>Pick Your Gladiators</h1>
        <div onClick={handleSelection} className="confirmSelection">
          I chose my gladiators
        </div>
        <div className="picker-warn">{warn}</div>
        <Modal className="picker-modal" show={show} onHide={handleClose}>
          <img src={imgSrc} alt="" />
        </Modal>
        {gladiators.map((gladiator, index) => {
          return (
            <div key={index} className="gladiator-pick-card">
              <img onClick={handleShow} src={gladiator.img} alt="" />
              <div className="gla-card-footer">
                <p>
                  Cost : {gladiator.cost} <GiTwoCoins />{" "}
                </p>
                <span>{gladiator.style}</span>
                <button onClick={getGladiator}>Select</button>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        to="/myludus"
        id="toMyludusFromPick"
        style={{ display: "none" }}
      ></Link>
    </>
  );
};
