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

const SideMenu = () => {
  const [iconShow, setIconShow] = useState(false);

  return (
    <>
      <div className=" h-screen  p-3   bg-black text-white uppercase fixed ">
        <ul className="space-y-5 font-bold text-lg">
          <li className="p-2 hover:shadow hover:shadow-green-400">
            <a>
              <FontAwesomeIcon icon={faHome} />
              <span className="ml-2">DashBoard</span>
            </a>
          </li>

          <li
            className="p-2  hover:shadow hover:shadow-green-400"
            onClick={() => {
              setIconShow((element) => !element);
            }}
          >
            <a>
              <FontAwesomeIcon icon={faList} />
              <span className="ml-2"> Products</span>
              {!iconShow ? (
                <FontAwesomeIcon icon={faCaretDown} className="ml-9" />
              ) : (
                <FontAwesomeIcon icon={faCaretUp} className="ml-9" />
              )}
            </a>
          </li>
          {iconShow && (
            <ul className="text-sm capitalize">
              <a href="electronics">
                <li className=" hover:bg-white hover:text-black  rounded p-2  m-1">
                  <span className="ml-10">electronics</span>
                </li>
              </a>
              <a href="grocery">
                <li className="hover:bg-white hover:text-black rounded p-2  m-1">
                  <span className="ml-10">Grocery</span>
                </li>
              </a>
            </ul>
          )}
          <li className="p-2  hover:shadow  hover:shadow-green-400">
            <a>
              <FontAwesomeIcon icon={faGear} />
              <span className="ml-2"> Setting</span>
            </a>
          </li>
          <li className="p-2  hover:shadow  hover:shadow-green-400">
            <a>
              <FontAwesomeIcon icon={faQuestion} />
              <span className="ml-2">FAQs</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
