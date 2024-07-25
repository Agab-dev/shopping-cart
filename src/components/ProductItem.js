// import plus from "../../";
export default function ProductItem({
  product,
  onAddToCart,
  onRemoveFromCart,
  cart,
}) {
  const selectedProduct = cart.filter(
    (cartProduct) => cartProduct.id === product.id
  )[0];

  return (
    <div className="bg-white text-black p-4 w-72 h-fit rounded-md">
      <img src={product.image} alt={product.name} className="block mx-auto" />
      <h3 className="text-2xl font-bold">{product.name}</h3>
      <strong className="block pt-2 pb-4">Price: ${product.price}</strong>
      <div className="flex justify-between items-center">
        <p>
          Category: <i>{product.category}</i>
        </p>
        <div className="flex">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-green-500 w-10 h-10 rounded-full text-white text-3xl me-3 flex justify-center items-center align-middle"
          >
            <span className="text-center">
              <img src="./assets/plus.svg" alt="plus button" className="w-4 h-4"/>
            </span>
          </button>
          <button
            onClick={() => onRemoveFromCart(product.id)}
            className="bg-red-500 w-10 h-10 rounded-full text-white text-3xl text-center p-0"
          >
            {" "}
            <span><img src="./assets/minus-white.svg" alt="remove button"/></span>{" "}
          </button>
        </div>
      </div>
      {selectedProduct?.selectedAmount > 0 && (
        <p className="font-bold text-lg">
          Amount: {selectedProduct?.selectedAmount}
        </p>
      )}
    </div>
  );
}
