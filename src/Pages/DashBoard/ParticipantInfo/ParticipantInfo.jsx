import { FaTrashAlt, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ParticipantCard from "./ParticipantCard";


const ParticipantInfo = () => {
    
    const axiosSecure =useAxiosSecure()
    const { data: register = [], refetch } = useQuery({
        queryKey: ['registerInfo'],
        queryFn: async () => {
          const res = await axiosSecure.get('/registerInfo');
        
          return res.data;
        }
      });
  

      
      
       
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">For Approved</h2>
                <h2 className="text-3xl">Total Participant : {register.length}</h2>
            </div>
          <div className="grid md:grid-cols-2 gap-4">
          {
                register.map(regi =><ParticipantCard key={regi._id} regi={regi}></ParticipantCard>)
            }
          </div>
        </div>
    );
};

export default ParticipantInfo;