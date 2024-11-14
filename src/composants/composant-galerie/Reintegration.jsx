import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

export default function Reintegration() {
  return (
    <div className="relative flex justify-center items-center py-12 bg-lime-100">
      <div className="absolute bg-black text-white p-2 px-4 rounded-full flex items-center left-0 top-1/2 hidden md:flex transform rotate-90 -translate-y-1/2">
        <div className="flex flex-col items-center ">
          <MdEmail />
          <span className="text-md">
            <p className="">Buletin</p>
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-3xl mb-4 text-center pt-9">
          Réintègre la communauté !
        </h1>
        <p className="pb-5 text-center">
          Conseils, opportunités et collaboration directement dans votre boîte
          mail.
        </p>
        <div className="flex justify-center px-2 py-2 items-center bg-black rounded-full">
          <input
            type="email"
            placeholder="ton adresse mail ici."
            className="bg-black focus:outline-none text-white items-center "
          />
          <button className="rounded-full h-10 w-10 hover:bg-gray-800 p-2 bg-white text-black ">
            <GiCheckMark />
          </button>
        </div>
      </div>
    </div>
  );
}
