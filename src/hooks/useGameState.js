import { useEffect, useState } from "react";
import { sum, random, randomSumIn, range } from "../utils";

const useGameState = () => {
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

  const setGameState = (newCandidateNums) => {
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
  };

  return {
    faces,
    squares,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
  };
};

export default useGameState;
