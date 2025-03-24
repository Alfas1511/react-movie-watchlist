import React from 'react'

function Pagination({ pageNumber, handlePrevPage, handleNextPage }) {
    return (
        <div className='w-[100%] h-[10vh] bg-gray-900 flex justify-center items-center text-white text-xl'>
            <div onClick={handlePrevPage} className='px-8 hover:cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
            <div className='text-3xl'>{pageNumber}</div>
            <div onClick={handleNextPage} className='px-8 hover:cursor-pointer'><i class="fa-solid fa-arrow-right"></i></div>

        </div>
    )
}

export default Pagination
