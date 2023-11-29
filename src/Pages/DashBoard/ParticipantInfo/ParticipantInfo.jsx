import { FaTrashAlt, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ParticipantCard from "./ParticipantCard";
import Swal from "sweetalert2";


const ParticipantInfo = () => {
    
    const axiosSecure =useAxiosSecure()
    const { data: register = [], refetch } = useQuery({
        queryKey: ['registerInfo'],
        queryFn: async () => {
          const res = await axiosSecure.get('/registerInfo');
        
          return res.data;
        }
      });
  
      const handleRegister =(_id)=>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Decline it!"
      }).then((result) => {
          if (result.isConfirmed) {
      
              axiosSecure.delete(`/registerInfo/${_id}`)
                  .then(res => {
                      if (res.data.deletedCount > 0) {
                          refetch();
                          Swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success"
                          });
                      }
                  })
          }
      });
      }
      
      
       
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">For Approved</h2>
                <h2 className="text-3xl">Total Participant : {register.length}</h2>
            </div>
          <div className="grid md:grid-cols-2 gap-4">
          {
                register.map(regi =><ParticipantCard handleRegister={handleRegister}  key={regi._id} regi={regi}></ParticipantCard>)
            }
          </div>
        </div>
    );
};

export default ParticipantInfo;