import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './containers/NavBar/NavBar';
import UserForm from './containers/UserForm/UserForm';
import Index from './routes/Index/Index';

const Routes = () => (
  <BrowserRouter>
    <header>
      <NavBar />
      <div className="errors" />
    </header>
    <Switch>
      <Route path="/index/">
        <Index />
      </Route>
      <Route path="/user/signin">
        <UserForm action="Log In" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
