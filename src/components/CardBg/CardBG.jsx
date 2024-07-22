import React from 'react';
import { getCategoryIcon } from '../../utils/icons.js';
import styles from "./CardBg.module.css";

// Object mapping categories to their respective background colors
const categoryColors = {
  Work: 'hsl(15, 100%, 70%)',
  Play: 'hsl(195, 74%, 62%)',
  Study: 'hsl(348, 100%, 68%)',
  Exercise: 'hsl(145, 58%, 55%)',
  Social: 'hsl(264, 64%, 52%)',
  'Self Care': 'hsl(43, 84%, 65%)',
};

// CardBG component to provide background color and icon based on category
const CardBG = ({ title, children }) => {
  // Get background color and image based on the title
  const backgroundColor = categoryColors[title];
  const backgroundImage = `url(${getCategoryIcon(title)})`;

  return (
    <div style={{ backgroundColor, backgroundImage}} className={styles.cardBg}>
        {children}
    </div>
  );
};

export default CardBG;
