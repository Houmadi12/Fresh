import React from 'react';
import partenariat1 from './images/partenariat1.png';
import partenariat2 from './images/partenariat2.png';
import partenariat3 from './images/partenariat3.png';
import ginaar from './images/ginaar.png';
import profils from './images/profil.png';
import international from './images/internationale.png';
import microsoft from './images/microsoft.png';
import samsung from './images/samsung.png';

const NosProduits = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-8 p-6">
          <div className="flex-1 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900">Jean Dupont</h2>
            <p className="mt-4 text-base text-gray-500">
              membre depuis 2023 / 20 ans d'expérience
            </p>
            <p className="mt-4 text-base">
              La Ferme de la Vallée Verte, dirigée par Jean Dupont, est un havre de paix...
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-black bg-[#a4f15e]"
            >
              Faire un partenariat
            </button>
            <p className="mt-4 text-base">
              La Ferme de la Vallée Verte, dirigée par Jean Dupont, est un havre de paix...
            </p>
          </div>

          <div className="flex flex-1 gap-4">
            <div className="w-[60%]">
              <img
                src={partenariat1}
                alt="Partenariat 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div className="w-[45%] flex flex-col gap-4">
              <div className="h-[48%]">
                <img
                  src={partenariat2}
                  alt="Partenariat 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-[48%]">
                <img
                  src={partenariat3}
                  alt="Partenariat 3"
                  className="w-full h-full object-cover rounded-lg"
                  style={{
                    width: '90%',
                    // marginLeft: '-1%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">Engagements et Pratiques</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="px-4 py-2 text-base font-medium rounded-full text-white bg-gray-800 whitespace-nowrap">
              Élevage en plein air
            </button>
            <button className="px-4 py-2 text-base font-medium rounded-full text-white bg-gray-800 whitespace-nowrap">
              Élevage en plein air
            </button>
            <button className="px-4 py-2 text-base font-medium rounded-full text-white bg-gray-800 whitespace-nowrap">
              Élevage en plein air
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row lg:space-x-6">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl font-bold text-gray-900">Produits Disponibles</h2>
            <ul className="mt-4 text-base space-y-2">
              <li>Viande de Bœuf : Pièces de bœuf tendre et savoureuses...</li>
              <li>Volaille Fermière : Poulets, dindes et canards...</li>
              <li>Œufs Frais : Œufs de poules élevées en liberté...</li>
            </ul>
          </div>

          <div className="lg:w-1/2 w-full flex justify-end">
            <img
              src={ginaar}
              alt="Image Ginaar"
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col">
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ils témoignent</h2>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-yellow-100 p-6 rounded-xl shadow-md">
                <p className="text-gray-800 mb-4">
                  Les produits de la Ferme de la Vallée Verte sont d'une qualité exceptionnelle...
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">Marie Luc</h3>
                    <p className="text-gray-600">Il y a 1 semaine</p>
                  </div>
                  <img
                    src={profils}
                    alt="Marie Luc"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 bg-yellow-100 p-6 rounded-xl shadow-md">
                <p className="text-gray-800 mb-4">
                  J'apprécie particulièrement l'engagement de Jean pour le bien-être animal...
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">Pierre Huq</h3>
                    <p className="text-gray-600">Il y a 1 semaine</p>
                  </div>
                  <img
                    src={profils}
                    alt="Pierre Huq"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="lg:w-2/3 w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">En partenariat avec :</h2>
            <div className="flex flex-wrap items-center gap-8">
              <img
                src={international}
                alt="Galileo International"
                className="h-16 object-contain"
              />
              <img
                src={microsoft}
                alt="Microsoft"
                className="h-8 object-contain"
              />
              <img
                src={samsung}
                alt="Samsung"
                className="h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosProduits;