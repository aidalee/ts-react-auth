// 渲染一个button
import React, { DOMAttributes } from "react";
export interface BaseSquareProps {
  value: any;
  onClick: () => void;
}
type StateType = {
  value: any;
};
// type NativeSquareProps = BaseSquareProps & DOMAttributes<HTMLElement>;
// class Square extends React.Component<BaseSquareProps, StateType> {
//   constructor(props: BaseSquareProps) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }
// 函数式组件的形式
function Square(props: BaseSquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;
