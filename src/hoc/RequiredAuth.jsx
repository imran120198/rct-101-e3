import React from "react";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  return <h3><Link to="/login"></Link></h3>;
};

export default RequiredAuth;
