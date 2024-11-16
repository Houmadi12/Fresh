import CarteBnv from "./CarteBnv";
import image1 from "../../assets/propose1.46578ef289f25658026b.png"
import image2 from "../../assets/propose2.009bd8c8722585dc2410.png"

export default function SectionCarte() {
    return (
        <div className="flex flex-col md:flex-row gap-8 m-10">
            <div className="flex justify-center items-center md:w-6/12">
                <CarteBnv
                    bgCard="bg-gray-100"
                    largeurImg="md:w-4/12"
                    header=<>
                        <span className="text-white bg-black px-3 py-1 rounded-full ">Concept</span>
                        <span>🍃</span>
                    </>
                    title=<h1 className="text-2xl fs-bold font-semibold text-black uppercase">
                        Ce qu'on propose
                    </h1>
                    text=<p className="md:text-sm lg:text-base pr-1 text-gray-700 mt-4 font-normal font-sans leading-6">
                        Nous mettons en relation les producteurs locaux et entreprises.
                        Cette initiative permet aux salariés
                        d'accéder facilement à des produits locaux de qualité.
                    </p>

                    image=<img className="w-full h-full object-cover" src={image1} alt="profile-picture" />
                />
            </div>
            <div className="flex justify-center items-center md:w-6/12">
                <CarteBnv
                    bgCard="bg-black"
                    largeurImg="md:w-4/12"
                    header=<>
                        <span className="text-black bg-[#84CC16] px-3 py-1 rounded-full ">Processus</span>
                    </>
                    title=<h1 className="text-2xl fs-bold font-semibold text-white uppercase">
                        CHOISISSEZ.
                    </h1>
                    text=<p className=" md:text-sm lg:text-base pr-1 text-white mt-4 font-normal font-sans leading-6">
                       Les entreprises peuvent soutenir l'économie locale tout en offrant des avantages à 
                       leurs employés.
                    </p>

                    image=<img className=" w-full h-full object-cover" src={image2} alt="profile-picture" />
                />
            </div>
        </div>

    )
}
