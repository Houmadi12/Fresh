import Logo from '../assets/logo.png'
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function Nav(props) {
    const[Modalopen,setModalopen]=useState(false)
    const ouvrirModal = (e) => {e.preventDefault()
        setModalopen((prev)=> { return !prev})};
    return (
        <div>
            <nav Name="">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center md:hidden px-8 pt-5">
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 
                            hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
                            onClick={ouvrirModal} aria-controls="mobile-menu" aria-expanded={Modalopen}>
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                            <div className="hidden flex-1 md:flex space-x-4 flex justify-between items-center px-12 pt-5">
                                <Link to="/"> <img src={Logo}></img></Link>   
                                <nav className="flex space-x-4">
                                    <Link to="/produit" className="text-black hover:text-lime-500 transition"> {props.produit} </Link>
                                    <a href="#about-us" className="text-black hover:text-lime-500 transition">{props.propos}</a>
                                    <a href="#contact" className="text-black hover:text-lime-500 transition">{props.contact}</a>
                                    <Link to="/produit" className="text-black hover:text-lime-500 transition">{props.producteur}</Link>

                                    <a href="/compte" className="text-black hover:text-lime-500 transition">{props.compte}</a>
                                    <Link to="/blog" className="text-black hover:text-lime-500 transition">{props.blog}</Link>
                                </nav>
                                <Link to="/partanariat" className="bg-lime-500 text-black px-4 py-2 rounded-full shadow hover:bg-lime-500 transition">Faire un Partenariat</Link>
                            </div>
                        </div>


                    </div>
                </div>
                {Modalopen && (
                <div className="md:hidden container pl-14" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2 bg-white container">

                        <nav className="flex flex-col pb-2">
                            <Link to="/" class="text-black hover:text-lime-500 transition">Accueil</Link>
                            <Link to="/produit" className="text-black hover:text-lime-500 transition">Nos Produits</Link>
                            <Link to="#about-us" className="text-black hover:text-lime-500 transition">À Propos</Link>
                            <Link to="#contact" className="text-black hover:text-lime-500 transition">Contact</Link>
                            <Link to="/compte" className="text-black hover:text-lime-500 transition">Compte</Link>
                            <Link to="/blog" className="text-black hover:text-lime-500 transition">Blog</Link>
                        </nav>
                        <a href="/partanariat" className="bg-lime-500 text-black px-4 py-2 rounded-full shadow hover:bg-lime-500 transition ">Faire un Partenariat</a>
                    </div>
                </div>
                )}
            
            </nav>

        </div>
    )
}