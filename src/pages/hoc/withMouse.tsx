import React, { Component } from "react";
// 具体而言，高阶组件是参数为组件，返回值为新组件的函数。
// 组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件
// HOC 在 React 的第三方库中很常见，例如 Redux 的 connect
// HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。
// HOC 是纯函数，没有副作用。
// HOC 不应该修改传入组件，而应该使用组合的方式，通过将组件包装在容器组件中实现功能,如下例：
// function logProps(WrappedComponent) {
//     return class extends React.Component {
//       componentDidUpdate(prevProps) {
//         console.log('Current props: ', this.props);
//         console.log('Previous props: ', prevProps);
//       }
//       render() {
//         // 将 input 组件包装在容器中，而不对其进行修改。Good!
//         return <WrappedComponent {...this.props} />;
//       }
//     }
//   }
// 高阶组件不是一种功能，而是一种模式（工厂模式）
// 使用时的基本模式如下
// const HOCFactory = (Component) => {
//   class HOC extends React.Component {
//     在此定义多个组件的公共逻辑
//     render() {
//       return <Component {...this.props} />;
//       透传所有的prop之外还可以新增属性：
//       return <Component {...this.props} a ={data_a}/>;
//     }
//   }
//   return HOC;
// };
// const EnhancedComponent1 = HOCFactory(wrappedComponent1);
// const EnhancedComponent2 = HOCFactory(wrappedComponent2);
type BaseProps = {
  a: string;
  mouse: { x: number; y: number };
};
const WithMouse = (Component: any) => {
  class withMouseComponent extends React.Component<any> {
    constructor(props: any) {
      super(props);
      this.state = { x: 0, y: 0 };
    }
    handleMouseMove = (e: React.MouseEvent) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };
    render() {
      return (
        <div style={{ height: "500px" }} onMouseMove={this.handleMouseMove}>
          {/* 1. 透传所有 props 2. 增加 mouse 属性 */}
          <Component {...this.props} mouse={this.state}></Component>
        </div>
      );
    }
  }
  return withMouseComponent;
};
const App: React.FC<BaseProps> = (props) => {
  const a = props.a;
  const { x, y } = props.mouse;
  return (
    <div>
      <h1>
        the mouse postion is {x},{y}
      </h1>
      <p>{a}</p>
    </div>
  );
};
export default WithMouse(App);
