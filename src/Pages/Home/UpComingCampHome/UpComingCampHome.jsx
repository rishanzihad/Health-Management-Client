
import { Helmet } from "react-helmet-async";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


import UpCard from "./UpCard";


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
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10 mb-10">
    
          {
            camps.map((camp)=><UpCard key={camp._id} camp={camp}></UpCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default UpComingCampHome;
