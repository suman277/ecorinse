import React, { useState } from "react";
import Contact from "../../assets/images/contact-us/Contact.jpg";
import style from "./Contact.module.css";
import { Check } from "lucide-react";
import Feature from "../common-components/feature/Feature";
import {
  showContactDetails,
  askedQuestions,
  supportHours,
  waysToReachUs,
} from "../../utils/UtilsData";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    contactNo: "",
    city: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.heroContainer}>
        <h1>Contact Us</h1>
        <span className={style.heroDetail}>
          Be a part of India's fastest growing dry-cleaning brand. Low
          investment, high return, full support.
        </span>
      </div>
      <div className={style.getFormDetail}>
        <div className={style.contentDetails}>
          <span className={style.heading}>Let's Connect</span>
          <div className={style.bar}></div>
          <span className={style.heroDetails}>
            Have questions or want to explore opportunities with NeatnClean?
            Reach out through the form or connect via the contact options.
          </span>
        </div>
        <div className={style.formWorks}>
          <div className={style.inputFromWrapper}>
            <input
              className={style.inputTextField}
              type="text"
              placeholder="Enter Name"
              name="name"
              value={form.name}
              onChange={(e) => handleChange(e)}
            />
            <input
              className={style.inputTextField}
              type="number"
              placeholder="Enter Phone Number"
              name="contactNo"
              value={form.contactNo}
              onChange={(e) => handleChange(e)}
            />
            <input
              className={style.inputTextField}
              type="text"
              placeholder="Enter City/State"
              name="city"
              value={form.city}
              onChange={(e) => handleChange(e)}
            />
            <button className={style.btnClass}>SEND MESSAGE</button>
          </div>
          <div className={style.contactWays}>
            {showContactDetails.map((contact) => {
              const Icon = contact.icon;
              return (
                <div className={style.contactWrapper}>
                  <div>
                    <Icon color={"#488b36"} strokeWidth={"3"} />
                  </div>
                  <div>{contact.heading}</div>
                  <div>{contact.detail}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.askedQuestionsContainer}>
        <span className={style.heading}>Frquently Asked Questions</span>
                <div className={style.bar}></div>
        <div className={style.askedContainer}>
          {askedQuestions.map((question) => {
            return (
              <div className={style.askedWrapper}>
                <div className={style.askedHeading}>{question.heading}</div>
                <div className={style.askedDetail}>{question.detail}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.supportHours}>
        <Feature
          header={"Support Hours"}
          details={supportHours}
          borderTop={true}
          size={30}
          headingColor={"white"}
          logoColor={"#488b36"}
          topHeadingColour={"white"}
          includeBorderRadius={true}
          minWidth={"15rem"}
        />
      </div>
      <div className={style.reachUsContainer}>
        <Feature
          header={"Multiple Ways To Reach Us"}
          details={waysToReachUs}
          borderTop={true}
          size={30}
          logoColor={"#488b36"}
          includeBorderRadius={true}
          minWidth={"15rem"}
        />
      </div>
    </div>
  );
};

export default ContactUs;
