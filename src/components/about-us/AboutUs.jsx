import React from "react";
import style from "./AboutUs.module.css";
import AboutUs1 from "../../assets/images/about-us/AboutUs.jpeg";
import TeamGoal from "../../assets/images/about-us/TeamGoal.jpg";
import WidthFeature from "../common-components/width-feature/WidthFeature";
import Feature from "../common-components/feature/Feature";
import {
  aboutUsDetails,
  whyWeStand,
  AwardDetails,
  CommunityDetails,
} from "../../utils/UtilsData";

const AboutUs = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.aboutContainer}>
        <h1 className={style.aboutHeading}>About Us</h1>
        <p className={style.aboutText}>
          Be a part of India's fastest growing dry-cleaning brand. Low
          investment, high return, full support.
        </p>
      </div>
      <div className={style.aboutHighlight}>
        <div className={style.imageContainer}>
          <img src={AboutUs1} />
        </div>
        <div className={style.aboutContent}>
          <span className={style.contentHeading}>
            LAUNDRY BELONGS IN A LAUNDROMAT
          </span>
                  <div className={style.bar}></div>
          <p className={style.paraTag}>
            An average human spends between 12000 hours of their adult life in
            cleaning and managing their clothes. We have all grown up on a heavy
            dose of detergent commercials propagating the idea of ‘whiter the
            better’.{" "}
          </p>
          <p className={style.paraTag}>
            But none of these commercials talked about the hours of hard work
            required to get that blinding whiteness. Do the words ‘enzyme soak’,
            hot water cleaning’, ‘bluing’ ring a bell? How we wish maintaining
            our white clothes was easy as watching those commercials. With us,
            it is Easier!{" "}
          </p>
          <p className={style.paraTag}>
            We bring the best-in-class Laundry, Dry Cleaning and Home Cleaning
            Services at your doorstep! We operate a network of 17+ stores across
            13 cities, making it the Largest Laundry & Dry-Cleaning Chain in
            India. Our nearest store offers live laundry, steam ironing and
            dry-cleaning services, with free home pick & drop, and a promise to
            deliver your clothes in less than 24 hours*.
          </p>
        </div>
      </div>
      <div className={style.teamGoals}>
        <div className={style.goalImage}>
          <img src={TeamGoal} />
        </div>
        <div className={style.goalContent}>
          <h2 className={style.goalHeader}>Our Goals</h2>
          <div className={style.bar}></div>
          <strong className={style.textColor}>
            Less time doing laundry. More time living life.
          </strong>
          <p>
            We believe laundry shouldn't steal your hours or energy. Our mission
            is to make fabric care effortless,{" "}
            <strong className={style.textColor}>
              giving you back the time you deserve!.
            </strong>
          </p>
          <p>
            Every piece of clothing we handle gets expert attention — whether
            it's your go-to shirt or a delicate dress.{" "}
            <strong className={style.textColor}>
              We care for it like it’s our own.
            </strong>
          </p>
          <p>
            With smart processes, fast delivery, and a team that truly cares,
            <strong className={style.textColor}>
              we’re reimagining laundry — to be faster, greener, and worry-free.
            </strong>
          </p>
        </div>
      </div>
      <div className={style.aboutDetails}>
        <Feature
          headingColor={"white"}
          details={whyWeStand}
          borderTop={true}
          logoColor={"#488b36"}
          includeBorderRadius={true}
          stroke={"3"}
          size={"30"}
        />
      </div>
      <div className={style.standForDetails}>
        <Feature
          header={"What We Stand For"}
          headingColor={"white"}
          details={whyWeStand}
          borderTop={true}
          logoColor={"#488b36"}
          includeBorderRadius={true}
          stroke={"3"}
          size={"30"}
        />
      </div>
      <div className={style.recognition}>
        <Feature
          header={"Awards & Recognition"}
          details={AwardDetails}
          borderTop={true}
          logoColor={"#488b36"}
          includeBorderRadius={true}
          stroke={"3"}
          size={"30"}
        />
      </div>
      <div className={style.community}>
        <Feature
          header={"Our Community Impact"}
          details={CommunityDetails}
          headingColor={"white"}
          borderTop={true}
          logoColor={"#488b36"}
          includeBorderRadius={true}
          stroke={"3"}
          size={"30"}
        />
      </div>
    </div>
  );
};

export default AboutUs;
