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
import REACT_APP_NAME from './constants';

const Routes = () => (
  <BrowserRouter>
    <header>
      <NavBar />
      <div className="errors" />
    </header>
    <Switch>
      <Route path={`${REACT_APP_NAME}/user/signin`}><SignIn /></Route>
      <Route path={`${REACT_APP_NAME}/user/signup`}><SignUp /></Route>
      <Route exact path={`${REACT_APP_NAME}/classrooms/`}><Classrooms /></Route>
      <Route exact path={`${REACT_APP_NAME}/classrooms/:id`}><Classrooms /></Route>
      <Route exact path={`${REACT_APP_NAME}/students`}><Students /></Route>
      <Route exact path={`${REACT_APP_NAME}/presentation_areas`}><PresentationAreas /></Route>
      <Route path={`${REACT_APP_NAME}/presentation_areas/:id`}><PresentationAreas /></Route>
      <Route exact path={`${REACT_APP_NAME}/presentation_subareas`}><PresentationSubareas /></Route>
      <Route path={`${REACT_APP_NAME}/presentation_subareas/:id`}><PresentationSubareas /></Route>
      <Route path={`${REACT_APP_NAME}/events/:id`}><ClassroomScores /></Route>
      <Route path={`${REACT_APP_NAME}/students/:id`}><StudentScores /></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
