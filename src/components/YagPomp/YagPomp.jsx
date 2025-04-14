import styles from "./style.module.css"
import Image from "next/image"

const YagPomp=()=>{

    const urunler = [
        {
            text: "DİŞLİ YAĞ TİP POMPA",
            img: "/products/img1.jpg"
        },
        {
            text: "ROTOR TİPİ YAĞ POMPA",
            img: "/products/img2.jpg"
        },
        {
            text: "KANATLI POMPA",
            img: "/products/img3.jpg"
        }, 
        {
            text: "ZİNCİR TAHRİKLİ POMPA",
            img: "/products/img1.jpg"
        },
        {
            text: "ELEKTRİKLİ YAĞ POMPA",
            img: "/products/img2.jpg"
        },
    ]



    return(
        <div className={styles.mainContainer}>
      <h2 className={styles.title}> YAĞ POMPA ÇEŞİTLERİMİZ</h2> {/* Başlık kısmı */}  
            
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

export default YagPomp;
