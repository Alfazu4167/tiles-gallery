import Image from 'next/image';
import React from 'react';
import heroImage from "@/assets/hero.jpg"

const Banner = () => {
    return (
        <div
            className=" container mx-auto min-h-[40vh]"
            style={{
                backgroundImage:  `url(${heroImage})`,
                position : "center"
            }}
            
        >
            {/* <Image src={heroImage} alt='Tiles Gallery' height={440} width={1120}></Image> */}
            <div className="hero-overlay"></div>
            <div className=" text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                    <h1 className="mb-5 text-5xl font-bold bg-linear-to-b from-[#59cfd9] via-[#735fc1]  to-[#e037cc] bg-clip-text text-transparent">Tiles Gallery</h1>
            <p className="mb-5 text-gray-400 text-md">
                Discover minimalist textures and contemporary patterns designed to bring a clean, sophisticated look to every room.
            </p>
            <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;