import React from "react";
import PropTypes from "prop-types";
type BaseProps = {
  render: ({ x, y }: { x: number; y: number }) => any;
};
type BaseState = {
  x: number;
  y: number;
};
class Mouse extends React.Component<BaseProps, BaseState> {
  static propTypes: any;
  constructor(props: BaseProps) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
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
        {this.props.render(this.state)}
      </div>
    );
  }
}
Mouse.propTypes = {
  render: PropTypes.func.isRequired, // 必须接收一个 render 属性，而且是函数
};
const App = (props: any) => {
  return (
    <div style={{ height: "500px" }}>
      <p>{props.a}</p>
      <Mouse
        render={({ x, y }: BaseState) => (
          <h1>
            the mouse position is {x},{y}
          </h1>
        )}
      />
    </div>
  );
};
/**
 * 即，定义了 Mouse 组件，只有获取 x y 的能力。
 * 至于 Mouse 组件如何渲染，App 说了算，通过 render prop 的方式告诉 Mouse 。
 */
export default App;
