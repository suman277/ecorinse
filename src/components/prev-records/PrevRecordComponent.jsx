import React, { useEffect } from "react";
import { useState } from "react";
import style from "./PrevRecord.module.css";
import { ChevronDownCircleIcon, ChevronUpCircle } from "lucide-react";
import StatusIndicator from "../common-components/status-indicator/StatusIndicator";
import { Phone, MapPin, LocateIcon } from "lucide-react";

const PrevRecordComponent = ({
  prevOrder,
  handleSetAccordion,
  accordionId,
  orderItemDetails,
}) => {
  console.log(orderItemDetails);
  return (
    <div className={style.mainContainer}>
      <div className={style.orderContainer}>
        <div className={style.itemOrderRef}>{prevOrder?.order_ref_num}</div>
        <div className={style.itemName}>{prevOrder?.name}</div>
        <div className={style.itemStatus}>
          <div className={style.statusWrapper}>
            <StatusIndicator status={prevOrder?.status} />
          </div>
        </div>
        <div
          className={style.iconStatus}
          onClick={() => handleSetAccordion(prevOrder?.id)}
        >
          <ChevronDownCircleIcon />
        </div>
      </div>
      {accordionId === prevOrder?.id && (
        <div className={style.orderDetails}>
          <div className={style.remainingDetails}>
            <div className={style.phoneDetails}>
              <div>
                <Phone size={"1rem"} />
              </div>
              <div>{prevOrder.phone_number}</div>
            </div>
            <div className={style.address}>
              <LocateIcon size={"1rem"} />
              <div style={{ textAlign: "center" }}>
                {prevOrder.pickup_address}
              </div>
            </div>
            <div className={style.mapDetails}>
              <MapPin size={"1rem"} />
              {prevOrder?.longitude && prevOrder?.latitude ? (
                <div
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps?q=${prevOrder.latitude},${prevOrder.longitude}`,
                      "_blank",
                    )
                  }
                >
                  Location
                </div>
              ) : (
                "-"
              )}
            </div>
          </div>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>

            <tbody>
              {orderItemDetails?.response?.order_details?.map(
                (order, index) => (
                  <tr key={order.id ?? index}>
                    <td>{order.service_name}</td>
                    <td>{order.item_name}</td>
                    <td>{order.quantity}</td>
                    <td>{order.total_price}</td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PrevRecordComponent;
