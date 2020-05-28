import { useEffect, useState } from "react";
import math from "../util/math";

const useGameState = () => {
  const [stars, setStars] = useState(math.random(1, 9));
  const [availableNums, setAvailableNums] = useState(math.range(1, 9));
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
    if (math.arraySum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStars(math.randomSumInRange(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  };
};

export default useGameState;
