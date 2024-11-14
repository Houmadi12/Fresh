import NavbarLogin from "../NavbarLogin/NavbarLogin";
export default function Register() {
    return (
      <>
      <div>
        <NavbarLogin />
      </div>
      <div className="flex ag  my-10 items-center  justify-evenly ">
        <div className="  md:w-[550px] px-4  rounded-lg md:h-screen py-3">
          <h1 className="text-4xl font-bold  text-gray-900  mb-4">Connexion</h1>
          <p className=" text-gray-700 mb-6">
            Mettez vous en relation rapidement !
          </p>

          <form className="space-y-3">
            {/* Email */}
            <div>
              <label
                htmlFor="mail"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="mail"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre email"
              />
            </div>

            {/* Mot de passe */}
            <div>
              <label
                htmlFor="motdepasse"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="motdepasse"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre mot de passe"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="stay-logged-in"
                className="h-4 w-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <label
                htmlFor="stay-logged-in"
                className="ml-2 text-sm text-gray-600"
              >
                Laisser la session ouverte
              </label>
            </div>
            <div className="flex items-center">
              <a href="" className="text-gray-700 text-sm">
                S'inscrire
              </a>
            </div>

            {/* Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Se connecter
              </button>
            </div>
          </form>

          <div className="mt-3 text-center text-sm text-gray-600">
            <a href="#" className="text-gray-700 hover:underline">
              Vous avez oublié votre mot de passe ?
            </a>
          </div>
        </div>

        {/* Image section */}

        <img
          src="https://img.freepik.com/photos-premium/mains-males-montrant-aliments-pour-animaux-domestiques_257688-1555.jpg?ga=GA1.1.688398380.1730810617&semt=ais_hybrid"
          alt=""
          className="rounded-lg shadow-lg hidden md:block  md:w-[550px] bg-black h-screen "
        />
      </div>
    </>
    );
  }
  