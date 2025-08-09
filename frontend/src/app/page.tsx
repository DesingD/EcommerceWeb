import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Header from "@/components/index/Header";
import Categories from "@/components/index/Categories";
import Betseller from "@/components/index/betseller/index";
import Deals from "@/components/index/Deals";
import Coments from "@/components/index/Coments";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Categories />
      <Betseller />
      <Deals />
      <Coments />
      <Footer />
    </div>
  );
}
