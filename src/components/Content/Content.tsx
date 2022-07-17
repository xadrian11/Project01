import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Marquee from "react-fast-marquee";







import contentstyle from './Content.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import carousel from './assets-content/Bitmapv.png'
import secondcarousel from './assets-content/dana-devolk-x2cNcfz_xXU-unsplash.png'
import firstmarquee from './assets-content/Bitmap-4.png'
import secondmarquee from './assets-content/e.png'
import thirdmarquee from './assets-content/Bitmap.png'
import nextmarquee from './assets-content/Bitmap-2.png'
import lastmarquee from './assets-content/Bitmap-3.png'

const Content = () => {
  return (
    <>
    <section>
      <div >
        <h1 className={contentstyle.headline}>
        <span className={contentstyle.span}>Rabat 10% </span> na pierwsze zamówienie!
        </h1>
        <p className={contentstyle.paragraph}>Do 20 stycznia złóż zamówienie na stronie i <br /> skorzystaj z  <b>promocji -10%</b> Spiesz się,czas
        <br/> trwania promocji do końca lutego</p>
        </div>
        <div className={contentstyle.wrapper}>
        <button className={contentstyle.buttonClass} >Zamów online</button>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    > 
      <SwiperSlide><img className={contentstyle.slider} src={carousel} alt="beef image" /></SwiperSlide>
      <SwiperSlide><img className={contentstyle.slider} src={secondcarousel} alt="beef image" /></SwiperSlide>
      <SwiperSlide><img className={contentstyle.slider} src={carousel} alt="beef image" /></SwiperSlide>
    </Swiper>
      </div>
      <Marquee>
      <img src={firstmarquee} alt="Pyszne.pl" />
      <img src={secondmarquee} alt="DeliGoo" />
      <img src={thirdmarquee} alt="Glovo" />
      <img src={nextmarquee} alt="Uber Eats" />
      <img src={lastmarquee} alt="Bolt Food" />
      </Marquee>
    </section>
    </>
  )
}

export default Content