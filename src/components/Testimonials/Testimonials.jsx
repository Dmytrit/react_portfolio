/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Testimonials.css';

import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialData = [
  {
    avatar: avatar1,
    name: "Programming",
    review: "Programming entered my life and changed it forever. I look to the future with optimism and inspiration to apply my knowledge to make useful and beautiful things."
  },
  {
    avatar: avatar2,
    name: "Snoubording",
    review: "Snowboarding fascinated me back in 2009. Since then, the mountains and the board are the most favorite recreation for me... after the sea))"
  },
  {
    avatar: avatar3,
    name: "Traveling",
    review: "I love to travel. Traveling broadens your horizons and gives you the most diverse life experience. Every trip has its own purpose and goals that you achieve and that makes me happy."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonial__section">
      <h5>What I like</h5>
      <h2>Interests</h2>

      <Swiper className="container testimonials__container" 
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          testimonialData.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} className="client__img" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
            );
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;