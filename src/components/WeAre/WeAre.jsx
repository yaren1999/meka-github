import Image from 'next/image';
import styles from './style.module.css';

const WeAre = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <Image src="/weare/tamir11.jpg" width={500} height={350} alt="Hakkımızda Resmi" className={styles.imageLeft} />
      </div>

      <div className={styles.textContainer}>
            <h2 className={styles.title}>Neden Biz?</h2> 
            <p className={styles.description}>
                Meka Teknik Pompa olarak kalite, güven ve yenilikçilik anlayışımızla sektörde öncü bir firmayız.
            </p>
            <p className={styles.description}>
            Profesyonel ekibimiz ve yılların getirdiği deneyim ile en iyi çözümleri sunuyoruz.
            </p>
            <p className={styles.description}>
                Meka Teknik Pompa olarak kalite, güven ve yenilikçilik anlayışımızla sektörde öncü bir firmayız.
            </p>
            <p className={styles.description}>
            Profesyonel ekibimiz ve yılların getirdiği deneyim ile en iyi çözümleri sunuyoruz.
            </p>
      </div>

      <div className={styles.images}>
        <Image src="/weare/tamir8.jpg" width={500} height={350} alt="Hakkımızda Resmi" className={styles.imageRight} />
      </div>
    </div>
  );
};

export default WeAre;
