import React from 'react'
import img1 from '../../assets/image9.029bc5f481f9580e4cf6.png';
import img2 from '../../assets/image10.401997c00df424f48a4c.png'
import img3 from '../../assets/image11.cf75c3c365783b979719.png'
function Producteurs() {
    return (
        <div>
            <h1 className='text-3xl text-center mb-5 mt-7'>Les producteurs.</h1>
            <div>
                <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-16 mt-9">
                    <div className="p-4 bg-[#ecfccb] rounded-lg shadow-lg">
                        <img src={img1} alt="" />
                            <h3 className="flex justify-content-start bg-black rounded-full px-4 w-24 text-white mt-3">Éleveurs</h3>
                    </div>
                    <div className="p-4 bg-[#ecfccb] rounded-lg shadow-lg">
                       <img src={img2} alt="" />
                            <h3 className=" mt-3 flex justify-content-start bg-black rounded-full px-4 w-32 text-white">Fromagers</h3>
                    </div>
                    <div className="p-4 bg-[#ecfccb] rounded-lg shadow-lg">
                        <img src={img3} alt="" />
                            <h3 className=" mt-3 flex justify-content-start bg-black rounded-full px-4 w-32 text-white">Maraîchers</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Producteurs;