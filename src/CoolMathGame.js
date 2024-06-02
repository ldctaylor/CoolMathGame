import useGameState from "./hooks/useGameState";
import Tile from "./Tile";
import { range, sum } from "./utils";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./Button";
import Grid from "./Grid";
import PlayAgain from "./PlayAgain";
import Welcome from "./Welcome";
import SecondsLeft from "./SecondsLeft";

const CoolMathGame = ({ startNewGame, numberOfPlays }) => {
  const {
    faces,
    squares,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
  } = useGameState();

  const candidatesAreWrong = sum(candidateNums) > faces;

  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return "used";
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== "active" || currentStatus === "used") {
      return;
    }

    const newCandidateNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);

    setGameState(newCandidateNums);
  };

  // const gameIsDone = availableNums.length === 0;
  // const gameIsLost = secondsLeft === 0;

  return (
    <div>
      <Welcome numberOfPlays={numberOfPlays} />
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of smiley faces
          <br />
          <br />
        </div>
        <div className="body">
          <div
            className="game"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "0 10rem",
            }}
          >
            {gameStatus !== "active" ? (
              <PlayAgain onClick={startNewGame} gameStatus={gameStatus} />
            ) : (
              <Grid
                className="tileContainer"
                component={range(1, faces).map((tile) => (
                  <Tile key={tile} />
                ))}
              />
            )}
            <Grid
              className="playContainer"
              component={range(1, squares).map((number) => (
                <Button
                  num={number}
                  key={number}
                  status={numberStatus(number)}
                  onClick={onNumberClick}
                />
              ))}
            />
          </div>
        </div>
      </div>
      <SecondsLeft secondsLeft={secondsLeft} />
    </div>
  );
};

export default CoolMathGame;
