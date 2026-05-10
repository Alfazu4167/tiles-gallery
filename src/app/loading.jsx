import React from 'react';
import { ClockLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='flex justify-center items-center min-h-[60vh]'>
            <ClockLoader color='#59cfd9' />
        </div>
    );
};

export default LoadingPage;