import Card from '../components/card';
import Slider from '../components/slider';
import { Fragment, useState } from 'react';
import Filters from '../components/filters';
import { selectFoods } from '../utilities/selectors';

export default function Home() {
   const foods = selectFoods();
   const [filter, setFilter] = useState('All');

   function filterFoods(food) {
      if (filter === 'All') return true;
      return food.type === filter;
   }

   return (
      <Fragment>
         <Slider />
         <Filters filter={filter} setFilter={setFilter} />
         <section className='grid grid-cols-2 gap-3 py-8 pb-20 px-3 bg-slate-100'>
            {foods.filter(filterFoods).map((food, index) => (
               <Card key={`food-${index}`} {...food} />
            ))}
         </section>
      </Fragment>
   );
}
