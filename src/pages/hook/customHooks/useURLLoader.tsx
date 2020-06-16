import axios from "axios";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
const useURLLoader = (url: string, deps: any[] = []) => {
  // deps用于传递给副作用的第二个参数
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(url).then((result) => {
      setData(result.data);
      setLoading(false);
    });
  }, deps);
  return [data, loading];
};
export default useURLLoader;
// 组件中使用useURLLoader副作用,如下：
// interface IShowResult {
//   message: string;
//   status: string;
// }
// const [data, loading] = useURLLoader("api_url");
// const dataResult = data as IShowResult;
// render(){
//     return {loading?<p>读取中</p>:<img src={dataResult&&dataResult.message} />}
// }
