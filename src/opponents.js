import celtthraex from "./images/stage1gladiators/st1_celt_thraex.png";
import egyptiansecutor from "./images/stage1gladiators/st1_egyptian_secutor.png";
import gauldiamachaerus from "./images/stage1gladiators/st1_gaul_dimachaerus.png";
import gaulthraex from "./images/stage1gladiators/st1_gaul_thraex.png";
import germanmurmillo from "./images/stage1gladiators/st1_german_murmillo.png";
import greekhoplomachus from "./images/stage1gladiators/st1_greek_hoplomachus.png";
import numidianretiarius from "./images/stage1gladiators/st1_numidian_retiarius.png";
import romanmurmillo from "./images/stage1gladiators/st1_roman_murmillo.png";

const opponents = [
  {
    type: "thraex",
    nat: "celt",
    atk: 16,
    hp: 4,
    currenthp: 4,
    spd: 5,
    def: 13,
    img: celtthraex,
    isCripled: false,
  },
  {
    type: "secutor",
    nat: "egyptian",
    atk: 11,
    hp: 4,
    currenthp: 4,
    spd: 5,
    def: 17,
    img: egyptiansecutor,
    isCripled: false,
  },
  {
    type: "dimachaerus",
    nat: "gaul",
    atk: 17,
    hp: 4,
    currenthp: 4,
    spd: 7,
    def: 12,
    img: gauldiamachaerus,
    isCripled: false,
  },
  {
    type: "thraex",
    nat: "gaul",
    atk: 17,
    currenthp: 4,
    hp: 4,
    spd: 5,
    def: 13,
    img: gaulthraex,
    isCripled: false,
  },
  {
    type: "murmillo",
    nat: "german",
    atk: 11,
    hp: 5,
    currenthp: 5,
    spd: 3,
    def: 18,
    img: germanmurmillo,
    isCripled: false,
  },
  {
    type: "hoplomachus",
    nat: "greek",
    atk: 17,
    hp: 4,
    currenthp: 4,
    spd: 8,
    def: 11,
    img: greekhoplomachus,
    isCripled: false,
  },
  {
    type: "retiarius",
    nat: "numidian",
    atk: 18,
    hp: 3,
    currenthp: 3,
    spd: 7,
    def: 11,
    img: numidianretiarius,
    isCripled: false,
  },
  {
    type: "murmillo",
    nat: "roman",
    atk: 12,
    hp: 4,
    currenthp: 4,
    spd: 5,
    def: 16,
    img: romanmurmillo,
    isCripled: false,
  },
];

export default opponents;
