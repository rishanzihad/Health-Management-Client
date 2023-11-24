
import { Helmet } from "react-helmet-async";
import NavBar from "../Shared/NavBar/NavBar";
import Banner from "./Banner/Banner";
import AddCamp from "../AddCamp/AddCamp";



const Home = () => {
    
    return (
        <div >
             <Helmet>
                <title>Medical Camp || Home</title>
            
            </Helmet>
            <Banner></Banner>
            <AddCamp></AddCamp>
        </div>
    );
};

export default Home;