import React, { useState } from "react";
import { useEffect, useRef } from "react";
import Navbar from "../navbar/Navbar";
import style from "./Order.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  deleteItem,
  clearCart,
} from "../../redux/cart/cartSlice";
import { clearAddressDetails } from "../../redux/orders/OrderSlice";
import { createOrderWithItem } from "../../redux/orders/OrderThunk";
import ChooseItems from "./ChooseItems";
import Address from "./Address";
import Pickup from "./Pickup";
import { SkipForward, Scooter, X, Trash2 } from "lucide-react";

const Order = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [details, setuserDetails] = useState({
    name: "",
    address_details: "",
    address: "",
    pickup_date: "",
    pickup_time: "",
    landmark: "",
    notes: "",
    longitude: null,
    latitude: null,
    email: "",
  });
  const cartDetails = useSelector((state) => state.cart.items);
  const totalPrice = cartDetails.reduce(
    (total, item) => total + item.unit_price * item.quantity,
    0,
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [handleCart, setHandleCart] = useState(false);
  const showCart = true;
  const stepRef = useRef([]);
  const components = [
    {
      id: 1,
      name: "Items",
      component: ChooseItems,
    },
    {
      id: 2,
      name: "Pickup",
      component: Pickup,
    },
    {
      id: 3,
      name: "Address",
      component: Address,
    },
  ];
  const ActiveComponent = components[currentStep - 1].component;
  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setuserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({});
  };
  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (components.length - 1)) * 100;
  };

  const [width, setWidth] = useState({
    leftMargin: 0,
    rightMargin: 0,
  });
  // const validateItemDetails = () => {
  //   const errorObj = {};
  //   if (currentStep === 2) {
  //     // Pickup validation

  //     if (!details?.pickup_date) {
  //       errorObj.pickup_date = "Please choose a valid pickup date";
  //     }

  //     if (!details?.pickup_time) {
  //       errorObj.pickup_time = "Please choose a valid pickup slot";
  //     }
  //   }

  //   if (currentStep === 3) {
  //     // Address validation

  //     if (!details?.phone || details.phone.trim() === "") {
  //       errorObj.phone = "Please enter phone number";
  //     } else if (details.phone.length !== 10) {
  //       errorObj.phone = "Please enter a valid phone number";
  //     }

  //     if (!details?.address?.trim() && !details?.address_details?.trim()) {
  //       errorObj.address_details = "Please enter a valid address";
  //     }

  //     if (!details?.name || details.name.trim() === "") {
  //       errorObj.name = "Please enter your name";
  //     } else if (details.name.trim().length < 3) {
  //       errorObj.name = "Please enter a valid name";
  //     }
  //   }
  //   return errorObj;
  // };
  const validateItemDetails = () => {
    const errorObj = {};

    if (currentStep === 2) {
      if (!details?.pickup_date) {
        errorObj.pickup_date = "Please choose a valid pickup date";
        return errorObj;
      }

      if (!details?.pickup_time) {
        errorObj.pickup_time = "Please choose a valid pickup slot";
        return errorObj;
      }
    }

    if (currentStep === 3) {
      if (!details?.name || details.name.trim() === "") {
        errorObj.name = "Please enter your name";
        return errorObj;
      }

      if (details.name.trim().length < 3) {
        errorObj.name = "Please enter a valid name";
        return errorObj;
      }
      if (!details?.phone || details.phone.trim() === "") {
        errorObj.phone = "Please enter phone number";
        return errorObj;
      }

      if (details.phone.trim().length !== 10) {
        errorObj.phone = "Please enter a valid phone number";
        return errorObj;
      }

      if (!details?.address?.trim() && !details?.address_details?.trim()) {
        errorObj.address = "Please enter a valid address";
        return errorObj;
      }
    }

    return errorObj;
  };
  const handleNext = async () => {
    const errorList = validateItemDetails();
    setErrors(errorList);
    if (Object.keys(errorList).length > 0) {
      console.log("RETURNING BECAUSE OF VALIDATION");
      console.log("userDetails", details);
      console.log("errorList:", errorList);
      return;
    }
    if (currentStep === components.length) {
      await dispatch(
        createOrderWithItem({
          ...details,
          order_details: cartDetails,
        }),
      );
      dispatch(clearCart());
      dispatch(clearAddressDetails())
      setuserDetails({
        name: "",
        address_details: "",
        address: "",
        pickup_date: "",
        pickup_time: "",
        landmark: "",
        notes: "",
        longitude: null,
        latitude: null,
        email: "",
      });
      setCurrentStep(components[0].id);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };
  useEffect(() => {
    const left = stepRef.current[0].offsetWidth / 2;
    const right = stepRef.current[components.length - 1].offsetWidth / 2;
    setWidth({
      leftMargin: left,
      rightMargin: right,
    });
  }, [stepRef]);
  return (
    <div className={style.parentContainer}>
      {handleCart && (
        <>
          <div className={style.cartBackdrop} />
          <div className={style.cartContainer}>
            <div className={style.itemCart}>
              <div className={style.headerDetails}>
                <div className={style.cartHeader}>Cart Items</div>
                <div
                  className={style.roundedIcon}
                  onClick={() => setHandleCart(false)}
                >
                  <X />
                </div>
              </div>
              <div className={style.cartItemsContainer}>
                {cartDetails.map((item) => {
                  return (
                    <div className={style.cartItems}>
                      <div>
                        <div className={style.itemName}>{item.item_name}</div>
                        <div className={style.priceDetails}>
                          <div>{item.unit_price}</div>
                          <div>x{item.quantity}</div>
                        </div>
                        <div className={style.totalPrice}>
                          Subtotal : {item.quantity * item.unit_price}
                        </div>
                      </div>
                      <div className={style.ops}>
                        <div
                          className={style.operationDiv}
                          onClick={() => {
                            dispatch(removeItem(item));
                          }}
                        >
                          -
                        </div>
                        <div>{item.quantity}</div>
                        <div
                          className={style.operationDiv}
                          onClick={() => {
                            dispatch(addItem(item));
                          }}
                        >
                          +
                        </div>
                      </div>
                      <div
                        className={style.trashIcon}
                        onClick={() => {
                          dispatch(deleteItem(item));
                        }}
                      >
                        <Trash2 />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={style.totalItem}>Proceed To Checkout</div>
            </div>
          </div>
        </>
      )}
      <div className={style.navbarContainer}>
        <Navbar
          showCart={showCart}
          cartLength={cartDetails.length}
          setHandleCart={setHandleCart}
        />
      </div>
      <div className={style.componentDetailContainer}>
        <div className={style.itemNavBar}>
          {components.map((comp, index) => {
            return (
              <div className={style.compDetails}>
                <div
                  className={style.numberItem}
                  ref={(elem) => (stepRef.current[index] = elem)}
                >
                  {comp.id}
                </div>
                <div>{comp.name}</div>
              </div>
            );
          })}
          <div
            className={style.progressbar}
            style={{
              left: `${width.leftMargin}px`,
              right: `${width.rightMargin}px`,
            }}
          >
            <div
              className={style.progress}
              style={{ width: `${calculateProgressBarWidth()}%` }}
            ></div>
          </div>
        </div>
        <div className={style.compDetails}>
          {/* <ChooseItems /> */}
          <ActiveComponent
            details={details}
            handleUserDetails={handleUserDetails}
            setuserDetails={setuserDetails}
            setHandleCart={setHandleCart}
            errors={errors}
          />
        </div>
      </div>
      <div className={style.footerContainer}>
        <div className={style.footerOps}>
          <div className={style.leftSideContainer}>
            {currentStep > 1 && (
              <div
                className={style.backBtn}
                onClick={() => {
                  setCurrentStep((prev) => prev - 1);
                }}
              >
                Back
              </div>
            )}
            <div className={style.cartDetails}>
              {cartDetails.length > 0
                ? `${cartDetails.length} Item - ₹${totalPrice}`
                : "No Items Selected"}
            </div>
          </div>
          <div className={style.btnGroup}>
            {currentStep === components[0].id ? (
              <button
                className={style.skipForward}
                onClick={() => {
                  dispatch(clearCart());
                  setCurrentStep((prev) => prev + 1);
                }}
              >
                <SkipForward size={"1rem"} />
                SKIP & CONTINUE
              </button>
            ) : (
              ""
            )}
            <div>
              <button
                className={`${cartDetails.length === 0 && currentStep === components[0].id ? style.disableBtn : ""} ${style.nextBtn}`}
                disabled={
                  cartDetails.length === 0 && currentStep === components[0].id
                }
                onClick={() => {
                  handleNext();
                }}
              >
                {currentStep === components.length ? "Place Order" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
