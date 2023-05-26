import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { AuthContext } from "../../../providers/AuthProviders";

const Header = () => {
  const [open, setOpen] = useState(false);
  const {user,logout} = useContext(AuthContext);
  
  const handleSignOut =() =>{
    logout()
    .then()
    .catch(error => {
      console.log(error.message);
    })
  }

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #000000, #333333)",
        color: "white",
        position: 'fixed',
        top: '0',
        width: "100vw",
        zIndex: "10"
      }}
    >
      <nav className="my-container z-10 flex justify-between items-center py-2">
        <h1 className="text-3xl font-semibold italic text-[#34BF49]">
          Top$<span className="text-xl font-medium italic">Chefs</span>
        </h1>
        <div className="hidden md:block">
          <div className="flex gap-5 items-center">
            <ul className="flex gap-4 text-[18px] font-medium">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-[#34BF49]" : ""
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  isActive ? "text-[#34BF49]" : ""
                }
              >
                <li>Blog</li>
              </NavLink>
            </ul>
            <div>
              {
                user ? (
                  <div className="flex items-center gap-4">
                    <img title={user?.displayName} className="w-10 h-10 rounded-full border-2 border-green-400" src={user?.photoURL} alt="userImg" />
                    <button onClick={handleSignOut} className="primary-btn ">LogOut</button>
                  </div>
                ):
                (
              <Link to={'/login'}>
                <button className="primary-btn ">Login</button>
              </Link>
                )
              }
            </div>
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {!open ? (
            <span className="text-4xl">
              <HiBars3BottomRight />
            </span>
          ) : (
            <span className="text-4xl">
              <HiXMark />
            </span>
          )}
        </div>
          
      </nav>
      {!open || (
            <div className="absolute top-[48px] right-0 px-20 py-7 rounded-lg md:hidden z-10"
            style={{
              background: "linear-gradient(to top, #000000, #333333)",
              color: "white",
            }}
            >
              <ul className="flex flex-col gap-3 text-[18px] font-medium">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "text-[#34BF49]" : ""
                  }
                >
                  <li>Home</li>
                </NavLink>
                <NavLink
                  to={"/blog"}
                  className={({ isActive }) =>
                    isActive ? "text-[#34BF49]" : ""
                  }
                >
                  <li>Blog</li>
                </NavLink>
              </ul>
              <div className="mt-3">
              {
                user ? (
                  <div className="flex items-center gap-2">
                    <img title={user?.displayName} className="w-10 h-10 rounded-full border-2 border-green-400" src={user?.photoURL} alt="userImg" />
                    <button onClick={handleSignOut} className="primary-btn ">LogOut</button>
                  </div>
                ):
                (
              <Link to={'/login'}>
                <button className="primary-btn ">Login</button>
              </Link>
                )
              }
              </div>
            </div>
          )}
    </div>
  );
};

export default Header;
