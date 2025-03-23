import React from 'react'
import MovieIcon from '../assets/movie-icon.jpg'
import { Link } from 'react-router'

export const Navbar = () => {
    return (
        <>

            <div className='flex border space-x-8 items-center'>
                <img src={MovieIcon} alt="" className='w-[60px]' />
                {/* <a href='/' className='text-blue-800 text-xl font-medium'>Movies</a>
                <a href='/watchlist' className='text-blue-800 text-xl font-medium'>Watchlist</a> */}

                <Link to='/' className='text-blue-800 text-xl font-medium'>Movies</Link>
                <Link to='/watchlist' className='text-blue-800 text-xl font-medium'>Watchlist</Link>
            </div>

        </>
    )
}
