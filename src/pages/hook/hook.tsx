import React from "react";
import LikeButton from "./LikeButton";
import SimpleEffect from "./SimpleEffect";
import MouseTracker from "./Mousetracker";
import useMousePosition from "./customHooks/useMousePosition";
const Hook: React.FC = () => {
  const positions = useMousePosition();
  return (
    <>
      <p>
        X:{positions.x},Y:{positions.y}
      </p>
      <LikeButton></LikeButton>
      <SimpleEffect></SimpleEffect>
      {/* <MouseTracker></MouseTracker> */}
    </>
  );
};
export default Hook;
