// Dynamic restaurant listing with multiple filters
// Foodify wants to let users search restaurants, select a minimum rating, set a maximum budget, and choose how results are sorted.
const restaurants = [
  { id: 1, name: "Pizza Palace", rating: 4.2, price: 250 },
  { id: 2, name: "Dragon House", rating: 4.8, price: 400 },
  { id: 3, name: "Burger Hub", rating: 4.5, price: 150 },
  { id: 4, name: "Italian Bistro", rating: 4.9, price: 350 },
  { id: 5, name: "Spice Garden", rating: 4.7, price: 200 },
  { id: 6, name: "Pizza Corner", rating: 4.6, price: 180 },
  { id: 7, name: "Taco Town", rating: 4.3, price: 300 }
];

const searchText = "pizza";
const minRating = 4.3;
const maxPrice = 300;
const sortBy = "price"; // "price" or "rating"