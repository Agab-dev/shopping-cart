import CartItem from "./CartItem";

export default function Cart({ cart, onClearCart }) {
  return (
    <div className="mt-10">
      <header className="text-4xl p-4  bg-slate-400">
        <h1>Cart</h1>
        {cart.length > 0 && (
          <div className="flex justify-between text-xl mt-6 items-center">
            <p>
              Total:{" "}
              <strong>
                $
                {cart.reduce(
                  (acc, product) =>
                    acc + product.price * product.selectedAmount,
                  0
                )}
              </strong>
            </p>

            <button onClick={onClearCart} className="bg-red-500 text-white p-4 rounded-md">Clear Cart</button>
          </div>
        )}
      </header>
      {cart.length > 0 && <div className="grid grid-cols-3 p-4 gap-4 justify-items-center">
        {cart.map(
          (product) =>
            product.selectedAmount > 0 && (
              <CartItem product={product} key={crypto.randomUUID()} />
            )
        )}
      </div>}
    </div>
  );
}
