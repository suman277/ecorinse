import React from "react";
import { SquareMenu } from "lucide-react";
import style from "./NoRecord.module.css";

const NoRecordComponent = () => {
  return (
    <div className={style.noRecordContainer}>
      <SquareMenu />
      <div>No Records found</div>
    </div>
  );
};

export default NoRecordComponent;
