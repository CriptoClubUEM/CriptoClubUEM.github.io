import { FC, ReactNode, useEffect, useState } from "react";
import Navbar from "./NavbarSite";
import Footer from "./Footer";
import { useWeb3Store } from "@/stores/web3Store";
import { supportedChains } from "@/constants/supportedChains";

interface Props {
  children?: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  const {
    address,
    addressBalance,
    chainId,
    isConnected,
    errorMessage,
    provider,
  } = useWeb3Store();

  return (
    <>
      {/* {!provider ? (
        <div className="">
          <div className="min-h-screen text-white bg-red-700 text-center py-4 px-8 shadow-lg flex flex-col justify-center items-center sm:py-16 sm:px-32 md:py-20 md:px-48 lg:py-24 lg:px-64">
            <div className="text-6xl mb-4">🚨</div>
            <div className="text-2xl font-semibold mb-2">Instala Metamask</div>
            <div className="text-sm max-w-md">
              Para poder utilizar nuestra plataforma, es necesario que instales
              Metamask, una extensión de navegador que te permite tener una
              cartera y navegar por distintas blockchains.
            </div>
            <a
              href="https://metamask.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 py-2 px-6 sm:py-3 sm:px-8 lg:py-2 lg:px-10 bg-white text-red-700 rounded-full font-semibold hover:bg-red-200 focus:outline-none"
            >
              Instalar
            </a>
          </div>
        </div>
      ) : !supportedChains.includes(chainId) ? (
        <div className="">
          <div className="min-h-screen text-white bg-red-700 text-center py-4 px-8 shadow-lg flex flex-col justify-center items-center sm:py-16 sm:px-32 md:py-20 md:px-48 lg:py-24 lg:px-64">
            <div className="text-6xl mb-4">🚨</div>
            <div className="text-2xl font-semibold mb-2">
              Cambia a la red de Polygon
            </div>
            <div className="text-sm max-w-md">
              Es importante que cambies a Polygon para poder utilizar todas las
              funcionalidades de nuestra plataforma. Sigue estas instrucciones
              para hacerlo de forma fácil y rápida.
            </div>
            <a
              href="https://academy.binance.com/es/articles/how-to-add-polygon-to-metamask"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 py-2 px-6 sm:py-3 sm:px-8 lg:py-2 lg:px-10 bg-white text-red-700 rounded-full font-semibold hover:bg-red-200 focus:outline-none"
            >
              Instrucciones
            </a>
          </div>
        </div>
      ) : ( */}
        <>
          <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </>
      {/* )} */}
    </>
  );
};

export default MainLayout;
