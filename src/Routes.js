import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './containers/NavBar/NavBar';
import SignIn from './routes/SignIn/SignIn';
import SignUp from './routes/SignUp/SignUp';
import Classrooms from './routes/Classrooms/Classrooms';
import Students from './routes/Students/Students';
import ErrorDisplayer from './components/ErrorDisplayer/ErrorDisplayer';
import PresentationAreas from './routes/PresentationAreas/PresentationAreas';
import PresentationSubareas from './routes/PresentationSubareas/PresentationSubareas';
import ClassroomScores from './routes/ClassroomScores/ClassroomScores';
import StudentScores from './routes/StudentScores/StudentScores';
import REACT_APP_NAME from './constants';

const Routes = () => {
  const [errors, setErrors] = useState([]);

  return (
    <BrowserRouter>
      <header>
        <NavBar />
        <ErrorDisplayer messages={errors} setMessages={(messages) => setErrors(messages)} />
      </header>
      <Switch>
        <Route path={`${REACT_APP_NAME}/user/signin`}><SignIn setErrors={(messages) => setErrors(messages)} /></Route>
        <Route path={`${REACT_APP_NAME}/user/signup`}><SignUp setErrors={(messages) => setErrors(messages)} /></Route>
        <Route exact path={`${REACT_APP_NAME}/classrooms/`}><Classrooms setErrors={(messages) => setErrors(messages)} /></Route>
        <Route exact path={`${REACT_APP_NAME}/classrooms/:id`}><Classrooms setErrors={(messages) => setErrors(messages)} /></Route>
        <Route exact path={`${REACT_APP_NAME}/students`}><Students setErrors={(messages) => setErrors(messages)} /></Route>
        <Route exact path={`${REACT_APP_NAME}/presentation_areas`}><PresentationAreas setErrors={(messages) => setErrors(messages)} /></Route>
        <Route path={`${REACT_APP_NAME}/presentation_areas/:id`}><PresentationAreas setErrors={(messages) => setErrors(messages)} /></Route>
        <Route exact path={`${REACT_APP_NAME}/presentation_subareas`}><PresentationSubareas setErrors={(messages) => setErrors(messages)} /></Route>
        <Route path={`${REACT_APP_NAME}/presentation_subareas/:id`}><PresentationSubareas setErrors={(messages) => setErrors(messages)} /></Route>
        <Route path={`${REACT_APP_NAME}/events/:id`}><ClassroomScores setErrors={(messages) => setErrors(messages)} /></Route>
        <Route path={`${REACT_APP_NAME}/students/:id`}><StudentScores setErrors={(messages) => setErrors(messages)} /></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
