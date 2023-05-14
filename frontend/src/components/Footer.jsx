import logo from "../pictures/Union College Logo.png";
import React from "react";

const navLinks = [
  { name: "term-of-use", text: "Term Of Use", href: "" },
  { name: "Privacy-Policy", text: "Privacy Policy", href: "" },
  {
    name: "@copyright",
    text: "@Copyright",
    href: "",
  },
  { name: "address", text: "Address", href: "" },
];

const Footer = () => {
  return (
    <footer className=" h-fit px-5 py-1 flex flex-row justify-between items-center z-50 bg-black inset-x-0 fixed bottom-0">
      <img src={logo} alt="" className="h-auto w-36 cursor-pointer" />
      <div className="flex flex-row justify-center flex-grow font-semibold cursor-pointer">
        <div className="flex flex-row justify-evenly w-full">
          {navLinks.map((link) => (
            <div key={link.name} className="w-fit h-fit group">
              <span key={link.name} style={{ color: "#FFFFFF" }}>{link.text}</span>
              <div className="w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
