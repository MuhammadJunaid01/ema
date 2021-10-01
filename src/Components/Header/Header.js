import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Stack } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Stack className="nav" direction="horizontal" gap={1}>
        <NavLink className="text-white nav-link" to="/home">
          Home
        </NavLink>
        <NavLink className="text-white nav-link" to="/card">
          Order Review
        </NavLink>
        <NavLink className="text-white nav-link" to="/manageInventory">
          Manage Inventory
        </NavLink>
      </Stack>
    </div>
  );
};

export default Header;
