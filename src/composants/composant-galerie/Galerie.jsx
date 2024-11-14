import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ImgPrincipale from "../../assets/image17.4e45707a0358e634c70a.png";
import ImageEnhaut from "../../assets/image18.df45539ad15fede22eff.png";
import ImageEnbas from "../../assets/image19.5d6fbfb542a929454ac2.png";
import Reintegration from "./Reintegration";

export default function Galerie() {
  return (
    <div>
      <div className="bg-gray-100 pb-20">
        <h1 className="text-3xl text-center pt-9">Galerie</h1>
        <div className="flex justify-center pt-10">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-cyan-950 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 rounded-full shadow"
          >
            Nos Réseaux
          </button>
          <div className="flex space-x-4 text-2xl pt-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center mb-8 p-7">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="relative">
              <img
                src={ImgPrincipale}
                alt="Image principale"
                className="rounded-lg shadow-lg "
              />
              <img
                src={ImageEnhaut}
                alt="Image en haut à droite"
                className="absolute top-0 right-0 w-1/4 rounded-lg shadow-lg transform translate-x-1/4 -translate-y-1/4"
              ></img>
              <img
                src={ImageEnbas}
                alt="Image en bas à gauche"
                className="absolute bottom-0 left-0 w-1/4 rounded-lg shadow-lg transform -translate-x-1/4 translate-y-1/4"
              ></img>
            </div>
          </div>
        </div>
        <p className="text-1xl text-center font-bold">LES ACTIONS EN IMAGES</p>
      </div>
      <div>
        <h1 className="text-3xl text-center pt-14">Des questions ?</h1>
        <div className="flex justify-center pt-7 pb-14">
          <button
            type="button"
            className=" py-2.5 px-5 me-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-lime-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 rounded-full shadow"
          >
            J'accéde a la FAQ
          </button>
        </div>
      </div>
      <div className="relative py-12 bg-lime-100 flex justify-center items-center">
        <div className="absolute left-0 top-1/2 hidden md:flex transform rotate-90 -translate-y-1/2 bg-black text-white py-2 px-4 rounded-full flex items-center">
          <div className="flex flex-col items-center transform origin-bottom-left">
            <MdEmail />
            <span className="text-md">
              <p className="fo">Buletin</p>
            </span>
          </div>
        </div>
        <Reintegration />
      </div>
    </div>
  );
}
