import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes'
import './App.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.imgur.com';
axios.defaults.headers.common['Authorization'] = 'Client-ID ' + process.env.REACT_APP_IMGUR_CLIENT_ID;

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
