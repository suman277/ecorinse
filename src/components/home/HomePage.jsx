import React from "react";
import style from "./HomePage.module.css";
import HomePageWM from "../../assets/images/homepage/HomePageWM.jpg";
import EcoRinse from "../../assets/images/homepage/EcoRinse.jpeg";
import InfoGraphic from "../../assets/images/homepage/Infographic2.png";
import MottoRightContainerImage from "../../assets/images/homepage/MottoRightContainerImage.png";
import { Star } from "lucide-react";
import {
  infoGraphicDetails,
  StatsDetails,
  ProcessDetails,
  MottoDetails,
  WhyChooseUsList,
} from "./HomePageUtils";
import ServiceCard from "../common-components/services/ServiceCard";
import Feature from "../common-components/feature/Feature";
import { chooseNeatClean, howItWorks } from "../../utils/UtilsData";

const HomePage = () => {
  return (
    <main className={style.mainContainer}>
      <section className={style.hero}>
        <img src={HomePageWM} className={style.heroImage} alt="EcoRinse" />
        <div className={style.heroContent}>
          <h1>Fast • Reliable • Trusted Laundry</h1>
          <p>We collect. We clean. We deliver.</p>
        </div>
      </section>
      <section className={style.introductionSection}>
        <div className={style.imageSection}>
          <img className={style.imageProp} src={EcoRinse} />
        </div>
        <div className={style.infoSection}>
          <p className={style.introHeader}>
            Welcome to <span className={style.brand}>EcoRinse Laundry</span>
          </p>
          <p className={style.subIntro}>
            India's Most Trusted Laundry & Dry Cleaning Service
          </p>
          <p className={style.introDetail}>
            At EcoRinse, we've revolutionized the way India does laundry. With
            over 10,000+ satisfied customers and 99.8% satisfaction rate, we
            bring professional-grade cleaning right to your doorstep.
          </p>
        </div>
      </section>
      <section className={style.serviceSection}>
        <p className={style.headerText}>Complete Cleaning Solutions</p>
        <div className={style.bar}></div>
        <p className={style.paraTag}>
          From everyday laundry to specialized cleaning services, we{" "}
        </p>
        <p className={style.paraTag}>
          handle it all with professional expertise and care.
        </p>
        <div className={style.InfoGraphicContainer}>
          <img className={style.imgBackground} src={InfoGraphic} />
          <div className={style.detailsContainer}>
            {infoGraphicDetails.map((info) => {
              const Icon = info.icon;
              return (
                <div className={style.detailBox} key={info.heading}>
                  <div className={style.detailIcon}>
                    <Icon color="white" />
                  </div>
                  <div className={style.detailHeading}>{info.heading}</div>
                  <div>{info.detail}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className={style.statsSection}>
        <Feature
          details={StatsDetails}
          isIconInCircle={false}
          logoColor={"#488b36"}
          borderTop={false}
          stroke={"3"}
          minWidth={"15rem"}
        />
      </section>
      <section className={style.processSection}>
        <Feature
          header={"How EcoRinse Works"}
          details={ProcessDetails}
          isIconInCircle={true}
          borderTop={false}
          size={30}
          logoColor={"white"}
        />
      </section>
      <section className={style.mottoSection}>
        <div className={style.mottoContainer}>
          <div className={style.leftContainer}>
            <div className={style.textContainer}>
              <div className={style.Icon}>
                <Star color="#488b36" />
              </div>
              <p className={style.paraContainer}>
                Our <span className={style.highLight}>Motto</span>
              </p>
              <p className={style.mottoText}>
                At EcoRinse, we believe clean clothes aren't just about
                hygiene—they're about confidence, comfort, and care. Our mission
                is to make laundry effortless, reliable, and refreshingly
                simple.
              </p>
            </div>
            <div className={style.divContainer}>
              {MottoDetails.map((motto) => {
                const Icon = motto.icon;
                return (
                  <div className={style.mottoWrapper}>
                    <div>
                      <Icon />
                    </div>
                    <div>{motto.detail}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.rightContainer}>
            <div className={style.mottoImageWrapper}>
              <img
                className={style.resizeImage}
                src={MottoRightContainerImage}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.chooseUsSection}>
        <div className={style.headerText}>Why Choose Us?</div>
        <div className={style.bar}></div>
        <div className={style.chooseContainer}>
          {WhyChooseUsList.map((choose) => {
            const Icon = choose.icon;
            return (
              <>
                <div className={style.chooseWrapper}>
                  <div className={style.icon}>
                    <Icon color="#488b36" />
                  </div>
                  <div className={style.chooseHeading}>{choose.heading}</div>
                  <div className={style.chooseDetail}>{choose.detail}</div>
                </div>
                {choose.show && <div className={style.chooseBar}></div>}
              </>
            );
          })}
        </div>
      </section>
      <section className={style.servicesSection}>
        <ServiceCard heading={"Our Services"} />
      </section>
      <section className={style.whyChoosingUs}>
        <Feature
          header={"Why Choose EcoRinse?"}
          details={chooseNeatClean}
          isIconInCircle={false}
          borderTop={true}
          size={40}
          logoColor={"#488b36"}
        />
      </section>
      <section className={style.howItWorks}>
        <Feature
          header={"How It Works"}
          details={howItWorks}
          headingColor={"white"}
          isIconInCircle={true}
          borderTop={false}
          topHeadingColour={"white"}
          size={20}
          logoColor={"#2864AE"}
        />
      </section>
    </main>
  );
};

export default HomePage;
