import 'swiper/css';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Slider() {
   return (
      <Swiper
         loop
         spaceBetween={0}
         slidesPerView={1}
         className='bg-white relative'
         modules={[Navigation]}
         navigation={{ prevEl: '#prevSlide', nextEl: '#nextSlide' }}
      >
         <button className='swiper-button swiper-left' id='prevSlide'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
               <path
                  fill='currentColor'
                  d='M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z'
               />
            </svg>
         </button>
         <button className='swiper-button swiper-right' id='nextSlide'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
               <path
                  fill='currentColor'
                  d='M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z'
               />
            </svg>
         </button>
         <SwiperSlide>
            <section className='w-full h-auto aspect-video'>
               <img
                  alt='Banner'
                  className='h-full w-full object-cover'
                  src='https://raw.githubusercontent.com/pmfoysal/data/main/food-catalogue-230413/banner.webp'
               />
            </section>
         </SwiperSlide>
         <SwiperSlide>
            <section className='w-full h-auto aspect-video'>
               <video className='h-full w-full object-cover' autoPlay muted loop>
                  <source
                     type='video/mp4'
                     src='https://raw.githubusercontent.com/pmfoysal/data/main/food-catalogue-230413/video.mp4'
                  />
               </video>
            </section>
         </SwiperSlide>
      </Swiper>
   );
}
