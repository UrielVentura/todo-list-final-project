import React from 'react';
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Switch, Redirect, BrowserRouter as Router, Link } from "react-router-dom";
import Todo from './components/Todo';
import Done from './components/Done';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>


          <div>
            <AppBar position="static" variant="outlined" color="default">
              <Tabs>
                  <Link to="/todo" style={{ textDecoration: 'none' }}>
                    <Tab label="Todo 🗓"></Tab>
                  </Link>
                  <Link to="/done" style={{ textDecoration: 'none' }}>
                    <Tab value="two"label="Done ✅"></Tab>
                  </Link>
              </Tabs>
            </AppBar>
              
          </div>
          <Switch>
            <Redirect exact from="/" to="/todo" />
            <Route path="/todo">
              <Todo/>
            </Route>
            <Route path="/done">
              <Done/>
            </Route>
          </Switch> 
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
