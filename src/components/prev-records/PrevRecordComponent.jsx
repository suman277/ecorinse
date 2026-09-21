import React from "react";
import { useState } from "react";
import style from "./PrevRecord.module.css";
import { ChevronDownCircleIcon, ChevronUpCircle } from "lucide-react";
import StatusIndicator from "../common-components/status-indicator/StatusIndicator";

const PrevRecordComponent = () => {
  const [id, setId] = useState(1);
  const [accordionId, setaccordionId] = useState(null);
  const handleSetAccordion = (id) => {
    if (accordionId === id) {
      setaccordionId(null);
    } else {
      setaccordionId(id);
    }
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.orderContainer}>
        <div>#ORD-26:12:2003-19-09-2323</div>
        <div>Suman Kumar Sahu</div>
        <div>
          <StatusIndicator status={"Delivered"} />
        </div>
        <div onClick={()=>setaccordionId(id)}>
          <ChevronDownCircleIcon />
        </div>
      </div>
      {accordionId === id && <div className={style.orderDetails}>Hii </div>}
    </div>
  );
};

export default PrevRecordComponent;
