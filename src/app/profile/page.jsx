'use client'




import UpdateUserProfile from '@/components/shared/UpdateUserProfile';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/dist/server/api-utils';

import Image from 'next/image';
import { ClockLoader } from 'react-spinners';


const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession()
    // const session = await auth.api.getSession({
    //         headers: await headers()
    //     })
    // console.log(session);
    const user = session?.user;
    return (
        <div className='px-3 py-10 shadow-md max-w-md mx-auto  flex flex-col justify-center items-center mt-8 space-y-3 bg-base-200 border border-[#47dae7] rounded-md'>
            {
                isPending ? <ClockLoader></ClockLoader> : <><Image src={user?.image} alt={user?.name} width={100} height={100} referrerPolicy='no-referrer' className='rounded-full'></Image>
                    <h2 className='text-2xl font-bold text-center'>{user?.name}
                    </h2>
                    <p className='text-gray-500 text-center '>{user?.email}</p></>

            }
      <UpdateUserProfile></UpdateUserProfile>
        </div>
    );
};

export default ProfilePage;