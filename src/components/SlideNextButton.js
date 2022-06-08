// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideTo(0)}>Slide to the next slide</button>
  );
}