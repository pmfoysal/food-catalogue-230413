import foods from '../data/foods.json';

export function selectFoods() {
   return foods;
}

export function selectDiscountedFoods() {
   return foods.filter(food => food.discount);
}

export function selectFood(id) {
   return foods.find(food => food.id === id);
}

export function selectFoodTypes() {
   const types = {};
   foods.forEach(food => {
      types[food.type] = (types[food.type] || 0) + 1;
   });
   return Object.keys(types).map(type => ({ name: type, count: types[type] }));
}
