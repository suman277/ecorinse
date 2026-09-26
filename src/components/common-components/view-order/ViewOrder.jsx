import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ViewOrder.module.css";
import Orders from "../orders/Orders";
import PrevOrder from "../../admin-component/prev-order/PrevOrder";
import { getOrder } from "../../../redux/orders/OrderThunk.js";
import StatusIndicator from "../status-indicator/StatusIndicator.jsx";
import { ListOrdered, History, X } from "lucide-react";

const ViewOrder = ({ handleClose, orderId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (orderId !== null) {
      dispatch(getOrder(orderId));
    }
  }, [orderId, dispatch]);
  const response = useSelector((state) => state.orders.order.response);
  const [menu, setMenu] = useState("orders");
  return (
    <div className={style.mainContainer}>
      <div className={style.headerDetails}>
        <div className={style.headerMenu}>
          <div className={style.containerHeader}>
            <strong>Order</strong> #{response?.order_ref_num}
          </div>
          <div>+91 {response?.phone_number}</div>
          <div className={style.statusDetails}>
            <StatusIndicator status={response?.status} />
          </div>
        </div>
        <div
          className={style.closeIcon}
          onClick={() => {
            handleClose();
          }}
        >
          <X size={"1rem"} strokeWidth={"0.1rem"} />
        </div>
      </div>
      <div className={style.layoutDetails}>
        <div className={style.layoutMenu}>
          <div
            className={`${style.tabMenu} ${menu === "orders" ? style.activeTabClass : ""}`}
            id="orders"
            onClick={() => {
              setMenu("orders");
            }}
          >
            <ListOrdered />
            Orders
          </div>
          <div
            className={`${style.tabMenu} ${menu === "prevOrders" ? style.activeTabClass : ""}`}
            id="prevOrders"
            onClick={() => {
              setMenu("prevOrders");
            }}
          >
            <History />
            Previous Orders
          </div>
        </div>
        <div className={style.layoutComps}>
          {menu === "orders" ? <Orders orderId={orderId} /> : <PrevOrder orderDetails = {response} />}
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
