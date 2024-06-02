import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import { range, sum, random, randomSumIn } from "./utils";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./Button";
import Grid from "./Grid";
import PlayAgain from "./PlayAgain";
import Welcome from "./Welcome";
import SecondsLeft from "./SecondsLeft";

const CoolMathGame = ({ startNewGame, numberOfPlays }) => {
  const squares = 9;
  const [faces, setFaces] = useState(random(1, squares));

  const [availableNums, setAvailableNums] = useState(range(1, squares));

  const [candidateNums, setCandidateNums] = useState([]);

  const [secondsLeft, setSecondsLeft] = useState(10);
  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return "used";
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  const candidatesAreWrong = sum(candidateNums) > faces;

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== "active" || currentStatus === "used") {
      return;
    }

    const newCandidateNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);

    if (sum(newCandidateNums) !== faces) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setFaces(randomSumIn(newAvailableNums, squares));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
    console.log(availableNums.length);
  };

  // const gameIsDone = availableNums.length === 0;
  // const gameIsLost = secondsLeft === 0;
  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

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
