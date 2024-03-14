import Head from "next/head";
import { Inter } from "next/font/google";
// import Navbar from "@/components/Navbar";
// import Mint from "@/components/Mint";
// import Error from "@/components/Error";
import MintPage from "@/pages/mint";
import Footer from "@/components/Footer";
import HomePage from "@/components/homePage";
import NavbarSite from "@/components/NavbarSite";
import MainLayout from "@/components/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nombres Camaró NFT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <MainLayout>
          <HomePage />
        </MainLayout>
      </main>
    </>
  );
}