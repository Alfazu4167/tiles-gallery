import { TilesDetailsById } from '@/lib/dataFetch';
import Image from 'next/image';
import React from 'react';

const TilesDetailsPage = async ({ params }) => {
    const { id } = await params;
    const tile = await TilesDetailsById(id);
    console.log(tile);
    return (
        <div className="card card-side bg-base-100 shadow-sm w-8/12 mx-auto mt-6">
            <figure>
                <Image src={tile.image} alt={tile.title} height={200} width={440} className='max-h-110 max-w-110 grow'></Image>
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-3xl font-bold">{tile.title}</h2>
                <p className='text-xl font-semibold'>{tile.category}</p>
                <p className='text-gray-500'>{tile.description}</p>
                <p className='text-md'><span className='text-md font-bold'>Tiles material</span>: {tile.material}</p>
                <p className='text-md'><span className='text-md font-bold'>Tiles dimensions</span>: {tile.dimensions}</p>
                <div className="card-actions justify-end">
                    <h2 className={` ${tile.inStock? "btn bg-green-400 text-white": "btn btn-warning"}`}>{tile.inStock? "In Stock":"Out of Stock"}</h2>
                </div>
            </div>
        </div>
    );
};

export default TilesDetailsPage;