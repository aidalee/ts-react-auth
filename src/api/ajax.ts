import axios from "axios";
import { message } from "antd";
interface IaxiosParams {
  url: string;
  data?: object;
  params?: object;
  method?: string;
}
export default function ajax(url: string, reqConfig: any = {}) {
  const {
    data = {},
    params = {},
    method = "GET",
  }: { data?: {}; params?: {}; method?: string } = reqConfig;
  return new Promise((resolve, reject) => {
    let promise;
    promise = axios.request({
      url,
      method,
      data,
      params,
    });
    promise
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          //   setToken("");
          //   removeStore("userInfo");
          //   removeStore("token_expires");
          //   router.push("/login");
        }
        message.error(
          error.response.data.errors[0]
            ? error.response.data.errors[0].desc
            : error.response.data.msg,
          3
        );
        reject(error);
      });
  });
}
