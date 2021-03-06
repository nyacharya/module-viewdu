import React from "react";
import { Switch, Route } from "react-router-dom";
import ListUsers from "../components/list";
import UserDetail from "../../userdetail";
import addUsers from "../../adduser";
const UserRouter = () => (

  <div>
    <Switch>
      <Route exact path="/user/:id" component={UserDetail} />
      <Route exact path="/edit-user/:id" component={addUsers} />
      <Route exact path="/add-user" component={ addUsers } />
      <Route exact path="/" component={ListUsers} />
      <Route path="*" component={ListUsers} />
    </Switch>
  </div>
);

export default UserRouter;
