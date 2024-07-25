import { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Cart from "./Cart";

const products = [
  {
    id: crypto.randomUUID(),
    name: "Iphone X",
    image: "./products/Iphone X.jpg",
    price: 1499,
    category: "Phone",
    selectedAmount: 0,
  },
  {
    id: crypto.randomUUID(),
    name: "Samsung S20",
    image: "./products/Samsung s20.jpg",
    price: 1099,
    category: "Phone",
    selectedAmount: 0,
  },
  {
    id: crypto.randomUUID(),
    name: "Apple Watch",
    image: "./products/Apple watch.jpg",
    price: 499,
    category: "Watch",
    selectedAmount: 0,
  },
  {
    id: crypto.randomUUID(),
    name: "Apple TV",
    image: "./products/Apple TV.jpg",
    price: 999,
    category: "TV",
    selectedAmount: 0,
  },
  {
    id: crypto.randomUUID(),
    name: "LG TV",
    image: "./products/LG TV.jpg",
    price: 699,
    category: "TV",
    selectedAmount: 0,
  },
  {
    id: crypto.randomUUID(),
    name: "Tesla Model S",
    image: "./products/Tesla model s.jpg",
    price: 39_999,
    category: "Car",
    selectedAmount: 0,
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("any");
  const [searchProduct, setSearchProduct] = useState("");

  function handleChangeCategory(category) {
    setCategory(category);
  }

  function handleSearchProduct(searchInput) {
    setSearchProduct(searchInput.toLowerCase());
  }

  function handleAddToCart(newProduct) {
    // if the product doesn't already exist in the cart add it to the cart and increase its amount
    if (!cart.filter((product) => product.id === newProduct.id).length) {
      setCart((cart) => [...cart, newProduct]);
    }

    // else just increase its amount in the cart
    setCart((cart) =>
      cart.map((product) => {
        return product.id === newProduct.id
          ? { ...product, selectedAmount: product.selectedAmount + 1 }
          : product;
      })
    );
  }

  function handleRemoveFromCart(id) {
    setCart((cart) =>
      cart.map((product) =>
        product.id === id
          ? {
              ...product,
              selectedAmount:
                product.selectedAmount > 0 ? product.selectedAmount - 1 : 0,
            }
          : product
      )
    );
  }

  function handleClearCart() {
    setCart([]);
  }

  return (
    <div className="bg-slate-900 text-white ">
      <Header
        products={products}
        category={category}
        onChangeCategory={handleChangeCategory}
        searchProduct={searchProduct}
        onSearchProduct={handleSearchProduct}
      />
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        category={category}
        searchProduct={searchProduct}
        cart={cart}
      />
      <Cart
        cart={cart}
        products={products}
        onClearCart={handleClearCart}
      />

      <Footer />
    </div>
  );
}
