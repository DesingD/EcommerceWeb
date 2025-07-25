import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Header from "@/components/index/Header";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
