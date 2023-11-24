import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/free_health_checkups_1.jpg'
import img2 from '../../../assets/free_health_checkups_2-2.jpg'
import img3 from '../../../assets/world-mental-health-day-illustration-concept-world-health-day-images-heartbeat-stethoscope-world-health-day-april-7-poster-banner-design-theme-2023-generate-ai-free-photo.jpg'

const Banner = () => {
    return (
        <Carousel className="mt-5"
        
        >
                <div>
                    <img src={img1} />
                    <p className="legend  text-black">Free Health CheckUp</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Health Camp</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Equipments</p>
                </div>
                
              
            </Carousel>
    );
};

export default Banner;