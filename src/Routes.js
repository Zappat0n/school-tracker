import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import SignIn from './routes/SignIn/SignIn';
import SignUp from './routes/SignUp/SignUp';
import Classrooms from './routes/Classrooms/Classrooms';
import Students from './routes/Students/Students';
import PresentationAreas from './routes/PresentationAreas/PresentationAreas';
import PresentationSubareas from './routes/PresentationSubareas/PresentationSubareas';
import ClassroomScores from './routes/ClassroomScores/ClassroomScores';
import StudentScores from './routes/StudentScores/StudentScores';

const Routes = () => {
  const [errors, setErrors] = useState([]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/school-tracker">
          <App messages={errors} setErrors={(messages) => setErrors(messages)} />
          <Route path="/school-tracker/user/signin"><SignIn setErrors={(messages) => setErrors(messages)} /></Route>
          <Route path="/school-tracker/user/signup"><SignUp setErrors={(messages) => setErrors(messages)} /></Route>
          <Route exact path="/school-tracker/classrooms"><Classrooms setErrors={(messages) => setErrors(messages)} /></Route>
          <Route exact path="/school-tracker/classrooms/:id"><Classrooms setErrors={(messages) => setErrors(messages)} /></Route>
          <Route exact path="/school-tracker/students"><Students setErrors={(messages) => setErrors(messages)} /></Route>
          <Route exact path="/school-tracker/presentation_areas"><PresentationAreas setErrors={(messages) => setErrors(messages)} /></Route>
          <Route path="/school-tracker/presentation_areas/:id"><PresentationAreas setErrors={(messages) => setErrors(messages)} /></Route>
          <Route exact path="/school-tracker/presentation_subareas"><PresentationSubareas setErrors={(messages) => setErrors(messages)} /></Route>
          <Route path="/school-tracker/presentation_subareas/:id"><PresentationSubareas setErrors={(messages) => setErrors(messages)} /></Route>
          <Route path="/school-tracker/events/:id"><ClassroomScores setErrors={(messages) => setErrors(messages)} /></Route>
          <Route path="/school-tracker/students/:id"><StudentScores setErrors={(messages) => setErrors(messages)} /></Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
