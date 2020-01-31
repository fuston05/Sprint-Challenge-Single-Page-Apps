import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import { MainCont } from './components/styles';
import { gsap } from 'gsap';
window.onload = () => {
  
    gsap.from(".card", { duration: 2, y: 'random(-300, 300)', x: 'random(-1000, 1000)', ease: 'bounce'});
    gsap.to(".card", { duration: 2, opacity: 1});
}

export default function App() {

  return (
    <MainCont>
      <Route path='/'>
        <Header />
      </Route>
      <Route exact path='/'>
        <WelcomePage />
      </Route>
      <Route path='/characters'>
        <CharacterList />
      </Route>
    </MainCont>
  );
}
