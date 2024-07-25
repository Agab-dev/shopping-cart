import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductList({
  products,
  onAddToCart,
  onRemoveFromCart,
  category,
  searchProduct,
  cart,
}) {
  const [time, setTime] = useState(new Date());
  {
    /*  if there is search input or category selected, show the products based on that;
        else just show all the products;
    */
  }
  {
    /*  since the map method always returns a value so when we dont get the products we will get false instead
        otherwise we will get the object which is a truthy value, that's why i filtered out the false values
        since it will affect the length of the actual matching products array
    */
  }
  const mathcingProducts = products
    .map(
      (product) =>
        (product.name
          ? product.name.toLowerCase().includes(searchProduct)
          : true) &&
        (category !== "any" ? product.category === category : true) && (
          <ProductItem
            product={product}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            key={product.id}
            cart={cart}
          />
        )
    )
    .filter((mathcingProduct) => mathcingProduct !== false);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="flex justify-between text-4xl p-4 bg-slate-400">
        <h1>Products</h1>
        <p>{time.toLocaleTimeString()}</p>
      </div>
      {/* here the rendering of the matching products if there are any happens, if not show a message */}
      <div
        className={
          mathcingProducts.length > 0
            ? `grid grid-cols-3 p-4 gap-4 justify-items-center min-h-screen`
            : "text-center h-screen flex items-center justify-center text-white text-3xl"
        }
      >
        {mathcingProducts.length > 0 ? (
          mathcingProducts
        ) : (
          <p>No Matching Products :(</p>
        )}
      </div>
      {/* end of the rendering */}
    </div>
  );
}
