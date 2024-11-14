


import Footer from "../../composants/Footer"
import Nav from "../../composants/Nav"
import NosProduits from "../Produits/NosProduits";
import Logo1 from '../../assets/logo.png'






function Nosproduit() {
    return (
        <div>
            <div>
                <Nav propos="A Propos" compte="Compte" producteur="Nos Producteurs" logo1={Logo1}/>
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
