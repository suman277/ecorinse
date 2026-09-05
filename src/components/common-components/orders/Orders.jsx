import React, { useEffect, useState, useRef } from "react";
import style from "./Order.module.css";
import { Trash2 } from "lucide-react";
import {
  createOrderItems,
  getOrderItemDetails,
} from "../../../redux/orders/OrderThunk.js";
import { useDispatch, useSelector } from "react-redux";
import { itemCategories } from "../../../utils/UtilsData.js";

const Orders = ({ orderId }) => {
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [showDropdown, setShowDropDown] = useState({
    div: "",
    index: "",
    show: false,
  });
  const [hoveredCategory, setHoveredCategory] = useState({
    catName: "",
    items: [],
  });
  const activeDropdownRef = useRef(null);
  useEffect(() => {
    const handleDropDown = (event) => {
      if (
        activeDropdownRef.current &&
        !activeDropdownRef.current.contains(event.target)
      ) {
        setShowDropDown({
          index: "",
          show: false,
          div: "",
        });
        setHoveredCategory([]);
      }
    };

    document.addEventListener("pointerdown", handleDropDown);

    return () => {
      document.removeEventListener("pointerdown", handleDropDown);
    };
  }, []);
  const dispatch = useDispatch();
  const response = useSelector(
    (state) => state.orders.orderItemDetailsList.response.order_details,
  );
  const categoriesList = Object.keys(itemCategories);
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
    const lastItem = itemDetails[itemDetails.length - 1];
    if (lastItem) {
      const hasEmptyField = Object.values(lastItem).some(
        (value) => value === "" || value === null || value === undefined,
      );

      if (hasEmptyField) {
        setItemIndex(itemDetails.length - 1);
        console.error("An empty form is there");
        return;
      }
    }
    setIsFormDirty(true);
    setItemDetails((prev) => [...prev, initialItemDetails]);
  };
  const validateForm = (itemDetails) => {
    for (const [index, item] of itemDetails.entries()) {
      for (const [key, value] of Object.entries(item)) {
        if (typeof value === "string" && value.trim() === "" && key !== "id") {
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
      setIsFormDirty(true);
      setItemIndex(null);

      return updated;
    });
  };
  console.log("isDirty", isFormDirty);
  const catWiseItemDetails = (index) => {
    const category = Object.values(itemCategories).filter(
      (itemCat) => itemDetails[index].service_name === itemCat.categoryName,
    );
    return category[0]?.categoryDetail;
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.addItemContainer}>
        {itemDetails?.map((item, index) => {
          console.log("itemIndex:", itemIndex);
          console.log("current index:", index);
          return (
            <div className={style.itemDetails}>
              <div className={style.inputContainer}>
                <div
                  className={style.inputDetails}
                  ref={
                    showDropdown.index === index &&
                    showDropdown.show &&
                    showDropdown.div === "categories"
                      ? activeDropdownRef
                      : null
                  }
                >
                  <label id="serviceName">
                    {" "}
                    <h5>Service Name</h5>
                  </label>
                  <input
                    type="text"
                    onFocus={() => {
                      setShowDropDown({
                        index: index,
                        show: true,
                        div: "categories",
                      });
                    }}
                    className={style.inputBox}
                    value={item.service_name}
                    placeholder="Enter Service Name"
                  />
                  {showDropdown.index === index &&
                    showDropdown.show &&
                    showDropdown.div === "categories" && (
                      <div className={style.categorisList}>
                        {categoriesList.map((category) => {
                          return (
                            <div
                              className={style.categoryName}
                              onClick={() => {
                                setItemDetails((prev) => {
                                  const updated = [...prev];
                                  updated[index] = Object.fromEntries(
                                    Object.keys(updated[index]).map((key) => [
                                      key,
                                      key === "service_name"
                                        ? itemCategories[category].categoryName
                                        : "",
                                    ]),
                                  );
                                  return updated;
                                });
                                setShowDropDown({
                                  index: "",
                                  show: false,
                                  div: "",
                                });
                              }}
                            >
                              {itemCategories[category].categoryName}
                            </div>
                          );
                        })}
                      </div>
                    )}
                </div>
                <div className={style.otherInputContainers}>
                  <div
                    className={style.inputDetails}
                    ref={
                      showDropdown.index === index &&
                      showDropdown.show &&
                      showDropdown.div === "items"
                        ? activeDropdownRef
                        : null
                    }
                  >
                    <label id="serviceName">
                      <h5>Item Name</h5>
                    </label>
                    <input
                      type="text"
                      onFocus={() => {
                        setShowDropDown({
                          index: index,
                          show: true,
                          div: "items",
                        });
                      }}
                      value={item.item_name}
                      className={style.inputBox}
                      placeholder="Enter Service Name"
                    />
                    {showDropdown.index === index &&
                      showDropdown.show &&
                      showDropdown.div === "items" && (
                        <div className={style.itemNameDetails}>
                          <div className={style.catDetails}>
                            {catWiseItemDetails(index)?.map((cat) => {
                              return (
                                <div
                                  onMouseEnter={() => {
                                    setHoveredCategory({
                                      catName: cat.categoryDetailName,
                                      items: cat.items,
                                    });
                                  }}
                                  className={`${style.catNames} ${cat.categoryDetailName === hoveredCategory.catName ? style.activeCatName : ""}`}
                                >
                                  {cat.categoryDetailName}
                                </div>
                              );
                            })}
                          </div>
                          <div className={style.detailsNameContainer}>
                            {hoveredCategory &&
                              hoveredCategory?.items?.map((item) => {
                                return (
                                  <div
                                    className={style.detailsName}
                                    onClick={() => {
                                      setItemDetails((prev) => {
                                        const updated = [...prev];
                                        updated[index] = {
                                          ...updated[index],
                                          item_name: item.item_name,
                                          quantity: 1,
                                          unit_price: item.unit_price,
                                          total_price: item.unit_price * 1,
                                        };
                                        return updated;
                                      });
                                      setShowDropDown({
                                        div: "",
                                        index: "",
                                        show: false,
                                      });
                                    }}
                                  >
                                    {item.item_name}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}
                  </div>
                  <div className={style.inputDetails}>
                    <label id="serviceName">
                      <h5>Quantity</h5>
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                      className={style.inputBox}
                      placeholder="Enter Service Name"
                    />
                  </div>
                  <div className={style.inputDetails}>
                    <label id="serviceName">
                      <h5>Unit Price</h5>
                    </label>
                    <input
                      type="number"
                      name="unit_price"
                      value={item.unit_price}
                      readOnly
                      className={style.inputBox}
                      placeholder="Enter Service Name"
                    />
                  </div>
                  <div className={style.inputDetails}>
                    <label id="serviceName">
                      <h5>Sub Total</h5>
                    </label>
                    <input
                      type="text"
                      className={style.inputBox}
                      value={item.total_price || 0}
                      placeholder="Enter Service Name"
                      readOnly
                    />
                  </div>
                </div>
                {itemIndex === index && (
                  <div className={style.errorDetails}>
                    Please fill the details completely
                  </div>
                )}
              </div>
              <div className={style.trashIcon}>
                <Trash2 color="red" onClick={() => handleDelete(index)} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.footer}>
        <div className={style.itemBtns}>
          <button className={style.addBtn} onClick={() => addItem()}>
            Add
          </button>

          <button
            className={`${style.addBtn} ${!isFormDirty || itemIndex ? style.disabled : ""}`}
            disabled={!isFormDirty || itemIndex}
            onClick={() => saveItems()}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
