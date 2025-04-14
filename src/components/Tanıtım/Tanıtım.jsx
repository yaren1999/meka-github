import styles from "./style.module.css"
import Image from "next/image";

const Tanıtım = () => {
    return (
        <div className={styles.container} >
            <div className={styles.content}>
           
                <h2 className={styles.title}>Biz Kimiz ?</h2>
                <p className={styles.text2}>
                    MEKA TEKNİK POMPA,<br /><br /> 
                    Otomotiv sektöründe yılların tecrübesine sahip, motor bakımı, onarımı ve güçlendirme
                    konularında uzmanlaşmış bir ekip tarafından kurulmuştur.
                    Motor revizyonlarından güç artırımına, özel tuning işlemlerinden motor içi optimizasyonlara kadar geniş
                    bir yelpazede hizmet sunuyoruz. 
                    Ar-Ge çalışmalarımızla sektördeki en son teknolojileri takip ediyor, özel üretim çözümlerimizle sanayiye değer katıyoruz. 
                    Güvenilir iş ortaklarımız ve müşteri odaklı yaklaşımımızla, otomotiv endüstrisinde sürdürülebilir başarıyı hedefliyoruz.
                    Müşterilerimize en yüksek kaliteyi sağlamak için son teknoloji ekipmanlar ve deneyimli mühendislerimizle çalışıyoruz.
                    Amacımız, aracınızı sadece tamir etmek değil, performansını en üst seviyeye çıkarmak ve uzun ömürlü hale getirmektir.
            
                </p>

            </div> 
            <div className={styles.imageContainer}>
                <Image src="/slider/motor4.jpg" width={500} height={350} alt="Hakkımızda Resmi" />
            </div>
       
        </div>
    )   
}
    export default Tanıtım;

