


import Footer from "../../composants/Footer"
import NosProduits from "../Produits/NosProduits";
import Logo1 from '../../assets/logo.png'
import NavbarLogin from "../NavbarLogin/NavbarLogin";






function Nosproduit() {
    return (
        <div>
            <div>
               
                <NavbarLogin propos="A Propos" compte="Compte" producteur="Nos Producteurs" logo1={Logo1} />
            </div>
            <div>
                <NosProduits/>
            </div>
           
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Nosproduit;
