import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import React, { useState } from "react";
import AddItem from "./components/AddItem";

//function component other than class component
function App() {
  const productsList = [
    { name: "iphone", price: 1000, quantity: 0 },
    { name: "samsung", price: 2000, quantity: 0 },
    { name: "nokia", price: 3000, quantity: 0 },
    { name: "sony", price: 4000, quantity: 0 },
  ];

  let [productList, setProductsList] = useState(productsList);
  let [totalAmount, setTotalAmount] = useState(0);

  const increase_quantity = (index) => {
    const newProductsList = [...productList];
    let newTotalAmount = totalAmount;

    newProductsList[index].quantity++;
    newTotalAmount += productList[index].price;

    setProductsList(newProductsList);
    setTotalAmount(newTotalAmount);
  };

  const decrease_quantity = (index) => {
    if (productList[index].quantity > 0) {
      let newTotalAmount = totalAmount;
      const newProductsList = [...productList];

      newProductsList[index].quantity--;
      newTotalAmount -= newProductsList[index].price;

      setProductsList(newProductsList);
      setTotalAmount(newTotalAmount);
    }
  };

  const reset_data = () => {
    let newProductsList = [...productList];
    // for (let i = 0; i < newProductsList.length; i++) {
    //   newProductsList[i].quantity = 0;
    // }
    newProductsList.map((item) => {
      item.quantity = 0;
    });
    setProductsList(newProductsList);
    setTotalAmount(0);
  };

  const remove_item = (index) => {
    let newProductsList = [...productList];
    let newTotalAmount = totalAmount;

    newTotalAmount -=
      newProductsList[index].quantity * newProductsList[index].price;
    newProductsList.splice(index, 1);

    setProductsList(newProductsList);
    setTotalAmount(newTotalAmount);
  };

  const add_item = (name, price) => {
    let newProductsList = [...productList];
    newProductsList.push({ name: name, price: price, quantity: 0 });
    setProductsList(newProductsList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem add_item={add_item} />
        <ProductList
          productsList={productList}
          increase_quantity={increase_quantity}
          decrease_quantity={decrease_quantity}
          remove_item={remove_item}
        />
      </main>
      <Footer totalAmount={totalAmount} reset_data={reset_data} />
    </>
  );
}

export default App;
