import { products } from "./data.js"

export function renderProductCards() {
   const productsContainer = document.getElementsByClassName("products_container");
   const searchInput = document.getElementById("searchInput")

   function displayEachProduct(productsData) {

      productsContainer[0].innerHTML = "";

      if(productsData.length===0){
         productsContainer[0].innerHTML = `<div>No products found</div>`
         return
      }
      const eachProductCards = productsData.map((prod) => {
         const eachProduct = document.createElement("div");
         eachProduct.className = "border min-w-0 rounded-lg p-4 shadow-sm";

         eachProduct.innerHTML = `
            <img src=${prod.image}>
            <h1 class="text-xl font-bold">${prod.name}</h1>
            <h2>${prod.category}</h2>
            <p>⭐ ${prod.rating}</p>
            <p class="font-bold mt-2">₹${prod.price}</p>
            <p>${prod.stock > 0 ? "In Stock" : "Out of Stock"}  </p>
         `;


         return eachProduct
      })
      productsContainer[0].append(...eachProductCards)

   }


   displayEachProduct(products)


 let timer;

// searchInput.addEventListener("input", (e) => {

//     clearTimeout(timer);

//     timer = setTimeout(() => {

//         console.log("Search executed after 500ms");

//         const searchText = e.target.value.toLowerCase().trim();

//         console.log("Search text:", searchText);

//         const filteredProducts = products.filter((prod) => {
//             return (
//                 prod.name.toLowerCase().includes(searchText) ||
//                 prod.category.toLowerCase().includes(searchText)
//             );
//         });

//         console.log("Filtered products:", filteredProducts);

//         displayEachProduct(filteredProducts);

//     }, 500);
//     console.log("timererrr",timer)
  
// });

searchInput.addEventListener("input",(e)=>{
   clearTimeout(timer);

   timer = setTimeout(()=>{
     const searchText = e.target.value.toLowerCase().trim();

     const filteredPRoducts = products.filter((prod)=>{
      return (
         prod.name.toLowerCase().includes(searchText) ||
         prod.category.toLowerCase().includes(searchText)
      )

     })
     displayEachProduct(filteredPRoducts)
   },3000)
})
}