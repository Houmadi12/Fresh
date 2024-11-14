


import Footer from "../../composants/Footer"
import Nav from "../../composants/Nav"
import NosProduits from "../Produits/NosProduits";






function Nosproduit() {
    return (
        <div>
            <div>
                <Nav propos="A Propos" compte="Compte" producteur="Nos Producteurs" />
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
