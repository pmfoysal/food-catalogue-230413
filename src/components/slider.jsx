import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Slider() {
   return (
      <Swiper spaceBetween={0} slidesPerView={1} loop>
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
