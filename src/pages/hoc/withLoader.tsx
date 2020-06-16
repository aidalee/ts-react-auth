// high order component 复用loading功能
import React from "react";
import axios from "axios";

interface ILoaderState {
  data: any;
  isLoading: boolean;
}
interface ILoaderProps {
  data: any;
}
const withLoader = <P extends ILoaderState>(
  WrappedComponent: React.ComponentType<P>,
  url: string
) => {
  return class LoaderComponent extends React.Component<
    Partial<ILoaderProps>,
    ILoaderState
  > {
    constructor(props: any) {
      super(props);
      this.state = {
        data: null,
        isLoading: false,
      };
    }
    componentDidMount() {
      this.setState({
        isLoading: true,
      });
      axios.get(url).then((result) => {
        this.setState({
          data: result.data,
          isLoading: false,
        });
      });
    }
    render() {
      const { data, isLoading } = this.state;
      return (
        <>
          {isLoading || !data ? (
            <p>data is loading</p>
          ) : (
            <WrappedComponent {...(this.props as P)} data={data} />
          )}
        </>
      );
    }
  };
};

export default withLoader;
// 使用时：
// 先，定义一个需要使用withLoader逻辑的组件
interface IShowResult {
  // 接口的返回内容
  message: string;
  status: string;
}
const DataShow: React.FC<{ data: IShowResult }> = ({ data }) => {
  return (
    <>
      <h2>Dog show:{data.status}</h2>
      <img src={data.message} />
    </>
  );
};
// 然后，在用到的地方调用withLoader包装DataShow组件
const WrappedDataShow = withLoader(DataShow, "https://dog.ceo/api/xxx");
// 使用 <WrappedDataShow />
// hoc的弊端：第一，无端的添加了一些节点；第二，难以理解；第三，DataShow中的data这个属性来源不明确
