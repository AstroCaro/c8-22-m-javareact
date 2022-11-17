import React from "react";
import "./header.css";

const InputSearch = () => {
  return (
    <>
      <div className="containers">
        <input
          placeholder="Type to search..."
          className="inputs"
          name="text"
          type="text"
        />
        <div className="icons">
          <svg
            viewBox="0 0 512 512"
            className="ionicon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Search</title>
            <path
              strokeWidth="32"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            ></path>
            <path
              d="M338.29 338.29L448 448"
              strokeWidth="32"
              strokeMiterlimit="10"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default InputSearch;
