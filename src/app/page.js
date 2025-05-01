import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import NGOcard from "@/components/NGOcard";
import NGOs from "@/components/NGOs";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSlider />
      <NGOs />
      <Footer />
    </div>
  );
}
