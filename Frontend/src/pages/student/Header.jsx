import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="flex items-center justify-between px-4 md:px-16 xl:px-32 py-4 border-b border-gray-300">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-28 xl:w-32 cursor-pointer"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <div className="flex items-center gap-5 mr-5">
          {user && (
            <>
              <button>Become Educator</button> |
              <Link to="/my-enrollment">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-primary cursor-pointer text-white px-4 py-2 rounded-full hover:bg-secondary"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center md:hidden">
        {user && (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className=" mr-6 cursor-pointer flex items-center gap-1 text-lg font-medium"
            >
              Teach <FaCaretDown size={28} />
            </button>
          </>
        )}
        {/* User Icon */}

        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="" className="w-8 h-8 cursor-pointer" />
          </button>
        )}
        {/* Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-md rounded-lg py-2 text-left px-4 flex flex-col gap-2 z-50">
            <button
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-left hover:text-primary"
            >
              Become Educator
            </button>
            <Link
              to="/my-enrollment"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-primary"
            >
              My Enrollments
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
