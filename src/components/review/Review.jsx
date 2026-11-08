import React, { useEffect, useState, useRef } from "react";
import { reviews } from "../home/HomePageUtils";
import Reviews from "../../assets/images/background/Reviews.png";
import style from "./Review.module.css";
import { StarIcon } from "lucide-react";

const Review = () => {
  const [index, setIndex] = useState(1);
  const reviewLine = useRef();
  useEffect(() => {
    if (reviews.length <= 1) {
      return;
    }
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
      if (reviewLine.current) {
        reviewLine.current.classList.remove(style.reviewOnChange);
        void reviewLine.current.offsetWidth;
        reviewLine.current.classList.add(style.reviewOnChange);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews]);
  const currentReview = reviews[index];
  return (
    <div className={style.mainContainer}>
      <div className={style.imgContainer}>
        <img src={Reviews} loading="lazy" decoding="async" />
      </div>
      <div className={style.overlay}></div>
      <div className={style.reviewsContainer}>
        <div className={style.tagline}>WHAT OUR CUSTOMERS SAY</div>
        <span className={style.reviewHeading}>
          Loved by Our <span className={style.highLightText}>Customers</span>
        </span>
        <div className={style.reviewLines} ref={reviewLine}>
          <div key={index} className={style.reviewLine}>
            <strong>"</strong> {currentReview?.review} <strong>"</strong>
          </div>
          <div className={style.starItems}>
            {Array.from({ length: currentReview.star }, (_, index) => (
              <StarIcon fill="gold" key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
