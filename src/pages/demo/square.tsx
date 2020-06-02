// 渲染一个button
import React from "react";
export interface SquareProps {
  value: any;
}
class Square extends React.Component<SquareProps> {
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          alert("click");
        }}
      >
        {this.props.value}
      </button>
    );
  }
}
export default Square;
