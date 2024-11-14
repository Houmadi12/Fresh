
export default function SectionBvn({bgImg,icon}) {

  const getPram = () => {
    return `flex items-end min-h-screen ${bgImg} rounded-b-2xl mb-4`
  }

  return (
    <div className={getPram()}>  
        <div className="mb-24 mx-14 text-white sans w-full">
            <h1 className="uppercase text-2xl md:text-[58px] font-bold">Bienvenue sur fresh</h1>
            <p className="text-base md:text-xl mt-8">La solution pour accéder à des produits locaux en entreprise. Savourez la qualité. Vivez la fraîcheur.</p>
            <button className="text-white bg-black px-4 py-2 rounded-3xl mt-5">Inscriver-vous</button>
        </div>
        <div className="mx-20 mb-12">
          {icon}
        </div>
    </div>
  )
}
