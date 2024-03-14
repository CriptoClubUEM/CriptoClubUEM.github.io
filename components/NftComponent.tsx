import MainLayout from "../components/MainLayout";
import { FC, useState, useEffect, ChangeEvent } from "react";

type NFTcamaro = {
  id: number;
  nombre: string;
};

interface Props {
  _id: number;
  _nombre: string;
  _precio: number;
  onClick: (nft: NFTcamaro) => void;
}

const nftComponent: FC<Props> = ({ _id, _nombre, _precio, onClick }) => {
  const handleClick = () => {
    onClick({ id: _id, nombre: _nombre });
  };
  return (
    <div className="">
      <div
        onClick={handleClick}
        className="card bg-[#D22029] shadow-xl cursor-pointer flex-wrap sm:w-80 w-52"
      >
        <figure className="px-5 pt-5 mb-5">
          <img src="/nft.jpg" className="rounded-xl" />
        </figure>
        <div className="card-body bg-black text-white">
          <div className="-m-4 grid grid-cols-2">
            <div>
              <div className="flex flex-row">
                <h2 className="text-2xl text-left">{_nombre}</h2>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="grey"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden sm:block sm:ml-3 sm:mt-2"
                >
                  <path
                    d="M2.54339 17.24L0.76001 15.4566L12.9889 3.22768H2.03386V0.679993H17.32V15.9661H14.7723V5.01107L2.54339 17.24Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="-mt-3 text-[#BEBEBE]">#{_id}</span>
            </div>
            <div className="text-right" style={{ justifySelf: "end" }}>
              <p className="text-[#BEBEBE]">Precio Mint</p>
              <div className="flex flex-row">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden sm:block sm:ml-8 sm:mt-[8px] sm:mr-1"
                >
                  <path
                    d="M6 0C9.31388 0 12 2.68613 12 6C12 9.31388 9.31388 12 6 12C2.68613 12 0 9.31388 0 6C0 2.68613 2.68613 0 6 0ZM4.07625 2.87325L2.48513 3.76275C2.41361 3.79974 2.35377 3.85585 2.31225 3.92484C2.27074 3.99383 2.24919 4.07299 2.25 4.1535V5.946C2.25 6.108 2.33288 6.25612 2.48513 6.33712L4.07662 7.22662C4.215 7.30725 4.395 7.30725 4.54688 7.22662L5.6265 6.61987L6.35962 6.20212L7.43925 5.59575C7.57762 5.51475 7.75725 5.51475 7.9095 5.59575L8.75362 6.0675C8.89237 6.14813 8.98875 6.29625 8.98875 6.45825V7.41525C8.98875 7.57688 8.90625 7.725 8.75362 7.806L7.90987 8.29125C7.77113 8.37225 7.59112 8.37225 7.43925 8.29125L6.59513 7.8195C6.45638 7.7385 6.35962 7.59037 6.35962 7.42875V6.8085L5.6265 7.22662V7.8465C5.6265 8.00813 5.70937 8.15662 5.86162 8.23725L7.45312 9.12675C7.5915 9.20775 7.77112 9.20775 7.92338 9.12675L9.51487 8.23725C9.65325 8.15662 9.75 8.0085 9.75 7.8465V6.054C9.75081 5.97349 9.72926 5.89433 9.68775 5.82534C9.64623 5.75636 9.58639 5.70024 9.51487 5.66325L7.90987 4.75987C7.77113 4.67925 7.59112 4.67925 7.43925 4.75987L6.35962 5.38013L5.6265 5.78438L4.54688 6.40425C4.4085 6.48525 4.22888 6.48525 4.07662 6.40425L3.21863 5.919C3.08025 5.83838 2.9835 5.69025 2.9835 5.52825V4.57125C2.9835 4.40963 3.06638 4.2615 3.21863 4.1805L4.06238 3.70875C4.20113 3.62775 4.38112 3.62775 4.53337 3.70875L5.37712 4.1805C5.51587 4.2615 5.61263 4.40963 5.61263 4.57125V5.1915L6.34575 4.77338V4.1535C6.34656 4.07299 6.32501 3.99383 6.2835 3.92484C6.24198 3.85585 6.18214 3.79974 6.11063 3.76275L4.54688 2.87325C4.4085 2.79225 4.22888 2.79225 4.07662 2.87325H4.07625Z"
                    fill="white"
                  />
                </svg>
                <p className="text-lg text-green-500 ">{_precio} MATIC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default nftComponent;