import Image from "next/image";
import  Hero  from "./components/Hero";
import { Navbar } from "./components/navbar";
import Services from "./components/services";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero />
   {/* <Services/> */}
   </>
  );
}
