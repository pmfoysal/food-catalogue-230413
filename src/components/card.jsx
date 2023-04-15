import { Link } from 'react-router-dom';
import stringToUrl from '../utilities/stringToUrl';

export default function Card({ id, price, name, image }) {
   return (
      <Link to={`/${id}_${stringToUrl(name)}`} className='flex'>
         <article className='bg-white rounded-lg overflow-hidden p-1 shadow-sm flex flex-col'>
            <img src={image} alt={name} className='w-full h-auto object-cover aspect-[1.5] rounded-md' />
            <div className='p-2 flex flex-col flex-1'>
               <h1 className='font-medium mb-1 line-clamp-2 leading-tight'>{name}</h1>
               <h3 className='text-sm mt-auto font-bold'>${price}</h3>
            </div>
         </article>
      </Link>
   );
}
