import React from "react";
import { useSelector } from "react-redux";
import { GiTwoCoins } from "react-icons/gi";
import { FaWineBottle } from "react-icons/fa";
import ludus1 from "../images/ludus/ludus1.png";
import ludus2 from "../images/ludus/ludus2.png";
import ludus3 from "../images/ludus/ludus3.png";

export const MyLudus = () => {
  const { ludus, coins, wine } = useSelector((store) => store.player);
  let ludusImg = "";
  let ludusInfo = "";
  if (ludus == "Albinius' Ludus") {
    ludusImg = ludus1;
    ludusInfo =
      "Albinius' Ludus was a master of spectacle in the dusty arenas of Rome. Behind its towering walls, colossal gladiators were renowned not only for their strength but also for their impeccable defensive skills. Albinius' Ludus specialized in training these defensive warriors, known for their massive shields and heavy armor. In the quiet training grounds, the footsteps of these giants were like a precursor to the epics they would script in future arenas.";
  } else if (ludus == "Variatus' Ludus") {
    ludusImg = ludus2;
    ludusInfo =
      "Variatus' Ludus was a school where fire and speed held sway. Gladiators trained here were masters of attack, swift and courageous warriors who offered breathtaking displays in the arena. These gladiators, presenting a show of danger and triumph with every move, understood the fine line between peril and victory. Variatus' Ludus was a temple where courage and attack were revered; gladiators trained here knew how resolute they needed to be to survive in the arena.";
  } else {
    ludusImg = ludus3;
    ludusInfo =
      "Vesuvilius' Ludus symbolized balance. Gladiators from this school mastered both defense and offense, representing a harmonious martial art. Those who inhaled the dust of the arena could deploy their shields to withstand attacks and execute quick and effective strikes to defeat their opponents. Vesuvilius' Ludus was renowned for its gladiators who understood the intricacies of the art, versatile warriors excelling in the multi-faceted aspects of combat.";
  }
  return (
    <div className="houseInventory">
      <h4>{ludus}</h4>

      <img src={ludusImg} alt="" />
      <p>{ludusInfo}</p>
      <p>
        Coins : <GiTwoCoins color="rgb(121, 131,0)" /> {coins}{" "}
      </p>
      <p>
        Wine : <FaWineBottle color="rgb(115, 20, 20)" /> {wine}{" "}
      </p>
    </div>
  );
};
