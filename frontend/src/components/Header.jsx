import logo from "../pictures/Union College Logo.png";
import Input from "./Input";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import React, { useState } from "react";

const navLinks = [];

const Header = () => {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchString === "") {
      navigate(`/computer-info/_`);
    } else {
      navigate(`/computer-info/${searchString}`);
    }
  };

  return (
    <header className="h-fit px-5 py-2 flex flex-row justify-between items-center fixed left-0 top-0 w-full bg-black z-50">
      <Link to="https://www.union.edu/">
        <img
          src={logo}
          alt="Union College Logo"
          className="h-auto w-36 cursor-pointer"
        />
      </Link>

      <div className="flex flex-row space-x-9 font-semibold cursor-pointer">
        {navLinks.map((link) => (
          <div key={link.name} className="w-fit h-fit group">
            <span className="text-white" key={link.name}>
              {link.text}
            </span>
            <div className="mt-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-300 origin-left"></div>
          </div>
        ))}
        {/* { name: , text: , href:""} */}

        <LinkContainer to="/">
          <div key="homePage" className="w-fit h-fit group">
            <span className="text-white" key="top-manufacturers">
              Home Page
            </span>
            <div className="mt-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-300 origin-left"></div>
          </div>
        </LinkContainer>

        <LinkContainer to="/computerVersion">
          <div key="computerVersion" className="w-fit h-fit group">
            <span className="text-white" key="top-manufacturers">
             Computer Versions
            </span>
            <div className="mt-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-300 origin-left"></div>
          </div>
        </LinkContainer>

        <LinkContainer to="/history">
          <div key="history" className="w-fit h-fit group">
            <span className="text-white" key="top-manufacturers">
              History
            </span>
            <div className="mt-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-300 origin-left"></div>
          </div>
        </LinkContainer>

        <LinkContainer to="/top-manufactures">
          <div key="top-manufacturers" className="w-fit h-fit group">
            <span className="text-white" key="top-manufacturers">
              Top Manufacturers
            </span>
            <div className="mt-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-300 origin-left"></div>
          </div>
        </LinkContainer>

        <LinkContainer to="/about">
          <div key="about" className="w-fit h-fit group">
            <span className="text-white" key="top-manufacturers">
              {" "}
              About{" "}
            </span>
            <div className="mt-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-300 origin-left"></div>
          </div>
        </LinkContainer>
      </div>
      <div className="flex flex-row space-x-1 items-center">
        <Input input={searchString} setInput={setSearchString} />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </header>
  );
};

export default Header;
