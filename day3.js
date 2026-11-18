const restaurants = [
  { id: 1, name: "Pizza Palace", rating: 4.5 },
  { id: 2, name: "Dragon House", rating: 4.2 },
  { id: 3, name: "Burger Hub", rating: 4.0 },
  { id: 4, name: "Italian Bistro", rating: 4.6 },
  { id: 5, name: "Pizza", rating: 4.1 }
];

const searchText = "sushi";

// /////--------expected output--------///////
// [
//   { id: 1, name: "Pizza Palace", rating: 4.5 },
//   { id: 5, name: "Pizza Corner", rating: 4.1 }
// ]

const searchedList = restaurants.filter((res)=>(
    res.name.toLowerCase().includes(searchText.trim().toLowerCase())
))
console.log(searchedList)