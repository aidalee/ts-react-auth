import ajax from "./ajax";
// export interface LoginData {
//   account: string;
//   password: string;
// }
import { LoginData } from "./api_types";
export const reqLogin = (reqData: LoginData) => {
  let reqConfig = {
    data: reqData,
    method: "POST",
  };
  return ajax("/v2/login", reqConfig);
};
