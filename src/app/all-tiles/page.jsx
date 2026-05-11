import TilesCard from '@/components/shared/TilesCard';
import { TilesData } from '@/lib/dataFetch';
import React from 'react';

const TilesPage = async () => {
  const tiles = await TilesData();
  return (
    <div>
      <div className='container mx-auto mt-10 flex flex-col justify-center items-center'>
        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
          {
            tiles.map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default TilesPage;