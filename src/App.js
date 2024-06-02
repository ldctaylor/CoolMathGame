import "./App.css";
import CoolMathGame from "./CoolMathGame";
import { useState } from "react";

function App() {
  const [gameId, setGameId] = useState(1);

  const [numberOfPlays, setNumberOfPlays] = useState(1);

  return (
    <div className="App">
      <CoolMathGame
        key={gameId}
        startNewGame={() => {
          setGameId(gameId + 1);
          setNumberOfPlays(numberOfPlays + 1);
        }}
        numberOfPlays={numberOfPlays}
      />
    </div>
  );
}

export default App;
