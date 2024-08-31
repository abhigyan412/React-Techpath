import React from "react";
import styles from './NewAdventure.module.css';

function ExploreButton() {
  return (
    <button className={styles.exploreButton}>
      <span className={styles.buttonText}>Explore Now</span>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6e87daaa07bff94a26065caa26750ce93c652c95b5f1eeee4c5ff07c9458516?placeholderIfAbsent=true&apiKey=b78e62ffd44547d0ac591017256a39d6" 
        className={styles.buttonIcon} 
        alt=""
      />
    </button>
  );
}

export default ExploreButton;