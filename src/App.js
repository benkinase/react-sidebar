import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ROUTES } from "./routes";
import Application from "./components/Application";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <React.Fragment>
      <Application />
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.ABOUT} component={About} />
          <Route exact path={ROUTES.CONTACTS} component={Contacts} />
          <NotFound component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
