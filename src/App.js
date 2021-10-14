import React from 'react';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './styles/styles.css';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/todo" />
            <Route exact path="/:page?" render={props => <Home {...props} />} />

          </Switch> 
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
