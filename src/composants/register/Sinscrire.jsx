import NavbarLogin from "../NavbarLogin/NavbarLogin";


export default function Sinscrire(props) {
    return (
        <div className="">
            <div>
                <NavbarLogin />
            </div>
            <div className="flex my-20  items-center  justify-evenly  ">
                <div className=" flex items-center    rounded-lg md:h-screen ">
                    <div class="w-full  bg-white p-8 rounded-lg ">
                        <h2 class="text-3xl font-bold text-gray-900">Créez-vous un Compte ?</h2>
                        <p class="mt-2 text-sm text-gray-600">Qui êtes vous ?</p>
                        <div>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Profession</label>
                                    <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white 
                    rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                                        <option value="">Sélectionnez votre profession</option>
                                        <option value="Eleveur">Eleveurs</option>
                                        <option value="Maraichers">Maraichers</option>
                                        <option value="Fromagers">Fromagers</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Nom</label>
                                    <input id="nom" type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md
                             shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value="" />
                                </div>
                                <div>
                                    <label  className="block text-sm font-medium text-gray-700">Prénom</label>
                                    <input id="prenom" type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300
                                 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value="" />
                                </div>
                                <div>
                                    <label  className="block text-sm font-medium text-gray-700">Email</label>
                                    <input id="email" type="email" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value="" />
                                </div>
                                <div>
                                    <label  className="block text-sm font-medium text-gray-700">Password</label>
                                    <input id="password" type="password" className="mt-1 block w-full py-2 px-3 border border-gray-300 
                                        rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value="" />
                                </div>
                                <div>
                                    <label  className="block text-sm font-medium text-gray-700">Pays</label>
                                    <select id="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none 
                                            focus:ring-green-500 focus:border-green-500">
                                        <option value="France métropolitaine">France métropolitaine</option>
                                        <option value="Guadeloupe">Guadeloupe</option><option value="Martinique">Martinique</option>
                                        <option value="Guyane">Guyane</option><option value="La Réunion">La Réunion</option>
                                        <option value="Mayotte">Mayotte</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Téléphone portable</label><div className="flex space-x-2">
                                        <input id="indicatif" type="text" className="mt-1 w-1/4 py-2 px-3 border border-gray-300 
                                                        rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value="+33" />
                                        <input id="phone" type="text" className="mt-1 w-3/4 py-2 px-3 border border-gray-300 rounded-md 
                                                        shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value="" />
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-lime-500 text-black py-2 px-4 rounded-md 
                                                        shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">Continuer</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Image section */}

                <img
                    alt=""
                    src={props.img}
                    className="rounded-lg shadow-lg hidden md:block  md:w-[550px] bg-black h-screen "
                />
            </div>
        </div>
    );
}
