import GameBoard from "./Componentes/GameBoard";
import Player from "./Componentes/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
         <Player initalName="Player 1" symbol="X"/>
         <Player initalName="Player 2" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
