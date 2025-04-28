import React from "react";
import './Navbar.scss'
import { NavLink, useNavigate } from 'react-router';
import ROUTES from '../../routes';

export default function Navbar({ login }) {
  const navigate = useNavigate()
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME} className={
              ({ isActive }) => isActive ? "active__link" : ""
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.POSTS} className={
              ({ isActive }) => isActive ? "active__link" : ""
            }>Posts</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG} className={
              ({ isActive }) => isActive ? "active__link" : ""
            }>Blog</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACT_US} className={
              ({ isActive }) => isActive ? "active__link" : ""
            }>Contuct Us</NavLink>
          </li>
          <li>

            {
              login ? (
                <button onClick={() => {
                  localStorage.clear()
                  navigate(ROUTES.HOME)
                }}>Sign Out</button>
              ) : (
                <NavLink to={ROUTES.SIGNIN} className={
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
