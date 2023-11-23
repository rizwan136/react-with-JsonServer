import { useEffect, useState } from "react";
import axios from "axios";
const Electronics = () => {
  const [eProducts, setEProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/electronics_products")
      .then((res) => setEProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="m-10  p-5 relative">
        <h2 className="font-bold text-2xl py-4">Electronics</h2>
        <table className="w-full text-sm text-left shadow">
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
    </>
  );
};

export default Electronics;
