import React from "react";
import styles from "./PersonCard.module.css";
import profilPicture from "../../../images/image-jeremy.png";

const PersonCard = ({ currentFrame, setCurrentFrame }) => {
    // Array of timeframe options
    const timeframes = ["daily", "weekly", "monthly"];
  
    return (
      <div className={styles.personCard}>
        {/* Container for user profile and name */}
        <div className={styles.personInfo}>
          <div>
            <img src={profilPicture} alt="Jeremy Robson" />
          </div>
          <div>
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        {/* Timeframe selection buttons */}
        <div className={styles.period}>
          <div className={styles.timeframes}>
            {timeframes.map((frame) => (
              <button
                key={frame}
                id={frame}
                className={frame === currentFrame ? styles.active : ""}
                onClick={() => setCurrentFrame(frame)}
              >
                {frame.charAt(0).toUpperCase() + frame.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PersonCard;
