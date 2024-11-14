


import Footer from "../../composants/Footer"

import Articles from "../blog/Articles";
import BlogBNV from "../BlogBNV";
import Reintegration from "../composant-galerie/Reintegration";





function Blog() {
    return (
        <div>
            <div>
                {/* <Nav propos="A Propos" compte="Compte" producteur="Nos Producteurs" /> */}
                <BlogBNV />
            </div>
            <div>

                <div>
                    <Articles />
                </div>
                <div class="text-center my-8">
                    <button class="px-4 py-2 bg-gray-50 border-2 border-black text-black rounded-full hover:bg-white">
                        voir les articles</button>
                </div>
                <div className="bg-black  text-gray-400 py-6">
                    <p className="text-center">
                        Ensemble, continuons à célébrer la richesse de notre terroir, à soutenir nos producteurs locaux, et à déguster des plats savoureux qui respectent
                        <br /> notre planète. À vos fourneaux et à bientôt pour de nouvelles découvertes gourmandes !
                    </p>
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
