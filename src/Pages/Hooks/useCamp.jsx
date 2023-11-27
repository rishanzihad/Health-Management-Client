
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCamp = () => {
    const axiosPublic = useAxiosPublic();
  
    const { data: camps = [], isPending: loading, refetch } = useQuery({
        queryKey: ['camps'], 
        queryFn: async () => {
            return (await axiosPublic.get('/camps')).data;
        }
    });

    return [camps, loading, refetch];
};

export default useCamp;
