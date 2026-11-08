import style from "./Feature.module.css";
import { motion } from "motion/react";

const Feature = ({
  header,
  // This one is for to have a heading at the top to be passed as a props
  subHeader,
  // This one is for to have the subHeading just after the heading
  details,
  // This is the details , that needs to be looped over to render the items
  isIconInCircle,
  // This is to include the icon in circle/sphere or not
  borderTop,
  // This is to include top green border on the top of every card
  stroke,
  // As we using the icons without cicle , we need to bold it out so for that we are using stroke in order to make it bold
  size,
  // This is used in order to control the size of the icon via props
  logoColor,
  // This is also used to control the colour of the icon that we are using in the details
  headingColor,
  // This is used to colour the heading of the component handled by props
  subHeadingColour,
  // This is used to colour the sub heading just after heading of the component handled by props
  topHeadingColour,
  // This is used to set the card's heading colour
  includeBorderRadius,
  // This is used to include the border of the main container
  gap,
  // This is used to maintain the gap in between the cards inside the container
  minWidth,
  // This is used to maintain the width of the card's parent container
  imgSrc,
  // This is used to use the image as background in the container
  styleSet,
  // This is used to receive the style of the image background as props
}) => {
  const styles = [
    style.processSection,
    includeBorderRadius && style.includeBorderRadius,
    imgSrc ? style.withImage : style.withBackground,
  ]
    .filter(Boolean)
    .join(" ");
  const headerSplit = header && header.length > 1 && header.split(" ");
  return (
    <div className={styles}>
      <div
        className={style.backgroundImage}
        style={{
          backgroundImage: `url("${imgSrc}")`,
          filter: `blur(${1}px)`,
          backgroundPosition: "top center",
        }}
      />
      {header && (
        <motion.div className={style.featureHeading}>
          <p className={style.processHeader} style={{ color: headingColor }}>
            {header.length > 1 && headerSplit.slice(0, -1).join(" ")}
            {header.length > 1 && (
              <span className={style.stringClass}>
                {" "}
                {headerSplit[headerSplit.length - 1]}
              </span>
            )}
          </p>
        </motion.div>
      )}
      {subHeader && (
        <motion.div className={style.featureHeading}>
          <p
            className={style.featureSubHeading}
            style={{ color: subHeadingColour }}
          >
            {subHeader}
          </p>
        </motion.div>
      )}
      <div className={style.processDetailWrapper} style={{ gap: gap }}>
        {details.map((process, index) => {
          const Icon = process.icon;
          return (
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeIn",
                delay: 0.2,
              }}
              style={{ minWidth: minWidth }}
              className={`${style.processWrapper} ${
                borderTop ? style.borderTop : style.borderBottom
              }`}
              key={index}
            >
              <div
                className={isIconInCircle ? style.processIcon : ""}
                key={index}
              >
                {Icon ? (
                  <Icon color={logoColor} size={size} strokeWidth={stroke} />
                ) : (
                  <p
                    className={style.processHeading}
                    style={{ color: topHeadingColour }}
                  >
                    {process.topheading}
                  </p>
                )}
              </div>
              <p
                style={{ animationDelay: `0.${index}s` }}
                className={style.processHeading}
              >
                {process.heading}
              </p>
              <p className={style.processDetails}>{process.detail}</p>
              {process.path && (
                <button
                  onClick={() => {
                    window.location.href = process.path;
                  }}
                  className={style.linkDetails}
                >
                  {process.linkDetails}
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
