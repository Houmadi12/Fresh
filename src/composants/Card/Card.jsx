import React from 'react'
import { FaStar } from "react-icons/fa";


 function Card({titre,propriete}) {
  return (
    <div>


<div className="max-w-sm p-6 bg-[#ecfccb] text-black border border-gray-200 rounded-lg shadow">
    <div className='flex items-center justify-evenly'>
        <div className='bg-white  rounded-full p-2 p-1 w-40'>
        <h5 className=" text-xl font-semibold  text-black text-center  mx-auto block">{titre}</h5>
        </div >
        <div className='bg-white  rounded-full p-2 text-lg w-12  '>
            <FaStar className=' mx-auto block' />
        </div>
    </div>
    <div className='w-60'>
    <p className=" font-normal text-gray-500 dark:text-gray-400 text-wrap text-center">{propriete}</p>

    </div>
</div>

    </div>
  )
}
export default Card;
