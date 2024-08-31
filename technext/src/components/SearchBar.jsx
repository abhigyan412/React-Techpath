import React from "react";
import styles from './NewAdventure.module.css';
function SearchBar() {
  return (
    <form className={styles.searchBar} role="search">
      <label htmlFor="searchInput" className={styles['visually-hidden']}>Search</label>
      <div className={styles.searchIcon}>􀊫</div>
      <input 
        type="search" 
        id="searchInput"
        className={styles.searchPlaceholder} 
        placeholder="Search" 
        aria-label="Search"
      />
      <button type="submit" aria-label="Submit search">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9432db27150bddce86ad3bd2bf7744fd8ec6c55f09001b196b45e14037ed3eb?placeholderIfAbsent=true&apiKey=b78e62ffd44547d0ac591017256a39d6" 
          className={styles.searchButton} 
          alt=""
        />
      </button>
    </form>
  );
}

export default SearchBar;