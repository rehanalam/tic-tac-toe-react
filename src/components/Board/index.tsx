/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGame } from "../../context/GameContext";
import Square from "../Square";
import "./board.scss";

const Board = () => {
  const { board, winner, resetGame } = useGame();

  return (
    <>
      <div>
        <h2>{winner ? `Winner: ${winner}` : "Tic Tac Toe"}</h2>
        <div className="grid">
          {board.map((value: any, index: any) => (
            <Square index={index} value={value} />
          ))}
        </div>
        {winner && <button onClick={resetGame}>Restart Game</button>}
      </div>
    </>
  );
};

export default Board;
