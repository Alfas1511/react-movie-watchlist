import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination';

export const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);


    function handlePrevPage() {
        if (pageNumber == 1 || pageNumber < 1) {
            setPageNumber(pageNumber)
        } else {
            setPageNumber(pageNumber - 1)
        }
    }

    function handleNextPage() {
        setPageNumber(pageNumber + 1)
    }


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=09f9fad2c24aebc4e5b8da00b76b3f47&language=en-US&page=${pageNumber}`).then(function (res) {
            console.log(res.data.results);
            setMovies(res.data.results);
        });
    }, [pageNumber])


    return (
        <div>
            <div className='text-center text-2xl font-medium p-3 m-3'>
                Trending Movies
            </div>

            <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center bg-red-200 p-4' >
                {movies.map((movieObj) => {
                    return <MovieCard poster_path={movieObj.poster_path} title={movieObj.title} />
                })}
            </div>

            <Pagination pageNumber={pageNumber} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />

        </div>
    )
}


// https://api.themoviedb.org/3/movie/popular?api_key=09f9fad2c24aebc4e5b8da00b76b3f47&language=en-US&page=2