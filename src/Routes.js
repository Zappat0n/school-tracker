import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './containers/NavBar/NavBar';
import SignIn from './routes/SignIn/SignIn';
import SignUp from './routes/SignUp/SignUp';
import Classrooms from './routes/Classrooms/Classrooms';
import Students from './routes/Students/Students';
import PresentationAreas from './routes/PresentationAreas/PresentationAreas';
import PresentationSubareas from './routes/PresentationSubareas/PresentationSubareas';
import ClassroomScores from './routes/ClassroomScores/ClassroomScores';
import StudentScores from './routes/StudentScores/StudentScores';

const Routes = () => (
  <BrowserRouter>
    <header>
      <NavBar />
      <div className="errors" />
    </header>
    <Switch>
      <Route path="/user/signin"><SignIn /></Route>
      <Route path="/user/signup"><SignUp /></Route>
      <Route exact path="/classrooms/"><Classrooms /></Route>
      <Route exact path="/classrooms/:id"><Classrooms /></Route>
      <Route exact path="/students"><Students /></Route>
      <Route exact path="/presentation_areas"><PresentationAreas /></Route>
      <Route path="/presentation_areas/:id"><PresentationAreas /></Route>
      <Route exact path="/presentation_subareas"><PresentationSubareas /></Route>
      <Route path="/presentation_subareas/:id"><PresentationSubareas /></Route>
      <Route path="/classrooms/:id/scores"><ClassroomScores /></Route>
      <Route path="/students/:id/scores"><StudentScores /></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
