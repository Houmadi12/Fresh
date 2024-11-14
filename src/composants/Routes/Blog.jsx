


import Footer from "../../composants/Footer"
import Nav from "../../composants/Nav"
import Articles from "../blog/Articles";
import Reintegration from "../composant-galerie/Reintegration";





function Blog() {
    return (
        <div>
            <div>
                <Nav propos="A Propos" compte="Compte" producteur="Nos Producteurs" />
            </div>
            <div>
                <div className="bg-black  text-gray-400 py-6">
                    <p className="text-center">
                        Ensemble, continuons à célébrer la richesse de notre terroir, à soutenir nos producteurs locaux, et à déguster des plats savoureux qui respectent
                        <br /> notre planète. À vos fourneaux et à bientôt pour de nouvelles découvertes gourmandes !
                    </p>
                </div>
                <div>
                    <Articles/>
                </div>
                <Reintegration />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Blog;
