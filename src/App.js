import React from 'react';
import './App.css';
import Login from './Components/login/login';
import Dashboard from './Components/dashboard/dashboard';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard" protected>
          <Dashboard />
          </Route>
          <Route path="/" >
            <Login />
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
