import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import Todo from "./components/Todo";
import Done from "./components/Done";
import "./styles/styles.scss";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <div className="navbar">
            <Link to="/todo" className="link">
              Todo 🗓
            </Link>
            <Link to="/done" className="link">
              Done ✅
            </Link>
          </div>

          <div className="footer">
            <p> Copyright &copy; Uriel Ventura with love ❤️ from D.R 🇩🇴</p>
          </div>
          <Switch>
            <Redirect exact from="/" to="/todo" />
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/done">
              <Done />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
