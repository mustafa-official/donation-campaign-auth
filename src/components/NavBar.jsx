import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOutUser = () => {
    logOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="block w-full px-6 py-3 mx-auto  text-white bg-white  rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
      <div className="flex items-center bg-base-200 justify-between text-blue-gray-900">
        <div>
          <div className="flex items-center gap-5">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div>
              {user ? (
                <>
                  <h2>{user.email}</h2>
                  <button
                    onClick={handleLogOutUser}
                    className="btn btn-secondary btn-sm"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <small>No people login!! </small>
                  <Link to="/login">
                    <button className="btn btn-primary btn-sm">
                      Login Now
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-500 underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <NavLink
                to="/donation"
                className={({ isActive }) =>
                  isActive ? "text-red-500 underline" : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? "text-red-500 underline" : ""
                }
              >
                Statistics
              </NavLink>
            </li>

            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-red-500 underline" : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-red-500 underline" : ""
                }
              >
                Register
              </NavLink>
            </li>

            {user && (
              <>
                <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? "text-red-500 underline" : ""
                    }
                  >
                    Profile
                  </NavLink>
                </li>

                <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "text-red-500 underline" : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
