import React, { useState } from 'react';
import { SliderData } from './sliderData';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import '../Css/imageSlider.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
    <section className='slider'>
      <ChevronLeftIcon className='left-arrow' onClick={prevSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className="imageContainer">
                <img src={slide.url} alt='cant load' className='image' />              
              </div>
            )}
          </div>
        );
      })}
      <ChevronRightIcon className='right-arrow' onClick={nextSlide} />
      
    </section>
      <div className="ImageCounter">
        {current+1} / {length}
      </div>
    </div>
    
  );
};

export default ImageSlider;