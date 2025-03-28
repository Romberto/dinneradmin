import React from "react";
import { Link } from "react-router-dom";

export const Admin: React.FC = () => {
  return (
    <div className="container">
      <nav className="flex flex-col w-full">
        <Link className="btn btn-orange" to="menu">
          Open Menu
        </Link>

        <Link className="btn btn-orange" to="staff">
          Open Staff
        </Link>
      </nav>
    </div>
  );
};
