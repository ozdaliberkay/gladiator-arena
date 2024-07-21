import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles";
import { IoArrowBack } from "react-icons/io5";

export const GladiatorStyles = () => {
  const params = useParams();
  const { gstyle } = params;
  const [styleOndisplay, setstyleOndisplay] = useState(gstyle);
  const getStyleName = (e) => {
    setstyleOndisplay(e.target.innerHTML);
  };
  let myStyle = styles.filter((s) => s.name == styleOndisplay);
  let gladColors = {
    Retiarius: "rgb(202, 215, 230)",
    Secutor: "rgb(227, 189, 139)",
    Murmillo: "rgb(227, 189, 139)",
    Dimachaerus: "rgb(227, 139, 139)",
    Hoplomachus: "rgb(203, 230, 161)",
    Thraex: "rgb(227, 161, 230)",
    Gladriatrix: "rgb(230, 223, 161)",
  };

  return (
    <div className="gladiator-infos-page">
      <Link to="/myludus">
        {" "}
        <IoArrowBack /> Ludus{" "}
      </Link>
      <div className="style-left-panel">
        <p
          className="gl-types-head"
          style={{ backgroundColor: "rgb(227, 161, 230)" }}
          onClick={getStyleName}
        >
          Thraex
        </p>
        <p
          className="gl-types-head"
          style={{ backgroundColor: "rgb(227, 189, 139)" }}
          onClick={getStyleName}
        >
          Secutor
        </p>
        <p
          className="gl-types-head"
          style={{ backgroundColor: "rgb(202, 215, 230)" }}
          onClick={getStyleName}
        >
          Retiarius
        </p>
        <p
          className="gl-types-head"
          style={{ backgroundColor: "rgb(227, 139, 139)" }}
          onClick={getStyleName}
        >
          Dimachaerus
        </p>
        <p
          className="gl-types-head"
          style={{ backgroundColor: "rgb(203, 230, 161)" }}
          onClick={getStyleName}
        >
          Hoplomachus
        </p>
        <p
          className="gl-types-head"
          style={{ backgroundColor: "rgb(227, 189, 139)" }}
          onClick={getStyleName}
        >
          Murmillo
        </p>
        <p
          className="gl-types-head"
          style={{ backgroundColor: "rgb(230, 223, 161)" }}
          onClick={getStyleName}
        >
          Gladriatrix
        </p>
      </div>
      <div className="style-right">
        <h1>{myStyle[0].name}</h1>
        <img src={myStyle[0].img} alt="" />
        <p>
          {" "}
          <span style={{ marginLeft: "10px" }}>{"\t"}</span>
          {myStyle[0].info}
        </p>
        <p>
          {" "}
          <span style={{ marginLeft: "10px" }}> {"\t"}</span>
          {myStyle[0].moreInfo}
        </p>
        <p>
          Traditional Opponents :{" "}
          <span
            className="gl-types-head"
            style={{
              backgroundColor: gladColors[myStyle[0].traditionalOpponents[0]],
            }}
            onClick={getStyleName}
          >
            {myStyle[0].traditionalOpponents[0]}
          </span>
          ,{" "}
          <span
            className="gl-types-head"
            style={{
              backgroundColor: gladColors[myStyle[0].traditionalOpponents[1]],
            }}
            onClick={getStyleName}
          >
            {myStyle[0].traditionalOpponents[1]}
          </span>
        </p>
      </div>
    </div>
  );
};
