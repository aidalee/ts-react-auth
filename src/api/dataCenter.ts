import ajax from "./ajax";
import { ResourceMagListParams } from "./api_types";
// 获取资源管理列表数据
export const reqGetResourceMagList = (reqParams: ResourceMagListParams) => {
  let reqConfig = {
    params: reqParams,
  };
  return ajax("/v2/proxy/node_info/v2/nodes", reqConfig);
};
