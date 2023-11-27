import { Link } from "react-router-dom";

const AddNewProducts = () => {
  return (
    <>
      <div className="rounded p-8 m-24 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add New Products</h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Product Name
              </label>
              <input type="text" className="mt-1 p-2 w-full border " />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Category
              </label>
              <select name="category" className="mt-1 p-2 w-full border ">
                <option value="electronics">Electronics</option>
                <option value="grocery">Grocery</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Product Type
              </label>
              <input type="text" className="mt-1 p-2 w-full border " />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Quantity
              </label>
              <input type="number" className="mt-1 p-2 w-full border " />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Price
            </label>
            <input type="number" className="mt-1 p-2 w-full border " />
          </div>

          <div className="mt-6">
            <Link to="/electronics">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 "
              >
                Add
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewProducts;
