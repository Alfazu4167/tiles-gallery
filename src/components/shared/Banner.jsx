import Image from 'next/image';
import React from 'react';
import heroImage from "@/assets/hero.jpg"
import Link from 'next/link';

const Banner = () => {
    return (
      
        <div className="hero bg-base-200 container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image src={heroImage} alt='tiles gallery' height={220
                } width={440} />
                <div>
                    <h1 className="mb-5 text-5xl font-bold bg-linear-to-b from-[#59cfd9] via-[#735fc1]  to-[#e037cc] bg-clip-text text-transparent">Tiles Gallery</h1>
                    <p className="mb-5 text-gray-500 text-md">
                        Discover minimalist textures and contemporary patterns designed to bring a clean, sophisticated look to every room.
                    </p>
                    <Link href={'/tiles'} className="btn btn-primary">Browse Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;