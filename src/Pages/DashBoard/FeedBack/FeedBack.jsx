import React, { useContext } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import FeedBAckCard from './FeedBAckCard';

const FeedBack = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: register = [], refetch } = useQuery({
        queryKey: ['registerInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/registerInfo/${user.email}`);

            return res.data;
        }
    });
    const { data: payment = [] } = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`payments/${user.email}`)
            return res.data
        }
    })
    let participantCamp;

    register.map((item) => {
        participantCamp = payment.find((pc) => pc.cartIds === item._id);

    });

    console.log(participantCamp);



    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">Total Camp  Register </h2>

            </div>
            <div >
                {participantCamp &&(
                    <FeedBAckCard participantCamp={participantCamp}></FeedBAckCard>)
                }
            </div>
        </div>
    );
};

export default FeedBack;