import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './containers/NavBar/NavBar';
import UserForm from './containers/UserForm/UserForm';

const Routes = () => (
  <BrowserRouter>
    <header>
      <div className="errors" />
      <NavBar />
    </header>
    <Switch>
      <Route path="/user/signin">
        <UserForm action="Log in" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
