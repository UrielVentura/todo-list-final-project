import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/styles.scss';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/todo" />
          <Route exact path="/:page?" render={props => <Home {...props} />} />

        </Switch> 
      </Router>
    </Provider>
  )
}

export default App
