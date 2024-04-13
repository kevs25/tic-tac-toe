import React from "react";
import { useState } from "react";


export default function Player({ initalName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initalName);
  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  // function handleChange(event) {
  //   console.log(event)
  //   setPlayerName(event.target.value)
  // }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = <input type="text" placeholder="Enter Name" required value={playerName} onChange={(event) => setPlayerName(event.target.value)}></input>;

  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? 'Save':'Edit'}</button>
    </li>
  );
}
