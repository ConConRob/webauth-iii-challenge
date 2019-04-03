import React from "react";
import { Route } from "react-router-dom";

import Regiter from "./Register";
import Login from "./Login";
import Users from "./Users";

export default function Router(props) {
  return (
    <React.Fragment>
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route path="/register" component={Regiter} />
      <Route path="/login" component={Login} />
      <Route path="/users" component={Users} />
    </React.Fragment>
  );
}
