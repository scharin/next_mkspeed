"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/brand/mkspeedLogoNoText.svg";
import Script from "next/script";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-mkspeed">
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" />
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image src={logo} alt="MK Speed Logo" height="40" />
        </Link>
        MkSpeed
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink href="/" name="Hem" />
            <NavLink href="/news" name="Nyheter" />
            <NavLink href="/about" name="Klubben" />
            <NavLink href="/races" name="Tävlingar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
