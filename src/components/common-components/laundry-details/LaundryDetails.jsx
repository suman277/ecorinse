import React, { useState } from "react";
import { useEffect } from "react";
import style from "./Laundry.module.css";
import { categories, LaundryPricing } from "../../../utils/UtilsData";

const LaundryDetails = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [items, setItems] = useState(LaundryPricing[1]);
  const handleClick = (catId) => {
    setSelectedId(catId);
  };
  useEffect(() => {
    setItems(LaundryPricing[selectedId]);
  }, [selectedId]);
  return (
    <div className={style.mainContainer}>
      <div className={style.subMainWrapper}>
        <div className={style.heading}>Laundry Pricing (RS)</div>
        <div className={style.bar}></div>
        <div className={style.categoryOptions}>
          <div className={style.categoryBtnsWrapper}>
            {categories.map((category) => {
              return (
                <button
                  onClick={() => handleClick(category.id)}
                  className={`${style.categoryBtns} ${selectedId === category.id ? style.btnBackground : ""}`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className={style.categoryDetails}>
          {items.map((item) => {
            return (
              <div className={style.priceDetails}>
                <div className={style.itemType}>{item.type}</div>
                <div className={style.itemCost}>{item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LaundryDetails;
