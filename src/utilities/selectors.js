import foods from '../data/foods.json';

export function selectFoods() {
   return foods;
}

export function selectFood(id) {
   return foods.find(food => food.id === id);
}

export function selectFoodTypes() {
   return foods.map(food => food.type);
}
