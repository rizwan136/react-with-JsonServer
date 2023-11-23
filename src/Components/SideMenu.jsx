import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faGear,
  faHome,
  faList,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const [iconShow, setIconShow] = useState(false);

  return (
    <>
      <div className=" h-screen  p-3   bg-black text-white uppercase fixed ">
        <ul className="space-y-5 font-bold text-lg">
          <li className="p-2 hover:shadow hover:shadow-green-400">
            <Link>
              <FontAwesomeIcon icon={faHome} />
              <span className="ml-2">DashBoard</span>
            </Link>
          </li>

          <li
            className="p-2  hover:shadow hover:shadow-green-400"
            onClick={() => {
              setIconShow((element) => !element);
            }}
          >
            <Link>
              <FontAwesomeIcon icon={faList} />
              <span className="ml-2"> Products</span>
              {!iconShow ? (
                <FontAwesomeIcon icon={faCaretDown} className="ml-9" />
              ) : (
                <FontAwesomeIcon icon={faCaretUp} className="ml-9" />
              )}
            </Link>
          </li>
          {iconShow && (
            <ul className="text-sm capitalize">
              {/* Dropdown content goes here */}
              <Link to="/electronics">
                <li className=" hover:bg-white hover:text-black  rounded p-2  m-1">
                  <span className="ml-10">electronics</span>
                </li>
              </Link>
              <Link to="/grocery">
                <li className="hover:bg-white hover:text-black rounded p-2  m-1">
                  <span className="ml-10">Grocery</span>
                </li>
              </Link>
            </ul>
          )}
          <li className="p-2  hover:shadow  hover:shadow-green-400">
            <Link>
              <FontAwesomeIcon icon={faGear} />
              <span className="ml-2"> Setting</span>
            </Link>
          </li>
          <li className="p-2  hover:shadow  hover:shadow-green-400">
            <Link>
              <FontAwesomeIcon icon={faQuestion} />
              <span className="ml-2">FAQs</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
