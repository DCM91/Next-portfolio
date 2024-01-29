import { useRouter } from "next/router"
import { Layout } from "../components/Layout"
import en from "@/languages/en"
import es from "@/languages/es"
import cat from "@/languages/cat"
import { MdWavingHand } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import { Selector } from "@/components/selector";
import {themeChange} from "theme-change"


export default function Custom404() {
 return (
    <Layout title="Dcm91Portfolio - Not Found">
        <div className="grid py-10 place-items-center h-full">
            <h1 className="py-10">Página no encontrada</h1>
            <p className="py-10">Lo sentimos, pero la página que estás buscando no existe.</p>
            <Link href={"/"} className="py-10">
                <p className="text-blue-600">Volver a la página principal</p>
            </Link>
        </div>
    </Layout>
    
 );
}