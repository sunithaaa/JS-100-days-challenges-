const restaurants = [
  { id: 1, name: "Pizza Palace", rating: 4.5, cuisine: "Italian" },
  { id: 2, name: "Dragon House", rating: 4.2, cuisine: "Chinese" },
  { id: 3, name: "Burger Hub", rating: 4.8, cuisine: "American" },
  { id: 4, name: "Italian Bistro", rating: 4.6, cuisine: "Italian" },
  { id: 5, name: "Pizza Corner", rating: 4.1, cuisine: "Italian" }
];

const searchText = "  ";
const minRating = 4.3;

const filteredRes = restaurants.filter((res)=>(
    res.name.toLowerCase().includes(searchText.trim().toLowerCase()) && res.rating >= 4.3
))
console.log(filteredRes)