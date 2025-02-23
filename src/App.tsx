import Board from "./components/Board";
import GameProvider from "./context/GameContext";

function App() {
  return (
    <GameProvider>
      <Board />
    </GameProvider>
  );
}

export default App;
