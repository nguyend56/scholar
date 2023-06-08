import axios from "axios";
import React, { useState } from "react";


const Input = (props) => {
  const {input, setInput} = props;

  const handleChange = async (event) => {
    setInput(event.target.value);    
  }

  return (
    <div className="flex">
    <label htmlFor="email" className="sr-only">
      Email
    </label>
    <input
      type="text"
      name="email"
      id="email"
      className="block w-full rounded-md border-2 px-2 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-gray-500 focus:border-signature !ring-0 !outline-0 transition duration-150"
      placeholder="Search"
      value={input}
      onChange={handleChange}
    />
  </div>
  )
}

export default Input
