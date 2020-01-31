import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import { MainCont } from './components/styles';

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
