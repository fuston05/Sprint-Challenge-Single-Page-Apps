import React from "react";
import { Link } from 'react-router-dom';
import { Image, WelcomeSection, WelcomeHeader, Button } from './styles';

export default function WelcomePage() {
  return (
    <WelcomeSection className="welcome-page">
      <WelcomeHeader>
        <h1>Welcome to the ultimate fan site!</h1>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </WelcomeHeader>
      <Button><Link to='/characters'>Get Started</Link></Button>
    </WelcomeSection>
  );
}
