import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useHealthProfes = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isHealthcareProfessionals, isPending: isHealthcareProfessionalsLoading } = useQuery({
        queryKey: [user?.email, 'isHealthcareProfessionals'],
        enabled: !loading,
        queryFn: async () => {
           
            const res = await axiosSecure.get(`/users/healthcareProfessionals/${user.email}`);
        
            return res.data?.healthcareProfessionals;
        }
    })
    return [isHealthcareProfessionals, isHealthcareProfessionalsLoading]
};

export default useHealthProfes;