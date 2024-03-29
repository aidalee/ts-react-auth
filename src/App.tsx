import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
