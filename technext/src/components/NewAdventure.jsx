import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './NewAdventure.module.css';
import SearchBar from './SearchBar';
import ExploreButton from './ExploreButton';
import "react-card-stack-carousel/styles/styles.css"

import { StackedCarousel } from "react-card-stack-carousel";



import { useEffect, useState } from 'react';
import axios from 'axios';


function NewAdventure() {

  const containerHeight = 250;



  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://travelapi-1.onrender.com/api/items/")
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the items!', error);
      });
  }, []);





  return (
    <main className={styles.container}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/acdb2a5fe55e75274937294e7327b4a45dc8d5f8af3c5edf5aa8f3b9f1f5a223?placeholderIfAbsent=true&apiKey=b78e62ffd44547d0ac591017256a39d6"
        className={styles.backgroundImage}
        alt=""
      />
      <div className={styles.contentWrapper}>
        <SearchBar />
        <section className={styles.mainContent}>
          <div className={styles.contentColumns}>
            <div className={styles.leftColumn}>
              <div className={styles.textContent}>
                <h2 className={styles.titl}>Discover Your</h2>
                <h1 className={styles.title}>New Adventure</h1>
                <ExploreButton />
              </div>
            </div>
            <div className={styles.rightColumn}>

              <div className="container">
              {items.length > 0 && 
                <StackedCarousel height={containerHeight}>
                {items.map(item => (
                  <div
                    key={item.id}
                    style={{
                      position: 'relative',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      backgroundColor: 'white',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      padding: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src={item.Image}
                      alt={item.name}
                      style={{ width: '100%', borderRadius: '12px' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '5px',
                        left: '5px',
                        right: '5px',
                        padding: '5px',
                        backgroundColor: 'white',
                        color: 'black',
                        textAlign: 'center',
                        borderRadius: '8px',
                        opacity: 0.4
                      }}
                    >
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>{item.price}</p>
                    </div>
                  </div>
                   ))}
                  </StackedCarousel>
}

              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default NewAdventure;