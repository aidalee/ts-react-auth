import axios from "axios";
import { getStore } from "../lib/utils";
// const whiteList = ["/login"];
// const methods = ["post", "put", "delete"];
class HttpRequest {
  constructor() {
    this.queue = {};
  }
  getInsideConfig() {
    const config = {
      headers: {},
    };
    return config;
  }

  interceptors(instance, url) {
    instance.interceptors.request.use(
      (config) => {
        if (!Object.keys(this.queue).length) {
          this.queue[url] = true;
        }
        config.headers["Authorization"] = getStore("token");
        config.headers["Content-Type"] = "application/json";
        config.headers["Cache-Control"] = "no-cache";
        config.headers["Pragma"] = "no-cache";
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (res) => {
        delete this.queue[url];
        return res;
      },
      (error) => {
        delete this.queue[url];
        return Promise.reject(error);
      }
    );
  }

  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;
