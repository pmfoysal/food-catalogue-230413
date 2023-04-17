import { Link } from 'react-router-dom';
import stringToUrl from '../utilities/stringToUrl';

export default function Card({ id, price, name, image, discount, onClick = () => {} }) {
   return (
      <Link to={`/${id}_${stringToUrl(name)}`} className='flex' onClick={onClick}>
         <article className='bg-white rounded-lg overflow-hidden p-1 shadow-sm flex flex-col relative'>
            <img src={image} alt={name} className='w-full h-auto object-cover aspect-[1.5] rounded-md' />
            {discount ? (
               <span className='absolute top-2 right-2 text-[9px] py-[1px] px-[4px] rounded shadow-sm bg-red-500 text-white'>
                  –{discount * 100}%
               </span>
            ) : null}
            <div className='p-2 flex flex-col flex-1'>
               <h1 className='font-medium mb-1 line-clamp-2 leading-tight'>{name}</h1>
               <h3 className='text-sm mt-auto font-bold flex items-center gap-2'>
                  ${discount ? (price - price * discount).toFixed(2) : price}
               </h3>
            </div>
         </article>
      </Link>
   );
}
