import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import routes from './routes'
import { withRouter } from 'react-router'


function App(props) {
  return (
    <div className="App">
      {props.history.location.pathname !== "/" ? <Nav /> : null}
      {routes}
    </div>
  );
}

export default withRouter(App);