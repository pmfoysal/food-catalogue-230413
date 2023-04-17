import { Link, useLocation } from 'react-router-dom';

export default function Header({ isOpen, setIsOpen }) {
   const { pathname } = useLocation();

   function isActive(path) {
      return pathname === path && !isOpen;
   }

   return (
      <header className='grid grid-cols-4 py-2 px-3 fixed bottom-0 left-0 w-full bg-white z-[999] header'>
         <Link to='/' className={`page-button ${isActive('/') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='h-[13.5px] w-auto'>
               <path
                  fill='currentColor'
                  d='M10.55 2.533a2.25 2.25 0 0 1 2.9 0l6.75 5.695c.508.427.8 1.056.8 1.72v9.802a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75v-5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 3 19.75V9.947c0-.663.292-1.292.8-1.72l6.75-5.694Z'
               />
            </svg>
            <p>Home</p>
         </Link>
         <Link to='/discover' className={`page-button ${isActive('/discover') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='h-4 w-auto'>
               <path
                  fill='currentColor'
                  d='M8.5 4.358v12.465l-4.32 3.038a.75.75 0 0 1-1.174-.509l-.007-.104V8.615a.75.75 0 0 1 .238-.548l.08-.065L8.5 4.358Zm12.494.29l.007.104v10.633a.75.75 0 0 1-.238.548l-.08.065L15.5 19.64V7.174l4.32-3.035a.75.75 0 0 1 1.174.509ZM10 4.359l4 2.812v12.467l-4-2.814V4.359Z'
               />
            </svg>
            <p>Discover</p>
         </Link>
         <button className={`page-button offer ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(prev => !prev)}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='h-[14px] w-auto'>
               <path
                  fill='currentColor'
                  d='M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.79 21z'
               />
               <path
                  fill='currentColor'
                  d='M11.38 17.41c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.63.58A2.04 2.04 0 0 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41l7.79 7.79zM7.25 3a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5z'
               />
            </svg>
            <p>Offers</p>
         </button>
         <Link to='/socials' className={`page-button ${isActive('/socials') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='h-[16px] w-auto'>
               <path
                  fill='currentColor'
                  d='M6.502 3.003a3.5 3.5 0 0 0-3.5 3.5v6a3.5 3.5 0 0 0 3.5 3.5H7v-2h-.497a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-1.506v2h1.506a3.5 3.5 0 0 0 3.5-3.5v-6a3.5 3.5 0 0 0-3.5-3.5h-6ZM10 11.5a1.5 1.5 0 0 1 1.5-1.5h1.499V8H11.5A3.5 3.5 0 0 0 8 11.5v6a3.5 3.5 0 0 0 3.5 3.5h6a3.5 3.5 0 0 0 3.5-3.5v-6A3.5 3.5 0 0 0 17.5 8h-.495v2h.495a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-6Z'
               />
            </svg>
            <p>Socials</p>
         </Link>
      </header>
   );
}
