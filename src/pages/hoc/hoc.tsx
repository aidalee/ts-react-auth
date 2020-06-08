import React from "react";
import WithMouse from "./withMouse";
class HOC extends React.Component<{}, {}> {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div>
        <WithMouse a="100" />
      </div>
    );
  }
}
export default HOC;
