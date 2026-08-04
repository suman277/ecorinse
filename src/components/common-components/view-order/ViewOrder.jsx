import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ViewOrder.module.css";
import { FcCancel } from "react-icons/fc";
import Orders from "../orders/Orders";
import PrevOrder from "../../admin-component/prev-order/PrevOrder";
import { getOrder } from "../../../redux/orders/OrderThunk";
import { ListOrdered, History, Dot } from "lucide-react";

const ViewOrder = ({ handleClose, orderId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (orderId !== null) {
      dispatch(getOrder(orderId));
    }
  }, []);
  const response = useSelector((state) => state.orders.order.response);
  const [menu, setMenu] = useState("orders");
  return (
    <div className={style.mainContainer}>
      <div className={style.headerDetails}>
        <div className={style.headerMenu}>
          <div className={style.containerHeader}>Order Details</div>
          <div>+91 {response?.phone_number}</div>
          <div className={style.statusDetails}>
            <Dot className={style.statusIcon} />
            <span>{response?.status}</span>
          </div>
        </div>
        <div
          onClick={() => {
            handleClose();
          }}
        >
          <FcCancel size={"2rem"} />
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
          {menu === "orders" ? <Orders orderId={orderId} /> : <PrevOrder />}
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
