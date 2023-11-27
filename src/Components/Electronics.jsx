import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Electronics = () => {
  const [eProducts, setEProducts] = useState([]);

  const RemoveDublicate = new Set(eProducts.map((p) => p.color));
  const uniqueColorsOfProduct = Array.from(RemoveDublicate).sort();

  const RemoveDublicateBrandName = new Set(eProducts.map((p) => p.brand));
  const uniqueBrandName = Array.from(RemoveDublicateBrandName).sort();

  useEffect(() => {
    axios
      .get("http://localhost:3030/electronics_products")
      .then((res) => setEProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const FiltterByBrand = (element) => {
    console.log(element);
    const filterProductByBrand = eProducts.filter((p) => p.brand === element);
    console.log(filterProductByBrand);
    setEProducts(filterProductByBrand);
  };
  return (
    <>
      <div className="p-5">
        <h2 className="text-2xl font-bold  text-slate-950 py-1 capitalize px-2 my-4">
          Electronics
        </h2>
        <div className="flex gap-6 ">
          <div className="flex-1 ">
            <Link to="/product-form" className="float-right">
              <button className="text-2xl hover:bg-green-600 bg-slate-100  font-semibold hover:text-white p-2 capitalize  m-2">
                Add Products
              </button>
            </Link>

            <table className="w-full rounded-md text-sm text-left ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th className="px-6 py-3">id</th>
                  <th className="px-6 py-3">product name</th>
                  <th className="px-6 py-3">Color</th>
                  <th className="px-6 py-3">brand</th>
                  <th className="px-6 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {eProducts.map((data, i) => {
                  return (
                    <tr key={i} className="bg-white border-b ">
                      <td className="px-6 py-4">{data.product_id}</td>
                      <td className="px-6 py-4">{data.product_name}</td>
                      <td className="px-6 py-4">{data.color}</td>
                      <td className="px-6 py-4">{data.brand}</td>
                      <td className="px-6 py-4">{data.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-56 ">
            <h2 className="text-2xl font-bold  text-slate-950 py-1 capitalize my-2">
              Filtters
            </h2>
            <ul className="flex flex-col gap-4">
              <li className="text-sm flex justify-between ">
                <span className="p-1">Color Filtter:</span>
                <select name="category" className=" border p-1 truncate w-28">
                  {uniqueColorsOfProduct.map((data, i) => {
                    return (
                      <option
                        value="electronics"
                        className="text-ellipsis	"
                        key={i}
                      >
                        {data}
                      </option>
                    );
                  })}
                </select>
              </li>
              <li className="text-sm flex justify-between ">
                <span className="p-1">Brand Filtter:</span>
                <select
                  name="category"
                  className=" border p-1 truncate w-28"
                  defaultValue="select color"
                  onChange={(event) => {
                    FiltterByBrand(event.target.value);
                  }}
                >
                  {uniqueBrandName.map((data, i) => {
                    return (
                      <option value={data} className="text-ellipsis	" key={i}>
                        {data}
                      </option>
                    );
                  })}
                </select>
              </li>
              <li className="text-sm ">
                <form>
                  <label className="">Search</label>
                  <input
                    type="search"
                    className="w-full bg-slate-50 border p-2 focus:outline-0 focus:border-slate-900"
                    onChange={(event) => FiltterByBrand(event.target.value)}
                  />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Electronics;
