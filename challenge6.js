// Status	Output
// PLACED	Your order has been placed
// CONFIRMED	Your order has been confirmed
// SHIPPED	Your order is on the way
// DELIVERED	Your order has been delivered
//  	Your order has been cancelled
// Anything else	Invalid order status
const orderStatus = "SHIPPED";

switch(orderStatus){
    case "PLACED":
        console.log("Your order has been placed");
        break;
    case "CONFIRMED":
        console.log("Your order has been confirmed");
        break
    case "SHIPPED":
        console.log("Your order is on the way");
        break;
    case "DELIVERED":
        console.log("Your order has been delivered");
        break;
    case "CANCELLED":
        console.log("Your order has been cancelled");
        break;
     default:
        console.log("Invalid order status")
}