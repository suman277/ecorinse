import React from "react";
import style from "./Loading.module.css";

const Loading = ({ pageName }) => {
  return <div className={style.loaderText}>Loading {pageName} ...</div>;
};

export default Loading;
