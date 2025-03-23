import React from 'react'

function MovieCard({ poster_path, title }) {
    return (
        <div className='h-[40vh] grid content-end justify-items-center w-[200px] bg-cover bg-center rounded-lg hover:cursor-pointer hover:scale-110 duration-300'
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

            <div className='text-md text-white bg-gray-900/60 w-[100%] text-center hover:text-red-900'>
                {title}
            </div>
        </div>
    )
}

export default MovieCard
