import React from 'react';
import error from '../../../assets/errorImg/error.jpg'

const ErrorPage = () => {
    return (
        <div className='flex justify-center'>
            <img className='w-[40vw]' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;