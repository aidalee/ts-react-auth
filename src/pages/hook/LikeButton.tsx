import React, { useState } from "react";
import useMousePosition from "./customHooks/useMousePosition";
// useState使得在函数组件添加state成为可能
// const LikeButton: React.FC = () => {
//   const [like, setLike] = useState(0);
//   return (
//     <button
//       onClick={() => {
//         setLike(like + 1);
//       }}
//     >
//       {like} 👍
//     </button>
//   );
// };
const LikeButton: React.FC = () => {
  //   const [obj, setObj] = useState({ like: 0, on: true });
  //   return (
  //     <>
  //       <button
  //         onClick={() => {
  //           setObj({ like: obj.like + 1, on: obj.on });
  //         }}
  //       >
  //         {obj.like}👍
  //       </button>
  //       <button
  //         onClick={() => {
  //           setObj({ like: obj.like, on: !obj.on });
  //         }}
  //       >
  //         {obj.on ? "ON" : "OFF"}
  //       </button>
  //     </>
  // 或者每个状态单独用一个useState:
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const positions = useMousePosition([like]);
  return (
    <>
      {positions.x}
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like}👍
      </button>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? "ON" : "OFF"}
      </button>
    </>
  );
};
export default LikeButton;
