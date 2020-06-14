import React, { useState, useEffect } from "react";
const MouseTracker: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("click", updateMouse);
    // useEffect源码可以看到可以返回函数,在这里清除effect
    return () => {
      document.removeEventListener("click", updateMouse);
    };
  });
  return (
    <p>
      X:{position.x},Y:{position.y}
    </p>
  );
};
export default MouseTracker;
// 每次render后都重新执行effect比较消耗性能,所以可以有针对性的控制useEffect的执行.
// useEffect()第二个参数传一个[]代表effect不依赖于props和state中的任意值,所以永远都不会重复执行,只会在挂载和卸载时各执行一次effect
// 如果传了useState中定义的属性,则会在所传属性发生改变时才会执行effect
