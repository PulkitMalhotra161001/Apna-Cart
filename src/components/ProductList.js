// //imr
import React from "react";
import Product from "./Product.js";

//rfc (make sure JavaScript React is enabled at bottom of vs)
export default function ProductList(props) {
  return(
      props.productsList.length > 0 ?
      props.productsList.map((product, i) => {
        return(
          <Product product={product} key={i} increase_quantity={props.increase_quantity} decrease_quantity={props.decrease_quantity} index={i} remove_item={props.remove_item}/>
        ) 
      })
      : <h1>No Products Exists in the Carts</h1>
  )
}


  // return props.productList.length > 0 ? (
//     props.productList.map((product, i) => {
//       return (
//         <Product
//           product={product}
//           key={i}
//           incrementQuantity={props.incrementQuantity}
//           index={i}
//           decrementQuantity={props.decrementQuantity}
//           removeItem={props.removeItem}
//         />
//       );
//     })
//   ) : (
//     <h1>No Products Exists in the Carts</h1>
//   );
// }