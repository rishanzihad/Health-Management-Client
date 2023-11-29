import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useUSer = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isUser, isPending: isUserLoading } = useQuery({
        queryKey: [user?.email, 'isUser'],
        enabled: !loading,
        queryFn: async () => {
           
            const res = await axiosSecure.get(`/users/user/${user.email}`);
        
            return res.data?.user;
        }
    })
    return [isUser, isUserLoading]
};

export default useUSer;