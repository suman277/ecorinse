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
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    contactNo: "",
    email: "",
    message: "",
  });
  const validateForm = (form) => {
    const errorObj = {};

    if (!form.name?.trim()) {
      errorObj.name = "Please enter your name";
    }

    if (!form.contactNo?.trim()) {
      errorObj.contactNo = "Please enter your contact number";
    } else if (!/^\d{10}$/.test(form.contactNo)) {
      errorObj.contactNo = "Invalid contact number";
    }

    if (!form.email?.trim()) {
      errorObj.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errorObj.email = "Please enter a valid email";
    }

    if (!form.message?.trim()) {
      errorObj.message = "Please enter a message";
    }

    return errorObj;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(form);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setErrors({});
    e.target.submit();
  };
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
        <span className={style.aboutHeading}>Contact Us</span>
        <p className={style.heroDetail}>
          Be a part of India's fastest growing dry-cleaning brand. Low
          investment, high return, full support.
        </p>
      </div>
      <div className={style.getFormDetail}>
        <div className={style.contentDetails}>
          <span className={style.heading}>Let's Connect</span>
          <div className={style.bar}></div>
          <span className={style.heroDetails}>
            Have questions or want to explore opportunities with Eco Rinse?
            Reach out through the form or connect via the contact options.
          </span>
        </div>
        <div className={style.formWorks}>
          <div className={style.inputFromWrapper}>
            <form
              className={style.formstyle}
              style={{
                gap: Object.keys(errors).length > 0 ? "1rem" : "2rem",
              }}
              action="https://formsubmit.co/ecorinselaundry@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input
                className={style.inputTextField}
                type="text"
                placeholder="Enter Name"
                name="name"
                value={form.name}
                onChange={(e) => handleChange(e)}
              />
              {errors.name && (
                <span className={style.error}>{errors.name}</span>
              )}
              <input
                className={style.inputTextField}
                type="tel"
                placeholder="Enter Phone Number"
                name="contactNo"
                value={form.contactNo}
                onChange={(e) => handleChange(e)}
              />
              {errors.contactNo && (
                <span className={style.error}>{errors.contactNo}</span>
              )}
              <input
                className={style.inputTextField}
                type="email"
                placeholder="Enter Email"
                name="email"
                value={form.email}
                onChange={(e) => handleChange(e)}
              />
              {errors.email && (
                <span className={style.error}>{errors.email}</span>
              )}
              <input
                className={style.inputTextField}
                type="text"
                placeholder="Enter Message"
                name="message"
                value={form.message}
                onChange={(e) => handleChange(e)}
              />
              {errors.message && (
                <span className={style.error}>{errors.message}</span>
              )}
              <button type="submit" className={style.btnClass}>
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className={style.contactWays}>
            {showContactDetails.map((contact) => {
              const Icon = contact.icon;
              return (
                <a href={contact.path} target="_blank" className={style.contactWrapper}>
                  <div>
                    <Icon color={"#488b36"} strokeWidth={"3"} />
                  </div>
                  <div>{contact.heading}</div>
                  <div>{contact.detail}</div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5056.455354537622!2d77.67220967605093!3d13.020066913811904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110b73219ed3%3A0x304fe9cd02c1c646!2sEco%20Rinse%20Laundry!5e1!3m2!1sen!2sin!4v1784620776332!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          title="Eco Rinse Laundry Location"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
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
