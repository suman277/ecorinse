import React from "react";
import style from "./Items.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../../redux/template/templateSlice";

const Items = ({
  item,
  templateId,
  stepId,
  sectionId,
  itemId,
  id,
  setShowModal,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={style.itemDetails} key={id}>
      <div className={style.leftContainer}>{item?.item_name}</div>
      <div className={style.rightContainer}>
        <div className={style.itemdataDetails}>
          <div className={style.unit}>{item?.item_unit}</div>
          <div className={style.price}>₹{item?.item_price}</div>
        </div>
        <div
          className={style.editBtn}
          onClick={() =>
            setShowModal({
              stepId: stepId,
              templateId: templateId,
              sectionId: sectionId,
              item: item,
              isOpen: true,
            })
          }
        >
          Edit
        </div>
        <div
          className={style.deleteBtn}
          onClick={() => {
            dispatch(
              deleteItem({
                templateId: templateId,
                stepId: stepId,
                sectionId: sectionId,
                itemId: itemId,
              }),
            );
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default Items;
