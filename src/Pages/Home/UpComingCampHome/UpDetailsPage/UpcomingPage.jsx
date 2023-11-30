import  { useEffect, useState } from 'react';



import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import UpComingDetailsCard from './UpComingDetailsCard';

const UpcomingPage = () => {
    //const camps =useLoaderData()
    const [camp,setCamp] =useState([])
    const axiosSecure = useAxiosSecure()
    const { data: camps = []} = useQuery({
        queryKey: ['upcomingcamps'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/upcomingcamps`);

            return res.data;
        }
    });

    const {id} =useParams()
   
    useEffect(()=>{
        const findCamp =camps && camps?.find(Camp => Camp._id == id)
        setCamp(findCamp)
        console.log(findCamp)
      
    },[id,camps])
  
    return (
        <div>
        {camp ? (
          <UpComingDetailsCard key={camp._id} camp={camp} />
        ) : (
          <p>Camp details not found.</p>
        )}
      </div>
    );
};


export default UpcomingPage;