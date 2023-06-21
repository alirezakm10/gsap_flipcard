'use client'
import React, { useState } from 'react';
import { gsap } from 'gsap';
import styles from './flipcard.module.css';
import Image from 'next/image';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = React.useRef(null);

  const handleMouseEnter = () => {
    setIsFlipped(true);
    const cardElement = cardRef.current;
    const timeline = gsap.timeline();

    timeline.to(cardElement, { rotationY: 180, duration: 0.6 });
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
    const cardElement = cardRef.current;
    const timeline = gsap.timeline();

    timeline.to(cardElement, { rotationY: 0, duration: 0.6 });
  };

  return (
    <div
      className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} className={styles.card}>
        <div className={`${styles.face} ${styles.front}`}>
          <div className={styles.cardContent}>
            <div className={styles.imageContainer}>
              <Image
                src="/rick.jpg"
                alt="rick"
               fill={true}
              />
            </div>
            <div className={styles.cardBody}>
              <h3>Card title</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className={styles.btn}>
                Go somewhere
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <div className={styles.cardContent}>
            <div className={styles.cardBody}>
              <h3>Back Side</h3>
              <p>This is the back side of the card.</p>
              <button className={styles.btn}>
                Go somewhere
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
