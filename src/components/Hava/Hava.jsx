import styles from "./style.module.css"
import Image from "next/image"

const Hava=()=>{

    const urunler = [
        {
            text: "HAVA SÜSPANSİYON POMPA",
            img: "/products/img1.jpg"
        },
        {
            text: "HAVA KOMPRESÖR POMPA",
            img: "/products/img2.jpg"
        },
        {
            text: "HAAV FREN SİSTEM POMPA",
            img: "/products/img3.jpg"
        }, 
        {
            text: "HAVA TEMİZLEME POMPA",
            img: "/products/img1.jpg"
        },
        {
            text: "HAVA SOĞUTMA POMPA",
            img: "/products/img2.jpg"
        },
    ]



    return(
        <div className={styles.mainContainer}>
            <h2 className={styles.title}> HAVA POMPA ÇEŞİTLERİMİZ</h2> 
            
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

export default Hava;