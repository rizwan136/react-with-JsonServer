import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Grocery = () => {
  const [gItems, setGItems] = useState([]);
  const [data, setData] = useState([]);
  const [searchIcon, setSearchIcon] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3030/grocery_items")
      .then((res) => {
        setGItems(res.data), setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const search = (query) => {
    const filteredResults = data.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.quantity.toString().includes(query) ||
        product.price.toString().includes(query) ||
        product.id.toString().includes(query)
    );
    setGItems(filteredResults);
  };
  return (
    <>
      <div className="p-5">
        <h2 className="text-2xl font-bold  text-slate-950 py-1 capitalize px-2 my-4">
          Grocery
        </h2>
        <div className="flex gap-6 ">
          <div className="flex-1 ">
            <Link to="/grocery-form" className="float-right">
              <button className="text-2xl hover:bg-green-600 bg-slate-100  font-semibold hover:text-white p-2 capitalize  m-2">
                Add Products
              </button>
            </Link>

            <table className="w-full rounded-md text-sm text-left ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th className="px-6 py-3">id</th>
                  <th className="px-6 py-3">product name</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Quantity</th>
                  <th className="px-6 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {gItems.map((data, i) => {
                  return (
                    <tr key={i} className="bg-white border-b ">
                      <td className="px-6 py-4">{data.id}</td>
                      <td className="px-6 py-4">{data.name}</td>
                      <td className="px-6 py-4">{data.category}</td>
                      <td className="px-6 py-4">{data.quantity}</td>
                      <td className="px-6 py-4">{data.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-56 ">
            <h2 className="text-2xl font-bold  text-slate-950 mt-16 capitalize py-2">
              Filtters
            </h2>
            <ul className="flex flex-col gap-4">
              <li className="text-sm ">
                <form>
                  <label className="relative">Search</label>
                  <input
                    type="search"
                    className="w-full bg-slate-50 border p-2 focus:outline-0 focus:border-slate-900"
                    onChange={(event) => search(event.target.value)}
                    onFocus={() => setSearchIcon(true)}
                    onBlur={() => setSearchIcon(false)}
                  />
                  {!searchIcon && (
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="absolute right-56 mt-3 text-slate-300 focus:hidden"
                    />
                  )}
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grocery;
