import React, { useRef } from "react";
import Slider from "react-slick"; // Import SliderProps from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";

const CarouselSlider = () => {
  const sliderRef = useRef<Slider | null>(null); // Set the type of useRef to SliderProps

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    } // Use optional chaining
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-[#f5f5f5] relative overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        <div className="flex justify-center">
          <img src="/img1.png" alt="Slide 1" className="w-full" />
        </div>
        <div className="flex justify-center">
          <img src="/img2.png" alt="Slide 2" className="w-full" />
        </div>
        <div className="flex justify-center">
          <img src="/img3.png" alt="Slide 3" className="w-full" />
        </div>
      </Slider>
      <div className="absolute top-0 left-0 flex items-center h-full">
        <button
          onClick={scrollLeft}
          className="px-2 py-1 bg-gray-300 text-gray-700 rounded-l-md"
        >
          <KeyboardBackspaceIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute top-0 right-0 flex items-center h-full">
        <button
          onClick={scrollRight}
          className="px-2 py-1 bg-gray-300 text-gray-700 rounded-r-md"
        >
          <EastIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
