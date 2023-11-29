import React, { useContext } from 'react';


import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import TestimonialsCard from './TextMonialsCard';

const Testimonials = () => {
   
    const axiosPublic = useAxiosPublic()
    const { data: feedback = []} = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/feedback`);

            return res.data;
        }
    });
    console.log(feedback)
    return (
        <div className='  bg-gradient-to-tr from-gray-600 rounded-full to-green-200 text-white'>

            <h1 className='text-4xl font-bold text-center mt-10 py-4 underline'>Testimonials</h1>
            <TestimonialsCard testimonialsData={feedback}></TestimonialsCard>


        </div>
    );
};

export default Testimonials;