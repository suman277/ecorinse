import React from "react";
import style from "./Order.module.css";
import { useSelector, useDispatch } from "react-redux";

const Pickup = ({
  details,
  handleUserDetails,
  setuserDetails,
  setHandleCart,
}) => {
  const itemDetails = useSelector((state) => state.cart.items);
  const totalPrice = itemDetails.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const now = new Date();
  const maxDay = new Date(now);
  maxDay.setDate(maxDay.getDate() + 7);
  const minDate = now.toISOString().split("T")[0];
  const maxDate = maxDay.toISOString().split("T")[0];
  const storeOpening = 9;
  const storeClosing = 20;
  const currentHour = new Date().getHours();
  const today = new Date().toISOString().split("T")[0];
  const isToday = details?.pickup_date === today;
  let pickupSlots = [];

  for (let i = storeOpening; i < storeClosing; i++) {
    if (isToday && i <= currentHour) {
      continue;
    }
    console.log("from pickup component ", itemDetails);

    pickupSlots.push({
      hour: i,
      label: `${String(i).padStart(2, "0")}:00 - ${String(i + 1).padStart(2, "0")}:00`,
      value: `${String(i).padStart(2, "0")}:00:00`,
    });
  }
  return (
    <>
      <div className={style.mainPickupContainer}>
        <div className={style.pickUpDateContainer}>
          <h6>PICKUP DATE</h6>
          <div className={style.dateInput}>
            <input
              className={style.inputDate}
              type="date"
              min={minDate}
              max={maxDate}
              name="pickup_date"
              value={details?.pickup_date}
              onChange={(e) => {
                handleUserDetails(e);
              }}
            />
          </div>
        </div>
        <div>
          {details?.pickup_date?.trim() && (
            <div className={style.pickupTimeSlotContainer}>
              <h6>PICKUP SLOT</h6>
              <div className={style.pickupTimeSlots}>
                {pickupSlots.length > 0 ? (
                  pickupSlots.map((slot) => (
                    <button
                      key={slot.value}
                      className={`${style.pickUpTimes} ${details.pickup_slot === slot.value ? style.activeBackGround : ""}`}
                      onClick={() => {
                        setuserDetails((prev) => ({
                          ...prev,
                          pickup_slot: slot.value,
                        }));
                      }}
                    >
                      {slot.label}
                    </button>
                  ))
                ) : (
                  <h5>No pickup slots available</h5>
                )}
              </div>
            </div>
          )}
        </div>
        {itemDetails.length > 0 && (
          <div className={style.pickupMainCartContainer}>
            <div className={style.pickUpHeader}>
              <h5>Your Item Details</h5>
              <button
                className={style.pickupEditBtn}
                onClick={() => setHandleCart(true)}
              >
                Edit
              </button>
            </div>
            <div className={style.pickUpCartContainer}>
              <div>
                {itemDetails.map((item) => {
                  return (
                    <div className={style.pickupCartItemDetails}>
                      <span className={style.itemNameQuantity}>
                        {item?.quantity} x {item?.name}
                      </span>
                      <div>{`₹ ${item?.price * item?.quantity}`}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={style.totalPayableContainer}>
              <h3>Total Payable</h3>
              <h3>₹{totalPrice}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Pickup;
