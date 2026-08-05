import React from "react";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Alert.module.css";
import { getAlertMessage } from "../../redux/alert/alertSlice";
import { CircleX } from "lucide-react";

const AlertComponent = () => {
  const dispatch = useDispatch();
  const { message, isError } = useSelector((state) => state.alert);
  const timer = useRef(0);
  const handleClose = () => {
    clearTimeout(timer.current);
    dispatch(
      getAlertMessage({
        message: "",
        isError: "",
      }),
    );
  };
  useEffect(() => {
    if (message) {
      timer.current = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => handleClose();
    }
  }, [message]);
  return (
    <>
      {message && (
        <div
          className={`${style.alertContainer} ${
            isError ? style.errorText : style.normalText
          }`}
        >
          <div>{message}</div>
          <div className={style.icon} onClick={()=>{handleClose()}}>
            <CircleX />
          </div>
        </div>
      )}
    </>
  );
};

export default AlertComponent;
