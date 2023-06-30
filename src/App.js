import './App.css';
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

//Import Datas and Hooks
import { useCallback, useEffect, useState } from 'react';
import { wordsList } from './data/words';

//GameStates
const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name); //Setting Stage 'Start'
  const [words] = useState(wordsList); //Datas Recives

  console.log(wordsList)

  //start Game
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  // process the letter input
  const verifyletter = () => {
    setGameStage(stages[2].name)
  }

  // restart Game
  const retry = () =>{
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
        {/* <StartScreen /> */}
        {gameStage === "start" && <StartScreen startGame={startGame}/>}
        {gameStage === "game" && <Game verifyletter={verifyletter}/>}
        {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
