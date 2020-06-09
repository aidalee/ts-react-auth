import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Redirect } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.scss";
import { reqLogin } from "../../api/user";
import { setStore, getStore } from "../../lib/utils";
import { LoginData } from "../../api/api_types";
// export interface LoginData {
//   account: string;
//   password: string;
// }
//定义一个接口规范state的类型
export interface State {
  isLogin: boolean;
}
class Login extends React.Component<{}, State> {
  readonly state = {
    isLogin: false,
  };
  onFinish: any = async (values: LoginData) => {
    const result: any = await reqLogin(values);
    if (result && result.value.token) {
      setStore("token", result.value.token);
      setStore("userInfo", result.value);
      setStore("token_expires", result.value.token_expires);
      this.setState({
        isLogin: true,
      });
    }
  };
  routerWillLeave(nextLocation: any) {
    console.log(111);
    console.log(nextLocation);
  }
  render() {
    if (this.state.isLogin) {
      return <Redirect to="/" />;
    }
    const token: string = getStore("token");
    console.log(token);
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-wrapper">
        <section className="login-con">
          <h2>用户登录</h2>
          <Form
            name="normal_login"
            className="login-form"
            onFinish={this.onFinish}
          >
            <Form.Item
              name="account"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}
export default Login;
