import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiSwordsPower } from "react-icons/gi";
import { FaDice } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { attack, deff } from "../util/Fight";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { getStageEnd, usedActionCard } from "../slices/Player";

export const Stage1 = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [phases, setphases] = useState("placement");
  const { stage1Gladiators } = useSelector((store) => store.arena);
  const { gladiators, eCards } = useSelector((store) => store.player);
  const [myGladiators, setmyGladiators] = useState([]);
  const [infoarrrand, setinfoarrrand] = useState(0);
  const [figthInfo, setfigthInfo] = useState("");
  const [picked, setpicked] = useState("");
  const [pickedog, setpickedog] = useState("");
  const [gladiatorPlayed, setgladiatorPlayed] = useState([]);
  const [naliveGlads, setnaliveGlads] = useState(0);
  const [s1opg, sets1opg] = useState([]);
  const [defOpg, setdefOpg] = useState("");
  const [defMyg, setdefMyg] = useState("");
  const [defatkpc, setdefatkpc] = useState(0);
  const [dice, setdice] = useState("");
  const [isOver, setisOver] = useState(false);
  const [tac, settac] = useState("");
  const [actionCard, setactionCard] = useState("");
  const [mDef, setmDef] = useState(0);
  const [mAtk, setmAtk] = useState(0);
  const [oDef, setoDef] = useState(0);
  const [gmAtk, setgmAtk] = useState(0);
  const [gmDef, setgmDef] = useState(0);
  const [clickable, setclickable] = useState(true);
  const [isLose, setisLose] = useState(false);
  console.log(myGladiators);
  let infoArray = [
    "You need the right atk equipment for *attack abilities.",
    "If your atk + bonus atk + dice > opponent's def = Hit!!",
    "If your def + bonus def + dice > opponent's atk = Block",
    "You need the right def equipment for *defense abilities.",
  ];

  useEffect(() => {
    if (stage1Gladiators) {
      sets1opg([...stage1Gladiators]);
    }
  }, [stage1Gladiators]);

  const selectGladiator = (e) => {
    let tg = [...gladiators];
    let selectedTemp = e.target.previousElementSibling.src;
    let a = selectedTemp.indexOf("/gladiator-arena");

    let selectedGladTemp2 = selectedTemp.slice(a);
    if (e.target.innerHTML == "Select") {
      e.target.innerHTML = "Selected";
      let selected = gladiators.filter((g) => g[0].img == selectedGladTemp2);
      setmyGladiators([...myGladiators, selected]);
    } else {
      let myGladTemp = myGladiators;
      myGladTemp = myGladTemp.filter((my) => my[0][0].img != selectedGladTemp2);
      setmyGladiators(myGladTemp);
      e.target.innerHTML = "Select";
    }
  };
  const goFight = () => {
    if (myGladiators.length == 3) {
      setphases("fight");
      setfigthInfo("Choose your gladiator to attack");
    } else {
      console.log("3 gladyatör seçmelisin");
    }
  };
  const gladiatorPicked = (pg) => {
    if (phases != "def") {
      if (gladiatorPlayed.length != 3) {
        if (pg.hp == 0) {
          setfigthInfo("This gladiator has fainted");
          // setgladiatorPlayed([...gladiatorPlayed, pg]);
        } else {
          setpicked(pg);
          if (gladiatorPlayed.includes(pg.name)) {
            setfigthInfo("This gladiator has already attacked");
            setphases("fight");
          } else {
            setphases("acards");
            setfigthInfo("Attack an enemy gladiator");
          }
        }
        setdice("");
      }
    }
  };
  const attackHim = (og) => {
    if (figthInfo == "Attack an enemy gladiator") {
      if (og.currenthp > 0) {
        setpickedog(og);
        setphases("atkph");
        if (picked.isRightAtk == 1) {
          console.log(picked);
          if (picked.name == "Belliatus" && og.nat != "roman") {
            setgmAtk(1);
          } else if (picked.name == "Caedes" && og.currenthp == 1) {
            setgmAtk(2);
          } else if (picked.name == "Dakhar" && og.isCripled == true) {
            setgmAtk(2);
          } else if (picked.name == "Draxar" && og.type == "murmillo") {
            setgmAtk(2);
          } else if (picked.name == "Draxar" && og.nat == "gaul") {
            setgmAtk(3);
          } else if (picked.name == "Faedexus" && og.nat != "roman") {
            console.log("jashdjkhas");
            setgmAtk(2);
          } else if (picked.name == "Kyracros" && og.type == "murmillo") {
            setgmAtk(1);
          } else if (picked.name == "Kyracros" && og.type == "thraex") {
            setgmAtk(1);
          } else if (picked.name == "Laetus" && og.type == "murmillo") {
            setgmAtk(2);
          } else if (picked.name == "Laetus" && og.type == "secutor") {
            setgmAtk(2);
          } else if (picked.name == "Manuxes" && og.nat != "gaul") {
            setgmAtk(1);
          } else if (picked.name == "Phanemeos" && og.spd < 6) {
            setgmAtk(2);
          } else if (picked.name == "Pravus" && og.type == "retiarius") {
            setgmAtk(1);
          } else if (picked.name == "Xenatheles" && picked.isDamaged) {
            setgmAtk(1);
          } else {
            setgmAtk(0);
          }
        } else {
          setgmAtk(0);
        }
      }
    }
  };
  const nowAttack = () => {
    const zar = Math.floor(Math.random() * 6) + 1;
    setdice(zar);
    let retatak = attack(picked, pickedog, zar, actionCard);
    setgladiatorPlayed([...gladiatorPlayed, picked]);

    if (retatak.success) {
      setfigthInfo("You hit!");
    } else {
      setfigthInfo("Your attack has blocked");
    }

    if (retatak.skill == "Caedes") {
      let tgl = [];
      myGladiators.forEach((g, i) => {
        if (g[0][0].name == "Caedes") {
          tgl.push(retatak.myG);
        } else {
          tgl.push(g[0][0]);
        }
      });

      let tx = [[[tgl[0]]], [[tgl[1]]], [[tgl[2]]]];
      setmyGladiators(tx);
    }
    if (retatak.skill == "Faedexus") {
      let tgl = [];
      myGladiators.forEach((g, i) => {
        if (g[0][0].name == "Faedexus") {
          tgl.push(retatak.myG);
        } else {
          tgl.push(g[0][0]);
        }
      });

      let tx = [[[tgl[0]]], [[tgl[1]]], [[tgl[2]]]];
      setmyGladiators(tx);
    }
    atkReturn(retatak);
    setpicked("");
    setpickedog("");
    console.log("reatk", retatak);
  };
  const atkReturn = (r) => {
    settac("");
    let isDone;
    if (actionCard) {
      dispatch(usedActionCard(actionCard));
      setactionCard("");
    }
    if (r.opG.currenthp == 0) {
      isDone = 1;
      if (s1opg[0].currenthp == 0) {
        isDone++;
      }
      if (s1opg[1].currenthp == 0) {
        isDone++;
      }
      if (s1opg[2].currenthp == 0) {
        isDone++;
      }
    }
    if (isDone == 3) {
      setisOver(true);
    }
    console.log("atkrtrn", r);
    setgladiatorPlayed([...gladiatorPlayed, r.myG.name]);
    setphases("fight");
    // setfigthInfo("Choose your gladiator to attack");
    let tog = [];
    s1opg.forEach((g) => {
      if (g.nat == r.opG.nat && g.type == r.opG.type) {
        tog.push(r.opG);
      } else {
        tog.push(g);
      }
    });
    sets1opg(tog);

    if (myGladiators.length <= gladiatorPlayed.length + naliveGlads + 1) {
      let m = tog[0].currenthp + tog[1].currenthp + tog[2].currenthp;
      console.log("def phase");
      if (m > 0) {
        setTimeout(() => {
          setphases("def");
          defTime(0);
        }, 2000);
      }
    }

    setoDef(0);
    setmAtk(0);
  };
  const defTime = (x) => {
    setfigthInfo("Prepare for defense");
    if (x == 0) {
      if (s1opg[0].currenthp > 0) {
        setdefOpg(s1opg[0]);
        setdefatkpc(1);
      } else if (s1opg[1].currenthp > 0) {
        setdefOpg(s1opg[1]);
        setdefatkpc(2);
      } else {
        setdefOpg(s1opg[2]);
        setdefatkpc(0);
      }
    } else if (x == 1) {
      if (s1opg[1].currenthp > 0) {
        setdefOpg(s1opg[1]);
        setdefatkpc(2);
      } else {
        setdefOpg(s1opg[2]);
        setdefatkpc(0);
      }
    } else {
      let h = s1opg[2].currenthp;
      if (h > 0) {
        setdefOpg(s1opg[2]);
        setdefatkpc(0);
      } else {
        setphases("fight");
        setfigthInfo("Choose your gladiator to attack");
        setgladiatorPlayed([]);
      }
    }

    while (true) {
      let r = Math.floor(Math.random() * 3);
      if (myGladiators[r][0][0].hp != 0) {
        setdefMyg(myGladiators[r][0][0]);
        break;
      }
    }
  };
  const nowDefense = () => {
    let s = defatkpc;
    let tgl = [];
    let thp = 0;

    if (defMyg && defOpg) {
      let z = Math.floor(Math.random() * 6) + 1;
      setdice(z);

      if (defMyg.isRightDef == 1) {
        if (defMyg.name == "Belliatus" && defMyg.hp == 1) {
          setgmDef(2);
        } else if (defMyg.name == "Manuxes" && defOpg.spd < 6) {
          setgmDef(1);
        } else if (defMyg.name == "Pravus" && defOpg.type == "retiarius") {
          setgmDef(2);
        } else {
          setgmDef(0);
        }
      } else {
        setgmDef(0);
      }
      console.log(defOpg); //buradan kontrol. 0 hpli adam şeçiliyor mu bak
      let rDef = deff(defMyg, defOpg, z, actionCard);

      if (rDef.counter) {
        let tog = [];
        s1opg.forEach((g) => {
          if (g.nat == rDef.op.nat && g.type == rDef.op.type) {
            tog.push(rDef.op);
          } else {
            tog.push(g);
          }
        });
        sets1opg(tog);
      }

      if (rDef.isHit && !rDef.isD) {
        console.log("hit aldık", rDef.my);

        myGladiators.forEach((g, i) => {
          if (g[0][0].name == rDef.my.name) {
            thp += rDef.my.hp;
            tgl.push(rDef.my);
          } else {
            tgl.push(g[0][0]);
            thp += g[0][0].hp;
          }
        });
        console.log("thp", thp);
        if (rDef.my.hp == 0) {
          if (naliveGlads == 2) {
            setphases("over");
            setisOver(true);
            setisLose(true);
          }
          setnaliveGlads(naliveGlads + 1);
        }
        let tx = [[[tgl[0]]], [[tgl[1]]], [[tgl[2]]]];
        setmyGladiators(tx);
        if (thp == 0) {
          setphases("over");
          setisOver(true);
          setisLose(true);
        }
      }

      if (actionCard) {
        dispatch(usedActionCard(actionCard));
        setactionCard("");
      }
      settac("");
      if (s == 0) {
        setphases("fight");
        setfigthInfo("Choose your gladiator to attack");
        setgladiatorPlayed([]);
      } else {
        setdefatkpc(s);
        defTime(s);
      }
    }
    setmDef(0);
    setclickable(false);
    setTimeout(() => {
      setclickable(true);
    }, 750);
  };
  const stageOver = () => {
    let t = [[[]], [[]], [[]]];
    t[0][0] = myGladiators[0][0][0];
    t[1][0] = myGladiators[1][0][0];
    t[2][0] = myGladiators[2][0][0];
    dispatch(getStageEnd({ g: t })); //stage sonu gladyatörlerin statları reduxa işle.
    if (isLose) {
      document.getElementById("endslinklose").click();
    } else {
      document.getElementById("endslink").click();
    }
  };
  const onayActionCard = () => {
    console.log(tac.id);
    if (tac.id == "shields_up") {
      setmDef(3);
    } else if (tac.id == "counter") {
      setmDef(2);
    } else if (tac.id == "fury") {
      setmAtk(3);
    } else if (tac.id == "kick" || tac.id == "throw_sand") {
      setoDef(3);
    }
    if (tac) {
      setactionCard(tac);
    }
    settac("");
    handleClose();
  };
  useEffect(() => {
    setTimeout(() => {
      setinfoarrrand(Math.floor(Math.random() * 4));
    }, 4000);
  }, [phases]);
  if (!stage1Gladiators || !gladiators) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {phases == "placement" ? (
        <div className="placementPage">
          <h4>Choose 3 gladiators you want to fight</h4>
          <div className="stage-g-pick">
            {gladiators.map((g, i) => {
              if (g[0].hp > 0) {
                return (
                  <div className="stage-gla-img" key={i}>
                    <img src={g[0].img} alt="" />
                    <button onClick={selectGladiator}>Select</button>
                  </div>
                );
              }
            })}
          </div>
          <button
            style={{
              margin: "30px",
              padding: "5px 10px",
              borderRadius: "10px",
              backgroundColor: "red",
              color: "white",
              fontSize: "20px",
              letterSpacing: "px",
            }}
            onClick={() => goFight()}
          >
            <GiSwordsPower size={30} /> I AM READY <GiSwordsPower size={30} />
          </button>
        </div>
      ) : (
        <div className="stagePage">
          <div className="stage-infos">
            <div className="topl">
              {phases != "fight" && (
                <div>
                  {phases == "def" ? (
                    <div>
                      <p>
                        <b>{defMyg.name}</b>
                      </p>
                      <p>
                        <b>ATK : {defMyg.currentatk}</b>
                      </p>
                      <p>
                        <b>
                          Def : {defMyg.currentdef}{" "}
                          {mDef != 0 && <span>+ {mDef}</span>}
                          {gmDef != 0 && <span>+ {gmDef}</span>}
                        </b>
                      </p>
                      <p>
                        <b>HP : {defMyg.hp}</b>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p>
                        <b>{picked.name}</b>
                      </p>
                      <p>
                        <b>
                          ATK : {picked.currentatk}{" "}
                          {mAtk != 0 && <span>+ {mAtk}</span>}
                          {gmAtk != 0 && <span>+ {gmAtk}</span>}
                        </b>
                      </p>
                      <p>
                        <b>Def : {picked.currentdef}</b>
                      </p>
                      <p>
                        <b>HP : {picked.hp}</b>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="topm">
              <Button
                variant="primary"
                disabled={phases !== "atkph" && phases !== "def"}
                onClick={handleShow}
                className="me-2 aCardsbut"
                style={{ marginTop: "24px" }}
              >
                Action Cards
              </Button>
              <div className="fight-info">{figthInfo}</div>
              <div>
                <b>{dice}</b>
                <FaDice size={28} />
              </div>

              {phases == "atkph" ? (
                <Button
                  disabled={!clickable}
                  style={{ zIndex: "1" }}
                  onClick={() => nowAttack()}
                >
                  Attack
                </Button>
              ) : phases == "def" ? (
                <Button
                  disabled={!clickable}
                  variant="danger"
                  style={{ zIndex: "1" }}
                  onClick={() => nowDefense()}
                >
                  Defense
                </Button>
              ) : isOver ? (
                <Button
                  className="gbut"
                  variant="warning"
                  style={{ zIndex: "1" }}
                  onClick={() => stageOver()}
                >
                  Glory!
                </Button>
              ) : phases == "fight" ? (
                <div>
                  <span className="infoArr-s">{infoArray[infoarrrand]}</span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="topr">
              {phases != "fight" && (
                <div>
                  {phases == "def" ? (
                    <div>
                      <p>
                        <b>{defOpg.type}</b>
                      </p>
                      <p>
                        <b>ATK : {defOpg.atk}</b>
                      </p>
                      <p>
                        <b>Def : {defOpg.def}</b>
                      </p>
                      <p>
                        <b>HP : {defOpg.currenthp}</b>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p>
                        <b>{pickedog.type}</b>
                      </p>
                      <p>
                        <b>ATK : {pickedog.atk}</b>
                      </p>
                      <p>
                        <b>
                          Def : {pickedog.def}{" "}
                          {oDef != 0 && <span>- {oDef}</span>}
                        </b>
                      </p>
                      <p>
                        <b>HP : {pickedog.currenthp}</b>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="stage-arena">
            <div className="atk-pos">
              <div className="pos1">
                <img
                  src={myGladiators[0]?.[0]?.[0]?.img}
                  alt=""
                  onClick={() => gladiatorPicked(myGladiators[0]?.[0]?.[0])}
                />
                <ProgressBar
                  variant="success"
                  now={
                    (100 / myGladiators[0]?.[0]?.[0]?.fhp) *
                    myGladiators[0]?.[0]?.[0]?.hp
                  }
                />
              </div>
              <div className="pos2">
                <img
                  src={myGladiators[1]?.[0]?.[0]?.img}
                  alt=""
                  onClick={() => gladiatorPicked(myGladiators[1]?.[0]?.[0])}
                />
                <ProgressBar
                  variant="success"
                  now={
                    (100 / myGladiators[1]?.[0]?.[0]?.fhp) *
                    myGladiators[1]?.[0]?.[0]?.hp
                  }
                />
              </div>
              <div className="pos3">
                <img
                  src={myGladiators[2]?.[0]?.[0]?.img}
                  alt=""
                  onClick={() => gladiatorPicked(myGladiators[2]?.[0]?.[0])}
                />
                <ProgressBar
                  variant="success"
                  now={
                    (100 / myGladiators[2]?.[0]?.[0]?.fhp) *
                    myGladiators[2]?.[0]?.[0]?.hp
                  }
                />
              </div>
            </div>
            <div className="def-pos">
              <div className="pos4">
                <img
                  src={s1opg[0]?.img}
                  alt=""
                  onClick={() => attackHim(s1opg[0])}
                />
                <ProgressBar
                  variant="success"
                  now={(100 / s1opg[0]?.hp) * s1opg[0]?.currenthp}
                />
              </div>
              <div className="pos5">
                <img
                  src={s1opg[1]?.img}
                  alt=""
                  onClick={() => attackHim(s1opg[1])}
                />
                <ProgressBar
                  variant="success"
                  now={(100 / s1opg[1]?.hp) * s1opg[1]?.currenthp}
                />
              </div>
              <div className="pos6">
                <img
                  src={s1opg[2]?.img}
                  alt=""
                  onClick={() => attackHim(s1opg[2])}
                />
                <ProgressBar
                  variant="success"
                  now={(100 / s1opg[2]?.hp) * s1opg[2]?.currenthp}
                />
              </div>
            </div>
          </div>
          <>
            <Offcanvas
              show={show}
              onHide={handleClose}
              backdrop="static"
              placement="top"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  {tac == "" ? (
                    <p>Pick Action Card</p>
                  ) : (
                    <p>{tac.id.charAt(0).toUpperCase() + tac.id.slice(1)}</p>
                  )}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {eCards.length == 0 ? (
                  <p>No Action Cards</p>
                ) : (
                  <div>
                    {phases == "def" ? (
                      <div>
                        {eCards.map((c, i) => {
                          if (c?.for == "def") {
                            return (
                              <img
                                className="ac-item"
                                key={i}
                                src={c.img}
                                onClick={() => settac(c)}
                              />
                            );
                          }
                        })}
                      </div>
                    ) : (
                      <div>
                        {eCards.map((c, i) => {
                          if (c?.for == "atk") {
                            return (
                              <img
                                className="ac-item"
                                key={i}
                                src={c.img}
                                onClick={() => settac(c)}
                              />
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                )}
                <Button
                  className=""
                  variant="success"
                  onClick={() => onayActionCard()}
                >
                  Confirm Selected Action Card
                </Button>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        </div>
      )}
      <Link id="endslink" to="/stageEnd" style={{ display: "none" }}></Link>
      <Link id="endslinklose" to="/gameOver" style={{ display: "none" }}></Link>
    </>
  );
};
