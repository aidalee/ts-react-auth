import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { removeStore } from "../../lib/utils";
import { Button, Layout } from "antd";
import MSP from "../dataCenter/msp";
import RESOURCE from "../dataCenter/resource";
import Demo from "../demo/demo";
import HOC from "../hoc/hoc";
import RenderProps from "../renderProps/renderProps";
//定义一个接口规范state的类型
export interface State {
  isLogin: boolean;
}
const { Header, Footer, Sider, Content } = Layout;
export default class Admin extends React.Component<{}, State> {
  readonly state = {
    isLogin: true,
  };
  handleClick = () => {
    removeStore("token");
    this.setState({
      isLogin: false,
    });
  };
  render() {
    if (!this.state.isLogin) {
      return <Redirect to="/login" />;
    }
    return (
      <Layout>
        <Content>
          <Switch>
            <Route path="/dataCenter/msp" component={MSP} />
            <Route path="/dataCenter/resource" component={RESOURCE} />
            <Route path="/demo" component={Demo} />
            <Route path="/hoc" component={HOC} />
            <Route path="/renderProps" component={RenderProps} />
            <Redirect to="/dataCenter/msp" />
          </Switch>
        </Content>
      </Layout>
    );
  }
}
