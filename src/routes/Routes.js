import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Registration from "../pages/auth/registration/Registration";
import Dashboard from "../pages/dashboard/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact={true} from={`/`} to={`/admin`} />
        <Route path={`/admin`} component={Dashboard} />
        <Route path={`/login`} component={Login} />
        <Route path={`/registration`} component={Registration} />
        <Redirect exact={true} from={`/*`} to={`/admin`} />
      </Switch>
    </Router>
  );
};

export default Routes;
