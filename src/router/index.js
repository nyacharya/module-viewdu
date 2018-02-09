import React from "react";
import UserDetailModules from "../client/modules/userdetail";
import UserModules from "../client/modules/users";
import AddUserModules from "../client/modules/adduser";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const Main = () => (

  <div>
    <Switch>
      <Route exact path="/user/:id" component={UserDetailModules} />
      <Route exact path="/user" component={UserModules} />
      <Route exact path="/add-user" component={AddUserModules} />
      <Route path="*" component={UserModules} />
    </Switch>
  </div>
);

export default Main;


