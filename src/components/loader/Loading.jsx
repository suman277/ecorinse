import React from "react";
import style from "./Loading.module.css";
import WashingMachine from "../../assets/images/Loader/WashingMachine.png";
import WashingMachineInner from "../../assets/images/Loader/WashingMachineInner.png"

const Loading = ({ pageName }) => {
  return (
    <div className={style.loaderText}>
      <div className={style.imageBody}>
        <div className={style.loaderLeft}>
          <img className = {style.imageClass}src={WashingMachineInner}/>
        </div>
      </div>
    </div>
  );
};

export default Loading;
