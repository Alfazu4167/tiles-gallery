'use client'
import { authClient } from '@/lib/auth-client';
import NavLink from './NavLink';
import Link from 'next/link';
import { PulseLoader, } from 'react-spinners';
import Image from 'next/image';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    const li = <>
        <li className='font-semibold block text-md'><NavLink href={'/'}>Home</NavLink></li>
        <li className='font-semibold block text-md'><NavLink href={'/all-tiles'}>All Tiles</NavLink></li>
        <li className='font-semibold block text-md'><NavLink href={'/profile'}>My Profile</NavLink></li>
    </>
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow justify-center items-center">
                            {li}
                        </ul>
                    </div>
                    <Link href={'/'} className="font-bold text-2xl ">TILES <span className='bg-linear-to-r from-[#59cfd9] via-[#735fc1]  to-[#e037cc] bg-clip-text text-transparent  text-2xl'
                    >GALLERY</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex justify-center items-center">
                    <ul className="menu menu-horizontal px-1">
                        {li}
                    </ul>
                </div>
                <div className="navbar-end">

                    {isPending ? <PulseLoader color='#59cfd9' /> :
                        user ? <div className='flex items-center justify-center gap-2'>
                            <Image src={user?.image} alt={user?.name} width={40} height={40} referrerPolicy='no-referrer' className='rounded-full' />
                            <h2>Hello, <span className='text-md font-bold'>{user?.name}</span></h2> <button className='btn bg-[#47dae7]' onClick={async () => await authClient.signOut()}>Log out</button></div> : <Link className='btn bg-[#47dae7]' href={'/login'}>Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;