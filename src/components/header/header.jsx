import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/Brand.png'
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import "./header.css";
export default function Header() {


  return (
    <>
       <section className=" top-txt ">
        <div className="head container ">
            <div className="head-txt ">
                <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up ">
                <a href="# ">SIGN IN</a>
                <a href="# ">SIGN UP</a>
            </div>
        </div>
    </section>
    <nav class="navbar">
        <div class="navbar-container">
            <input type="checkbox" name="" id="checkbox" />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#home">Home</a></li>
                <li><a href="#sellers">Shop</a></li>
                <li><a href="#news">Blog</a></li>
                <li><a href="#contact">Cart <span><FaCartPlus /></span></a></li>
                <li><a href="#contact"><FaRegUserCircle /></a></li>
            </ul>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>
    </nav>
    </>
  )
}
