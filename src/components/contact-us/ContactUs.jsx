import React, { useState } from "react";
import style from "./Contact.module.css";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import Feature from "../common-components/feature/Feature";
import {
  showContactDetails,
  askedQuestions,
  supportHours,
  waysToReachUs,
  ContactUsTagLine,
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
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.1,
          duration: 1,
          ease: "easeIn",
        }}
        className={style.heroContainer}
      >
        <div className={style.heroOverlay}></div>
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
          className={style.heroContent}
        >
          <motion.h5
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 1,
              ease: "easeIn",
            }}
            className={style.contTag}
          >
            Contact Us
          </motion.h5>
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 1,
              ease: "easeIn",
            }}
            className={style.introHeader}
          >
            <p className={style.topHeading}>Let's make </p>
            <p>
              Laundry <span style={{ color: "#498B36" }}>Effortless.</span>
            </p>
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeIn",
            }}
            className={style.heroLine}
          >
            Questions, booking, or support - we're here to help
          </motion.p>
          <div className={style.aboutTagLines}>
            {ContactUsTagLine.map((tag, index) => {
              const Icon = tag.icon;
              return (
                <motion.div
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
                  className={style.contentWrapper}
                >
                  <div>
                    <Icon size={"2rem"} color="#498B36" />
                  </div>
                  <div className={style.textWrapper}>
                    <motion.span
                      transition={{
                        delay: `0.${index}`,
                        duration: 1,
                        ease: "easeIn",
                      }}
                      style={{
                        fontSize: "large",
                        color: "#0b1b2b",
                        fontWeight: "bold",
                      }}
                    >
                      {tag.heading}
                    </motion.span>
                    <motion.span
                      transition={{
                        delay: `0.${index}`,
                        duration: 1,
                        ease: "easeIn",
                      }}
                      style={{
                        fontSize: "small",
                        color: "#0b1b2b",
                        fontWeight: "bold",
                      }}
                    >
                      {tag.subHeading}
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
      <div className={style.getFormDetail}>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
          className={style.contentDetails}
        >
          <span className={style.heading}>Let's Connect</span>
          <div className={style.bar}></div>
          <span className={style.heroDetails}>
            Have questions or want to explore opportunities with Eco Rinse?
            Reach out through the form or connect via the contact options.
          </span>
        </motion.div>
        <div className={style.formWorks}>
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 1,
              ease: "easeIn",
            }}
            className={style.inputFromWrapper}
          >
            <form
              className={style.formstyle}
              style={{
                gap: Object.keys(errors).length > 0 ? "1rem" : "2rem",
              }}
              action="https://formsubmit.co/ecorinselaundry@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.1,
                  duration: 1,
                  ease: "easeIn",
                }}
                className={style.contentInForm}
              >
                <div className={style.inTouchTag}>GET IN TOUCH</div>
                <div className={style.messageText}>Send us a message </div>
                <div className={style.textMap}>
                  Fill out the form and we'll get back to you as soon as
                  possible
                </div>
              </motion.div>
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
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className={style.contactWays}
          >
            {showContactDetails.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  href={contact.path}
                  target="_blank"
                  className={style.contactWrapper}
                >
                  <div className={style.iconWrapper}>
                    <div style={{ textAlign: "center" }}>
                      <Icon
                        color={"#488b36"}
                        strokeWidth={"3"}
                        size={"2rem"}
                        className={style.iconDiv}
                      />
                    </div>
                    <div className={style.details}>
                      <div className={style.contactHeading}>
                        {contact.heading}
                      </div>
                      <div className={style.contactSubHeading}>
                        {contact.detail}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className={style.mapWrapper}>
        <div className={style.mapContainer}>
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 1,
              ease: "easeIn",
            }}
            className={style.mapItemContainer}
          >
            <motion.h4
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 1,
                ease: "easeIn",
              }}
              className={style.locationHeader}
            >
              OUR LOCATION
            </motion.h4>
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: "easeIn",
              }}
              className={style.locationHeading}
            >
              Find Our Store
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 1,
                ease: "easeIn",
              }}
              color={style.subLocationHeading}
            >
              Visit our store or use the map to get directions to our location.
              We are conveniently located in the heart of Bengaluru.
            </motion.div>
            <motion.button
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 1,
                ease: "easeIn",
              }}
              className={style.openInMap}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Eco+Rinse+Laundry/@13.0200617,77.6747846,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae110b73219ed3:0x304fe9cd02c1c646!8m2!3d13.0200617!4d77.6747846!16s%2Fg%2F11zcr57kzc?entry=tts&g_ep=EgoyMDI2MDcxNS4wIPu8ASoASAFQAw%3D%3D&skid=b42986d7-18d7-4e7f-925e-2b1ebddabc78",
                  "_blank",
                )
              }
            >
              <div>
                <MapPin color="white" />
              </div>
              <strong>Open in Maps</strong>
            </motion.button>
          </motion.div>
          <motion.iframe
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 1,
              ease: "easeIn",
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5056.455354537622!2d77.67220967605093!3d13.020066913811904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110b73219ed3%3A0x304fe9cd02c1c646!2sEco%20Rinse%20Laundry!5e1!3m2!1sen!2sin!4v1784620776332!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            title="Eco Rinse Laundry Location"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></motion.iframe>
        </div>
      </div>
      <div className={style.askedQuestionsContainer}>
        <motion.span
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
            duration: 1,
            ease: "easeIn",
          }}
          className={style.heading}
        >
          Frquently Asked Questions
        </motion.span>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
            duration: 1,
            ease: "easeIn",
          }}
          className={style.bar}
        ></motion.div>
        <div className={style.askedContainer}>
          {askedQuestions.map((question, index) => {
            return (
              <motion.div
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
                className={style.askedWrapper}
                style={{ animationDelay: `0.${index}s` }}
              >
                <motion.div
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
                  className={style.askedHeading}
                  style={{ animationDelay: `0.${index}+1s` }}
                >
                  {question.heading}
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.1,
                    duration: 1,
                    ease: "easeIn",
                  }}
                  className={style.askedDetail}
                  style={{ animationDelay: `0.${index}+1s` }}
                >
                  {question.detail}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <motion.div
        className={style.supportHours}
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeIn",
          duration: 2,
          delay: 0.3,
        }}
      >
        <Feature
          header={"Support Hours"}
          headingColor={"#0f2e54"}
          details={supportHours}
          borderTop={true}
          size={30}
          logoColor={"#488b36"}
          topHeadingColour={"white"}
          includeBorderRadius={true}
          minWidth={"15rem"}
        />
      </motion.div>
      <motion.div
        className={style.reachUsContainer}
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeIn",
          duration: 2,
          delay: 0.3,
        }}
      >
        <Feature
          header={"Multiple Ways To Reach Us"}
          details={waysToReachUs}
          borderTop={true}
          size={"3rem"}
          logoColor={"#488b36"}
          includeBorderRadius={true}
          minWidth={"15rem"}
        />
      </motion.div>
    </div>
  );
};

export default ContactUs;
