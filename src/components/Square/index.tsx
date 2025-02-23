/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGame } from "../../context/GameContext";
import "./square.scss";

const Square = ({ index, value }: any) => {
  const { handleMove } = useGame();

  return (
    <button className="square" onClick={() => handleMove(index)}>
      {value}
    </button>
  );
};

export default Square;
