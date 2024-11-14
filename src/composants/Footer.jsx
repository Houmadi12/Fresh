import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
   
    return (
        <div>
            <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="mb-6 md:mb-0">
                            <h1 className="  font-bold mb-4 text-lg">Assistance</h1>
                            <ul>
                                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contactez-nous</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Support technique</a></li>
                            </ul>
                        </div>
                        <div className="mb-6 md:mb-0">
                            <h1 className=" font-bold mb-4 text-lg">À propos de</h1>
                            <ul>
                                <li><a href="#" className="text-gray-400 hover:text-white">À propos de nous</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Politique en matière de cookies</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Règlement général sur la protection des données</a></li>
                            </ul>
                        </div>
                        <div className="mb-6 md:mb-0">
                            <h1 className=" font-bold mb-4 text-lg">Conditions</h1>
                            <ul>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">Conditions générales</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Conditions de facturation</a></li>
                            </ul>
                        </div>
                        <div className="mb-6 md:mb-0 flex space-x-4">
                            <a href="#" className="text-gray-400 ">
                                <FaFacebook class="w-6 h-6 text-white"/>
                            </a>
                            <a href="#" className="text-gray-400">
                               
                                <FaInstagram className="w-6 h-6 text-white" />
                            </a>
                            <a href="#" className="text-gray-400 ">
                            
                                <CiTwitter className="w-6 h-6 text-white font-bold" />
                            </a>
                            <a href="#" className="text-gray-400 ">
                               
                                <FaLinkedin className="w-6 h-6 text-white" />
                            </a>
                        </div>
                    </div>
                    <div className="text-center text-gray-400 mt-8">© 2024 FRESH. Tous droits réservés.</div>
                </div>
            </footer>
        </div>
    )
}