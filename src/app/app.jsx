import Home from '../pages/home';
import Details from '../pages/details';
import { Route, Routes } from 'react-router-dom';

export default function App() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/:id_title' element={<Details />} />
      </Routes>
   );
}
