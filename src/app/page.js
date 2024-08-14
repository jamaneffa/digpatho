import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.backgroundContainer}>
        <Image
          src="/assets/home_background.jpeg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          className={styles.homeBackground}
        />
        <div className={styles.imageText}>
          <h2>Detección temprana de cáncer con IA</h2>
          <h4>
            Nuestra tecnología permite que la detección de cáncer sea más rápida
            y precisa. El futuro de la patología es ahora. El futuro es DigPatho
          </h4>
          <a
            className={styles.aboutButton}
            href="https://www.digpatho.com/es"
            target="_blank"
            rel="noreferrer"
          >
            Conoce más
          </a>
        </div>
      </div>
    </>
  );
}
