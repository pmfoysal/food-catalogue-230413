import Slider from '../components/slider';
import { Fragment, useState } from 'react';
import Filters from '../components/filters';

export default function Home() {
   const [filter, setFilter] = useState('All');

   return (
      <Fragment>
         <Slider />
         <Filters filter={filter} setFilter={setFilter} />
      </Fragment>
   );
}
