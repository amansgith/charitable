import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSlider />
      <Footer />
    </div>
  );
}
