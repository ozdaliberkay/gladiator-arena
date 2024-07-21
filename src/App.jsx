import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { StartPage } from "./components/StartPage";
import { Ludus } from "./components/Ludus";
import { Gladiators } from "./components/Gladiators";
import { Mainpage } from "./components/Mainpage";
import { GladiatorStyles } from "./components/GladiatorStyles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./slices/Player";
import { Preparation } from "./components/Preparation";
import { Stage1 } from "./components/Stage1";
import opponents from "./opponents";
import opponents2 from "./opponents2";
import opponents3 from "./opponents3";
import {
  getst1opponents,
  getst2opponents,
  getst3opponents,
} from "./slices/Arena";
import { StageEnd } from "./components/StageEnd";
import { Stage2 } from "./components/Stage2";
import { Stage3 } from "./components/Stage3";
import { GameOver } from "./components/GameOver";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let temp = [];
    let opponentGladiators = [];
    let opponentGladiators2 = [opponents2[0], opponents2[1], opponents2[2]];
    let opponentGladiators3 = [opponents3[0], opponents3[1], opponents3[2]];

    while (temp.length < 3) {
      let rand = Math.floor(Math.random() * 8);
      if (!temp.includes(rand)) {
        temp.push(rand);
      }
    }
    opponentGladiators = [
      opponents[temp[0]],
      opponents[temp[1]],
      opponents[temp[2]],
    ];
    dispatch(getst1opponents(opponentGladiators));
    dispatch(getst2opponents(opponentGladiators2));
    dispatch(getst3opponents(opponentGladiators3));
    console.log(opponentGladiators);
    let coins = JSON.parse(localStorage.getItem("coins"));
    let gladiators = JSON.parse(localStorage.getItem("gladiators"));
    let ludus = JSON.parse(localStorage.getItem("ludus"));
    let wine = JSON.parse(localStorage.getItem("wine"));
    let items = JSON.parse(localStorage.getItem("items"));
    let isHealerLudus = JSON.parse(localStorage.getItem("isHealerLudus"));
    let agratk = JSON.parse(localStorage.getItem("aggressive.atk"));
    let agrdef = JSON.parse(localStorage.getItem("aggressive.def"));
    let defatk = JSON.parse(localStorage.getItem("defensive.atk"));
    let defdef = JSON.parse(localStorage.getItem("defensive.def"));
    let balatk = JSON.parse(localStorage.getItem("balanced.atk"));
    let baldef = JSON.parse(localStorage.getItem("balanced.def"));
    let ecard = JSON.parse(localStorage.getItem("ecards"));
    dispatch(
      getData({
        gladiators,
        coins,
        ludus,
        wine,
        items,
        isHealerLudus,
        agratk,
        agrdef,
        defatk,
        defdef,
        balatk,
        baldef,
        ecard,
      })
    );
  }, []);
  return (
    <>
      <BrowserRouter basename="/gladiator-arena">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/ludus" element={<Ludus />} />
          <Route path="/gladiator-pick" element={<Gladiators />} />
          <Route path="/myludus" element={<Mainpage />} />
          <Route
            path="/gladiator-styles/:gstyle"
            element={<GladiatorStyles />}
          />
          <Route path="/gladiator-styles" element={<GladiatorStyles />} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/stage1" element={<Stage1 />} />
          <Route path="/stage2" element={<Stage2 />} />
          <Route path="/stage3" element={<Stage3 />} />
          <Route path="/stageEnd" element={<StageEnd />} />
          <Route path="/gameOver" element={<GameOver />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
