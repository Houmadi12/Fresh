import NavbarLogin from "../NavbarLogin/NavbarLogin";
import Image from '../Produits/images/partenariat1.png'



export default function Partenaire(props) {
    return (
        <div className="">
            <div>
                <NavbarLogin />
            </div>
            <div className="flex my-20  items-center  justify-evenly  ">
                <div className=" flex items-center    rounded-lg md:h-screen ">
                    <div className="w-full  bg-white p-8 rounded-lg ">
                        <h2 className="text-3xl font-bold text-gray-900">Créez-vous un Compte ?</h2>
                        <p className="mt-2 text-sm text-gray-600">Qui êtes vous ?</p>
                        <div>
                            <form className="space-y-4">
                                <div>
                                    <select id="producteur" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none
                                 focus:ring-green-500 focus:border-green-500">
                                        <option value="">Sélectionnez le Producteur</option>
                                        <option value="Eleveur">Eleveurs</option>
                                        <option value="Maraichers">Maraichers</option>
                                        <option value="Fromagers">Fromagers</option>
                                    </select>
                                    <select id="type de produit" className="mt-1 block w-full py-2 px-3 border
                                     border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                                     focus:border-green-500">
                                        <option value="">Sélectionnez le type de produit</option>
                                        <option value="Eleveur">Eleveurs</option>
                                        <option value="Maraichers">Maraichers</option>
                                        <option value="Fromagers">Fromagers</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Volume</label>
                                    <input id="volume" type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300
                                             rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value="" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Fréquence de livraisons</label>
                                    <input id="frequence_livraison" type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300
                                                     rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value="" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Laissez un commentaire pour plus de détails.</label>
                                    <input id="commentaire" type="textarea" className="mt-1 block w-full h-32 py-2 px-3 border border-gray-300
                                                             rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value="" />
                                </div>
                                <button type="submit" className="w-full bg-lime-500 text-black py-2 px-4 rounded-md shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 
                                                                focus:ring-offset-2 focus:ring-lime-500">Envoyer</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Image section */}

                <img
                    alt=""
                    src={Image}
                    className="rounded-lg shadow-lg hidden md:block  md:w-[550px] bg-black h-screen "
                />
            </div>
        </div>
    );
}
