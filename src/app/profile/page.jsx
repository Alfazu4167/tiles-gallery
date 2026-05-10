'use client'

import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/dist/server/api-utils';

import Image from 'next/image';
import { ClockLoader } from 'react-spinners';


const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession()
    // const session = await auth.api.getSession({
    //         headers: await headers()
    //     })
    console.log(session);
    const user = session?.user;
    return (
        <div className='px-10 py-15 shadow-md max-w-md mx-auto  flex flex-col justify-center items-center mt-8 space-y-3'>
            {
                isPending ? <ClockLoader></ClockLoader> : user? <><Image src={user.image} alt={user.name} width={80} height={80} className='rounded-full'></Image>
                    <h2 className='text-2xl font-bold'>{user.name}</h2></>: redirect('/')
            }
        </div>
    );
};

export default ProfilePage;