import React from 'react'

export const Banner = () => {
    return (
        <div className='h-[90vh] md:h-[90vh] bg-cover bg-center grid content-end justify-items-center'
            style={{ backgroundImage: 'url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A5B299997B4468D43E21B1D1582686D54346584071DE83825C11F198BC11C595/scale?width=1200&aspectRatio=1.78&format=webp)' }}>

            <div className='text-white text-2xl text-center bg-gray-900/50 p-2 w-[100%]'>
                Avengers Assemble
            </div>

        </div>
    )
}
