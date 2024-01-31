import { Layout } from "@/components/Layout";
import Image from "next/image";
import { BiStar } from "react-icons/bi";
import { useState } from "react";

export default function Works() {
  const [classNameSinIgual, setclassNameSinIgual] = useState("grid  m-2 p-2");
  const [showDescSinIgual, setshowDescSinIgual] = useState(false);
  const [classNamePayf, setclassNamePayf] = useState("grid  m-2 p-2");
  const [showDescPayf, setshowDescPayf] = useState(false);
  const [classNameSkuadlack, setclassNameSkuadlack] = useState("grid  m-2 p-2");
  const [showDescSkuadlack, setshowDescSkuadlack] = useState(false);
  const [classNameTypedCinema, setclassNameTypedCinema] =useState("grid  m-2 p-2");
  const [showDescTypedCinema, setshowDescTypedCinema] = useState(false);
  const [classNamePortfolio, setclassNamePortfolio] = useState("grid  m-2 p-2");
  const [showDescPortfolio, setshowDescPortfolio] = useState(false);
  const [classNameI18N, setclassNameI18N] = useState("grid  m-2 p-2");
  const [showDescI18N, setshowDescI18N] = useState(false);
  const [classNameBlockbuster, setclassNameBlockbuster] =useState("grid  m-2 p-2");
  const [showDescBlockbuster, setshowDescBlockbuster] = useState(false);
  const [classNamePokedex, setclassNamePokedex] = useState("grid  m-2 p-2");
  const [showDescPokedex, setshowDescPokedex] = useState(false);

  const cardStyles = "bg-secondary hover:bg-secondary text-white shadow-lg rounded-lg transition-colors duration-500";
  const newStyle = 'grid place-items-center  m-2 p-2 transition-all duration-3000s ease-in-out'

  const handleSinIgual = () => {
    setclassNameSinIgual((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle}`
        : "grid  m-2 p-2"
    );
    setshowDescSinIgual(!showDescSinIgual);
  };

  const handlePayf = () => {
    setclassNamePayf((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle}`
        : "grid  m-2 p-2"
    );
    setshowDescPayf(!showDescPayf);
  };
  const handleSkuadlack = () => {
    setclassNameSkuadlack((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle}`
        : "grid  m-2 p-2"
    );
    setshowDescSkuadlack(!showDescSkuadlack);
  };
  const handleTypedCinema = () => {
    setclassNameTypedCinema((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle}`
        : "grid  m-2 p-2"
    );
    setshowDescTypedCinema(!showDescTypedCinema);
  };
  const handlePortfolio = () => {
    setclassNamePortfolio((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle}`
        : "grid  m-2 p-2"
    );
    setshowDescPortfolio(!showDescPortfolio);
  };
  const handleI18N = () => {
    setclassNameI18N((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle}`
        : "grid  m-2 p-2"
    );
    setshowDescI18N(!showDescI18N);
  };
  const handleBlockbuster = () => {
    setclassNameBlockbuster((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle}`
        : "grid  m-2 p-2"
    );
    setshowDescBlockbuster(!showDescBlockbuster);
  };
  const handlePokedex = () => {
    setclassNamePokedex((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle}`
        : "grid  m-2 p-2"
    );
    setshowDescPokedex(!showDescPokedex);
  };

  return (
    <Layout title="Dcm91Portfolio - Works">
      <div className="flex flex-wrap justify-center h-fit px-12 py-10 gap-4">
      <div className="w-full bg-primary h-14 text-center text-black font-bold text-4xl">Experience</div>
        <div onClick={handleSinIgual} className={`${classNameSinIgual} ${cardStyles}`}>
            <Image
              src={"/projects/sinigual.png"}
              width={300}
              height={300}
              alt="loadingError"
            />
            <div className="flex justify-center pt-4">
              <p>SinIgual</p>
            </div>
            {showDescSinIgual && (
              <p className="text-center">
                SinIgual es un servicio especializado en Software de gestión para talleres y concesionarios.
              </p>
            )}
          </div>

          <div onClick={handlePayf} className={`${classNamePayf} ${cardStyles}`}>
          <Image
            src={"/projects/payf.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-4">
            <p>Payf</p>
          </div>
          {showDescPayf && (
            <p className="text-center">
              Payf es una aplicacion de transeferencia de pagos mediante sistemas biometricos.
            </p>
          )}
        </div>
      <div className="w-full bg-accent h-14 text-center text-black font-bold text-4xl">Projects</div>

        <div onClick={handleSkuadlack} className={`${classNameSkuadlack} ${cardStyles}`}>
          <Image
            src={"/projects/skuadlack.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-4">
            <p>Skuadlack</p>
          </div>
          {showDescSkuadlack && (
            <p className="text-center">
              Skuadlack es una aplicacion entregada como TFM, se trata de un clon de Slack totalmente funcional.
            </p>
          )}
        </div>

        <div onClick={handleTypedCinema} className={`${classNameTypedCinema} ${cardStyles}` }>
          <Image
            src={"/projects/typed.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-4">
            <p>TypedCiema</p>
          </div>
          {showDescTypedCinema && (
            <p className="text-center">TypedCinema es una migracion de mi proyecto BlockBuster a TypeScript y mis primeras pruebas con TailwindCSS</p>
          )}
        </div>

        <div onClick={handlePortfolio} className={`${classNamePortfolio} ${cardStyles}`}>
          <Image
            src={"/projects/portfolio.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-4">
            <p>My first Portfolio</p>
          </div>
          {showDescPortfolio && (
            <p className="text-center">Este es mi primer portfolio, en él utilicé diversos frameworks de diseño ademas de servicio de recepción de emails</p>
          )}
        </div>

        <div onClick={handleI18N} className={`${classNameI18N} ${cardStyles}`}>
          <Image
            src={"/projects/internacionalizacion.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-5">
            <p>I18N internationalization</p>
          </div>

          {showDescI18N && (
            <p className="text-center">I18N es un proyecto que consiste en una plantilla con diversas funcionalidades para proyectos futuros, tales como el cambio entre diferentes idiomas y estilos de diseño.</p>
          )}
        </div>

        <div onClick={handleBlockbuster} className={`${classNameBlockbuster} ${cardStyles}`}>
          <Image
            src={"/projects/blockbuster.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-4">
            <p>Blockbuster</p>
          </div>

          {showDescBlockbuster && (
            <p className="text-center">Blockbuster es mi primer proyecto Full Stack; es una biblioteca de películas donde puedes guardar películas o series con descripción y año de lanzamiento.</p>
          )}
        </div>

        <div onClick={handlePokedex} className={`${classNamePokedex} ${cardStyles}`}>
          <Image
            src={"/projects/pokedex.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-4">
            <p>Pokédex</p>
          </div>

          {showDescPokedex && (
            <p className="text-center">Pokedex es mi primer proyecto puramente de Front-End que realiza solicitudes a una API (pokeAPI), mostrando mis primeros pasos con un sistema CRUD.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
