import 'swiper/css';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { selectFoodTypes } from '../utilities/selectors';

export default function Filters({ filter, setFilter }) {
   const types = selectFoodTypes();

   return (
      <Swiper spaceBetween={30} freeMode={{ enabled: true }} modules={[FreeMode]} slidesPerView='auto' className='py-8 px-4'>
         <SwiperSlide key={`type-00`} className='w-auto'>
            <button className={`relative ${filter === 'All' ? 'font-medium' : ''}`} onClick={() => setFilter('All')}>
               All Foods
               <span
                  className={`absolute -top-3 -right-2 text-[9px] leading-none h-4 w-4 flex items-center justify-center rounded-full ${
                     filter === 'All' ? 'bg-blue-500 text-white font-normal' : 'font-medium'
                  }`}
               >
                  {types.reduce((count, type) => count + type.count, 0)}
               </span>
            </button>
         </SwiperSlide>
         {types.map((type, index) => (
            <SwiperSlide key={`type-${index}`} className='w-auto'>
               <button className={`relative ${filter === type.name ? 'font-medium' : ''}`} onClick={() => setFilter(type.name)}>
                  {type.name}
                  <span
                     className={`absolute -top-3 -right-2 text-[9px] leading-none h-4 w-4 flex items-center justify-center rounded-full ${
                        filter === type.name ? 'bg-blue-500 text-white font-normal' : 'font-medium'
                     }`}
                  >
                     {type.count}
                  </span>
               </button>
            </SwiperSlide>
         ))}
      </Swiper>
   );
}
