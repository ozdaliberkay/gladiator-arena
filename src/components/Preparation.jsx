import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiTwoCoins } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { TiStarburstOutline } from "react-icons/ti";
import { FaWineBottle } from "react-icons/fa";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { GiSwordsPower } from "react-icons/gi";
import { LiaCoinsSolid } from "react-icons/lia";
import { delItem, getItem, getWine } from "../slices/Player";
import { Link } from "react-router-dom";

import { Market } from "./Market";

export const Preparation = () => {
  const dispatch = useDispatch();
  const { gladiators, coins, items } = useSelector((store) => store.player);
  const { stage } = useSelector((store) => store.arena);
  const [itemSelect, setitemSelect] = useState(false);
  const [selectedGlad, setselectedGlad] = useState(-1);
  const [isAtkItem, setisAtkItem] = useState(true);
  const [itemType, setitemType] = useState("");
  const [sGlad, setsGlad] = useState("");

  let link = "/stage" + stage;

  const equipAtk = (gl) => {
    gladiators.map((g, index) => {
      if (g[0].name == gl[0].name) {
        setitemType("atk");
        setsGlad(g[0].name);
        setselectedGlad(index);
        setitemSelect(true);
        setisAtkItem(true);
      }
    });
  };
  const unEqAtk = (gl) => {
    gladiators.map((g, index) => {
      if (g[0].name == gl[0].name) {
        dispatch(delItem({ index, t: "atk" }));
      }
    });
  };
  const equipDef = (gl) => {
    gladiators.map((g, index) => {
      if (g[0].name == gl[0].name) {
        setselectedGlad(index);
        setsGlad(g[0].name);
        setitemSelect(true);
      }
    });
  };
  const unEqDef = (gl) => {
    gladiators.map((g, index) => {
      if (g[0].name == gl[0].name) {
        dispatch(delItem({ index, t: "def" }));
      }
    });
  };
  const getItemSelect = (it) => {
    if (it) {
      dispatch(getItem({ item: it, sGlad, itemType }));
    }
    setitemSelect(false);
    setitemType("");
    setsGlad("");
  };
  const buyWine = () => {
    dispatch(getWine());
  };

  return (
    <div className="preparePage">
      {itemSelect ? (
        <div className="itemSelectPage">
          <div>
            <p className="itemSelect-info">
              Choose the {isAtkItem ? "attack" : "defense"} equipment
              <p>that {gladiators[selectedGlad][0].name} will use </p>
            </p>
            <div className="prepare-itemselect-glad">
              <img src={gladiators[selectedGlad][0]?.img} alt="" />
            </div>
          </div>
          <div className="prepare-itemSelect">
            {items.map((item, index) => {
              return (
                <div key={index}>
                  {" "}
                  <img
                    onClick={() => getItemSelect(item)}
                    src={item?.img}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="preparePage">
          <Link className="bl-bt" to="/myludus">
            {" "}
            <IoArrowBack /> Ludus{" "}
          </Link>
          <p className="prepare-info">
            <BsFillQuestionDiamondFill size={19} /> Why you should wear right
            equipment <BsFillQuestionDiamondFill size={19} />
            <p>
              <TiStarburstOutline size={20} /> To gain a +1 bonus stat and use
              the ability on the gladiator card{" "}
              <span style={{ color: "blue", fontWeight: "bold" }}>
                *click the equip button*
              </span>{" "}
              <TiStarburstOutline size={20} />
            </p>
          </p>
          <div className="gladiator-prepare">
            {gladiators.map((g, index) => {
              return (
                <div className="gladiator-prepare-full" key={index}>
                  <div className="atweapon-prepare wp">
                    {g[0].atk_w.length == 0 ? (
                      <div className="itemSelect-holder">
                        <button onClick={() => equipAtk(g)}>Equip</button>
                      </div>
                    ) : (
                      <div>
                        <img
                          className="prepare-wp-img"
                          src={g[0]?.atk_w[0]?.img}
                        />
                        <button className="uneq-bt" onClick={() => unEqAtk(g)}>
                          Unequip
                        </button>
                      </div>
                    )}
                  </div>
                  <img
                    className="gladiator-prepare-card"
                    src={g[0].img}
                    alt=""
                  />
                  <div className="dfweapon-prepare wp">
                    {g[0].def_w.length == 0 ? (
                      <div className="itemSelect-holder">
                        <button onClick={() => equipDef(g)}>Equip</button>
                      </div>
                    ) : (
                      <div>
                        <img
                          className="prepare-wp-img"
                          src={g[0]?.def_w[0]?.img}
                        />
                        <button className="uneq-bt" onClick={() => unEqDef(g)}>
                          Unequip
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="market-prepare">
            <Link to={link} className="prep-go-stage">
              <GiSwordsPower size={31} /> FOR THE GLORY{" "}
              <GiSwordsPower size={31} />
            </Link>
            <div
              style={{
                position: "absolute",
                right: "30px",
                top: "72px",
                fontSize: "20px",
              }}
            >
              {coins} <LiaCoinsSolid color="rgb(121, 131,0)" size={28} />
            </div>

            <h3 className="mr-h3">
              <FaShop size={40} style={{ marginBottom: "10px" }} /> MARKET{" "}
            </h3>

            <p style={{ letterSpacing: "1px" }}>
              <FaWineBottle color="rgb(115, 20, 20)" /> Wine :{" "}
              <button onClick={buyWine} className="m-but" disabled={coins <= 1}>
                {" "}
                Buy 2
                <GiTwoCoins color="rgb(121, 131,0)" size={20} />
              </button>{" "}
            </p>
            <Market />
          </div>
        </div>
      )}
    </div>
  );
};
