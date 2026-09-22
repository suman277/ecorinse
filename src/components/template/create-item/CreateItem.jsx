import React from "react";
import style from "./CreateItem.module.css";
import { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../../../redux/template/templateSlice";
import { retry } from "@reduxjs/toolkit/query";
export const CreateItem = ({ edit, setShowModal, showModal }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (showModal?.item) {
      setitemDetails(showModal?.item);
    }
  }, [showModal.item]);
  const [item, setitemDetails] = useState({
    item_name: "",
    item_unit: "",
    item_price: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setitemDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className={style.addItem}>
      <div>{edit ? "Edit Item" : "Add Item"}</div>
      <div className={style.opsItem}>
        <div className={style.itemNameContainer}>
          <h5>Item Name</h5>
          <input
            className={style.itemName}
            name="item_name"
            value={item.item_name}
            placeholder="e.g. Shirt"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className={style.otherItems}>
          <div className={style.unit}>
            <h5>Unit</h5>
            <input
              type="string"
              className={style.itemName}
              name="item_unit"
              value={item.item_unit}
              placeholder="Piece"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className={style.unitPrice}>
            <h5>Unit Price (₹)</h5>
            <input
              type="number"
              className={style.itemName}
              name="item_price"
              value={item.item_price}
              placeholder="Unit Price"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
        </div>
      </div>
      <div className={style.itemBtn}>
        <button className={style.cancel} onClick={() => setShowModal(false)}>
          Cancel
        </button>
        <button
          className={`${style.addItembtn} ${style.disabled}`}
          disabled={Object.values(item).some(
            (value) => typeof value === "string" && value.trim() === "",
          )}
          onClick={() => {
            showModal?.item
              ? dispatch(
                  updateItem({
                    templateId: showModal.templateId,
                    stepId: showModal.stepId,
                    sectionId: showModal.sectionId,
                    item: item,
                  }),
                )
              : dispatch(
                  addItem({
                    templateId: showModal.templateId,
                    stepId: showModal.stepId,
                    sectionId: showModal.sectionId,
                    newItem: {
                      ...item,
                      id: uuidV4(),
                    },
                  }),
                );
            setShowModal(false);
          }}
        >
          {showModal?.item ? "Edit" : "Save"}
        </button>
      </div>
    </div>
  );
};
