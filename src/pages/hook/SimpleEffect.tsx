import React, { useState, useEffect } from "react";

const SimpleEffect: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  // 每次组件完成渲染以后 effect就会被触发,不用记挂载还是更新了,
  // 不用像之前的在class组件中分别使用componentDidMount和componentDidUpdate都去执行一遍相同的操作
  // 一个组件不可能只有单纯的输入props和定义state然后输出界面这样简单,还有网络请求/dom操作/定义数据来源(这些是不需要清除的副作用)等等和纯函数界面渲染不相干的事情,这就称之为函数副作用
  // 需要清除的副作用:添加dom事件,class中是在componentDidMount中定义事件,在componentwillUnmount中卸载
  useEffect(() => {
    document.title = `点击了${like}次`;
  });
  return (
    <>
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
export default SimpleEffect;
