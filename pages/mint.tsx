import { NombresCamaroContract } from "@/constants/contracts";
import { useWeb3Store } from "@/stores/web3Store";
import MainLayout from "../components/MainLayout";
import NftComponent from "../components/NftComponent";
import styles from "../styles/mintPage.module.css";
import { useEffect, useState, ChangeEvent } from "react";
import { ethers } from "ethers";
import Modal from "../components/Modal";

type NFTcamaro = {
  id: number;
  nombre: string;
};

const MintPage = () => {
  const { address, chainId, isConnected, provider } = useWeb3Store();
  const [contract, setContract] = useState<ethers.Contract>();
  const [nfts, setNfts] = useState<NFTcamaro[]>();
  const [precio, setPrecio] = useState<number>();
  const [restantes, setRestantes] = useState<number>(0);
  const [selectedNft, setSelectedNft] = useState<NFTcamaro | undefined>();
  const [dollar, setDollar] = useState<number>();
  const [historia, setHistoria] = useState<string>();
  const [imagen, setImagen] = useState<string>();

  const openModal = (nft: NFTcamaro) => {
    setSelectedNft(nft);
  };

  const handleCloseModal = () => {
    setSelectedNft(undefined);
  };

  async function getImagen(id: number) {
    if (!contract) {
      return console.log("contract = ", contract);
    }
    try {
      const _imgurl = await contract.tokenURI(id);
      setImagen(_imgurl);
    } catch (e) {
      console.log("Error en el try de getImagen(): ", e);
    }
  }
  async function getHistoria(id: number) {
    if (!contract) {
      return console.log("contract = ", contract);
    }
    try {
      const _historia = await contract.stories(id);
      setHistoria(_historia);
    } catch (e) {
      console.log("Error en el try de getHistoria(): ", e);
    }
  }

  async function verRestantes() {
    if (!contract) {
      return console.log("CamaroError: Contract not found on verRestantes()");
    }
    try {
      const _restantes = await contract.getListedNotMinted();
      setRestantes(_restantes.length);
    } catch (error) {
      console.log("Error en el try de verRestantes():", error);
    }
  }

  async function recuperarDollar() {
    if (!contract) {
      return console.log(
        "CamaroError: Contract not found on recuperarDollar()"
      );
    }
    try {
      const _dollar = Number(await contract.priceInUsd());
      setDollar(_dollar);
    } catch (error) {
      console.log("Error en el try de recuperarDollar():", error);
    }
  }

  async function recuperarPrecio() {
    if (!contract) {
      return console.log(
        "CamaroError: Contract not found on recuperarPrecio()"
      );
    }
    try {
      const _precio = Number(await contract.getMintPriceInMatic());
      setPrecio(_precio);
    } catch (error) {
      console.log("Error en el try de recuperarPrecio():", error);
    }
  }

  async function verListados() {
    if (!contract) {
      return console.log("CamaroError: Contract not found on verlistados()");
    }
    try {
      setNfts([]);
      const data = await contract.getListedNotMinted();
      const newNfts = [];
      for (const numero of data) {
        const nombre = await contract.names(numero);
        newNfts.push({ id: numero, nombre });
      }
      setNfts(newNfts);

      recuperarPrecio();
      recuperarDollar();
      verRestantes();
    } catch (error) {
      console.log("Error en el try de verlistados():", error);
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setContract(
      new ethers.Contract(
        NombresCamaroContract.address,
        NombresCamaroContract.abi,
        provider?.getSigner()
      )
    );
  }, [provider, address, chainId, isConnected]);

  useEffect(() => {
    if (contract != undefined) {
      verListados();
    }
  }, [contract]);

  return (
    <MainLayout>
      <div className="flex flex-row sm:items-center mt-6">
        <div className={styles.rectangulo}></div>
        <h1 className="text-3xl font-bold ml-4  md:mt-4">COMPRA TU HISTORIA</h1>
      </div>
      <div className="mt-7">
        <div className="flex flex-col sm:flex-row justify-between">
          <span className="ml-10 mt-3 font-medium">
            NFTs disponibles para comprar
          </span>
          <div className="flex flex-row sm:mr-20 ml-10 justify-start">
            <p className="text-base mr-2 mt-3">restantes</p>
            <p className="text-3xl">{restantes}</p>
          </div>
        </div>
        <div
          className={`${styles.rectangulo_horizontal_movil} mt-3 sm:hidden`}
        />
        <div className={`${styles.rectangulo_horizontal} hidden sm:block`} />
      </div>

      <div className="m-5 sm:m-10 flex flex-wrap justify-center items-center sm:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-32 gap-3">
          {!nfts || !precio ? ( // Primero comprueba que este todo cargado
            <p className="text-2xl font-bold">Cargando...</p>
          ) : (
            <>
              {nfts!.length == 0 ? ( // Despues muestra nfts si quedan por mintear
                <p className="text-xl sm:text-2xl font-bold">
                  ¡Todos los NFTs han sido comprados ya!
                </p>
              ) : (
                nfts?.map((_nft, index) => (
                  <NftComponent
                    key={index}
                    _id={_nft.id}
                    _nombre={_nft.nombre}
                    _precio={precio}
                    onClick={openModal}
                  />
                ))
              )}
            </>
          )}
          {selectedNft &&
            (recuperarPrecio(),
            getHistoria(selectedNft.id),
            getImagen(selectedNft.id),
            (
              <Modal
                onClose={handleCloseModal}
                nft={selectedNft}
                _precio={precio!}
                _dollar={dollar!}
                _contract={contract!}
                _historia={historia!}
                _imagen={imagen!}
              />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};
export default MintPage;
