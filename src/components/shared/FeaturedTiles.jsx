import React from 'react';
import TilesCard from './TilesCard';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedTiles = ({tiles}) => {
    return (
        <div className='container mx-auto my-15'>
            <h2 className='text-4xl font-bold text-center'>Featured Tiles</h2>
            <div className='grid lg:grid-cols-4 gap-3 mt-15'>
                {tiles.slice(0-4).map(tile=><TilesCard key={tile.id} tile={tile}></TilesCard>)}
            </div>
                 </div>
    );
};

export default FeaturedTiles;