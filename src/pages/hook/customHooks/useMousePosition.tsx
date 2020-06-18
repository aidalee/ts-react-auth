import React, { useState, useEffect } from "react";
const useMousePosition = (deps: any[]) => {
  debugger;
  const [positions, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("add effect", positions.x);
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateMouse);
    // 清除副作用
    return () => {
      document.removeEventListener("mousemove", updateMouse);
    };
  }, deps);
  return positions;
};
export default useMousePosition;
