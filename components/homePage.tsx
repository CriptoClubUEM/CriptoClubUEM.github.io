import style from "@/styles/homePage.module.css";
import Router from "next/router";

const homePage = () => {
  return (
    <div>
      <div className="hero sm:min-h-screen">
        <div className="hero-content flex-col md:flex-col xl:flex-row-reverse w-80 md:w-full">
          <img
            src="heroimage.png"
            className="w-50 mx-auto sm:mt-10 rounded-lg shadow-2xl mr-10 md:mx-auto lg:max-w-md lg:mb-36"
          />
          <div className="sm:mx-10 md:mx-20 lg:mx-10">
            <h1 className="text-3xl sm:text-5xl font-bold">
              Bienvenido a
              <span className="text-[#D22029]">
                <br/>
                Nombres Camaró
              </span>
            </h1>
            <p className="my-3 sm:py-6 sm:mr-28">
              Esta colección te permitirá descubrir la realidad detrás de
              historias llenas de amor, sentimientos y emociones que te harán
              viajar en el tiempo.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button
                onClick={() => Router.push("https://www.crossmint.com/collections/nombres-camar/claim")}
                className="btn btn-outline rounded-[14px] w-[165px] border-black border-4 text-black hover:bg-[#D22029] hover:text-white hover:border-[#D22029]"
              >
                Mint
              </button>
              <button
                onClick={() => Router.push("/coleccion")}
                className="btn btn-primary rounded-[14px] w-[165px] bg-black border-4 border-black hover:bg-[#D22029] hover:border-[#D22029]"
              >
                Ver Colección
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 xl:-mt-24 lg:mb-10 ">
        <a href="#historia">
          <svg
            width="31"
            height="19"
            viewBox="0 0 31 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 18.5573C15.1389 18.5573 14.7886 18.4896 14.4492 18.3542C14.1097 18.2188 13.8281 18.0382 13.6042 17.8125L1.14583 5.35418C0.649306 4.85765 0.401043 4.2257 0.401043 3.45834C0.401043 2.69098 0.649306 2.05904 1.14583 1.56251C1.64236 1.06598 2.27431 0.817719 3.04167 0.817719C3.80903 0.817719 4.44097 1.06598 4.9375 1.56251L15.5 12.125L26.0625 1.56251C26.559 1.06598 27.191 0.817719 27.9583 0.817719C28.7257 0.817719 29.3576 1.06598 29.8542 1.56251C30.3507 2.05904 30.599 2.69098 30.599 3.45834C30.599 4.2257 30.3507 4.85765 29.8542 5.35418L17.3958 17.8125C17.125 18.0833 16.8316 18.2756 16.5156 18.3894C16.1997 18.5031 15.8611 18.5591 15.5 18.5573Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
      <div className="flex justify-center sm:-mt-16 sm:mb-10 md:my-10 lg:my-0"></div>
      <div className="flex sm:mt-6 mt-6" id="historia">
        <div className={`${style.rectangulo} hidden sm:block`}></div>

        <div className={`${style.rectanguloresponsive} sm:hidden`}></div>

        <h1 className="text-3xl font-bold ml-3 mt-3 sm:ml-4 sm:mt-4">
          HISTORIA
        </h1>
      </div>
      <div className="mx-4 sm:mx-[170px] mt-5">
        <p>
          Antonio Camaró es un pintor reconocido que ha sido honrado por la
          UNESCO como el (pintor de la concordia y la paz) debido a su destacada
          trayectoria social y humana. Su trabajo artístico se caracteriza por
          la inclusión de múltiples elementos enigmáticos que invitan al
          espectador a reflexionar mientras contempla sus cuadros. Camaró
          combina de manera artística símbolos, palabras, ecuaciones y otros
          detalles que aportan una profundidad filosófica a sus obras. Su
          habilidad para incitar a los espectadores a pensar profundamente ha
          llevado a que se le catalogue como (El pintor que hace pensar a los
          pensadores). Su enfoque artístico único y su compromiso social han
          sido reconocidos a nivel internacional.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-20 mt-5 gap-6">
          <img src="historiaimg.png"></img>
          <p className="sm:ml-5">
            Antonio se ha dado cuenta que el mundo está en constante evolución y
            por esto ha decidido tomar el gran paso de entrar al mundo digital
            del arte con el objetivo principal de poder transmitir el amor y la
            humanidad en forma de arte.<br></br>Su objetivo principal al
            incursionar en el mundo digital del arte es transmitir el amor y la
            humanidad a través de sus creaciones. Con cada obra que realiza,
            Antonio busca despertar emociones, reflexiones y conexiones en
            aquellos que se sumergen en su universo artístico. Él ve el arte
            como una poderosa herramienta para comunicar mensajes, contar
            historias y expresar la esencia misma de la condición humana.
            <br></br>El mundo digital le brinda a Antonio la libertad de
            experimentar con nuevas técnicas, explorar conceptos innovadores y
            utilizar recursos tecnológicos para enriquecer su obra. Se sumerge
            en la fusión de elementos tradicionales y digitales, creando una
            simbiosis única que refleja su visión del mundo en constante cambio.
          </p>
        </div>
      </div>
    </div>
  );
};
export default homePage;