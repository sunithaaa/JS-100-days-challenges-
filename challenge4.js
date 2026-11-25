const purchaseAmount = 20000
let memberShip = "Premium"

let discount;

if(memberShip==="Premium" && purchaseAmount >= 5000){
    discount = 20
}
else if(memberShip==="Premium" && purchaseAmount < 5000){
    discount = 10
}
else if(memberShip==="Regular" && purchaseAmount>=5000){
    discount=10
}
else if(memberShip==="Regular" && purchaseAmount < 5000){
    discount=5
}
else {
    console.log("invalid memberShip")
}

const discountedAmount = purchaseAmount * discount/100
const finalAmount = purchaseAmount-discountedAmount

console.log(`discount is ${discount}% `)