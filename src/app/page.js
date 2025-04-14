import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/Slider/Slider";
import Tanıtım from "@/components/Tanıtım/Tanıtım";
import Products from "@/components/Products/Products";
import WeAre from "@/components/WeAre/WeAre";


export default function Home() {
  return (
   <div>
    <Slider/>
    <Tanıtım/>
    <Products/>
    <WeAre/>
   </div>
  );
}
