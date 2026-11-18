// filter and sort
const restaurants = [
  { id: 1, name: "Pizza Palace", rating: 4.2, price: 250 },
  { id: 2, name: "Dragon House", rating: 4.8, price: 400 },
  { id: 3, name: "Burger Hub", rating: 4.5, price: 200 },
  { id: 4, name: "Italian Bistro", rating: 4.1, price: 350 },
  { id: 5, name: "Spice Garden", rating: 4.9, price: 300 }
];

const minRating = 4.3;

const filterSortedList = restaurants
    .filter((res)=>res.rating >= 4.3)
    .sort((a,b)=>a.rating - b.rating)
console.log(filterSortedList)
console.log(restaurants)