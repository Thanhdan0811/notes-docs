import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(maxVal : PriceBracket) : number {
  switch(maxVal) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    default:
      return 30.0;
  }
}
/// Add your getOrders() function below:
function getOrders(maxPrice: PriceBracket , listOrders : Order[][]) : Order[][] {
  let filteredOrders : Order[][] = [];
  for(let order of listOrders) {
    let temp : Order[] =  order.filter(or=> {
      return or.price <= getMaxPrice(maxPrice);
    })
    // console.log("sadlf", temp);
    filteredOrders.push(temp);
  }
  return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(resArr : Restaurant[], orderArrs : Order[][]) {
  orderArrs.forEach((order, index) => {
    if(order.length > 0) {
      console.log(`${restaurants[index].name}`);
      order.forEach(or => {
        console.log(`- ${or.name}: ${or.price}`)
      })
    }

  })
}
/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);

