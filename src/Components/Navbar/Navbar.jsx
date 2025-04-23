import React from "react";
import './Navbar.scss'
import { Link, NavLink } from 'react-router';

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={
              ({ isActive }) => isActive ? "active__link" : ""
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={
              ({ isActive }) => isActive ? "active__link" : ""
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={
              ({ isActive }) => isActive ? "active__link" : ""
            }>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className={
              ({ isActive }) => isActive ? "active__link" : ""
            }>Contuct Us</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}
