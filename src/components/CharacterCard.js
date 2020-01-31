import React from "react";
import styled from 'styled-components';

const Card= styled.div`
  border: 1px solid #333;
  padding: 1%;
  margin: 0 0 2% 0;
`;

export default function CharacterCard({character}) {
  return (
    <Card className= 'card'>
      <h3>{character.name}</h3>
      <p>{character.gender}</p>
      <p>{character.species}</p>
    </Card>

  );
}
