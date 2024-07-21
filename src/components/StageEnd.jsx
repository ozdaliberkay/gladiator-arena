import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStage } from "../slices/Arena";
import { Link } from "react-router-dom";
import { GiTwoCoins } from "react-icons/gi";
import Button from "react-bootstrap/esm/Button";
export const StageEnd = () => {
  const disatch = useDispatch();
  const { stage } = useSelector((s) => s.arena);
  const [r, setr] = useState(0);
  console.log(stage);

  let s1 = [
    "The Colosseum of Rome had witnessed one of the greatest battles in its history. The crowd held their breath as they watched a three-on-three gladiator match. Both sides consisted of brave warriors, each armed with swords to defend their lives and honor.",
    "As the fight began, swords and shields engaged in a deadly dance. The spectators watched every blow and parry with bated breath. At one moment, a rumble echoed in the sky, and the presence of Mars was felt. The god's power increased the strength of the warriors, and the battle intensified.",
    "In the end, a gladiator gathered all his strength for one final attack on his enemy. The sands shook with the force of the blow, and the enemy fell to the ground. The crowd erupted in wild celebration, while Mars looked on with a smile from the sky.",
    "This epic clash would be remembered for centuries as a legend of Rome’s and the gladiators' courage.",
  ];
  let s2 = [
    "The Colosseum of Rome resounded with the enthusiastic cheers of the crowd. Three brave gladiators were about to face tigers and lions in the arena. As the golden rays of the sun hit the sands of the arena, the gladiators donned their swords and took their battle positions. When the fight began, the tigers and lions roared menacingly and attacked. The gladiators, with their agility and bravery, fended off the beasts. The sands of the arena became the stage for this epic struggle.",
    "At that moment, a rumble echoed in the sky. Jupiter, the king of the gods, bestowed his power upon the warriors. Filled with the god's might, the gladiators fought with even greater ferocity. The battle in the arena became even more epic as the gladiators' strength and agility combined with the power of the gods.",
    "In the end, one of the gladiators brought down a tiger. The other two gladiators defeated the lion they were battling. Empowered by the gods, the gladiators emerged victorious. The crowd celebrated this incredible fight with applause.",
    "This battle joined the legends of Rome. The courage and strength of the gladiators, fighting in the shadow of the gods, became a story to be told for generations.",
  ];
  let s3 = [
    "When the gates opened, chariots thundered across the arena, their wheels churning the blood-soaked sand. At the heart of this chaotic spectacle stood the arena's champion—a towering figure of immense power. Far taller than an average man, his presence was commanding. His muscles were sculpted like marble, and his eyes gleamed with a fearsome intensity. With every step, his powerful legs shook the very ground of the arena, and his dual swords cut through the air with deadly precision. He fought in the dimachareus style, wielding two swords with a ferocity that promised death.",
    "As the battle began, the sands turned crimson under the relentless onslaught. The gladiators skillfully maneuvered their chariots, evading the champion’s sweeping attacks. The clash was brutal; each swing of the champion's blades carved through opponents and chariots alike, sending splinters and sparks flying. His strength was matched only by his terrifying speed. ",
    "Despite the champion's unmatched prowess, the gladiators pressed on with unwavering determination. Their teamwork began to show as they managed to corner the formidable warrior. The sand became a chaotic canvas of blood and dust as the gladiators closed in. One gladiator deftly dodged a lethal swing, creating an opening for his comrades.",
    "In a climactic moment, the combined might of the gladiators overwhelmed the champion. The arena's sands, once pristine, were now stained with the crimson proof of their struggle. The crowd erupted in thunderous applause as the undefeated champion finally fell. The gladiators, covered in sweat and blood, stood victorious amid the chaos.",
  ];

  const goNstage = () => {
    if (stage == 3) {
      //oyun sonu win
    } else {
      let x = stage + 1;
      disatch(setStage(x));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setr((prevCount) => {
        if (prevCount >= 3) {
          clearInterval(intervalId);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="stageEnd-page">
      {stage == 1 && (
        <div>
          {s1.map((s, i) => {
            if (i <= r)
              return (
                <div key={i} className="fade-in se-w">
                  {s}
                </div>
              );
          })}
        </div>
      )}
      {stage == 2 && (
        <div>
          {s2.map((s, i) => {
            if (i <= r)
              return (
                <div key={i} className="fade-in se-w">
                  {s}
                </div>
              );
          })}
        </div>
      )}
      {stage == 3 && (
        <div>
          {s3.map((s, i) => {
            if (i <= r)
              return (
                <div
                  key={i}
                  style={{ fontSize: "20px" }}
                  className="fade-in se-w"
                >
                  {s}
                </div>
              );
          })}
        </div>
      )}
      {r == 3 && (
        <div>
          {stage == 1 ? (
            <div className="se-w">
              To reach the grand finale, one final daunting challenge must be
              overcome.
              <div
                className="se-w"
                style={{ color: "orange", fontSize: "34px" }}
              >
                +5 gold
                <GiTwoCoins size={62} style={{ paddingBottom: "20px" }} />
              </div>
            </div>
          ) : stage == 2 ? (
            <div className="se-w">
              Now, the ultimate challenge remains—the final battle to determine
              the champion among champions. In this epic confrontation, only the
              most formidable warriors will endure, as destiny awaits to declare
              the true victor.
              <div
                className="se-w"
                style={{
                  color: "orange",
                  fontSize: "34px",
                }}
              >
                +5 gold
              </div>
            </div>
          ) : (
            "kazanma yazısı"
          )}
          {stage < 3 ? (
            <div>
              <Link to="/myludus">
                <Button
                  variant="warning"
                  size="lg"
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    fontFamily: "MedievalSharp",
                    marginLeft: "140px",
                  }}
                  onClick={goNstage}
                >
                  Back to Ludus
                </Button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/">
                <Button
                  onClick={() =>
                    setTimeout(() => {
                      window.location.reload();
                    }, [10])
                  }
                  variant="warning"
                  size="lg"
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    letterSpacing: "3px",
                    fontFamily: "MedievalSharp",
                    marginLeft: "140px",
                    fontSize: "22px",
                  }}
                >
                  Victory
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
