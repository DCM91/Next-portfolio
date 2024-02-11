import { Layout } from "@/components/Layout";
import Image from "next/image";
import { BiStar } from "react-icons/bi";
import { useState } from "react";
import { FiLink } from "react-icons/fi";
import { DiGithub } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/router"
import en from "@/languages/en"
import es from "@/languages/es"
import cat from "@/languages/cat"

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
  const newStyle = 'grid place-items-center m-2 p-2 transition-all duration-3000s ease-in-out'

  const router = useRouter()
  let t

  switch (router.locale) {
    case 'en':
      t = en
      break
    case 'es':
      t = es
      break
    case 'cat':
      t = cat // Añade la traducción al catalán (cat) en la variable cat correspondiente
      break
    default:
      t = en // Establece un idioma predeterminado en caso de que no se encuentre una traducción específica
      break
  }

  const handleSinIgual = () => {
    setclassNameSinIgual((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle} w-80 `
        : "grid  m-2 p-2"
    );
    setshowDescSinIgual(!showDescSinIgual);
  };

  const handlePayf = () => {
    setclassNamePayf((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle} w-80 `
        : "grid  m-2 p-2"
    );
    setshowDescPayf(!showDescPayf);
  };
  const handleSkuadlack = () => {
    setclassNameSkuadlack((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle} w-80 `
        : "grid  m-2 p-2"
    );
    setshowDescSkuadlack(!showDescSkuadlack);
  };
  const handleTypedCinema = () => {
    setclassNameTypedCinema((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle} w-80 `
        : "grid  m-2 p-2"
    );
    setshowDescTypedCinema(!showDescTypedCinema);
  };
  const handlePortfolio = () => {
    setclassNamePortfolio((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle} w-80 `
        : "grid  m-2 p-2"
    );
    setshowDescPortfolio(!showDescPortfolio);
  };
  const handleI18N = () => {
    setclassNameI18N((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle} w-80 `
        : "grid  m-2 p-2"
    );
    setshowDescI18N(!showDescI18N);
  };
  const handleBlockbuster = () => {
    setclassNameBlockbuster((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle} w-80 `
        : "grid  m-2 p-2"
    );
    setshowDescBlockbuster(!showDescBlockbuster);
  };
  const handlePokedex = () => {
    setclassNamePokedex((prevClassName) =>
      prevClassName === "grid  m-2 p-2"
        ? `newClassName ${newStyle} w-80 `
        : "grid  m-2 p-2"
    );
    setshowDescPokedex(!showDescPokedex);
  };

  return (
    <Layout title="Dcm91Portfolio - Works">
      <div className="flex flex-wrap justify-center h-fit px-12 py-10 gap-4">
      <div className="w-full bg-primary h-14 text-center text-black font-bold text-4xl font-serif"><p className="mt-1">Experience</p></div>
        <div onClick={handleSinIgual} className={`${classNameSinIgual} ${cardStyles}`}>
            <Image
              src={"/projects/sinigual.png"}
              width={300}
              height={300}
              alt="loadingError"
            />
            <div className="flex justify-center pt-4">
              <p className="text-lg font-semibold font-serif">SinIgual</p>
            </div>
            <div>
              {showDescSinIgual && (
                <p className="text-center font-semibold font-mono text-warning-content">
                  {t.works.Sinigual}
                </p>
              )}
            </div>
            <div className="flex justify-center pt-4">
              <div className="badge badge-outline p-2 text-lg font-bold "><a target="_blank" rel="noopener noreferrer" href="https://www.sinigual.com">Website</a> <FiLink className="ml-2" /> </div>
            </div>
          </div>

          <div onClick={handlePayf} className={`${classNamePayf} ${cardStyles}`}>
          <Image
            src={"/projects/payf.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-4">
            <p className="text-lg font-semibold font-serif">Payf</p>
          </div>

          <div>
            {showDescPayf && (
              <p className="text-center font-semibold font-mono text-warning-content" >
                {t.works.Payf}
              </p>
            )}
          </div>

          <div className="flex justify-center pt-4">
            <div className="badge badge-outline p-2 text-lg font-bold "><a target="_blank" rel="noopener noreferrer" href="https://payf.es">Website</a> <FiLink className="ml-2" /> </div>
          </div>
        </div>
      <div className="w-full bg-accent h-14 text-center text-black font-bold text-4xl font-serif"><p className="mt-1">Projects</p></div>

        <div onClick={handleSkuadlack} className={`${classNameSkuadlack} ${cardStyles}`}>
          <Image
            src={"/projects/skuadlack.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-4">
            <p className="text-lg font-semibold font-serif">Skuadlack</p>
          </div>
          <div>
          {showDescSkuadlack && (
            <p className="text-center font-semibold font-mono text-warning-content" >
              {t.works.Skuadlack}
            </p>
          )}
          </div>
          <div className="flex justify-center pt-4">
            <div className="badge badge-outline p-2 text-lg font-bold "><a target="_blank" rel="noopener noreferrer" href="https://github.com/nds-fsd/slack">Github</a> <BsGithub className="ml-2" /> </div>
          </div>
        </div>

        <div onClick={handleTypedCinema} className={`${classNameTypedCinema} ${cardStyles}` }>
          <Image
            src={"/projects/typed.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-4">
            <p className="text-lg font-semibold font-serif">TypedCiema</p>
          </div>
          {showDescTypedCinema && (
            <p className="text-center font-semibold font-mono text-warning-content" >
              {t.works.TypedCinema}
            </p>
          )}
          <div className="flex justify-center pt-4">
            <div className="badge badge-outline p-2 text-lg font-bold "><a target="_blank" rel="noopener noreferrer" href="https://github.com/DCM91/next.tsx-cinema">Github</a> <BsGithub className="ml-2" /> </div>
          </div>
          <div className="flex justify-center pt-4">
            <div className="badge badge-outline p-2 text-lg font-bold "><a target="_blank" rel="noopener noreferrer" href="https://next-tsx-cinema.vercel.app">Website</a> <FiLink className="ml-2" /> </div>
          </div>
        </div>

        <div onClick={handlePortfolio} className={`${classNamePortfolio} ${cardStyles}`}>
          <Image
            src={"/projects/portfolio.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-4">
            <p className="text-lg font-semibold font-serif">My first Portfolio</p>
          </div>
          {showDescPortfolio && (
            <p className="text-center font-semibold font-mono text-warning-content" >
              {t.works.Portfolio}
            </p>
          )}
          <div className="flex justify-center pt-4">
            <div className="badge badge-outline p-2 text-lg font-bold "><a target="_blank" rel="noopener noreferrer" href="https://payf.es">Github</a> <BsGithub className="ml-2" /> </div>
          </div>
          <div className="flex justify-center pt-4">
            <div className="badge badge-outline p-2 text-lg font-bold "><a target="_blank" rel="noopener noreferrer" href="https://payf.es">Website</a> <FiLink className="ml-2" /> </div>
          </div>
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
            <p className="text-center font-semibold font-mono text-warning-content" >
              {t.works.I18N}
            </p>
          )}
          <div className="flex justify-center pt-4">
            <div className="badge badge-outline p-2 text-lg font-bold "><a target="_blank" rel="noopener noreferrer" href="https://payf.es">Github</a> <BsGithub className="ml-2" /> </div>
          </div>
        </div>

        <div onClick={handleBlockbuster} className={`${classNameBlockbuster} ${cardStyles}`}>
          <Image
            src={"/projects/blockbuster.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-4">
            <p className="text-lg font-semibold font-serif">Blockbuster</p>
          </div>

          {showDescBlockbuster && (
            <p className="text-center font-semibold font-mono text-warning-content" >
              {t.works.Blockbuster}
            </p>
          )}
          <div className="flex justify-center pt-4">
            <div className="badge badge-outline p-2 text-lg font-bold "><a target="_blank" rel="noopener noreferrer" href="https://payf.es">Github</a> <BsGithub className="ml-2" /> </div>
          </div>
        </div>

        <div onClick={handlePokedex} className={`${classNamePokedex} ${cardStyles}`}>
          <Image
            src={"/projects/pokedex.png"}
            width={300}
            height={300}
            alt="loadingError"
          />
          <div className="flex justify-center pt-4">
            <p className="text-lg font-semibold font-serif">Pokédex</p>
          </div>

          {showDescPokedex && (
            <p className="text-center font-semibold font-mono text-warning-content">
              {t.works.Pokedex}
            </p>
          )}
          <div className="flex justify-center pt-4">
            <div className="badge badge-outline p-2 text-lg font-bold "><a target="_blank" rel="noopener noreferrer" href="https://payf.es">Github</a> <BsGithub className="ml-2" /> </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
