export const getNextSlide = (currentSlide, slidesCount) =>
  currentSlide === slidesCount - 1 ? 0 : currentSlide + 1;

export const getPrevSlide = (currentSlide, slidesCount) =>
  currentSlide === 0 ? slidesCount - 1 : currentSlide - 1;
