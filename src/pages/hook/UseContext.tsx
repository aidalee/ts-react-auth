import React, { useContext } from "react";
// createContext的做法：详细的可以参考frame-project-interview这个项目
// interface IThemeProps {
//   [key: string]: { color: string; background: string };
// }
// const themes: IThemeProps = {
//   light: {
//     color: "#000",
//     background: "#eee",
//   },
//   dark: {
//     color: "#fff",
//     background: "#222",
//   },
// };
// const ThemeContext = React.createContext(themes.light);
// import { ThemeContext } from "../../App"; // ThemeContext假设ThemeContext在App组件中定义
// 在需要用到的函数组件内部：const theme = useContext(ThemeContext),即可使用theme中的数据，简单方便快捷
