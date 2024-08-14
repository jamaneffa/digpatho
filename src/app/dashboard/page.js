'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('KI67');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const router = useRouter();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);

    localStorage.setItem('selectedFiles', JSON.stringify(previews));
  };

  const handleSendClick = () => {
    if (selectedFiles.length > 0) {
      router.push('/dashboard/images-result');
    } else {
      alert('Por favor, seleccione una imagen antes de enviar.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <div
          className={`${styles.tab} ${activeTab === 'KI67' ? styles.activeTab : ''}`}
          onClick={() => handleTabClick('KI67')}
        >
          KI67
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'HER2' ? styles.activeTab : ''}`}
          onClick={() => handleTabClick('HER2')}
        >
          HER2
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'Estrógeno' ? styles.activeTab : ''}`}
          onClick={() => handleTabClick('Estrógeno')}
        >
          Estrógeno
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'Progesterona' ? styles.activeTab : ''}`}
          onClick={() => handleTabClick('Progesterona')}
        >
          Progesterona
        </div>
      </div>

      <div className={styles.uploadContainer}>
        <input
          type="file"
          id="fileInput"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <button
          className={styles.uploadButton}
          onClick={() => document.getElementById('fileInput').click()}
        >
          Upload Images
        </button>
        <button
          className={styles.sendButton}
          onClick={handleSendClick}
        >
          Send
        </button>
      </div>

      {imagePreviews.length > 0 && (
        <div className={styles.imagePreviewContainer}>
          {imagePreviews.map((image, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              src={image}
              alt={`Preview ${index}`}
              className={styles.imagePreview}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          ))}
        </div>
      )}
    </div>
  );
}