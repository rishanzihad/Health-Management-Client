import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import HealthTipsCard from './HealthTipsCard';

const HealthTips = () => {
    const axiosPublic = useAxiosPublic()
    const { data: tips = []} = useQuery({
        queryKey: ['healthTips'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/healthTips`);

            return res.data;
        }
    });
  
    return (
       <div>
        <h1 className='text-center mb-5 text-5xl font-bold'>Health Tips</h1>
         <div className='grid mb-10 md:grid-cols-2 gap-4'>
            {
                tips.map((tip=><HealthTipsCard key={tip._id} tip={tip}></HealthTipsCard>))
            }
        </div>
       </div>
    );
};

export default HealthTips;