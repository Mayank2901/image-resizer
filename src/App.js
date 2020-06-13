import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes'
import './App.css';

function App(props) {
  return (
    <Switch>
      {
        routes.map((route) => ( <Route {...route} /> ))
      }
    </Switch>
  );
}

export default App;
