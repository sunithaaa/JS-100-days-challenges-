const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisines: [" Italian ", "PIZZA", "Italian"]
  },
  {
    id: 2,
    name: "Dragon House",
    cuisines: " Chinese, Thai, chinese "
  },
  {
    id: 3,
    name: "Burger Hub",
    cuisines: null
  },
  {
    id: 4,
    name: "Spice Garden",
    cuisines: [" Indian ", "South Indian", "INDIAN"]
  },
  {
    id: 5,
    name: "Cafe Coffee",
    cuisines: "Cafe, Beverages"
  }
];
const resList = restaurants.map((res)=>(
 
   Array.isArray(res.cuisines) ? res.cuisines : typeof(res.cuisines) === "string" ? res.cuisines.split(",") : [] 
  
))

const newArray = resList.map((cuisines)=>(
  cuisines.map((cuisine)=>(
   cuisine.trim().toLowerCase()
  ))
))

const getUniqueCuisineList = newArray.map((c)=>(
  new Set([...c])
))

const finalArray = 
  getUniqueCuisineList.map((c)=>(
    [...c]  
  )
)

const normalisedResList =  restaurants.map((res,index)=>(
{
  ...res,
  cuisines : finalArray[index]
}
))
// console.log(restaurants)
console.log("normalisedResList",normalisedResList)

