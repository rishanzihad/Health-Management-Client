import { Helmet } from "react-helmet-async";
import useCamp from "../Hooks/useCamp";
import CampCard from "./CampCard";


const AvailableCamp = () => {
    const [camps]=useCamp()
    console.log(camps)
    return (
        <div className=" px-4">
            
            <Helmet>
                <title>Medical Camp || Availavle</title>
            
            </Helmet>
            .
           <div >
           <h1 className="   text-4xl font-bold mt-20 text-white flex  underline justify-center">Available Camps</h1>
            <div className="grid grid-cols-1 gap-5 mt-10">

            {
                camps.map(camp=><CampCard key={camp._id} camp={camp}></CampCard>)
            }
            </div>
           </div>
        </div>
    );
};

export default AvailableCamp;