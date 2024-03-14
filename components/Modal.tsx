import modalStyles from "../styles/modal.module.css";
import { NombresCamaroContract } from "@/constants/contracts";
import { useWeb3Store } from "@/stores/web3Store";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

type NFTcamaro = {
  id: number;
  nombre: string;
};

type ModalProps = {
  onClose: () => void;
  nft: NFTcamaro;
  _precio: number;
  _dollar: number;
  _contract: ethers.Contract;
  _historia: string;
  _imagen: string;
};

const Modal = ({
  onClose,
  nft,
  _precio,
  _dollar,
  _contract,
  _historia,
  _imagen,
}: ModalProps) => {
  const [comprado, setComprado] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [metamaskError, setMetamaskError] = useState<number>(0);
  const [errorConstant, setErrorConstant] = useState<number>(0);

  useEffect(() => {
    setErrorConstant(metamaskError);
  }, [metamaskError]);

  async function mint() {
    if (!_contract) {
      return console.log("contract = ", _contract);
    }
    let dinero = ethers.utils.parseUnits(_precio.toString(), 18);
    console.log(Number(dinero));
    try {
      await _contract.mint(nft.id, { value: dinero });
      setComprado(true);
      setMensaje(
        "Pedido realizado, en cuanto aparezca la notificación de Metamask serás el dueño de este NFT"
      );
    } catch (e: any) {
      console.log(e.code);
      setMetamaskError(e.code);
    }
  }
  return (
    <div className={modalStyles.modal}>
      <div
        className={
          modalStyles.modalContent + " w-3/5 md:w-4/5 lg:w-3/4 xl:w-1/2"
        }
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="text-xl">
            X
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="h-[60%] md:w-1/2 p-2">
            {
              (_imagen) ? <img src={_imagen} className="w-full h-full object-contain" /> : <p>Cargando imagen...</p>
            }
          </div>
          <div className="flex-1 md:w-1/2 p-2">
            <div className="ml-5 py-10">
              <div className="flex flex-col items-start sm:grid sm:grid-cols-2">
                <div className="">
                  <h2 className="text-4xl">{nft.nombre}</h2>
                  <p className="pt-2">#{nft.id}</p>
                </div>
                <div className="flex flex-col sm:items-end items-start mt-2 ">
                  <p className="text-xl font-semibold text-green-400 sm:ml-2">
                    {_precio} MATIC
                  </p>
                  <p className="text-right italic">${_dollar}</p>
                </div>
              </div>
              <p className="pt-3 md:text-justify texto">{_historia}</p>
              {comprado ? (
                <p className="text-green-500 text-lg mt-4">¡{mensaje} 🎉 !</p>
              ) : (
                <button
                  className={`btn bg-black text-white p-2 mt-10 btn-primary rounded-[14px] sm:w-[165px] border-4 border-black ${
                    comprado ? "opacity-50 cursor-not-allowed" : ""
                  } hover:bg-[#D22029] hover:border-[#D22029]`}
                  onClick={mint}
                  disabled={comprado}
                >
                  Comprar
                </button>
              )}
              {errorConstant == -32603 && (
                <p className="text-red-600 text-lg mt-4">
                  ¡Error al realizar la compra!
                  <br />
                  <span className="italic text-base">
                    Asegúrese de que su billetera esté conectada y tenga
                    suficientes fondos.
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
