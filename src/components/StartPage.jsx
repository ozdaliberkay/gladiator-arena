import React from "react";
import { Link } from "react-router-dom";

export const StartPage = () => {
  return (
    <div>
      <div className="startPage">
        <h1>Gladiator Arena</h1>
        <Link to={"/ludus"}>Start</Link>
      </div>
    </div>
  );
};
