// Write your Character component here
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
0% {
    opacity: 0;
}

  100% {
    opacity: 1;
    
  }
`;

const StyledCharacter = styled.div`
  background-color: #eab676;
  padding: 10px;
  margin: 10px;
  width: 100%;
  border: 3px solid #e28743;
  border-radius: 25px;
  animation: ${kf} 2s ease-in forwards;
  button {
    background-color: #abdbe3;
    border-radius: 5px;
  }
`;

const Character = ({ characterData }) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <StyledCharacter className="characterCard">
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
    </StyledCharacter>
  );
};

export default Character;

// 0: {name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', …}
// 1: {name: 'C-3PO', height: '167', mass: '75', hair_color: 'n/a', skin_color: 'gold', …}
// 2: {name: 'R2-D2', height: '96', mass: '32', hair_color: 'n/a', skin_color: 'white, blue', …}
// 3: {name: 'Darth Vader', height: '202', mass: '136', hair_color: 'none', skin_color: 'white', …}
// 4: {name: 'Leia Organa', height: '150', mass: '49', hair_color: 'brown', skin_color: 'light', …}
// 5: {name: 'Owen Lars', height: '178', mass: '120', hair_color: 'brown, grey', skin_color: 'light', …}
