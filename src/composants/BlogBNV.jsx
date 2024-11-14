import CarteBnv from "./SectionBVN/CarteBnv";
import SectionBvn from "./SectionBVN/SectionBvn";
import { BsCircleFill } from "react-icons/bs";
import Image2 from "../assets/propose1.46578ef289f25658026b.png"

export default function BlogBNV() {
    return (
        <div className="mb-5 bg-[#F3F4F6]">
            <SectionBvn
                bgImg="bg-img-blog"
                title="Bienvenue sur fresh"
                text="La solution pour accéder à des produits locaux en entreprise. Savourez la qualité. Vivez la fraîcheur."
            />
            <div className="flex mx-14 md:max-h-[466px]">   
                <CarteBnv
                    bgCard="bg-gray-300 items-center min-h-96"
                    largeurImg="md:w-4/12"
                    height = "h-100 md:min-h-100"
                    header=<>
                        <span className="text-white bg-black px-3 py-1 rounded-full ">Processus</span>
                        <span className="text-5xl text-black"><BsCircleFill /></span>
                    </>
                    title=<h1 className="text-2xl fs-bold font-semibold text-black uppercase">
                        CHOISISSEZ.
                    </h1>
                    text=<p className=" md:text-sm lg:text-base pr-1 text-black mt-4 font-normal font-sans leading-6 mb-5">
                        Bienvenue sur notre blog culinaire dédié à la découverte et à la valorisation des produits 
                        locaux ! Notre mission est de vous inspirer à cuisiner de manière durable tout en soutenant 
                        l’économie locale. Plongez dans un univers gastronomique où chaque plat raconte une histoire 
                        de terroir et de tradition, et où chaque bouchée est un pas vers un mode de vie plus 
                        respectueux de l’environnement. Rejoignez-nous pour célébrer la richesse et la diversité des 
                        saveurs locales !
                    </p>
                    span= <a className="text-blue-600 text-md">Voir plus</a>

                    image=<img className="w-100 h-100 object-cover" src={Image2} alt="profile-picture" />
                />
            </div>
        </div>
    )
}
