'use client'
import React, { useState } from 'react';
import { gsap } from 'gsap';
import styles from './flipcard.module.css';
import Image from 'next/image';
import Link from 'next/link'

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(true);
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
              <h1 className={styles.header} >Card title</h1>
              <p className={styles.desc}>
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
          <h1 className={styles.header}>tyhd</h1>
          <p className='subtitle'>lorem ipsum content </p>
            <div className={styles.backImageContainer}>
              <Image
                src="/rick.jpg"
                alt="rick"
               fill={true}
              />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.desc}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className={styles.links_container} >
              <Link href='/' >a link</Link>
              <Link href='/' >b link</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
