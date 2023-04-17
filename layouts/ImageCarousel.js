import React, { Fragment, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";
import Link from "next/link";
import Head from "next/head";

function ImgCarousel({ props }) {
  const slides = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Fragment>
      <Head>
        {slides.map((slide,slideIndex) => (
          <link rel="preload" href={slide.src} as="image" key={slideIndex}/>
        ))}
      </Head>
      <div className="max-w-[1400px] h-[800px] w-10/12 m-auto py-16 px-4 relative group z-10">
        <Link href={slides[currentIndex].link} passHref={true} target="_blank">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
            className="w-full h-full max-h-[800] rounded-t-2xl bg-center bg-cover duration-500"
          ></div>
        </Link>
        <div className="bg-black opacity-60 rounded-b-2xl max-w-[1400px] w-full m-auto px-4">
          <p className="text-gray-600 text-2xl text-center font-extrabold m-auto p-2">
            {slides[currentIndex].label}
          </p>
          <p className="text-gray-400 text-m text-center font-bold p-2">
            {slides[currentIndex].desc}
          </p>
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              {currentIndex == slideIndex ? <RxDotFilled /> : <RxDot />}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default ImgCarousel;
