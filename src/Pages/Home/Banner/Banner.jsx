import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/free_health_checkups_1.jpg'
import img2 from '../../../assets/free_health_checkups_2-2.jpg'
import img3 from '../../../assets/world-mental-health-day-illustration-concept-world-health-day-images-heartbeat-stethoscope-world-health-day-april-7-poster-banner-design-theme-2023-generate-ai-free-photo.jpg'
import img4 from '../../../assets/medical-horizontal-banner-template_23-2148940482.jpg.avif'
import img5 from '../../../assets/realistic-world-health-day-horizontal-banner-template_23-2149358718.jpg.avif'
import img6 from '../../../assets/realistic-medical-sale-banner_23-2149090296.jpg.avif'
import img7 from '../../../assets/healthcare-medical-concept-medicine-doctor-with-stethoscope-hand_327072-27524.jpg-2.avif'

const Banner = () => {
    return (
        <Carousel className="mt-5"
        
        >
          
              <div >
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
                <div>
                    <img src={img4} />
                    <p className="legend">Equipments</p>
                </div>
                <div>
                    <img src={img5} />
                    <p className="legend">Equipments</p>
                </div>
                <div>
                    <img src={img6} />
                    <p className="legend">Equipments</p>
                </div>
                <div>
                    <img src={img7} />
                    <p className="legend">Equipments</p>
                </div>
          
                
              
            </Carousel>
    );
};

export default Banner;