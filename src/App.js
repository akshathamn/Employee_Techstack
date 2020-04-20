import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Employee from './Components/Employee';
import techStack from './Components/techStack';
import project from './Components/Project';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Employee}></Route>
          <Route exact path='/techStack' component={techStack}></Route>
          <Route exact path='/project' component={project}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
