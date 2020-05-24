import store from "store"; // 进行local数据存储管理的工具模块
export const setStore = (key: string, val: any) => {
  if (!key) return;
  store.set(key, val);
};
export const getStore = (key: string) => {
  if (!key) return;
  return store.get(key);
};
export const removeStore = (key: string) => {
  if (!key) return;
  store.remove(key);
};
