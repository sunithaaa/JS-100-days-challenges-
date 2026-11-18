//sorting in descending order

const restaurants = [
  { id: 1, name: "Pizza Palace", rating: 4.2 },
  { id: 2, name: "Dragon House", rating: 4.8 },
  { id: 3, name: "Burger Hub", rating: 4.1 },
  { id: 4, name: "Italian Bistro", rating: 4.6 },
  { id: 5, name: "Spice Garden", rating: 4.9 }
];

// Spice Garden — 4.9
// Dragon House — 4.8
// Italian Bistro — 4.6
// Pizza Palace — 4.2
// Burger Hub — 4.1

const sortedList = [...restaurants].sort((a, b) => {
   return  b.rating-a.rating
})

console.log(sortedList)
console.log(restaurants)