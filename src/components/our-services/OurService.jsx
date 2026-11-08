import { useEffect, useRef, useState } from "react";
import ServiceCard from "../common-components/services/ServiceCard";
import style from "./OurService.module.css";
import { motion } from "motion/react";
import GreenLeaves from "../../assets/images/background/GreenLeaves.png";
import Feature from "../common-components/feature/Feature";
import { MoveRight } from "lucide-react";
import {
  LaundryProcess,
  chooseNeatClean,
  ServiceExcellence,
  ServiceCategories,
} from "../../utils/UtilsData";
import WashingProcess from "../../assets/images/services/WashingProcess.png";
import { Check } from "lucide-react";
import LaundryDetails from "../common-components/laundry-details/LaundryDetails";
import { ServiceTagLine } from "../../utils/UtilsData";

const OurService = () => {
  const [width, setWidth] = useState({});
  const wrapperRef = useRef([]);
  const processContentRef = useRef();

  useEffect(() => {
    const resizeOnChange = () => {
      const container = processContentRef.current;
      const wrappers = wrapperRef.current;

      if (!container || wrappers.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const first = wrappers[0]?.getBoundingClientRect();
      const last = wrappers[wrappers.length - 1]?.getBoundingClientRect();

      if (!first || !last) return;

      setWidth({
        leftMargin: first.left + first.width / 2 - containerRect.left,

        rightMargin: containerRect.right - (last.left + last.width / 2),
      });
    };
    resizeOnChange();
    window.addEventListener("resize", resizeOnChange);
    return () => {
      window.removeEventListener("resize", resizeOnChange);
    };
  }, []);
  return (
    <>
      <div className={style.serviceDetails}>
        <div className={style.serviceHero}>
          <div className={style.imageServiceHero}>
            <motion.img
              src={GreenLeaves}
              loading="lazy"
              decoding="async"
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
            />
          </div>
          <div className={style.overlay}></div>
          <div className={style.heroContent}>
            <motion.div
              className={style.heroHeader}
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
            >
              OUR LAUNDRY SERVICE
            </motion.div>
            <motion.div
              className={style.mainHeader}
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
            >
              From wash to <span className={style.wow}>wow.</span>
            </motion.div>
            <motion.div
              className={style.detailHeader}
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
            >
              Professional laundry and fabric care for your everyday wear and
              special garments. Clean Clothes, happier days
            </motion.div>
            <div className={style.quickAccessButtons}>
              <motion.button
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
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.1,
                    ease: "easeOut",
                  },
                }}
                className={style.btnDiv}
                onClick={() => navigate("/create-order")}
              >
                Schedule A Pickup <MoveRight />
              </motion.button>
              <motion.button
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
                whileHover={{
                  y: -5,
                  transition: {
                    ease: "easeIn",
                    duration: 0.2,
                  },
                }}
                className={style.exploreBtnDiv}
                onClick={() => navigate("/our-services")}
              >
                Explore Services
              </motion.button>
            </div>
            <motion.div
              className={style.aboutTagLines}
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
            >
              {ServiceTagLine.map((tag, index) => {
                const Icon = tag.icon;
                return (
                  <motion.div
                    className={style.contentWrapper}
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
                    style={{ animationDelay: `0.${index}+1s` }}
                  >
                    <div>
                      <Icon size={"2rem"} color="#498B36" />
                    </div>
                    <div
                      className={style.textWrapper}
                      style={{ animationDelay: `0.${index}+1s` }}
                    >
                      <span
                        style={{
                          fontSize: "large",
                          color: "#0b1b2b",
                          fontWeight: "bold",
                          animationDelay: `0.${index}+1s`,
                        }}
                      >
                        {tag.heading}
                      </span>
                      <span
                        style={{
                          fontSize: "small",
                          color: "#0b1b2b",
                          fontWeight: "bold",
                          animationDelay: `0.${index}+1s`,
                        }}
                      >
                        {tag.subHeading}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      <div className={style.serviceDetailSection}>
        <ServiceCard
          heading={"From Wash to Wow!!"}
          subHeading={"Our Laundry Services"}
        />
      </div>
      <div className={style.theLaundryProcess}>
        <div className={style.imgLaundryProcess}>
          <img
            src={WashingProcess}
            alt="Washing Procss"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={style.processOverlay}></div>
        <div className={style.Washcontent}>
          <div className={style.washHeading}>OUR PROCESS</div>
          <div className={style.midHeading}>
            Every garment gets the right care
          </div>
          <div className={style.lastHeading}>
            A detailed and professional cleaning process for the best result
          </div>
          <div className={style.washProcessContent}>
            <div className={style.processContent} ref={processContentRef}>
              <div
                className={style.whiteBar}
                style={{
                  left: `${width.leftMargin}px`,
                  right: `${width.rightMargin}px`,
                }}
              ></div>
              {LaundryProcess?.map((process, index) => {
                const Icon = process?.icon;
                return (
                  <motion.div
                    className={style.processWrapper}
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
                  >
                    <div
                      className={style.iconWrapper}
                      style={{ animationDelay: `0.${index}+1s` }}
                      ref={(elem) => (wrapperRef.current[index] = elem)}
                    >
                      <Icon size={"2rem"} color="green" />
                    </div>
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
                        delay: 0.2 * index + 0.5,
                        duration: 1,
                        ease: "easeIn",
                      }}
                      className={style.indexWrapper}
                    >
                      0{index + 1}
                    </motion.div>
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
                        delay: 0.2 * index + 0.5,
                        duration: 1,
                        ease: "easeIn",
                      }}
                      className={style.indexWrapper}
                    >
                      {process.heading}
                    </motion.div>
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
                        delay: 0.2 * index + 0.5,
                        duration: 1,
                        ease: "easeIn",
                      }}
                      className={style.indexWrapper}
                    >
                      {process.detail}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className={style.chooseOurService}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeIn",
        }}
      >
        <Feature
          header={"Why Choose Our Services?"}
          details={chooseNeatClean}
          isIconInCircle={false}
          borderTop={true}
          size={30}
          logoColor={"#488b36"}
        />
      </motion.div>
      <div className={style.serviceCategories}>
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
            ease: "easeIn",
            duration: 1,
          }}
          className={style.serviceHeader}
        >
          Service Categories
        </motion.div>
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
            ease: "easeIn",
            duration: 1,
            delay: 0.2,
          }}
          className={style.serviceSubHeader}
        >
          Find the right service for your clothes.
        </motion.div>
        <div className={style.serviceCategoryWrapper}>
          {ServiceCategories.map((category, index) => {
            const img = category.image;
            return (
              <motion.div
                className={style.categoryWrapper}
                key={index}
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  ease: "easeIn",
                  duration: 1,
                  delay: `0.${index}`,
                }}
              >
                <div className={style.imageWrapper}>
                  <img src={img}></img>
                </div>
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    ease: "easeIn",
                    duration: 1,
                    delay: `0.${index}`,
                  }}
                  className={style.categoryHeading}
                >
                  {category.heading}
                </motion.div>
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    ease: "easeIn",
                    duration: 1,
                    delay: `0.${index}`,
                  }}
                  className={style.categoryService}
                >
                  {category.services.map((service) => {
                    return (
                      <>
                        <motion.div className={style.detailCheck}
                                          key={index}
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    ease: "easeIn",
                    duration: 1,
                    delay: `0.${index}`,
                  }}>
                          <Check
                            className={style.detailIcon}
                            color="#498B36"
                            strokeWidth={"5"}
                          />
                          {service}
                        </motion.div>
                      </>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className={style.laundryDetails} id="laundryDetails">
        <LaundryDetails />
      </div>
    </>
  );
};

export default OurService;
