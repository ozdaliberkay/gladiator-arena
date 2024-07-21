import { createSlice } from "@reduxjs/toolkit";
import ecards from "../eCards.js";

const initialState = {
  coins: 0,
  gladiators: [],
  ludus: "",
  wine: 0,
  eCards: [],
  items: [],
  isHealerLudus: false,
  aggressive: { atk: 0, def: 0 },
  defensive: { atk: 0, def: 0 },
  balanced: { atk: 0, def: 0 },
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    getLudus(state, action) {
      state.coins = action.payload.coin;
      state.ludus = action.payload.name;
      state.wine = action.payload.wine;
      state.items = [...action.payload.item];
      state.isHealerLudus = action.payload.isHeal;
      state.aggressive.atk = action.payload.Allatkb + action.payload.Atkatkb;
      state.aggressive.def = action.payload.Alldefb + action.payload.Atkdefb;
      state.defensive.atk = action.payload.Allatkb + action.payload.Defatkb;
      state.defensive.def = action.payload.Alldefb + action.payload.Defdefb;
      state.balanced.atk = action.payload.Allatkb;
      state.balanced.def = action.payload.Alldefb;
      localStorage.setItem("coins", JSON.stringify(state.coins));
      localStorage.setItem("ludus", JSON.stringify(state.ludus));
      localStorage.setItem("wine", JSON.stringify(state.wine));
      localStorage.setItem("items", JSON.stringify(state.items));
      localStorage.setItem(
        "isHealerLudus",
        JSON.stringify(state.isHealerLudus)
      );
      localStorage.setItem(
        "aggressive.atk",
        JSON.stringify(state.aggressive.atk)
      );
      localStorage.setItem(
        "aggressive.def",
        JSON.stringify(state.aggressive.def)
      );
      localStorage.setItem(
        "defensive.atk",
        JSON.stringify(state.defensive.atk)
      );
      localStorage.setItem(
        "defensive.def",
        JSON.stringify(state.defensive.def)
      );
      localStorage.setItem("balanced.atk", JSON.stringify(state.balanced.atk));
      localStorage.setItem("balanced.def", JSON.stringify(state.balanced.def));
      let c = [];

      for (let x = 0; x < 4; x++) {
        let r = Math.floor(Math.random() * 8);
        c.push(ecards[r]);
      }
      state.eCards = c;
      localStorage.setItem("ecards", JSON.stringify(state.eCards));
    },
    buyGladiator(state, action) {
      state.coins -= action.payload;
      localStorage.setItem("coins", JSON.stringify(state.coins));
    },
    setGladiators(state, action) {
      let tg = action.payload;
      console.log(state.ludus);
      if (state.ludus == "Albinius' Ludus") {
        tg.forEach((g) => {
          if (g[0].style == "defensive") {
            g[0].atk++;
            g[0].def++;
            g[0].currentdef++;
            g[0].currentatk++;
          }
          g[0].def++;
          g[0].currentdef++;
        });
      } else if (state.ludus == "Variatus' Ludus") {
        tg.forEach((g) => {
          if (g[0].style == "aggressive") {
            g[0].def++;
            g[0].currentdef++;
            g[0].atk++;
            g[0].currentatk++;
          }
          g[0].atk++;
          g[0].currentatk++;
        });
      } else {
        tg.forEach((g) => {
          g[0].atk++;
          g[0].def++;
          g[0].currentdef++;
          g[0].currentatk++;
        });
      }
      state.gladiators = tg;
      localStorage.setItem("gladiators", JSON.stringify(state.gladiators));
    },
    getData(state, action) {
      state.gladiators = action.payload.gladiators;
      state.coins = action.payload.coins;
      state.ludus = action.payload.ludus;
      state.wine = action.payload.wine;
      state.items = action.payload.items;
      state.isHealerLudus = action.payload.isHealerLudus;
      state.aggressive.atk = action.payload.agratk;
      state.aggressive.def = action.payload.agrdef;
      state.defensive.atk = action.payload.defatk;
      state.defensive.def = action.payload.defdef;
      state.balanced.atk = action.payload.balatk;
      state.balanced.def = action.payload.baldef;
      state.eCards = action.payload.ecard;
    },
    usedActionCard(state, action) {
      console.log(action.payload);
      const index = state.eCards.findIndex(
        (card) => card.id === action.payload.id
      );
      console.log(index);
      if (index !== -1) {
        state.eCards.splice(index, 1);
      }
      localStorage.setItem("ecards", JSON.stringify(state.eCards));
    },
    getItem(state, action) {
      const i = state.gladiators.findIndex(
        (g) => g[0].name == action.payload.sGlad
      );
      if (action.payload.itemType == "atk") {
        state.gladiators[i][0].currentatk += action.payload.item.atk;
        state.gladiators[i][0].atk_w.push(action.payload.item);
        if (action.payload.item.for.includes(state.gladiators[i][0].type)) {
          state.gladiators[i][0].currentatk += 1;
          state.gladiators[i][0].isRightAtk = 1;
        }
      } else {
        state.gladiators[i][0].currentdef += action.payload.item.def;
        state.gladiators[i][0].def_w.push(action.payload.item);
        if (action.payload.item.for.includes(state.gladiators[i][0].type)) {
          state.gladiators[i][0].currentdef += 1;
          state.gladiators[i][0].isRightDef = 1;
        }
      }
      const index = state.items.findIndex(
        (it) => it.id === action.payload.item.id
      );
      state.items.splice(index, 1);
    },
    delItem(state, action) {
      const i = action.payload.index;
      if (action.payload.t == "atk") {
        state.items.push(state.gladiators[i][0].atk_w[0]);
        state.gladiators[i][0].currentatk = state.gladiators[i][0].atk;
        state.gladiators[i][0].atk_w = [];
        state.gladiators[i][0].isRightAtk = 0;
      } else {
        state.items.push(state.gladiators[i][0].def_w[0]);
        state.gladiators[i][0].currentdef = state.gladiators[i][0].def;
        state.gladiators[i][0].def_w = [];
        state.gladiators[i][0].isRightDef = 0;
      }
    },
    buyNewItem(state, action) {
      console.log(action.payload.item);
      state.items.push(action.payload.item);
      state.coins -= action.payload.price;
    },
    buyNewEcard(state, action) {
      console.log(action.payload.item);
      state.eCards.push(action.payload.item);
      state.coins -= action.payload.price;
    },
    getWine(state, action) {
      state.wine++;
      state.coins -= 2;
      localStorage.setItem("coins", JSON.stringify(state.coins));
      localStorage.setItem("wine", JSON.stringify(state.wine));
    },
    drinkWine(state, action) {
      state.gladiators[action.payload][0].hp++;
      state.wine--;
    },
    getStageEnd(state, action) {
      console.log(action.payload.g);
      if (state.gladiators.length == action.payload.g.length) {
        state.gladiators = action.payload.g;
      } else {
        let c = 0;
        let x = 0;
        let tmp = [];
        let t = [...state.gladiators];
        console.log("4lü", action.payload.g);
        t.forEach((g, i) => {
          action.payload.g.forEach((n) => {
            if (g[0].name == n[0].name) {
              c++;
            }
          });
          if (c == 0) {
            x = i;
          }
        });
        tmp.push(action.payload.g[0]);
        tmp.push(action.payload.g[1]);
        tmp.push(action.payload.g[2]);
        tmp.push(t[x]);
        state.gladiators = tmp;
      }
      state.coins += 5;
    },
  },
});

export const {
  getLudus,
  buyGladiator,
  setGladiators,
  getData,
  usedActionCard,
  gladiatorGetHit,
  getItem,
  delItem,
  buyNewItem,
  getWine,
  drinkWine,
  getStageEnd,
  buyNewEcard,
} = playerSlice.actions;

export default playerSlice.reducer;
