import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { getStore, removeStore } from "../../lib/utils";
import { Button } from "antd";
class Admin extends React.Component {
  handleClick = () => {
    removeStore("token");
  };
  render() {
    const token: string = getStore("token");
    if (!token) {
      return <Redirect to="/login" />;
    }
    return <Button onClick={() => this.handleClick}>admin</Button>;
  }
}

export default Admin;
