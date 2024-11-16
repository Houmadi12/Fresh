import NavbarLogin from "../NavbarLogin/NavbarLogin";
import { Link } from 'react-router-dom';


export default function Inscription() {
  return (
    <div className="">
      <div>
        <NavbarLogin />
      </div>
      <div className="flex   my-5 items-center  justify-evenly  ">
        <div className=" flex items-center    rounded-lg md:h-screen ">
          <div class="w-full  bg-white p-8 rounded-lg ">
            <h2 class="text-3xl font-bold text-gray-900">Créez-vous un Compte ?</h2>
            <p class="mt-2 text-sm text-gray-600">Qui êtes vous ?</p>
            <form class="mt-8 space-y-6">
              <div>
                <Link to="/producteur">
                  <button type="submit" class="w-full py-2 px-4 bg-black text-white text-bold rounded-md shadow-sm hover:bg-lime-600 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">Producteur</button>
                </Link>
              </div>
              <div>
                <Link to="/entreprise">
                  <button type="submit" class="w-full py-2 px-4 bg-black text-white text-bold rounded-md
               shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">Entreprise</button>
                </Link>
                </div>
                </form>
                </div>
        </div>

        {/* Image section */}

        <img
          alt=""
          src="https://fresh-site-vitrine.vercel.app/static/media/pageCompte.7bdbc0c2cbfd087c7477.png"
          className="rounded-lg shadow-lg hidden md:block  md:w-[550px] bg-black h-screen "
        />
      </div>
    </div>
  );
}
