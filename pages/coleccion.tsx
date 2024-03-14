import MainLayout from "../components/MainLayout";
import styles from "../styles/mintPage.module.css";
import Coleccionitem from "@/components/colecionitem";
import React from 'react';
import nfts from "@/data/nfts";

type NFTcamaro = {
  nombre: string;
  historia: string;
};

const CollectionPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-row sm:items-center mt-6">
        <div className={styles.rectangulo}></div>
        <h1 className="text-3xl font-bold ml-4">COLECCIÓN</h1>
      </div>
      <div className="my-10 px-10 sm:px-10 flex flex-wrap justify-center items-center sm:mx-auto">
        <div className="flex flex-row flex-wrap justify-around items-center">
          {nfts.map((nft: NFTcamaro, index: number) => (
            <Coleccionitem
              key={index}
              _id={index+1}
              _nombre={nft.nombre}
              _historia={nft.historia}
              onClick={() => { }}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CollectionPage;