import React from "react";
import { Link } from "react-router-dom";
import AllRoutes from "../AllRoutesFolder/AllRoutes";
export default function Navbar() {
  async function handleLogout() {
    let res = await fetch(`http://localhost:3000/user/logout`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
    let data = await res.json();
    alert(data.msg);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "2px solid black",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/">
          HOME
        </Link>
        <Link
          style={{ textDecoration: "none", cursor: "pointer" }}
          to="/register"
        >
          REGISTER
        </Link>
        <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/login">
          LOGIN
        </Link>
        <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/blogs">
          RECORDS
        </Link>
        <button
          onClick={handleLogout}
          style={{ padding: "5px", cursor: "pointer" }}
        >
          LOGOUT
        </button>
      </div>
      <AllRoutes />
    </>
  );
}
