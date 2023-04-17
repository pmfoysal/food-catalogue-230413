import 'swiper/css';
import Card from './card';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { selectDiscountedFoods } from '../utilities/selectors';

export default function Modal({ isOpen, setIsOpen }) {
   const foods = selectDiscountedFoods();

   return (
      <main className={`modal-offer ${isOpen ? 'active' : ''}`}>
         <section className='py-3 pb-[52px] flex flex-col h-full'>
            <h1 className='font-bold pb-4 px-3 flex items-center justify-between'>
               Today's offer 🎉{' '}
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='h-5 w-auto'
                  onClick={() => setIsOpen(false)}
               >
                  <path
                     fill='currentColor'
                     d='m4.21 4.387l.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12L4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094l-.083.094Z'
                  />
               </svg>
            </h1>
            <div className='p-3 bg-slate-100 rounded-lg flex-1'>
               <Swiper
                  loop
                  spaceBetween={0}
                  slidesPerView={1}
                  className='relative'
                  modules={[Navigation]}
                  navigation={{ prevEl: '#prevOffer', nextEl: '#nextOffer' }}
               >
                  <button className='swiper-button swiper-left left-0' id='prevOffer'>
                     <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                        <path
                           fill='currentColor'
                           d='M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z'
                        />
                     </svg>
                  </button>
                  <button className='swiper-button swiper-right right-0' id='nextOffer'>
                     <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                        <path
                           fill='currentColor'
                           d='M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z'
                        />
                     </svg>
                  </button>
                  {foods.map((food, index) => (
                     <SwiperSlide key={`food-${index}`}>
                        <Card {...food} onClick={() => setIsOpen(false)} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </section>
      </main>
   );
}
