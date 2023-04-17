import { useState } from 'react';
import urlToId from '../utilities/urlToId';
import { useParams } from 'react-router-dom';
import { selectFood } from '../utilities/selectors';

export default function Details() {
   const { id_title } = useParams();
   const [quantity, setQuantity] = useState(1);
   const food = selectFood(urlToId(id_title)) || {};

   function increaseQuantity() {
      setQuantity(prev => prev + 1);
   }

   function decreaseQuantity() {
      setQuantity(prev => (prev > 1 ? prev - 1 : prev));
   }

   return (
      <main>
         <video className='w-full aspect-video' controls>
            <source src={food.video} />
         </video>
         <article className='p-3'>
            <div className='flex items-center justify-between'>
               <h3 className='text-sm font-medium'>{food.type}</h3>
               <div className='grid grid-cols-3 gap-1 rounded-md overflow-hidden'>
                  <button onClick={decreaseQuantity} className='quantity-button'>
                     <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='h-4 w-auto'>
                        <path fill='currentColor' d='M3.996 13H20a1 1 0 1 0 0-2H3.996a1 1 0 1 0 0 2Z' />
                     </svg>
                  </button>
                  <span className='flex items-center justify-center font-medium text-sm'>{quantity}</span>
                  <button onClick={increaseQuantity} className='quantity-button'>
                     <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='h-4 w-auto'>
                        <path
                           fill='currentColor'
                           d='M11.883 3.007L12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z'
                        />
                     </svg>
                  </button>
               </div>
            </div>
            <div className='flex items-center justify-between mt-2'>
               <h1 className='text-lg font-medium'>{food.name}</h1>
               <h2 className='text-sm font-bold'>
                  <span className='text-blue-600'>$</span>
                  {food.price}
               </h2>
            </div>
            <p className='text-sm leading-normal opacity-90 mt-2'>{food.description}</p>
         </article>
      </main>
   );
}
