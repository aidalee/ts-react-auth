import ajax from "./ajax";
export interface LoginData {
  account: string;
  password: string;
}
export const reqLogin = (reqData: LoginData) => {
  let reqConfig = {
    data: reqData,
    method: "POST",
  };
  return ajax("/v2/login", reqConfig);
};
