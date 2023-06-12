import { Layout } from "@/components/Layout"
import Image from "next/image"

export default function Works() {
  return (
    <Layout title="Dcm91Portfolio - Works">
      <div className="flex flex-wrap justify-center h-fit px-10 pb-1">
        
      {/* <div className="border-solid border-2 border-orange-900 m-1 max-w-xs transition duration-300 ease-in-out hover:scale-110">
          <Image src={"/projects/payf.jpg"} width={150} height={150} alt="kakaka" />
          <div className="flex justify-center"><p>Payf</p></div>
        </div> */}

        <div className="border-solid border-2 border-orange-900 m-1 max-w-xs transition duration-300 ease-in-out hover:scale-110 ">
          <Image src={"/projects/skuadlack.png"} width={300} height={300} alt="kakaka" />
          <div className="flex justify-center"><p>Skuadlack</p></div>
        </div>

        <div className="border-solid border-2 border-orange-900 m-1 max-w-xs transition duration-300 ease-in-out hover:scale-110">
          <Image src={"/projects/typed.png"} width={300} height={300} alt="kakaka" />
          <div className="flex justify-center"><p>TypedCiema</p></div>
        </div>
        <div className="border-solid border-2 border-orange-900 m-1 max-w-xs transition duration-300 ease-in-out hover:scale-110">
          <Image src={"/projects/portfolio.png"} width={300} height={300} alt="kakaka" />
          <div className="flex justify-center"><p>My first Portfolio</p></div>
        </div>

        <div className="border-solid border-2 border-orange-900 m-1 max-w-xs transition duration-300 ease-in-out hover:scale-110">
          <Image src={"/projects/internacionalizacion.png"} width={300} height={300} alt="kakaka" />
          <div className="flex justify-center"><p>I18N internationalization</p></div>

        </div>
        <div className="border-solid border-2 border-orange-900 m-1 max-w-xs transition duration-300 ease-in-out hover:scale-110">
          <Image src={"/projects/blockbuster.png"} width={300} height={300} alt="kakaka" />
          <div className="flex justify-center"><p>Blockbuster</p></div>

        </div>
        <div className="border-solid border-2 border-orange-900 m-1 max-w-xs transition duration-300 ease-in-out hover:scale-110">
          <Image src={"/projects/pokedex.png"} width={300} height={300} alt="kakaka" />
          <div className="flex justify-center"><p>Pokédex</p></div>
        </div>

      </div> 
    </Layout>
  )
}
