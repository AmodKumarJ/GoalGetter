import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional: Navigation arrows
import "swiper/css/pagination"; // Optional: Dots/pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Optional modules
import image1 from '../../assets/pawel-czerwinski-L8fXJgMk5jc-unsplash.jpg'
import image2 from '../../assets/pawel-czerwinski-vI5XwPbGvmY-unsplash.jpg'
import image3 from '../../assets/pawel-czerwinski-UwrOilxt2FU-unsplash.jpg'
const MotivationalCarousel = () => {
  const slides = [
    {
      slogan: "Stay focused and never give up!",
      image: image1,
    },
    {
      slogan: "Every small step counts towards your goal.",
      image: image2,
    },
    {
      slogan: "Consistency is the key to success.",
      image: image3,
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Show one slide at a time
      //navigation // Enable arrows
      //pagination={{ clickable: true }} // Enable dots
      autoplay={{ delay: 3000 }} // Enable auto-scroll
      style={{ width: "100%", margin: "0 auto" ,height:"100%" }} // Center slider
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%", // Adjust height
            borderRadius: "10px",
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            {slide.slogan}
          </h2>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MotivationalCarousel;
