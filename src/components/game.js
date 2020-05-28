import React, {useState} from 'react';
import GameBoard from './game-board';

const Game = () => {
  const [gameId, setGameId] = useState(1);
  return <GameBoard key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
};

export default Game;
