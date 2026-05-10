import React from 'react';
import Marquee from 'react-fast-marquee';

const NewArrivals = ({ tiles }) => {
    return (

        <div className='flex justify-between gap-4 items-center bg-gray-200 py-2 px-2 container mx-auto mt-15'>
            <h2 className='btn bg-[#e037cc] text-white'>New Arrivals</h2>
            <Marquee pauseOnHover={true}>
                {
                    tiles.map(tile => <span className='mr-2' key={tile.id}>{tile.title} |</span>)
                }
            </Marquee>
        </div>

    );
};

export default NewArrivals;