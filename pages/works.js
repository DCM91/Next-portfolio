import { Layout } from "@/components/Layout"
import Image from "next/image"
import { BiStar } from "react-icons/bi"

export default function Works() {
  return (
    <Layout title="Dcm91Portfolio - Works">
      <div className="flex flex-wrap justify-center h-fit px-10 py-10 gap-3">

          <div 
            onClick={()=>window.my_modal_5.showModal()}
            className="grid border-solid border-2 border-success m-1 p-1 max-w-xs transition duration-300 ease-in-out hover:scale-110" >
              <BiStar className="text-xl text-yellow-400 text-end m-2 w-full" />
              <Image src={"/projects/payf.png"} width={300} height={300} alt="kakaka" />
              <div className="flex justify-center pt-4"><p>Payf</p></div>
          </div>      






        <div className="grid border-solid border-2 border-success m-1 p-4 max-w-xs transition duration-300 ease-in-out hover:scale-110 ">
          <BiStar className="text-xl text-yellow-400 text-end m-2 w-full" />  
          <Image src={"/projects/skuadlack.png"} width={300} height={300} alt="kakaka" />
          <div className="flex justify-center pt-4"><p>Skuadlack</p></div>
        </div>

        <div className="grid border-solid border-2 border-success m-1 p-4 max-w-xs transition duration-300 ease-in-out hover:scale-110">
          <BiStar className="text-xl text-yellow-400 text-end m-2 w-full" />
          <Image src={"/projects/typed.png"} width={300} height={300} alt="kakaka" />
          <div className="flex justify-center pt-4"><p>TypedCiema</p></div>
        </div>
        <div className="grid border-solid border-2 border-success m-1 p-4 max-w-xs transition duration-300 ease-in-out hover:scale-110">
          <Image src={"/projects/portfolio.png"} width={300} height={300} alt="kakaka" />
          <div className="flex justify-center pt-4"><p>My first Portfolio</p></div>
        </div>

        <div className="grid border-solid border-2 border-success m-1 p-4 max-w-xs transition duration-300 ease-in-out hover:scale-110">
          <Image src={"/projects/internacionalizacion.png"} width={300} height={300} alt="kakaka" />
          <div className="flex justify-center pt-5"><p>I18N internationalization</p></div>

        </div>
        <div className="grid border-solid border-2 border-success m-1 p-4 max-w-xs transition duration-300 ease-in-out hover:scale-110">
          <Image src={"/projects/blockbuster.png"} width={300} height={300} alt="kakaka" />
          <div className="flex justify-center pt-4"><p>Blockbuster</p></div>

        </div>
        <div className="grid border-solid border-2 border-success m-1 p-4 max-w-xs transition duration-300 ease-in-out hover:scale-110">
          <Image src={"/projects/pokedex.png"} width={300} height={300} alt="kakaka" />
          <div className="flex justify-center pt-4"><p>Pokédex</p></div>
        </div>

      </div> 
    </Layout>
  )
}
