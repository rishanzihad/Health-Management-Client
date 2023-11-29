
import { Helmet } from "react-helmet-async";

import Banner from "./Banner/Banner";
import PopularCamp from "./PopularCamp/PopularCamp";
import Testimonials from "./TestMonials/Testimonials";
import UpComingCampHome from "./UpComingCampHome/UpComingCampHome";




const Home = () => {
    
    return (
        <div >
             <Helmet>
                <title>Medical Camp || Home</title>
            
            </Helmet>
            <Banner></Banner>
            <PopularCamp></PopularCamp>
           <Testimonials></Testimonials>
           <UpComingCampHome></UpComingCampHome>
        </div>
    );
};

export default Home;