// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";

const Character = ({ characterData }) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="characterCard">
      <h2>{characterData.name}</h2>
      <button onClick={() => setShowCard(true)}>Info</button>
      {showCard && (
        <ul>
          <li>Born: {characterData.birth_year}</li>
          <li>Gender: {characterData.gender}</li>
          <li>Height: {characterData.height}</li>
          <li>Eye Color: {characterData.eye_color}</li>
          <li>Hair Color: {characterData.hair_color}</li>
        </ul>
      )}
    </div>
  );
};

export default Character;

// 0: {name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', …}
// 1: {name: 'C-3PO', height: '167', mass: '75', hair_color: 'n/a', skin_color: 'gold', …}
// 2: {name: 'R2-D2', height: '96', mass: '32', hair_color: 'n/a', skin_color: 'white, blue', …}
// 3: {name: 'Darth Vader', height: '202', mass: '136', hair_color: 'none', skin_color: 'white', …}
// 4: {name: 'Leia Organa', height: '150', mass: '49', hair_color: 'brown', skin_color: 'light', …}
// 5: {name: 'Owen Lars', height: '178', mass: '120', hair_color: 'brown, grey', skin_color: 'light', …}
