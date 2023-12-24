import { Layout } from "@/components/Layout";
import Image from "next/image";
import { BiStar } from "react-icons/bi";
import { useState } from "react";

export default function Works() {
  const [classNamePayf, setclassNamePayf] = useState("grid  m-1 p-1");
  const [showDescPayf, setshowDescPayf] = useState(false);
  const [classNameSkuadlack, setclassNameSkuadlack] = useState("grid  m-1 p-1");
  const [showDescSkuadlack, setshowDescSkuadlack] = useState(false);
  const [classNameTypedCinema, setclassNameTypedCinema] =
    useState("grid  m-1 p-1");
  const [showDescTypedCinema, setshowDescTypedCinema] = useState(false);
  const [classNamePortfolio, setclassNamePortfolio] = useState("grid  m-1 p-1");
  const [showDescPortfolio, setshowDescPortfolio] = useState(false);
  const [classNameI18N, setclassNameI18N] = useState("grid  m-1 p-1");
  const [showDescI18N, setshowDescI18N] = useState(false);
  const [classNameBlockbuster, setclassNameBlockbuster] =
    useState("grid  m-1 p-1");
  const [showDescBlockbuster, setshowDescBlockbuster] = useState(false);
  const [classNamePokedex, setclassNamePokedex] = useState("grid  m-1 p-1");
  const [showDescPokedex, setshowDescPokedex] = useState(false);

  const handlePayf = () => {
    setclassNamePayf((prevClassName) =>
      prevClassName === "grid  m-1 p-1"
        ? "newClassName transition-all duration-3000s ease-in-out"
        : "grid  m-1 p-1"
    );
    setshowDescPayf(!showDescPayf);
  };
  const handleSkuadlack = () => {
    setclassNameSkuadlack((prevClassName) =>
      prevClassName === "grid  m-1 p-1"
        ? "newClassName transition-all duration-3000s ease-in-out"
        : "grid  m-1 p-1"
    );
    setshowDescSkuadlack(!showDescSkuadlack);
  };
  const handleTypedCinema = () => {
    setclassNameTypedCinema((prevClassName) =>
      prevClassName === "grid  m-1 p-1"
        ? "newClassName transition-all duration-3000s ease-in-out"
        : "grid  m-1 p-1"
    );
    setshowDescTypedCinema(!showDescTypedCinema);
  };
  const handlePortfolio = () => {
    setclassNamePortfolio((prevClassName) =>
      prevClassName === "grid  m-1 p-1"
        ? "newClassName transition-all duration-3000s ease-in-out"
        : "grid  m-1 p-1"
    );
    setshowDescPortfolio(!showDescPortfolio);
  };
  const handleI18N = () => {
    setclassNameI18N((prevClassName) =>
      prevClassName === "grid  m-1 p-1"
        ? "newClassName transition-all duration-3000s ease-in-out"
        : "grid  m-1 p-1"
    );
    setshowDescI18N(!showDescI18N);
  };
  const handleBlockbuster = () => {
    setclassNameBlockbuster((prevClassName) =>
      prevClassName === "grid  m-1 p-1"
        ? "newClassName transition-all duration-3000s ease-in-out"
        : "grid  m-1 p-1"
    );
    setshowDescBlockbuster(!showDescBlockbuster);
  };
  const handlePokedex = () => {
    setclassNamePokedex((prevClassName) =>
      prevClassName === "grid  m-1 p-1"
        ? "newClassName transition-all duration-3000s ease-in-out"
        : "grid  m-1 p-1"
    );
    setshowDescPokedex(!showDescPokedex);
  };

  return (
    <Layout title="Dcm91Portfolio - Works">
      <div className="flex flex-wrap justify-center h-fit px-10 py-10 gap-3">
        <div onClick={handlePayf} className={classNamePayf}>
          <Image
            src={"/projects/payf.png"}
            width={300}
            height={300}
            alt="kakaka"
          />
          <div className="flex justify-center pt-4">
            <p>Payf</p>
          </div>
          {showDescPayf && (
            <p className="text-center">
              Payf es una aplicacion de pagos biometricos que fue fundada
            </p>
          )}
        </div>

        <div onClick={handleSkuadlack} className={classNameSkuadlack}>
          <Image
            src={"/projects/skuadlack.png"}
            width={300}
            height={300}
            alt="kakaka"
          />
          <div className="flex justify-center pt-4">
            <p>Skuadlack</p>
          </div>
          {showDescSkuadlack && (
            <p className="text-center">
              Skuadlack es una aplicacion entregada como TFM
            </p>
          )}
        </div>

        <div onClick={handleTypedCinema} className={classNameTypedCinema}>
          <Image
            src={"/projects/typed.png"}
            width={300}
            height={300}
            alt="kakaka"
          />
          <div className="flex justify-center pt-4">
            <p>TypedCiema</p>
          </div>
          {showDescTypedCinema && (
            <p className="text-center">TypedCinema es un por de mi trabajo</p>
          )}
        </div>

        <div onClick={handlePortfolio} className={classNamePortfolio}>
          <Image
            src={"/projects/portfolio.png"}
            width={300}
            height={300}
            alt="kakaka"
          />
          <div className="flex justify-center pt-4">
            <p>My first Portfolio</p>
          </div>
          {showDescPortfolio && (
            <p className="text-center">Portfolio es un por de mi trabajo</p>
          )}
        </div>

        <div onClick={handleI18N} className={classNameI18N}>
          <Image
            src={"/projects/internacionalizacion.png"}
            width={300}
            height={300}
            alt="kakaka"
          />
          <div className="flex justify-center pt-5">
            <p>I18N internationalization</p>
          </div>

          {showDescI18N && (
            <p className="text-center">I18N es un por de mi trabajo</p>
          )}
        </div>

        <div onClick={handleBlockbuster} className={classNameBlockbuster}>
          <Image
            src={"/projects/blockbuster.png"}
            width={300}
            height={300}
            alt="kakaka"
          />
          <div className="flex justify-center pt-4">
            <p>Blockbuster</p>
          </div>

          {showDescBlockbuster && (
            <p className="text-center">Blockbuster es un por de mi trabajo</p>
          )}
        </div>

        <div onClick={handlePokedex} className={classNamePokedex}>
          <Image
            src={"/projects/pokedex.png"}
            width={300}
            height={300}
            alt="kakaka"
          />
          <div className="flex justify-center pt-4">
            <p>Pokédex</p>
          </div>

          {showDescPokedex && (
            <p className="text-center">Pokedex es un por de mi trabajo</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
