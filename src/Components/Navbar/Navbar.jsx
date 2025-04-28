import React from "react";
import './Navbar.scss'
import { NavLink, useNavigate } from 'react-router';

export default function Navbar({ login }) {
  const navigate = useNavigate()
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
            <NavLink to="/posts" className={
              ({ isActive }) => isActive ? "active__link" : ""
            }>Posts</NavLink>
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
          <li>

            {
              login ? (
                <button onClick={() => {
                  localStorage.clear()
                  navigate('/')
                }}>Sign Out</button>
              ) : (
                <NavLink to="/sign-in" className={
                  ({ isActive }) => isActive ? "active__link" : ""
                }>Sign in</NavLink>
              )
            }
          </li>
        </ul>
      </nav>
    </header>
  );
}
