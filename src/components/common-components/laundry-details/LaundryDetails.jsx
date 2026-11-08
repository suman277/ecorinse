import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from "motion/react";
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
          {items.map((item, index) => {
            return (
              <motion.div
                key={index + item.type}
                className={style.priceDetails}
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: `0.${index}`,
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                <motion.div
                  key={index + item.type}
                  initial={{
                    opacity: 0,
                    y: -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: `0.${index}`,
                    duration: 1,
                    ease: "easeIn",
                  }}
                  className={style.itemType}
                >
                  {item.type}
                </motion.div>
                <motion.div
                  key={index + item.type}
                  initial={{
                    opacity: 0,
                    y: -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: `0.${index}`,
                    duration: 1,
                    ease: "easeIn",
                  }}
                  className={style.itemCost}
                >
                  {item.price}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LaundryDetails;
