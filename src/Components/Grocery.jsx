import { useEffect, useState } from "react";
import axios from "axios";

const Grocery = () => {
  const [gItems, setGItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/grocery_items")
      .then((res) => setGItems(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="m-10  p-5 relative">
      <h2 className="font-bold text-2xl py-4 ">Grocery</h2>
        <table className="w-full text-sm text-left shadow ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th className="px-6 py-3">id</th>
              <th className="px-6 py-3"> name</th>
              <th className="px-6 py-3">category</th>
              <th className="px-6 py-3">quantity</th>
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
    </>
  );
};

export default Grocery;
