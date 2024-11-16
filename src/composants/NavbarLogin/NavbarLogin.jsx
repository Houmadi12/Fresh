
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { useState } from "react";



export default function NavbarLogin() {
  const[Modalopen,setModalopen]=useState(false)
  const ouvrirModal = (e) => {e.preventDefault()
      setModalopen((prev)=> { return !prev})};
  return (
    <div className=" shadow">
      <nav className="bg-white  ">
        <div className=" flex flex-wrap  items-center justify-between mx-auto p-4">
        <Link to="/"> <img src={Logo}></img></Link>   

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
            onClick={ouvrirModal} aria-controls="mobile-menu" aria-expanded={Modalopen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" >
            <ul className=" flex flex-col p-4 md:p-0 mt-4 border border-gray-100 roundedLg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="text-black hover:text-lime-500 transition "
                  aria-current="page"
                >
                  à propos
                </a>
              </li>
              <li>
                <Link
                  to="/produit"
                  className="text-black hover:text-lime-500 transition"
                >
                  Nos producteur
                </Link>
              </li>
              <li>
                <Link
                  to="/compte"
                  className="text-black hover:text-lime-500 transition"
                >
                  Compte
                </Link>
              </li>
              <li>
              <Link to="/partanariat" className="bg-lime-500 text-black px-4 py-2 rounded-full shadow hover:bg-lime-500 transition">Faire un Partenariat</Link>

              </li>
            </ul>
          </div>
          {Modalopen && (
                <div className=" w-full md:hidden md:w-auto" id="mobile-menu">
                <ul className=" flex flex-col p-4 md:p-0 mt-4 border border-gray-100 roundedLg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
                  <li  className='my-1'>
                    <a
                      href="#"
                      className="text-black hover:text-lime-500 transition "
                      aria-current="page"
                    >
                      à propos
                    </a>
                  </li>
                  <li  className='my-1'>
                    <Link
                      to="/produit"
                      className="text-black hover:text-lime-500 transition"
                    >
                      Nos producteur
                    </Link>
                  </li>
                  <li  className='my-1'>
                    <Link
                      to="/compte"
                      className="text-black hover:text-lime-500 transition"
                    >
                      Compte
                    </Link>
                  </li>
                  <li className='my-3'>
                  <Link to="/partanariat" className="bg-lime-500 text-black px-4 py-2 rounded-full  shadow hover:bg-lime-500 transition">Faire un Partenariat</Link>
    
                  </li>
                </ul>
              </div>
              )}
        </div>
      </nav>
    </div>
  );
}
