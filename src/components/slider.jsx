import 'swiper/css';
import video from '../assets/videos/video.mp4';
import banner from '../assets/images/banner.webp';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Slider() {
   return (
      <Swiper spaceBetween={0} slidesPerView={1} loop>
         <SwiperSlide>
            <section className='w-full h-auto aspect-video'>
               <img src={banner} alt='Banner' className='h-full w-full object-cover' />
            </section>
         </SwiperSlide>
         <SwiperSlide>
            <section className='w-full h-auto aspect-video'>
               <video className='h-full w-full object-cover' autoPlay muted>
                  <source src={video} type='video/mp4' />
               </video>
            </section>
         </SwiperSlide>
      </Swiper>
   );
}
