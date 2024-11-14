import React from 'react'
import { GiCheckMark } from "react-icons/gi";

export default function Reintegration() {
  return (
    <div>
      <h1 className="text-3xl mb-4 text-center pt-9">
        Réintègre la communauté !
      </h1>
      <p className="pb-5 text-center">
        Conseils, opportunités et collaboration directement dans votre boîte
        mail.
      </p>
      <div className="flex justify-center bg-black rounded-full px-2 py-2 items-center">
        <input
          type="email"
          placeholder="ton adresse mail ici."
          className="bg-black text-white items-center focus:outline-none"
        />
        <button className="p-2 bg-white text-black rounded-full h-10 w-10 hover:bg-gray-800">
          <GiCheckMark />
        </button>
      </div>
    </div>
  );
}
