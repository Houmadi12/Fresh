
import React from 'react';
import Slider from 'react-slick';
import profile from '../../assets/profils.c1dd4ac82d5d090db021.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionNous = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
    };
    return (
        <div className='container mx-auto w-3/4 mb-8 rounded-lg pb-10'>
            <h1 className='text-3xl text-center mb-5 mt-7'>Ils parlent de nous</h1>
            <div className="carrousel-container rounded-lg shadow-lg">
                <Slider {...settings}>
                    <div className="slide text-sm bg-[#dcfce7] text-center rounded-lg pb-3" >
                        <img src={profile} alt="" className='rounded-full mb-3 max-w-xs mx-auto p-3 '/>
                        <h3>Jean Dupont</h3>
                        <p>B2B solutions</p>
                        <p className=''>Un grand merci à cette plateforme qui nous a permis de trouver des producteurs locaux de qualité. Les produits sont excellents et nos employés sont ravis.</p>
                    </div>
                    <div className="slide text-sm bg-[#000000] text-center text-white rounded-lg pb-3" >
                        <img src={profile} alt="" className='rounded-full mb-3 max-w-xs mx-auto p-3'/>
                        <p>Angele Martinez</p>
                        <p>B2B Solutions</p>
                        <p>En tant qu'agricultrice locale, cette plateforme m'a permis d'atteindre de nouveaux marchés et de faire connaître mes produits. Une expérience unique!</p>
                    </div>
                    <div className="slide text-sm bg-[#dcfce7] text-center rounded-lg pb-3" >
                        <img src={profile} alt="" className='rounded-full mb-3 max-w-xs mx-auto p-3'/>
                        <p>Javier Escobar</p>
                        <p>B2B Solutions</p>
                        <p>Être en contact avec des clients directement et fournir des produits frais est un vrai plaisir. Merci pour cette opportunité Merci pour cette opportunité!</p>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default SectionNous;
