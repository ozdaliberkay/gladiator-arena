import chariots from "./images/s3opponents/chariots.jpeg";
import thechampion from "./images/s3opponents/thechampion.png";

const opponents3 = [
  {
    type: "chariots",
    nat: "roman1",
    atk: 19,
    hp: 5,
    currenthp: 5,
    spd: 20,
    def: 17,
    img: chariots,
    isCripled: false,
  },

  {
    type: "chariots",
    nat: "roman2",
    atk: 19,
    hp: 5,
    currenthp: 5,
    spd: 20,
    def: 17,
    img: chariots,
    isCripled: false,
  },
  {
    type: "dimachaerus",
    nat: "gaul",
    atk: 25,
    hp: 6,
    currenthp: 6,
    spd: 8,
    def: 20,
    img: thechampion,
    isCripled: false,
  },
];

export default opponents3;
