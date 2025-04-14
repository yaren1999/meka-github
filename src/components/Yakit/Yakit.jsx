import styles from "./style.module.css"
import Image from "next/image"

const Yakit=()=>{

    const urunler = [
        {
            text: "VAKUMLU POMPA",
            img: "/products/img1.jpg"
        },
        {
            text: "SAYAÇLI POMPA",
            img: "/products/img2.jpg"
        },
        {
            text: "DALGIÇ TİPİ POMPA",
            img: "/products/img3.jpg"
        }, 
       
    ]



    return(
        <div className={styles.mainContainer}>
      <h2 className={styles.title}>YAKIT POMPA ÇEŞİTLERİ</h2> {/* Başlık kısmı */}  
            
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

export default Yakit;
