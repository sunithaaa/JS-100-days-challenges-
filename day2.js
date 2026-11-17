// input
const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisines: ["italian", "pizza"]
  },
  {
    id: 2,
    name: "Dragon House",
    cuisines: ["chinese", "thai"]
  },
  {
    id: 3,
    name: "Burger Hub",
    cuisines: ["american", "fast food"]
  },
  {
    id: 4,
    name: "Italian Bistro",
    cuisines: ["italian", "continental"]
  },
  {
    id: 5,
    name: "Spice Garden",
    cuisines: ["indian", "south indian"]
  },{
  id: 6,
  name: "New Restaurant",
  cuisines:[]
}
];

const selectedCuisine = "chinese";

/////////// expected output///////////////
// [
//   {
//     id: 1,
//     name: "Pizza Palace",
//     cuisines: ["italian", "pizza"]
//   },
//   {
//     id: 4,
//     name: "Italian Bistro",
//     cuisines: ["italian", "continental"]
//   }
// ]

//filtering the restuarants with the selected cuisines

const filteredList = restaurants.filter((res)=>(
    res.cuisines?.includes(selectedCuisine)
    
))
console.log(filteredList)