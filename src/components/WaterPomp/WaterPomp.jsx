import styles from "./style.module.css"
import Image from "next/image"

const WaterPomp=()=>{

    const urunler = [
        {
            text: "Klasik SU POMPA",
            img: "/Products/img1.jpg"
        },
        {
            text: "ELEKTRİKLİ SU POMPA",
            img: "/Products/img2.jpg"
        },
        {
            text: "ENTEGRE SU POMPA",
            img: "/Products/img3.jpg"
        }, 
        {
            text: "SOĞUTMALI ALTERNATOR POMPA",
            img: "/Products/img1.jpg"
        },
        {
            text: "SABİT SU POMPA",
            img: "/Products/img2.jpg"
        },
    ]



    return(
        <div className={styles.mainContainer}>
      <h2 className={styles.title}>SU (DEVİRDAİM) POMPA ÇEŞİTLERİMİZ</h2> {/* Başlık kısmı */}  
            
            <div className={styles.container}>
            {urunler.map((u) => {
                return (
                    <div className={styles.card}>
                        <Image className={styles.img} src={u.img} width={50} height={50} alt="img" />
                        <div className={styles.text}> {u.text}</div>
                    </div>
                )
            })}

            </div>
        </div>
    )
}

export default WaterPomp;
