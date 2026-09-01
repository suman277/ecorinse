import React from "react";
import style from "./StatusIndicator.module.css";

const StatusIndicator = ({ status }) => {
  const getStatusColor = (status) => {
    if (status === "Pending") {
      return {
        backgroundColor: "#FFEBEB",
        color: "#DF2828",
        border : "1px solid #DF2828"
      };
    } else if (status === "Processing") {
      return {
        backgroundColor: "#FFF8EB",
        color: "#9B6E14",
        border : "1px solid #9B6E14"
      };
    } else if (status === "Confirmed") {
      return {
        backgroundColor: "#C6F0D7",
        color: "#1E975D",
        border : "1px solid #1E975D"
      };
    } else if (status === "Delivered") {
      return {
        backgroundColor: "#F5F5F5",
        color: "#757575",
        border : "1px solid #757575"
      };
    } else {
      return {
        backgroundColor: "#ffffff",
        color: "#fffffe",
        border : "1px solid #fffffe"
      };
    }
  };
  return (
    <div className={style.statusInd} style={getStatusColor(status)}>
      <div>{status}</div>
    </div>
  );
};

export default StatusIndicator;
