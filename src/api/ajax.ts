import axios from "axios";
import { Method } from "axios/index";
import { message } from "antd";
export default function ajax(url: string, reqConfig: any = {}) {
  const {
    data = {},
    params = {},
    method = "GET",
  }: { data?: {}; params?: {}; method?: Method } = reqConfig;
  return new Promise((resolve, reject) => {
    let promise;
    promise = axios.request({
      url,
      method,
      data,
      params,
    });
    promise
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((error: any) => {
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
