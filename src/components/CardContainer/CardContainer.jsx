import React from "react";
import styles from "./CardContainer.module.css";
import Card from "../Card/Card";
import CardBG from "../CardBg/CardBG";

const CardContainer = ({ data, currentFrame }) => {
  return (
    <div className={styles.cardContainer}>
      {data.map((item) => (
        <CardBG key={item.title} title={item.title}>
          <Card
            key={item.title}
            title={item.title}
            current={item.timeframes[currentFrame].current}
            previous={item.timeframes[currentFrame].previous}
          />
        </CardBG>
      ))}
    </div>
  );
};

export default CardContainer;
