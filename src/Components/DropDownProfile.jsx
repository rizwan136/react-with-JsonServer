import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faUser,
  faGear
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const DropDownProfile = () => {
  return (
    <>
      <div
        className="absolute top-24 right-6  rounded bg-white shadow z-50 border w-32  capitalize
      before:absolute before:-top-3 before:right-4 before:w-5 before:h-5 before:rotate-45
       before:bg-white before:border-l-2 before:border-t-2 before:border-gray-200"
      >
        <ul className="flex flex-col gap-4 ">
          <li className=" hover:bg-gray-200 p-2 hover:font-bold">
            <Link>
              <FontAwesomeIcon icon={faUser} />
              <span className="ml-2">Profile</span>
            </Link>
          </li>
          <li className=" hover:bg-gray-200 p-2 hover:font-bold">
            <Link className="">
              <FontAwesomeIcon icon={faGear} />
              <span className="ml-2">Setting</span>
            </Link>
          </li>

          <li className=" hover:bg-gray-200 p-2 hover:font-bold">
            <Link>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span className="ml-2">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropDownProfile;
