import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

  const handleLoginBtn = () => {
    return btnName === "login" ? setBtnName("logout") : setBtnName("login");
  };

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-400 lg:bg-amber-300">
      <div className="">
        <img className="w-24" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex">
          <li className="p-4">online status:{onlineStatus ? "✅" : "🔴"}</li>
          <Link to="/">
            <li className="p-4">Home</li>
          </Link>
          <Link to="About">
            <li className="p-4">About Us</li>
          </Link>
          <Link to="Contact">
            <li className="p-4">Contact Us</li>
          </Link>
          <Link to="Cart">
            <li className="p-4">Cart</li>
          </Link>
          <Link to="grocery">
            <li className="p-4">Grocery</li>
          </Link>
          <Link to="login">
            <button className="p-4" onClick={handleLoginBtn}>
              {btnName}
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
