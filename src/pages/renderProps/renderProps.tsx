import React from "react";
import RenderPropsApp from "./renderPropsDemo";
class RenderProps extends React.Component {
  render() {
    return (
      <div>
        <RenderPropsApp a="100" />
      </div>
    );
  }
}
export default RenderProps;
// render props的核心思想
// 通过一个函数将class组件的state作为props传递给纯函数组件
// 示例：
// class Factory extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       //state 即多个组件的公共逻辑的数据
//     };
//   }
//   //   修改state
//   render() {
//     return <div>{this.props.render(this.state)}</div>;
//   }
// }
// const App = (props) => (
//   <div>
//     <Factory
//       render={(props) => (
//         <p>
//           {props.a},{props.b}
//         </p>
//       )}
//     />
//   </div>
// );
