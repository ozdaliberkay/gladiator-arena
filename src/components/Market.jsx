import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiTwoCoins } from "react-icons/gi";

import ecards from "../eCards";
import items from "../Items";
import { buyNewEcard, buyNewItem } from "../slices/Player";
export const Market = () => {
  const { coins } = useSelector((store) => store.player);
  const [randomCards, setRandomCards] = useState(null);
  const [buyed, setbuyed] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (randomCards === null) {
      let initialRandomCards = [-1, -1, -1, -1];
      for (let i = 0; i < 4; i++) {
        if (i < 2) {
          initialRandomCards[i] = Math.floor(Math.random() * ecards.length);
        } else {
          initialRandomCards[i] = Math.floor(Math.random() * items.length);
        }
      }
      setRandomCards(initialRandomCards);
    }
  }, []);

  const buyItem = (e, p, i, it, ai) => {
    if (coins >= p) {
      let myIt = it;
      if (ai == "i") {
        dispatch(buyNewItem({ item: myIt, price: p }));
      } else {
        dispatch(buyNewEcard({ item: myIt, price: p }));
      }

      setbuyed([...buyed, i]);
    }
  };
  if (randomCards === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="market-aCards">
        <div className="market-card-cont">
          <div className="market-card">
            <img src={ecards[randomCards[0]]?.img} alt="" />
            <p>
              <button
                onClick={(e) => buyItem(e, 2, 0, ecards[randomCards[0]], "a")}
                disabled={buyed.includes(0)}
              >
                Buy 2 <GiTwoCoins color="rgb(121, 131,0)" size={20} />
              </button>
            </p>
          </div>
          <div className="market-card">
            <img src={ecards[randomCards[1]]?.img} alt="" />
            <p>
              <button
                onClick={(e) => buyItem(e, 2, 1, ecards[randomCards[1]], "a")}
                disabled={buyed.includes(1)}
              >
                Buy 2 <GiTwoCoins color="rgb(121, 131,0)" size={20} />
              </button>
            </p>
          </div>
        </div>
        <div className="market-items">
          <div className="market-item-card">
            <img src={items[randomCards[2]]?.img} alt="" />
            <p>
              <button
                onClick={(e) => buyItem(e, 3, 2, items[randomCards[2]], "i")}
                disabled={buyed.includes(2)}
              >
                Buy 3 <GiTwoCoins color="rgb(121, 131,0)" size={20} />
              </button>
            </p>
          </div>
          <div className="market-item-card">
            <img src={items[randomCards[3]]?.img} alt="" />
            <p>
              <button
                onClick={(e) => buyItem(e, 3, 3, items[randomCards[2]], "i")}
                disabled={buyed.includes(3)}
              >
                {" "}
                Buy 3 <GiTwoCoins color="rgb(121, 131,0)" size={20} />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
