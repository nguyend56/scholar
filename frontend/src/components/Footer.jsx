import logo from "../pictures/Union College Logo.png";
import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "term-of-use", text: "Term Of Use", href: "/termOfUse" },
  { name: "Privacy-Policy", text: "Privacy Policy", href: "/privacyPolicy" },
  {
    name: "@copyright",
    text: "© 2023 Union College",
    href: "",
  },
  { name: "address", text: "Address", href: "/address" },
];

const Footer = () => {
  return (
    <footer className=" h-fit px-5 py-1 flex flex-row justify-between items-center z-50 bg-black inset-x-0 fixed bottom-0">
      <img src={logo} alt="" className="h-auto w-36 cursor-pointer" />
      <div className="flex flex-row justify-center flex-grow font-semibold cursor-pointer">
        <div className="flex flex-row justify-evenly w-full">
          {navLinks.map((link) => (
            <div key={link.name} className="w-fit h-fit group cursor-pointer">
              <Link to={link.href} className="text-white no-underline">
                {link.text}
              </Link>
              <div className="w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
