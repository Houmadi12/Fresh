import React from 'react';
import logo1 from '../../assets/téléchargement (3).png';
import logo2 from '../../assets/téléchargement (2).png';
import logo3 from '../../assets/téléchargement (1).png';
import logo4 from '../../assets/téléchargement.png';

function Confiance() {
    return (
        <div className='bg-[#f9fafb] mt-9 mb-8 pb-7'>
            <div className='container mx-auto '>
                <h1 className='text-3xl text-center mb-5 mt-7 p-5'>Ils nous font confiance</h1>
                <div className='flex justify-center items-center  px-5 p-5 mb-10'>
                    <div>
                        <img src={logo1} alt="" className='w-2/4'/>
                    </div>
                    <div>
                        <img src={logo2} alt="" className='w-3/4'/>
                    </div>
                    <div>
                        <img src={logo3} alt="" className='w-3/4'/>
                    </div>
                    <div>
                        <img src={logo4} alt="" className='w-2/4'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Confiance;