import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesCard = ({ tile }) => {
    return (
        <div className="card bg-base-100 shadow-sm hover:-translate-y-3 mt-8 transition-transform duration-300 hover:bg-base-300">
            <figure>
                <Image src={tile.image} alt={tile.title} height={100} width={440} className='max-h-55 max-w-110'></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title grow">{tile.title}</h2>
                <p>{tile.dimensions}</p>
                <div className="card-actions justify-end">
                    <Link href={`/tiles/${tile.id}`} className="btn btn-primary ">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TilesCard;