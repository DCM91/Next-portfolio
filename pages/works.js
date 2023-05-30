import { Layout } from "@/components/Layout"
import Image from "next/image"

export default function Works() {
  return (
    <Layout title="Dcm91Portfolio - Works">
      <div className="flex h-fit px-10 pb-4">
        <div className="border-solid border-2 border-orange-900 flex">
          <Image src={"/projects/skuadlack.png"} width={300} height={300} alt="kakaka" />
        </div>
        <div className="border-solid border-2 border-orange-900 flex">
          <Image src={"/projects/blockbuster.png"} width={300} height={300} alt="kakaka" />
        </div>
        <div className="border-solid border-2 border-orange-900 flex">
          <Image src={"/projects/pokedex.png"} width={300} height={300} alt="kakaka" />
        </div>
        <div className="border-solid border-2 border-orange-900 flex">
          <Image src={"/projects/calculator.png"} width={300} height={300} alt="kakaka" />
        </div>
      </div> 
    </Layout>
  )
}
