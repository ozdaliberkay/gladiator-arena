import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export const GameOver = () => {
  return (
    <div className="stageEnd-page gover">
      <p> Game Over</p>
      <Link to="//">
        <Button
          onClick={() =>
            setTimeout(() => {
              window.location.reload();
            }, [10])
          }
          variant="dark"
          size="lg"
          className="restart-button"
        >
          Restart
        </Button>
      </Link>
    </div>
  );
};
