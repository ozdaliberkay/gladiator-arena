export const attack = (atk, def, dice, card) => {
  let skill = "";
  let success = false;
  let myG = { ...atk };
  let opG = { ...def };
  let cAtk = myG.currentatk;
  if (card.id == "fury" || card.id == "kick" || card.id == "throw_sand") {
    cAtk += 3;
  }

  //atk right equpiment kontrolü yapalım
  if (myG.isRightAtk == 1) {
    if (myG.name == "Antheles") {
      if (dice + 12 >= opG.def) {
        console.log("Enemy captured");
        const z = Math.floor(Math.random() * 6) + 1;
        if (z + cAtk > opG.def) {
          opG.currenthp -= 2;
          success = true;
        }
      } else {
        if (cAtk + dice > opG.def) {
          opG.currenthp--;
          success = true;
        }
      }
    } else if (myG.name == "Belliatus") {
      if (opG.nat != "roman") {
        if (cAtk + dice + 1 > opG.def) {
          opG.currenthp--;
          success = true;
        } else {
          if (cAtk + dice > opG.def) {
            opG.currenthp--;
            success = true;
          }
        }
      }
    } else if (myG.name == "Braxus") {
      if (cAtk + dice > opG.def) {
        opG.currenthp--;
        success = true;
      }
    } else if (myG.name == "Caedes") {
      if (opG.currenthp == 1) {
        if (cAtk + dice + 2 > opG.def) {
          opG.currenthp--;
          myG.atk++;
          myG.currentatk++;
          success = true;
          skill = "Caedes";
        }
      } else {
        if (cAtk + dice > opG.def) {
          opG.currenthp--;
          success = true;
        }
      }
    } else if (myG.name == "Dakhar") {
      if (cAtk + dice > opG.def) {
        if (!opG.isCripled) {
          opG.isCripled = true;
          opG.currenthp--;
          opG.def--;
          opG.spd -= 2;
          success = true;
        } else {
          opG.currenthp--;
        }
      }
    } else if (myG.name == "Draxar") {
      if (opG.nat == "gaul") {
        cAtk += 3;
      }
      if (opG.type == "murmillo") {
        cAtk += 2;
      }
      if (cAtk + dice > opG.def) {
        opG.currenthp--;
        success = true;
      }
    } else if (myG.name == "Faedexus") {
      if (opG.nat == "roman") {
        if (cAtk + dice + 2 > opG.def) {
          if (opG.currenthp == 1) {
            myG.hp++;
            skill = "Faedexus";
            opG.currenthp--;
            success = true;
          } else {
            opG.currenthp--;
            success = true;
          }
        }
      } else {
        if (cAtk + dice > opG.def) {
          opG.currenthp--;
        }
      }
    } else if (myG.name == "Kyracros") {
      if (opG.type == "murmillo" || opG.type == "thraex") {
        cAtk++;
      }
      if (opG.nat == "wild" || opG.nat == "wild2") {
        cAtk += 4;
      }
      if (cAtk + dice > opG.def) {
        opG.currenthp--;
        success = true;
      }
    } else if (myG.name == "Laetus") {
      if (opG.type == "murmillo" || opG.type == "secutor") {
        cAtk += 2;
      }
      if (myG.isBonus) {
        cAtk += 2;
        myG.isBonus = false;
      }
      if (cAtk + dice > opG.def) {
        if (opG.currenthp == 1) {
          myG.isBonus == true;
          opG.currenthp--;
          success = true;
        } else {
          opG.currenthp--;
          success = true;
        }
      }
    } else if (myG.name == "Manuxes") {
      if (opG.nat != "gaul") {
        cAtk++;
      }
      if (cAtk + dice > opG.def) {
        opG.currenthp--;
        success = true;
      }
    } else if (myG.name == "Phanemeos") {
      if (11 + dice > opG.def) {
        console.log("Enemy Captured");
        cAtk += 4;
      }
      if (opG.spd <= 5) {
        cAtk += 2;
      }
      const z = Math.floor(Math.random() * 6) + 1;
      if (cAtk + z > opG.def) {
        opG.currenthp--;
      }
    } else if (myG.name == "Pravus") {
      if (opG.type == "retiarius") {
        cAtk++;
      }
      if (cAtk + dice > opG.def) {
        opG.currenthp--;
        success = true;
      }
    } else if (myG.name == "Sagax") {
      cAtk += 2;
      if (cAtk + dice > opG.def) {
        opG.currenthp--;
        success = true;
      }
    } else if (myG.name == "Seera") {
      if (cAtk + dice > opG.def) {
        if (!myG.isUlt) {
          opG.currenthp = 0;
          myG.isUlt = true;
          success = true;
        } else {
          opG.currenthp--;
          success = true;
        }
      }
    } else if (myG.name == "Xenatheles") {
      if (myG.isDamaged) {
        cAtk++;
        myG.isDamaged = false;
      }
      if (cAtk + dice > opG.def) {
        opG.currenthp--;
        success = true;
      }
      if (opG.def <= 6) {
        const z = Math.floor(Math.random() * 6) + 1;
        if (cAtk + z > opG.def && opG.currenthp > 0) {
          opG.currenthp--;
          success = true;
        }
      }
    }
  } else {
    if (cAtk + dice > opG.def) {
      opG.currenthp = opG.currenthp - 1;
      success = true;
    }
  }
  if (card.id == "criple") {
    if (success) {
      opG.spd -= 2;
      opG.def--;
    }
  }
  return { myG, opG, success, skill, card };
};
export const deff = (myg, opz, dice, card) => {
  let isHit = false;
  let counter = false;
  let isD = false;
  let my = { ...myg };
  let op = { ...opz };
  let cdef = my.currentdef;
  if (card.id == "counter") {
    if (cdef + dice + 2 > op.atk) {
      let d = Math.floor(Math.random() * 4);
      if (my.currentatk + d + 2 > op.def) {
        op.currenthp--;
        counter = true;
      }
    }
  } else if (card.id == "dodge") {
    let dd = Math.floor(Math.random() * 6) + 1;
    let isDodge = dd + my.spd;
    if (isDodge > 10) {
      isD = true;
    }
  } else if (card.id == "shields_up") {
    cdef += 3;
  }

  if (my.isRightDef == 1) {
    if (my.name == "Belliatus") {
      if (my.hp == 1) {
        cdef += 2;
      }
      if (cdef + dice < op.atk) {
        my.hp--;
        isHit = true;
      }
    } else if (my.name == "Braxus") {
      if (cdef + dice > op.atk) {
        let d = Math.floor(Math.random() * 4);
        if (my.currentatk + d > op.def) {
          op.currenthp--;
          counter = true;
        }
      } else {
        my.hp--;
        isHit = true;
      }
    } else if (my.name == "Draxar") {
      if (cdef + dice + my.bdef > op.atk) {
        my.bdef++;
      } else {
        my.hp--;
        my.bdef = 0;
        isHit = true;
      }
    } else if (my.name == "Manuxes") {
      if (op.spd < 6) {
        cdef++;
      }
      if (cdef + dice < op.atk) {
        my.hp--;
        isHit = true;
      }
    } else if (my.name == "Pravus") {
      if (op.type == "retiarius") {
        cdef += 2;
      }
      if (cdef + dice < op.atk) {
        my.hp--;
        isHit = true;
      }
    } else {
      if (cdef + dice < op.atk) {
        my.hp -= 1;
        isHit = true;
      }
    }
  } else {
    if (cdef + dice < op.atk) {
      my.hp -= 1;
      isHit = true;
    }
  }
  if (card.id == "bandage") {
    if (my.fhp > my.hp) {
      my.hp++;
    }
  }
  return { my, op, isHit, counter, isD };
};
