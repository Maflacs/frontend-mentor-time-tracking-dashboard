import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, current, previous }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <header>
        <h2>{title}</h2>
        <button className={styles.details}>...</button>
        </header>
        <div className={styles.hrs}>
        <p className={styles.current}>{current}hrs</p>
        <p className={styles.previous}>Last Week - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
