export default function CartItem({ product }) {
  return (
    <div className="bg-white text-black p-4 w-72 h-fit rounded-md">
      <img src={product.image} alt={product.name} className="block mx-auto" />
      <h3 className="text-2xl font-bold">{product.name}</h3>
      <p className="pt-2 pb-4 font-black text-lg">$<strong>{product.price}</strong></p>
      <p className="font-bold text-lg">Amount: {product.selectedAmount}</p>
    </div>
  );
}
