import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import { DetalhesPage } from './Pages/detalhes';
import { NotFound } from './Pages/notfound';
import { HomePage } from './Pages/home';
import { string } from 'prop-types';

import { AppBar, Button, Toolbar, Typography, Container } from '@material-ui/core';


function App() {
  return (
    <BrowserRouter>
      <AppBar position="sticky">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            <Typography variant="h6">Home</Typography>
          </Button>
          
          <Button color="inherit" component={Link} to="/detalhes">
            <Typography variant="h6">Detalhes</Typography>
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Switch>
          <Route component={ () => (<HomePage name="Khayan" />) } exact path="/"></Route>
          <Route component={ DetalhesPage } path = "/detalhes"></Route>
          <Route component={ NotFound }></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
