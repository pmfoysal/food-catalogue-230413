import Home from '../pages/home';
import Layout from '../layouts/layout';
import Details from '../pages/details';
import Socials from '../pages/socials';
import Discover from '../pages/discover';
import { Route, Routes } from 'react-router-dom';

export default function App() {
   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='socials' element={<Socials />} />
            <Route path='discover' element={<Discover />} />
            <Route path=':id_title' element={<Details />} />
         </Route>
      </Routes>
   );
}
