import React from 'react'

function Game({verifyletter}) {
  return (
    <div>
        <h1>Game</h1>
        <button onClick={verifyletter}>Finalizar Jogo</button>
    </div>
  )
}

export default Game