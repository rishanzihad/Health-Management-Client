
import { Helmet } from "react-helmet-async";
import useCamp from "../../Hooks/useCamp";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import CampCard from "../../AvailableCamp/CampCard";


const UpComingCampHome = () => {
    const axiosPublic = useAxiosPublic()
    const { data: camps = []} = useQuery({
        queryKey: ['upcomingcamps'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/upcomingcamps`);

            return res.data;
        }
    });
 
console.log(camps)



  return (
    <div className="px-4">
      <Helmet>
        <title>Medical Camp || Available</title>
      </Helmet>
      .
      <div>
        <h1 className="text-4xl font-bold mt-20 text-white flex underline justify-center">
         Up Comings Camps
        </h1>
        <div className="grid  gap-5 mt-10 mb-10">
    
          {
            camps.map((camp)=><CampCard key={camp._id} camp={camp}></CampCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default UpComingCampHome;
