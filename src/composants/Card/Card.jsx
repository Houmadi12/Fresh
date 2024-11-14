import React from 'react'
import { FaStar } from "react-icons/fa";


function Card({ titre, propriete }) {
    return (
        <div>


            <div className="md:max-w-72 sm:max-w-96 flex flex-col items-center p-6 bg-[#ecfccb] text-black   rounded-lg shadow  h-38">
                <div className='flex items-center mb-4 gap-5 '>
              
                        <h1 className="  bg-white px-4 py-1 w-full rounded-full font-bold">{titre}</h1>
                   
                    <div className='bg-white  rounded-full  px-3 py-1 text-sm font-semibold mr-2  '>
                        <FaStar className=' mx-auto block' />
                    </div>
                </div>
                <div className='w-full'>
                    <p className=" text-gray-700  text-center">{propriete}</p>

                </div>
            </div>

        </div>
    )
}
export default Card;
