import React, { useState } from "react";
import { useEffect, useRef } from "react";
import Navbar from "../navbar/Navbar";
import style from "./Order.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, deleteItem } from "../../redux/cart/cartSlice";
import ChooseItems from "./ChooseItems";
import Address from "./Address";
import Pickup from "./Pickup";
import { SkipForward, Scooter, X, Trash2 } from "lucide-react";

const Order = () => {
  const dispatch = useDispatch();
  const [details, setuserDetails] = useState({
    address_details : "",
  });
  const cartDetails = useSelector((state) => state.cart.items);
  const totalPrice = cartDetails.reduce(
    (total, item) => total + item.price * item.quantity,
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
  };
  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (components.length - 1)) * 100;
  };

  const [width, setWidth] = useState({
    leftMargin: 0,
    rightMargin: 0,
  });
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
                        <div className={style.itemName}>{item.name}</div>
                        <div className={style.priceDetails}>
                          <div>{item.price}</div>
                          <div>x{item.quantity}</div>
                        </div>
                        <div className={style.totalPrice}>
                          Subtotal : {item.quantity * item.price}
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
            setHandleCart = {setHandleCart}
          />
        </div>
      </div>
      <div className={style.footerContainer}>
        <div className={style.footerOps}>
          <div className={style.leftSideContainer}>
            <div className={style.cartDetails}>
              {cartDetails.length > 0
                ? `${cartDetails.length} Item - ₹${totalPrice}`
                : "No Items Selected"}
            </div>
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
          </div>
          <div className={style.btnGroup}>
            {currentStep === components[0].id ? (
              <button
                className={style.skipForward}
                onClick={() => {
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
                  setCurrentStep((prev) => prev + 1);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
