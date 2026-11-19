//Scenario: An e-commerce application allows customers to 
//search products, filter by price and rating, and dynamically sort the results.

const products = [
  { id: 1, name: "iPhone 15", price: 65000, rating: 4.5 },
  { id: 2, name: "Samsung S24", price: 70000, rating: 4.7 },
  { id: 3, name: "OnePlus 12", price: 55000, rating: 4.4 },
  { id: 4, name: "iPhone 14", price: 50000, rating: 4.2 },
  { id: 5, name: "Pixel 8", price: 60000, rating: 4.6 },
  { id: 6, name: "Samsung A55", price: 35000, rating: 4.3 }
];

const searchText = "samsung";
const maxPrice = 75000;
const minRating = 4.3;
const sortBy = "rating";

const prodcutLsting = products
    .filter((prod)=>(prod.name.toLowerCase().includes(searchText.toLowerCase()) && prod.price <= maxPrice && prod.rating>=minRating))
    .sort((a,b)=>( sortBy === "rating" ? b.rating - a.rating : a.price - b.price))

    console.log(prodcutLsting)