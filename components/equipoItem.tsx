import { FC } from "react";

interface Props {
  _nombre: string;
  _rol: string;
  _descripcion: string;
  _img: string;
}

const equipoItem: FC<Props> = ({ _nombre, _rol, _descripcion, _img }) => {
  return (
    <div className="mt-10 w-[30vw]">
      <div className="flex justify-center">
        <div className="avatar justify-center">
          <div className="w-[90%] lg:w-[60%] xl:w-[50%] rounded-full">
            <img src={"./team/" + _img} />
          </div>
        </div>
      </div>
      <div className="text-center mt-4 mb-10">
        <h1 className="text-xl font-bold m-1">{_nombre}</h1>
        <span className="text-[#D22029] font-normal text-lg">{_rol}</span>
        <p className="text-sm">{_descripcion}</p>
      </div>
    </div>
  );
};
export default equipoItem;
