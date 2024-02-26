import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import Price from "@/components/Price";
import Footer from "@/components/Footer";
import { Almarai } from "next/font/google";

const almarai = Almarai({ subsets: ["arabic"], weight: ["400"] });

export default function Home() {
  return (
    <main className={`${almarai.className}`}>
    <Header></Header>
    <Hero></Hero>
    <Price></Price>
    <Banner></Banner>
    <Subscribe></Subscribe>
    <Footer></Footer>
    </main>
  );
}
