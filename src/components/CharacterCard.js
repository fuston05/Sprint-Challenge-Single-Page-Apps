import React from "react";
import { Card, Heading3, Para } from './styles';

export default function CharacterCard({ character }) {
  return (
    <Card className='card'>
      <Heading3>{character.name}</Heading3>
      <img alt= {character.name} src= {character.image} />
      <Para><b>Sex:</b> {character.gender}</Para>
      <Para><b>Life Status:</b> {character.status}</Para>

      {/* if character has a type then display it */}
      {character.type ? (<Para><b>Type:</b> {character.type}</Para>): null}
    
      <Para><b>Species:</b> {character.species}</Para>
      <Para><b>Home Location:</b> {character.location.name}</Para>
      <Para><b>Appeared in {`${character.episode.length} episodes!`}</b></Para>
    </Card>

  );
}
