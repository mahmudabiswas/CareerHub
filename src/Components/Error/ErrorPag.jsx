import React from "react";
import { Link } from "react-router-dom";

const ErrorPag = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl"> Opps !!!!!!!!!! </h1>
      <p>page is not found</p>
      <button className="btn">
        <Link to="/">Go to home</Link>
      </button>
    </div>
  );
};

export default ErrorPag;
