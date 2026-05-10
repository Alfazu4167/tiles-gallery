import React from 'react';
import TilesCard from './TilesCard';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedTiles = ({tiles}) => {
    return (
        <div className='container mx-auto mt-15'>
            <h2 className='text-4xl font-bold text-center'>Featured Tiles</h2>
            <div className='grid lg:grid-cols-4 gap-3'>
                {tiles.slice(0-4).map(tile=><TilesCard key={tile.id} tile={tile}></TilesCard>)}
            </div>
            <Link className='btn bg-[#e037cc] mt-4 text-white' href={'/tiles'}>Browse Now <FaArrowRight></FaArrowRight></Link>
        </div>
    );
};

export default FeaturedTiles;