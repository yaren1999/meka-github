"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import 'swiper/css';
import Image from 'next/image';
import { useRef } from 'react';

import styles from "./style.module.css";

const Slider=()=>{

    const images = [
        "/slider/motor5.jpg",
        "/slider/motor6.jpg",
    ];

    const swiperRef = useRef(null);


    return(
            <div className={styles.container}>
                <div className={styles.text}>"Yüksek performans, dayanıklılık ve güvenli sürüş bizim işimiz!"</div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Navigation]}
                >
                    {images.map((i, index) => (
                        <SwiperSlide key={index}>
                            <Image className={styles.img} src={i} width={400} height={200} alt='img' quality={100} />
                        </SwiperSlide>
                    ))}
                </Swiper>
    
                <div className={styles.buttons}>
                    <button onClick={() => swiperRef.current?.slidePrev()} className={styles.button}><GrFormPrevious /></button>
                    <button onClick={() => swiperRef.current?.slideNext()} className={styles.button}><GrFormNext /></button>
                </div>
            </div>
        
    
        
        
    )
}

export default Slider;


