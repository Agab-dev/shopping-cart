export default function Header({
  products,
  category,
  onChangeCategory,
  searchProduct,
  onSearchProduct,
}) {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="bg-black flex justify-between p-4">
      <div >
        <label htmlFor="search" className="text-xl">Search for: </label>
        <input
          type="search"
          id="search"
          value={searchProduct}
          onChange={(e) => onSearchProduct(e.target.value)
          }
          className="text-black w-96 p-1 rounded-md"
        />
      </div>
      <div>
        <label className="text-xl">Filter for: </label>
        <select
          value={category}
          onChange={(e) => onChangeCategory(e.target.value)}
          className="text-black p-1 rounded-md"
        >
          <option value="any">Any</option>
          {categories.map((category) => (
            <option value={category} key={crypto.randomUUID()}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
