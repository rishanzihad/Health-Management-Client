
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';
import Swiper from 'swiper';

const TestimonialsCard = ({ testimonialsData }) => {


  return (
   
   
      <Carousel className="mt-5"
        
        >
           {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <h3 className='text-xl font-medium mt-3'>Camp Name:{ testimonial.campName}</h3>
            <p>Date: {testimonial.date}</p>
            <p className='mb-10'>FeedBack: {testimonial.feedback}</p>
           
          </div>
            ))}
                
              
            </Carousel>
 

  );
};

export default TestimonialsCard;
