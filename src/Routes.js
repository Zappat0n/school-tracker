import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './containers/NavBar/NavBar';
import Index from './routes/Index/Index';
import SignIn from './routes/SignIn/SignIn';
import Students from './routes/Students/Students';

const Routes = () => (
  <BrowserRouter>
    <header>
      <NavBar />
      <div className="errors" />
    </header>
    <Switch>
      <Route path="/index/"><Index /></Route>
      <Route path="/user/signin"><SignIn /></Route>
      <Route path="/students"><Students /></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
