import React, { useState } from "react";
import { ArrowUpRight, X, Menu } from "lucide-react";
import logo from "../../assets/images/greeenage Logo.png";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { Button, ContactCard } from "../UI";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="bg-white shadow-md py-4 fixed w-full z-30 "
      style={{
        backgroundColor: "var(--background-color)",
        boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative ">
        {/* Left Side - Logo */}
        <div className="flex items-center md:w-auto w-1/3">
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="xl:hidden focus:outline-none"
            aria-label="Open menu"
          >
            {/* <Menu className="w-5 h-5" /> */}
            <BiMenuAltLeft className="w-5 h-5" />
          </button>
          {/* Logo */}
          <img
            src={logo}
            alt="GreenAge Industries Logo"
            className="h-12 xl:static absolute left-1/2 transform -translate-x-1/2 xl:transform-none xl:left-0"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex md:space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-blacks hover:text-gradients font-semibold  px-1 py-2 ${
                isActive ? "text-gradient" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-blacks hover:text-gradients font-semibold px-1 py-2 ${
                isActive ? "text-gradient" : ""
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-blacks hover:text-gradients font-semibold px-1 py-2 ${
                isActive ? "text-gradient" : ""
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/what-we-do"
            className={({ isActive }) =>
              `text-blacks hover:text-gradients font-semibold px-1 py-2 ${
                isActive ? "text-gradient" : ""
              }`
            }
          >
            What We Do
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `text-blacks hover:text-gradients font-semibold px-1 py-2 ${
                isActive ? "text-gradient" : ""
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              `text-blacks hover:text-gradients font-semibold px-1 py-2 ${
                isActive ? "text-gradient" : ""
              }`
            }
          >
            News
          </NavLink>
          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              `text-blacks hover:text-gradients font-semibold px-1 py-2 ${
                isActive ? "text-gradient" : ""
              }`
            }
          >
            FAQs
          </NavLink>
        </nav>

        {/* Right Side - Menu Toggle & Button */}
        <div className="md:w-auto w-1/3 flex justify-end items-center space-x-4">
          <div className="hidden sm:flex">

          <Button
            text="Get In Touch"
            icon={<ArrowUpRight className=" w-4 h-4" />}
          />
          </div>
          
          <Link
            to="/"
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full"
            style={{
              background: "var(--background-color-gradient)",
              color: "var(--background-color)",
            }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
             <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0  bg-opacity-40 z-30"
        ></div>
      )}
    </header>
  );
};

export default Header;
