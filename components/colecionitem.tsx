import styles from "../styles/coleccion.module.css";
import modalStyles from "../styles/modal.module.css";
import { FC, useState } from "react";

interface Props {
  _id: number;
  _nombre: string;
  _historia: string;
  onClick: () => void;
}

const changeNumberToThreeDigits = (id: number) => {
  if (id < 10) {
    return '00' + id;
  } else if (id < 100) {
    return '0' + id;
  } else {
    return id.toString();
  }
}

const CollectionPage: FC<Props> = ({ _id, _nombre, _historia }) => {

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const _imagen = './collection/' + capitalizeFirstLetter(_nombre) + '.jpg';

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  const handleVerMasClick = () => {
    setShowModal(true);
  };

  return (
    <div className="card bg-[#D22029] shadow-xl w-full sm:w-5/12 md:w-3/12 lg:w-2/12 mx-5 my-5">
      <div className="relative">
        <figure
          className={styles.img}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={_imagen} className="rounded-t-xl aspect-square" />
          {showButton && (
            <button
              className="bg-white text-[#D22029] text-lg px-4 py-2 rounded-md w-1/2 font-bold hover:bg-gray-100 transition duration-200 ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "
              // onClick={handleVerMasClick}
            >Ver más
            </button>
          )}
        </figure>
      </div>
      <div className="card-body text-center">
        <h2 className="text-xl text-white">
          {capitalizeFirstLetter(_nombre)} #{changeNumberToThreeDigits(_id)}
        </h2>
      </div>
      {showModal && (
        <div className={modalStyles.modal}>
          <div className={modalStyles.modalContent + " w-3/5 md:w-4/5 lg:w-3/4 xl:w-1/2"}>
            <div className="flex justify-end">
              <button onClick={() => setShowModal(false)} className="text-xl">X</button>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="h-[60%] md:w-1/2 p-2">
                <img src={_imagen} className="w-full h-full object-contain"/>
              </div>
              <div className="flex-1 md:w-1/2 p-2">
                <div className="ml-5 py-10">
                  <div className="flex flex-col items-start sm:grid sm:grid-cols-2">
                    <div className="">
                      <h2 className="text-4xl">{capitalizeFirstLetter(_nombre)}</h2>
                      <p className="pt-2">#{changeNumberToThreeDigits(_id)}</p>
                    </div>
                  </div>
                  <p className="pt-3 md:text-justify texto">{_historia}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionPage;