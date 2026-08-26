import React, { useEffect, useState } from "react";
import style from "./Order.module.css";
import { DeleteIcon, Trash2 } from "lucide-react";
import {
  createOrderItems,
  getOrderItemDetails,
} from "../../../redux/orders/OrderThunk.js";
import { useDispatch, useSelector } from "react-redux";

const Orders = ({ orderId }) => {
  const dispatch = useDispatch();
  const response = useSelector(
    (state) => state.orders.orderItemDetailsList.response.order_details,
  );

  const [showDropdown, setShowDropDown] = useState({
    index: "",
    show: false,
  });
  const initialItemDetails = {
    item_name: "",
    service_name: "",
    quantity: "",
    unit_price: "",
    total_price: "",
  };
  const [itemDetails, setItemDetails] = useState([]);
  useEffect(() => {
    if (orderId) {
      dispatch(getOrderItemDetails(orderId));
    }
  }, [dispatch]);
  useEffect(() => {
    if (response) {
      setItemDetails(response);
    }
  }, [response]);
  const saveItems = async () => {
    const indexVal = validateForm(itemDetails);
    if (indexVal !== undefined) {
      setItemIndex(indexVal);
      return;
    }
    const item_details = itemDetails?.map((item) => ({
      item_name: item.item_name,
      service_name: item.service_name,
      quantity: Number(item.quantity),
      unit_price: Number(item.unit_price),
    }));

    const payload = {
      order_details: item_details,
    };
          setItemIndex(undefined);

    if (orderId) {
      await dispatch(createOrderItems({ orderId, payload })).unwrap();
    }
    dispatch(getOrderItemDetails(orderId));
  };
  const [itemIndex, setItemIndex] = useState();
  const addItem = () => {
    setItemDetails((prev) => [...prev, initialItemDetails]);
  };
  const validateForm = (itemDetails) => {
    for (const [index, item] of itemDetails.entries()) {
      for (const [key, value] of Object.entries(item)) {
        if (typeof value === "string" && value.trim() === "") {
          return index;
        }
      }
    }
    return undefined;
  };
  const handleDelete = (index) => {
    setItemDetails((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
  };
  // const handleChange = (e, index) => {
  //   const { name, value } = e.target;
  //   setItemDetails((prev) => {
  //     const updated = [...prev];
  //     updated[index] = {
  //       ...updated[index],
  //       [name]: value,
  //     };
  //     return updated;
  //   });
  // };

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    setItemDetails((prev) => {
      const updated = [...prev];

      const updatedItem = {
        ...updated[index],
        [name]: value,
      };

      updatedItem.total_price =
        Number(updatedItem.quantity || 0) * Number(updatedItem.unit_price || 0);

      updated[index] = updatedItem;

      return updated;
    });
  };
  const services = [
    "Wash and Fold",
    "Wash and Iron",
    "Steam Ironing",
    "Dry Cleaning",
    "Premium Laundry",
    "Shoe Cleaning",
  ];
  return (
    <div className={style.mainContainer}>
      <div className={style.addBTn}>
        <button
          className={style.btnStyle}
          onClick={() => {
            addItem();
          }}
        >
          + Add Items
        </button>
      </div>
      <div className={style.saveBTn}>
        <button
          className={style.btnStyle}
          disabled={itemDetails.length === 0}
          onClick={() => {
            saveItems();
          }}
        >
          Save
        </button>
      </div>
      <div className={style.addItemContainer}>
        {itemDetails?.map((item, index) => {
          return (
            <div key={index} className={style.mainItemContainer}>
              <div key={index} className={style.itemDetailsContainer}>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className={style.inputBox}
                  name="item_name"
                  value={item.item_name}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                ></input>
                <div className={style.serviceWrapper}>
                  <input
                    type="text"
                    onFocus={() => {
                      setShowDropDown({ index: index, show: true });
                    }}
                    placeholder="Service Name"
                    name="service_name"
                    value={item.service_name}
                    className={style.showDropInputBox}
                  ></input>
                  {showDropdown.index === index && showDropdown.show && (
                    <div className={style.serviceMenu}>
                      {services.map((service, serviceIndex) => {
                        return (
                          <div
                            className={style.DropDownKeys}
                            key={serviceIndex}
                            onClick={() => {
                              setItemDetails((prev) => {
                                const updated = [...prev];
                                updated[index] = {
                                  ...updated[index],
                                  service_name: service,
                                };
                                return updated;
                              });
                              setShowDropDown({
                                index: "",
                                show: false,
                              });
                            }}
                          >
                            {service}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Enter Quantity"
                  className={style.inputBox}
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                ></input>
                <input
                  type="text"
                  placeholder="Enter Unit Price"
                  className={style.inputBox}
                  name="unit_price"
                  value={item.unit_price}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                ></input>
                <input
                  type="text"
                  placeholder="Final Price"
                  className={style.inputBox}
                  value={Number(item.quantity) * Number(item.unit_price)}
                  name="total_price"
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                  readOnly
                ></input>
                <div className={style.delIcon}>
                  <DeleteIcon onClick={() => handleDelete(index)} />
                </div>
                {/* <div className={style.delIcon}>
                {item.id && (
                    <Trash2 onClick={() => handleDelete(index)} />
                  )}
                  </div> */}
              </div>
              {itemIndex === index && (
                <div className={style.errorText}>
                  Please enter the details correctly
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
