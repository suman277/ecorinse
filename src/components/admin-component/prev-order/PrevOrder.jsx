import React from "react";
import style from "./PrevOrder.module.css";
import PrevRecordComponent from "../../prev-records/PrevRecordComponent";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPreviousOrders } from "../../../redux/orders/adminThunk";
import Loading from "../../loader/Loading.jsx";
import { getOrderItemDetails } from "../../../redux/orders/OrderThunk.js";
import NoRecordComponent from "../../no-record/NoRecordComponent.jsx";

const PrevOrder = ({ orderDetails }) => {
  const dispatch = useDispatch();
  const [accordionId, setaccordionId] = useState(null);
  const handleSetAccordion = (id) => {
    if (id == null) return;

    if (accordionId === id) {
      setaccordionId(null);
      return;
    }

    setaccordionId(id);
    dispatch(getOrderItemDetails(id));
  };
  useEffect(() => {
    if (orderDetails) {
      dispatch(
        getPreviousOrders({
          contact_no: orderDetails?.phone_number,
        }),
      );
    }
  }, [orderDetails]);
  const orderItemDetails = useSelector(
    (state) => state.orders.orderItemDetailsList,
  );
  const {
    response: prevOrderResponses,
    isLoading: isprevOrderResponsesLoading,
    error: prevOrderResponsesError,
  } = useSelector((state) => state.admin);
  return isprevOrderResponsesLoading ? (
    <div className={style.loadingContainer}>
      <Loading />
    </div>
  ) : prevOrderResponses?.length > 0 ? (
    <div className={style.mainContainer}>
      {prevOrderResponses?.map((prevOrder) => {
        return (
          <PrevRecordComponent
            key={prevOrder?.id}
            id={prevOrder?.id}
            prevOrder={prevOrder}
            handleSetAccordion={handleSetAccordion}
            accordionId={accordionId}
            orderItemDetails={orderItemDetails}
          />
        );
      })}
    </div>
  ) : (
    <div className={style.loadingContainer}>
      {" "}
      <NoRecordComponent />
    </div>
  );
};

export default PrevOrder;
