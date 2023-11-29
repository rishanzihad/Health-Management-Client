
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = ({ testimonialsData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-slider">
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <h3>{testimonial.campName}</h3>
            <p>{testimonial.date}</p>
            <p>{testimonial.feedback}</p>
            <p>{`Rating: ${testimonial.rating}/5`}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
