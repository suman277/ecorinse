import React, { lazy, Suspense } from "react";
import style from "./AboutUs.module.css";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import AboutUs1 from "../../assets/images/about-us/AboutUs.jpeg";
import CommunityImg from "../../assets/images/about-us/CommunityImg.png";
import TeamGoal from "../../assets/images/about-us/TeamGoal.jpg";
import AboutUs from "../../assets/images/about-us/AboutUs.png";
import AboutUsHero from "../../assets/images/about-us/AboutUsHero.png";
import { ChevronRight } from "lucide-react";
import { AboutUsTagLine, whyWeStand } from "../../utils/UtilsData";
import { StatsDetails } from "../home/HomePageUtils";
const Feature = lazy(() => import("../common-components/feature/Feature"));
const Loading = lazy(() => import("../../components/loader/Loading"));

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className={style.mainContainer}>
      <div className={style.aboutContainer}>
        <div className={style.imgContainer}>
          <motion.img
            src={AboutUsHero}
            loading="lazy"
            decoding="async"
            initial={{
              opacity: 0,
              x: -50,
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
          />
        </div>
        <div className={style.overlay}></div>
        <div className={style.heroContent}>
          <div className={style.heroTag}>ABOUT ECORINSE</div>
          <motion.div
            className={style.heroContainer}
            initial={{
              opacity: 0,
              x: 50,
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
            <div className={style.heroWriting}>More then laundry.</div>
            <div className={style.heroWriting}>
              A <span className={style.highlightWrite}>cleaner, easier</span>{" "}
              life.
            </div>
          </motion.div>
          <motion.div
            className={style.heroPara}
            initial={{
              opacity: 0,
              x: 50,
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
            At Ecorinse, we comnbine professional care, modern technology and
            convenient pickup and delivery to keep youe clothes fresh, clean and
            long lasting
          </motion.div>
          <div className={style.tagDivs}>
            {AboutUsTagLine.map((tag, index) => {
              const Icon = tag.icon;
              return (
                <motion.div
                  className={style.tagContainer}
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
                  key={index}
                  style={{ animationDelay: `0.${index}s` }}
                >
                  <div className={style.tagIcon}>
                    <Icon color="green" size={"3rem"} />
                  </div>
                  <div className={style.tagHeading}>{tag.heading}</div>
                  <div className={style.subHeading}>{tag.subHeading}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.aboutHighlight}>
        <div className={style.aboutWrapper}>
          <div className={style.imageContainer}>
            <motion.img
              initial={{
                opacity: 0,
                x: -50,
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
              src={AboutUs1}
              alt="About Us"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={style.aboutContent}>
            <motion.div
              className={style.aboutTag}
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeIn",
              }}
            >
              OUR STORY
            </motion.div>
            <div>
              <motion.div
                className={style.aboutHeader}
                initial={{
                  opacity: 0,
                  x: 50,
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
                Laundry belongs in a{" "}
              </motion.div>
              <div className={style.aboutHeader} style={{ color: "green" }}>
                better tomorrow.
              </div>
            </div>
            <motion.div
              className={style.aboutDetail}
              initial={{
                opacity: 0,
                x: 50,
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
              An averge person spends thousands of hours in their life cleaning
              and managing clothes. We started EcoRinse with simple idea that
              take the load off your shoulders.
            </motion.div>
            <motion.div
              className={style.aboutDetail}
              initial={{
                opacity: 0,
                x: 50,
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
              With professional care, high-quality, detergents, modern equipment
              and a trained team, we make fabric care effortless, giving you
              back the time you deserve
            </motion.div>
            <div className={style.tagDivs}>
              {AboutUsTagLine.map((tag, index) => {
                const Icon = tag.icon;
                return (
                  <motion.div
                    className={style.tagContainer}
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
                    key={index}
                    style={{ animationDelay: `0.${index}s` }}
                  >
                    <div className={style.tagIcon}>
                      <Icon color="green" size={"3rem"} />
                    </div>
                    <div className={style.tagHeading}>{tag.heading}</div>
                    <div className={style.subHeading}>{tag.subHeading}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={style.teamGoals}>
        <div className={style.goalImage}>
          <motion.img
            initial={{
              opacity: 0,
              y: -50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            src={TeamGoal}
            loading="lazy"
            decoding="async"
          />
        </div>
        <motion.div
          className={style.goalContent}
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
        >
          <motion.div
            className={style.goalHeader}
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
          >
            Our Goals
          </motion.div>
          <div className={style.bar}></div>
          <motion.strong
            className={style.textColor}
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
          >
            Less time doing laundry. More time living life.
          </motion.strong>
          <p>
            We believe laundry shouldn't steal your hours or energy. Our mission
            is to make fabric care effortless,{" "}
            <motion.strong
              className={style.textColor}
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
            >
              giving you back the time you deserve!.
            </motion.strong>
          </p>
          <p>
            Every piece of clothing we handle gets expert attention — whether
            it's your go-to shirt or a delicate dress.{" "}
            <motion.strong
              className={style.textColor}
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
            >
              We care for it like it’s our own.
            </motion.strong>
          </p>
          <p>
            With smart processes, fast delivery, and a team that truly cares,
            <motion.strong
              className={style.textColor}
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
            >
              we’re reimagining laundry — to be faster, greener, and worry-free.
            </motion.strong>
          </p>
        </motion.div>
      </div>
      <motion.div
        className={style.standForDetails}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeIn",
        }}
      >
        <Suspense fallback={<Loading />}>
          <Feature
            header={"What We Stand For"}
            headingColor={"#0F2E54"}
            subHeader={"Our Core Values"}
            details={whyWeStand}
            borderTop={true}
            logoColor={"#488b36"}
            includeBorderRadius={true}
            stroke={"3"}
            size={"30"}
          />
        </Suspense>
      </motion.div>
      <motion.div
        className={style.standForDetails}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeIn",
        }}
      >
        <Suspense fallback={<Loading />}>
          <Feature
            header="Our Impact on community"
            subHeader={"Trusted by many"}
            subHeadingColour="white"
            details={StatsDetails}
            imgSrc={Aboutus}
            topHeadingColour={"#091644"}
            overlayColor="rgba(255, 255, 255, 0.55)"
            headingColor="White"
            logoColor="#168A70"
            size={"2rem"}
            stroke={"0.15rem"}
          />
        </Suspense>
      </motion.div>
      <div className={style.communityBlog}>
        <div className={style.communituImgContainer}>
          <motion.img
            src={CommunityImg}
            loading="lazy"
            decoding="async"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeIn",
            }}
          />
        </div>
        <div className={style.communityContent}>
          <motion.h1
            className={style.commHeading}
            initial={{
              opacity: 0,
              y: -50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeIn",
            }}
          >
            Our Community
          </motion.h1>
          <motion.p
            className={style.subComHeading}
            initial={{
              opacity: 0,
              y: -50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeIn",
            }}
          >
            Clean Clothes, Stronger Communities.
          </motion.p>
          <motion.p
            className={style.comSubText}
            initial={{
              opacity: 0,
              y: -50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 1,
              ease: "easeIn",
            }}
          >
            We collect local communities thorugh employment opportunities and
            sustainable practices. By reducing water consumption and using
            eco-friendly detergents, we aim to create a positive impact beyond
            laundry -- for people and for the environment
          </motion.p>
          <div>
            <motion.button
              className={style.commExp}
              initial={{
                opacity: 0,
                y: -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: "easeIn",
              }}
              onClick={() => navigate("/create-orders")}
            >
              Get Your Experience
              <ChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
