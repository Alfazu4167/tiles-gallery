import TilesCard from '@/components/shared/TilesCard';
import { TilesData } from '@/lib/dataFetch';
import React from 'react';

const TilesPage = async () => {
    const tiles = await TilesData();
    return (
        <div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 '>
            {
                tiles.map(tile=> <TilesCard key={tile.id} tile={tile}></TilesCard>)
            }
          </div>
        </div>
    );
};

export default TilesPage;