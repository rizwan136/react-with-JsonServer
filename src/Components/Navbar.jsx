import { Link } from "react-router-dom";
import DropDownProfile from "./DropDownProfile";
import { useState } from "react";
const Navbar = () => {
  const [DropDown, setDropdown] = useState(false);
  return (
    <>
      <nav className="bg-black sticky top-0 z-50">
        <div className=" flex items-center justify-between  p-4">
          <div>
            <Link
              // to="https://flowbite.com/"
              className="flex items-center space-x-3 "
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshphA_D-ovYAqCj6soZO0KfnzzcOaO6nsoeMZYMG-qpU13yva-ff-BeFCNi1V8xFu9Lw&usqp=CAU"
                className="h-10 w-16 ml-2"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold  text-white">
                Flowbite
              </span>
            </Link>
          </div>
          <div
            onClick={() => {
              setDropdown((prev) => !prev);
            }}
          >
            <img
              className="rounded-full ring-4 w-11"
              title="Profile"
              src="https://cdn.shopify.com/s/files/1/0573/9026/8577/products/xtreme-bots-elite-trooper-remote--programmable-robot_0e6ea5ef-7c32-45dd-a940-93a000796a0a_540x.jpg?v=1695150407"
            />
          </div>
        </div>
      </nav>
      {DropDown && <DropDownProfile />}
    </>
  );
};

export default Navbar;
