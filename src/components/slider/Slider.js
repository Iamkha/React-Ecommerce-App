import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderData } from './sliderData';
import './Slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentSlideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;

  const currentleft = () => {
    setCurrentSlide(
      currentSlide === currentSlideLength - 1 ? 0 : currentSlide + 1
    );
  };
  const currentright = () => {
    setCurrentSlide(
      currentSlide === 0 ? currentSlideLength - 1 : currentSlide - 1
    );
  };
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(currentright, 5000);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, autoScroll, slideInterval]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prew" onClick={currentleft} />
      <AiOutlineArrowRight className="arrow next" onClick={currentright} />
      {sliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === currentSlide ? 'slide current' : 'slide'}
          >
            {index === currentSlide && (
              <>
                <img src={slide.image} alt="slider" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <a href="#product" className="--btn --btn-primary">
                    Shop now
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
