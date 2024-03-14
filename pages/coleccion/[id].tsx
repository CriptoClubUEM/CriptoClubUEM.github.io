import { useRouter } from "next/router";

const CollectionItemSpecif = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Detalles del NFT con ID {id}</h1>
      {/* Agrega aquí el contenido de la página */}
    </div>
  );
};

export default CollectionItemSpecif;
