import React from 'react'

function Articles() {
  return (
    <div>
      <div className='container mx-auto p-4 mb-8'>
        <h3 className='text-3xl text-center mb-5 mt-7 font-bold'>Nos articles</h3>
        <div>
            <div className='grid grid-cols-1 items-center md:grid-cols-2 gap-6 mt-9'>
                <div>
                <div class="bg-black text-white p-6 rounded-lg shadow-lg mb-4">
                    <span class="bg-yellow-400 text-black px-2 py-1 rounded">L'article</span>
                    <h3 class="text-xl font-bold mt-4">Mariama</h3>
                    <p class="text-gray-300 mt-2">je suis bakeliste</p>
                </div>
                <div class="bg-black text-white p-6 rounded-lg shadow-lg ">
                    <span class="bg-yellow-400 text-black px-2 py-1 rounded">L'article</span>
                    <h3 class="text-xl font-bold mt-4">Sindy</h3>
                    <p class="text-gray-300 mt-2">je suis bakeliste </p>
                </div>
                </div>
                <div>
                <div class="bg-black text-white p-6 rounded-lg shadow-lg mb-4">
                    <span class="bg-yellow-400 text-black px-2 py-1 rounded">L'article</span>
                    <h3 class="text-xl font-bold mt-4">Ngoné</h3>
                    <p class="text-gray-300 mt-2">je suis bakeliste </p>
                </div>
                <div class="bg-black text-white p-6 rounded-lg shadow-lg">
                    <span class="bg-yellow-400 text-black px-2 py-1 rounded">L'article</span>
                    <h3 class="text-xl font-bold mt-4">Fallou</h3>
                    <p class="text-gray-300 mt-2">je suis bakeliste </p>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Articles;