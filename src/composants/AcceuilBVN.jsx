import SectionBvn from './SectionBVN/SectionBvn'
import SectionCarte from './SectionBVN/SectionCarte'
import { BsChevronDown } from "react-icons/bs";

export default function AcceuilBVN() {
  return (
    <div>
        <SectionBvn 
        bgImg="bg-img-bnv"
        title="Bienvenue sur fresh"
        text="La solution pour accéder à des produits locaux en entreprise. Savourez la qualité. Vivez la fraîcheur."
        icon=<div className="text-white text-2xl flex justify-end pt-10 animate-bounce">
            <BsChevronDown />
        </div>
      />
      <SectionCarte />
    </div>
  )
}
