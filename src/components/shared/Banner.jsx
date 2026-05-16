import Image from 'next/image';
import React from 'react';
import heroImage from "@/assets/hero.jpg"
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (

        <div className=" bg-base-200 container mx-auto pl-5 mt-8">
            <div className="flex items-center justify-between flex-col lg:flex-row-reverse ">
                <Image src={heroImage} alt='tiles gallery' height={220
                } width={440} className='w-fit' />
                <div>
                    <h1 className="mb-5 text-5xl font-bold bg-linear-to-b from-[#59cfd9] via-[#735fc1]  to-[#e037cc] bg-clip-text text-transparent">Tiles Gallery</h1>
                    <p className="mb-5 text-gray-500 text-md">
                        Discover minimalist textures and contemporary patterns designed to bring a clean, sophisticated look to every room.
                    </p>
                    <Link href={'/all-tiles'} className="btn bg-[#47dae7]">Browse Now  <FaArrowRight /> </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;