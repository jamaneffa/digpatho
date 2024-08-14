'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ImagesResult.module.css';

export default function ImagesResult() {
  const [images, setImages] = useState([]);
  const [imageData, setImageData] = useState({});
  const router = useRouter();

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('selectedFiles'));
    if (storedImages) {
      setImages(storedImages);
    }

    const data = {
      IAKI67: (Math.random() * 0.5).toFixed(2),
      IATotalCells: Math.floor(Math.random() * 500),
      IAPositiveCells: Math.floor(Math.random() * 300),
      IANegativeCells: Math.floor(Math.random() * 200),
      KI67: (Math.random() * 0.5).toFixed(2),
      TotalCells: Math.floor(Math.random() * 500),
      PositiveCells: Math.floor(Math.random() * 300),
      NegativeCells: Math.floor(Math.random() * 200),
      WrongKI67: Math.floor(Math.random() * 50),
      WrongTotalCells: Math.floor(Math.random() * 50),
      WrongPositiveCells: Math.floor(Math.random() * 50),
      WrongNegativeCells: Math.floor(Math.random() * 50),
    };
    setImageData(data);
  }, []);

  const handleReset = () => {
    localStorage.removeItem('selectedFiles'); 
    router.push('/dashboard'); 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Results</h1>
      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageItem}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={`Result ${index}`}
              className={styles.resultImage}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>
      <div className={styles.infoContainer}>
        <label>IAKI67:</label>
        <input type="text" value={imageData.IAKI67 || ''} readOnly />

        <label>IA Total Cells:</label>
        <input type="text" value={imageData.IATotalCells || ''} readOnly />

        <label>IA Positive Cells:</label>
        <input type="text" value={imageData.IAPositiveCells || ''} readOnly />

        <label>IA Negative Cells:</label>
        <input type="text" value={imageData.IANegativeCells || ''} readOnly />

        <label>KI67:</label>
        <input type="text" value={imageData.KI67 || ''} readOnly />

        <label>Total Cells:</label>
        <input type="text" value={imageData.TotalCells || ''} readOnly />

        <label>Positive Cells:</label>
        <input type="text" value={imageData.PositiveCells || ''} readOnly />

        <label>Negative Cells:</label>
        <input type="text" value={imageData.NegativeCells || ''} readOnly />

        <label>Wrong KI67:</label>
        <input type="text" value={imageData.WrongKI67 || ''} readOnly />

        <label>Wrong Total Cells:</label>
        <input type="text" value={imageData.WrongTotalCells || ''} readOnly />

        <label>Wrong Positive Cells:</label>
        <input type="text" value={imageData.WrongPositiveCells || ''} readOnly />

        <label>Wrong Negative Cells:</label>
        <input type="text" value={imageData.WrongNegativeCells || ''} readOnly />
      </div>
      <button className={styles.resetButton} onClick={handleReset}>
        Reset and Reload
      </button>
    </div>
  );
}
