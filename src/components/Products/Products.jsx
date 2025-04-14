import styles from "./style.module.css"
import Image from "next/image"

const Products=()=>{

    const urunler = [
        {
            text: "YAKIT POMPA",
            img: "/products/img1.jpg"
        },
        {
            text: "SU POMPA",
            img: "/products/img2.jpg"
        },
        {
            text: "YAĞ POMPA",
            img: "/products/img3.jpg"
        }, 
        {
            text: "HİDROLİK POMPA",
            img: "/products/img1.jpg"
        },
        {
            text: "HAVA POMPA",
            img: "/products/img2.jpg"
        },
    ]



    return(
        <div className={styles.mainContainer}>
      <h2 className={styles.title}>POMPA ÇEŞİTLERİMİZ</h2> {/* Başlık kısmı */}  
            
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

export default Products;
