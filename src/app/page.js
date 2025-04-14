import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/Slider/Slider";
import Tanıtım from "@/components/Tanıtım/Tanıtım";
import Products from "@/components/Products/Products";
import WeAre from "@/components/WeAre/WeAre";
import Yakit from "@/components/Yakit/Yakit";
import WaterPomp from "@/components/WaterPomp/WaterPomp";
import YagPomp from "@/components/YagPomp/YagPomp";
import Hidrolik from "@/components/Hidrolik/Hidrolik";


export default function Home() {
  return (
   <div>
    <Slider/>
    <Tanıtım/>
    <Products/>
    <WeAre/>
    <Yakit/>
    <WaterPomp/>
    <YagPomp/>
    <Hidrolik/>
   </div>
  );
}
