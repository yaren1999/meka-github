import styles from "./style.module.css"
import Image from "next/image"

const Hidrolik=()=>{

    const urunler = [
        {
            text: "DİŞLİ TİP HİDROLİK POMPA",
            img: "/products/img1.jpg"
        },
        {
            text: "PİSTONLU HİDROLİK POMPA",
            img: "/products/img2.jpg"
        },
        {
            text: "KANATLI HİDROLİK POMPA",
            img: "/products/img3.jpg"
        }, 
        {
            text: "ELEKTRİKLİ HİDROLİK POMPA",
            img: "/products/img3.jpg"
        }, 
       
    ]



    return(
        <div className={styles.mainContainer}>
      <h2 className={styles.title}>HİDROLİK POMPA ÇEŞİTLERİ</h2>  
            
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

export default Hidrolik;
