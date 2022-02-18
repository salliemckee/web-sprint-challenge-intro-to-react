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
    &:hover {
      transition: all 0.2s ease-in-out;
      background-color: #eeeee4;
    }
  }
  ul {
    list-style-type: none;
    text-align: left;
  }
`;

const Character = ({ characterData }) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <StyledCharacter className="characterCard">
      <h2>{characterData.name}</h2>
      <button onClick={() => setShowCard(!showCard)}>
        {showCard ? "Hide Info" : "Show Info"}
      </button>
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
