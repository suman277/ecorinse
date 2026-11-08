import style from "./HomePage.module.css";
import { motion } from "motion/react";
import Folding from "../../assets/images/homepage/Folding.png";
import GreenLeave from "../../assets/images/background/GreenLeave.png";
import DarkBlueBackGround from "../../assets/images/background/DarkBlueBackGround.png";
import Schedule from "../../assets/images/background/Schedule.png";
import { lazy } from "react";
import { useNavigate } from "react-router-dom";
import {
  LeafyGreenIcon,
  MoveRight,
  TagPlus,
  Van,
  StarCheck,
} from "lucide-react";
import {
  infoGraphicDetails,
  StatsDetails,
  ProcessDetails,
} from "./HomePageUtils";
const Review = lazy(() => import("../review/Review.jsx"));
const Feature = lazy(() => import("../common-components/feature/Feature.jsx"));
const ServiceCard = lazy(
  () => import("../common-components/services/ServiceCard.jsx"),
);

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className={style.mainContainer}>
      <section className={style.hero}>
        <motion.div
          className={style.heroContent}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <motion.div
            className={style.heroTag}
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 1,
              delay: 0.2,
            }}
          >
            <LeafyGreenIcon
              fill="green"
              size={"1rem"}
              style={{ alignItems: "center" }}
            />
            <div>ECO CARE FOR EVERY WEAR</div>
          </motion.div>
          <div className={style.tagLine}>
            <motion.div
              className={style.topHeader}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 1,
                delay: 0.1,
              }}
            >
              <span>Laundry,</span>
            </motion.div>
            <motion.div
              className={style.midHeader}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 1,
                delay: 0.15,
              }}
            >
              handled with care.
            </motion.div>
          </div>
          <motion.div
            className={style.baseHeader}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 1,
              delay: 0.15,
            }}
          >
            Professional laundry and fabric care , made effortless with
            convenient pickup and delivery{" "}
          </motion.div>
          <div className={style.quickAccessButtons}>
            <motion.button
              className={style.btnDiv}
              initial={{
                opacity: 0,
                y: -50,
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 1,
                delay: 0.25,
              }}
              onClick={() => navigate("/create-orders")}
            >
              Schedule A Pickup <MoveRight />
            </motion.button>
            <motion.button
              className={style.exploreBtnDiv}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              transition={{
                ease: "easeIn",
                duration: 1,
                delay: 0.25,
              }}
              onClick={() => navigate("/our-services")}
            >
              Explore Services
            </motion.button>
          </div>
          <div className={style.hospitality}>
            <motion.div
              className={style.iconDetails}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 1,
                delay: 0.1,
              }}
            >
              <TagPlus fill="#498B36" />
              <div>Professional Care</div>
            </motion.div>
            <motion.div
              className={style.iconDetails}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 1,
                delay: 0.2,
              }}
            >
              <Van fill="#498B36" />
              <div>Free Pickup and Delivery</div>
            </motion.div>
            <motion.div
              className={style.iconDetails}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 1,
                delay: 0.3,
              }}
            >
              <div className={style.iconWrapper}>
                <StarCheck fill="#498B36" />
              </div>
              <div>Trusted by Customers</div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className={style.serviceSection}>
        <ServiceCard />
      </section>
      <section className={style.quickGlimpse}>
        <div className={style.glimpseContainer}>
          <motion.div
            className={style.imageContainer}
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 1,
            }}
          >
            <img src={Folding} loading="lazy" alt="Folding Image" />
          </motion.div>
          <div className={style.detailContainer}>
            <div className={style.detailTag}>ABOUT ECORINSE</div>
            <motion.div
              className={style.heading}
              initial={{
                opacity: 0,
                x: 100,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 1,
              }}
            >
              Better care for the clothes{" "}
              <span className={style.specialText}>you live in.</span>
            </motion.div>
            <motion.div
              className={style.glimpseSubText}
              initial={{
                opacity: 0,
                x: 100,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 1,
                delay: 0.2,
              }}
            >
              We Combine professional care, modern technology and convenient
              pickup & delivery to keep your clothes fresh and long-lasting.
            </motion.div>
            <div className={style.infographicContainer}>
              {infoGraphicDetails.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    className={style.infoDetails}
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      ease: "easeIn",
                      duration: 1,
                      delay: `0.${index}`,
                    }}
                  >
                    <div className={style.infoIconDetails}>
                      <Icon color="white" size={"1.5rem"} />
                    </div>
                    <div className={style.details}>
                      <div className={style.infoHeading}>{info.heading}</div>
                      <div className={style.infoSubHeading}>{info.detail}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <motion.section className={style.chooseEcorinse}>
        <Feature
          topHeading={"OUR ADVANTAGES"}
          header="Why Choose EcoRinse?"
          subHeader={
            "More than laundry, we deliver care, quality, convenience."
          }
          details={ProcessDetails}
          imgSrc={GreenLeave}
          topHeadingColour={"#091644"}
          overlayColor="rgba(255, 255, 255, 0.55)"
          headingColor="#0F2E54"
          logoColor="#168A70"
          isIconInCircle={true}
          size={"2rem"}
          stroke={"0.15rem"}
          borderTop={true}
        />
      </motion.section>
      <motion.section className={style.howItWorksContiner}>
        <Feature
          header="Our Impact"
          subHeader={"Trusted by many"}
          subHeadingColour="white"
          details={StatsDetails}
          imgSrc={DarkBlueBackGround}
          topHeadingColour={"#091644"}
          overlayColor="rgba(255, 255, 255, 0.55)"
          headingColor="White"
          logoColor="#168A70"
          size={"2rem"}
          stroke={"0.15rem"}
        />
      </motion.section>
      <section className={style.reviewSection}>
        <Review />
      </section>
      <section className={style.schdulePickUp}>
        <div className={style.pickupImg}>
          <motion.img
            src={Schedule}
            loading="lazy"
            decoding="async"
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 1,
            }}
          />
        </div>
        <div className={style.overlay}></div>
        <div className={style.scheduleContent}>
          <motion.div
            className={style.content}
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 1.2,
              delay: 0.2,
            }}
          >
            <motion.div
              className={style.contentTag}
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 1.2,
              }}
            >
              READY FOR FRESH CLOTH
            </motion.div>
            <motion.div
              className={style.scheduleHeader}
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 1.4,
              }}
            >
              Schedule Your Pickup Today
            </motion.div>
            <motion.div
              className={style.scheduleSubHeader}
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 1.2,
              }}
            >
              Experience professional laundry care at your doorstep
            </motion.div>
          </motion.div>
          <div className={style.pickupBtn}>
            {" "}
            <button
              className={style.scheduleBtn}
              onClick={() => navigate("/create-orders")}
            >
              Schedule A Pickup <MoveRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
