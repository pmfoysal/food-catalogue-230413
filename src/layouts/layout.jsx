import Modal from '../components/modal';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import { Fragment, useState } from 'react';

export default function Layout() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <Fragment>
         <Outlet />
         <Header isOpen={isOpen} setIsOpen={setIsOpen} />
         <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </Fragment>
   );
}
