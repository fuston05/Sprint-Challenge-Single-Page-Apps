import React from "react";
import {Card, Heading_3} from './styles';

export default function CharacterCard({character}) {
  return (
    <Card className= 'card'>
      <Heading_3>{character.name}</Heading_3>
      <p>{character.gender}</p>
      <p>{character.species}</p>
    </Card>

  );
}
