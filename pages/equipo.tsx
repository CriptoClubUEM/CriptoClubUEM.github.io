import MainLayout from "../components/MainLayout";
import styles from "../styles/mintPage.module.css";
import EquipoItem from "../components/equipoItem";
import equipo from "../data/equipo";

const CollectionPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-row sm:items-center mt-6">
        <div className={styles.rectangulo}></div>
        <h1 className="text-3xl font-bold ml-4">EQUIPO DE TRABAJO</h1>
      </div>
      <div className="mx-4 sm:mx-10 flex flex-wrap justify-center gap-4">
        {equipo.map((persona, index) => (
          <EquipoItem
            key={index}
            _nombre={persona.nombre}
            _rol={persona.rol}
            _descripcion={persona.descripcion}
            _img={persona.url}
          />
        ))}
      </div>
      <div className="my-10">
        <p className="mx-4 sm:mx-44 text-lg">Con la colaboración de:</p>
        <div className="mx-4 sm:mx-44 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 my-10">
          <img src="./logouem.png" className="w-full mx-auto" />
          <img src="./criptoclub.png" className="w-full mx-auto" />
          <img src="./antoniocamarologo.png" className="w-full mx-auto" />
        </div>
      </div>
    </MainLayout>
  );
};

export default CollectionPage;
