import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import { DetalhesPage } from './Pages/detalhes';
import { NotFound } from './Pages/notfound';
import { HomePage } from './Pages/home';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/detalhes">Detalhes</Link>
      <Switch>
        <Route component={ () => (<HomePage name="Khayan" />) } exact path="/"></Route>
        <Route component={ DetalhesPage } path = "/detalhes"></Route>
        <Route component={ NotFound }></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
