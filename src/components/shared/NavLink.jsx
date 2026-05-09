'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathName = usePathname();
    const isActive = href === pathName;
    return (
        <div>
            <Link href={href} className={`${isActive ? "border-b-2 pb-1 border-b-green-400 text-green-400 font-bold " : ""}`}>{children}</Link>
        </div>
    );
};

export default NavLink;