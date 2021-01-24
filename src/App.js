import React from "react";
import Cart from "./components/cart";
import Filter from "./components/filter";
import Products from "./components/Products";
import data from "./data.json"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      cartItems: [],
      products: data.products,
      size: "",
      sort: ""
    }
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;

    cartItems.forEach(
      item => {
        if (item._id === product._id) {
          item.count++;
          alreadyInCart = true;
        }
      });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 })
    }
    this.setState({cartItems});
  }

  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) =>
        sort === "lowest"
          ? ((a.price > b.price)
            ? 1
            : -1)
          : sort === "highest"
            ? ((a.price < b.price)
              ? 1
              : -1)
            : (a._id > b._id)
              ? 1
              : -1
      )
    }));
  }

  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({ size: event.target.value, product: data.products })
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          product => product.availableSizes.indexOf(event.target.value) >= 0)
      });
    }
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}></Filter>
              <Products
                products={this.state.products}
                addToCart={this.addToCart}>
              </Products>
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems}></Cart>
            </div>
          </div>
        </main>
        <footer>
          All rights reserved. Test.Test2
      </footer>
      </div>
    );
  }
}

export default App;
