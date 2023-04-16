import icons from '../data/icons';
import { Link } from 'react-router-dom';
import socials from '../data/socials.json';

export default function Socials() {
   return (
      <main className='bg-slate-100 p-3 min-h-screen'>
         <h1 className='text-lg font-bold mb-4'>Connect with us</h1>
         <div className='flex flex-col gap-2'>
            {socials.map((social, index) => (
               <Link
                  key={`social-${index}`}
                  to={social.url}
                  target='_blank'
                  className='flex items-center justify-between py-2 px-3 bg-white shadow-sm rounded-lg'
               >
                  <div className='flex items-center gap-2 social-icon'>
                     {icons[social.type]}
                     <h3 className='text-sm font-medium'>{social.type}</h3>
                  </div>
                  <span className='text-[12px] opacity-80'>@{social.username}</span>
               </Link>
            ))}
         </div>
      </main>
   );
}
