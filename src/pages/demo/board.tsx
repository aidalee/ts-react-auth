// 渲染9个方块
import React from "react";
import Square from "./square";
type PropType = {};
type StateType = {
  squares: string[];
};
class Board extends React.Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  handleClick(i: number): any {
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({ squares: squares });
  }
  renderSquare(i: any) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default Board;
