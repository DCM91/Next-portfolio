import { Layout } from "@/components/Layout"
import Image from "next/image"

export default function Works() {
  return (
    <Layout title="Dcm91Portfolio - Works">
      <div className="flex flex-wrap h-fit px-10 pb-1">
        <div className="border-solid border-2 border-orange-900 m-1">
          <Image src={"/projects/skuadlack.png"} width={300} height={300} alt="kakaka" />
        </div>
        <div className="border-solid border-2 border-orange-900 m-1">
          <Image src={"/projects/blockbuster.png"} width={300} height={300} alt="kakaka" />
        </div>
        <div className="border-solid border-2 border-orange-900 m-1">
          <Image src={"/projects/pokedex.png"} width={300} height={300} alt="kakaka" />
        </div>
        <div className="border-solid border-2 border-orange-900 m-1 flex">
          <Image src={"/projects/internacionalizacion.png"} width={300} height={300} alt="kakaka" />
        </div>






        <div className="border-solid border-2 border-orange-900 m-1">
          <Image src={"/projects/skuadlack.png"} width={300} height={300} alt="kakaka" />
        </div>
        <div className="border-solid border-2 border-orange-900 m-1">
          <Image src={"/projects/blockbuster.png"} width={300} height={300} alt="kakaka" />
        </div>
        <div className="border-solid border-2 border-orange-900 m-1">
          <Image src={"/projects/pokedex.png"} width={300} height={300} alt="kakaka" />
        </div>
        <div className="border-solid border-2 border-orange-900 m-1 flex">
          <Image src={"/projects/internacionalizacion.png"} width={300} height={300} alt="kakaka" />
        </div>
      </div> 
    </Layout>
  )
}
