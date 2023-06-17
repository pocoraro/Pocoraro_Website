import Image from "next/image";
import logo from "../public/logo.svg";
import menu from "../public/Menu.png";
import Link from "next/link";
import localFont from "next/font/local";

import React, { useState, useEffect } from "react";
const montse = localFont({
  src: [
    { path: "../pages/fonts/Montserrat-Medium.ttf", weight: "500" },
    { path: "../pages/fonts/Montserrat-SemiBold.ttf", weight: "600" },
    { path: "../pages/fonts/Montserrat-Bold.ttf", weight: "700" },
  ],
  display: "swap",
  variable: "--font-montse",
});
export default function HeaderV2({ onPress }) {
  return (
    <header className="background">
      <nav className="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-default">
        <div className="container">
          <a className="navbar-brand" href="#">
            Default Color
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-default"
            aria-controls="navbar-default"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse show"
            id="navbar-default"
          >
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="javascript:void(0)">
                    <img src="https://demos.creative-tim.com/argon-dashboard-pro-bs4/assets/img/brand/blue.png" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbar-default"
                    aria-controls="navbar-default"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="ni ni-favourite-28"></i>
                  <span className="nav-link-inner--text d-lg-none">Discover</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="ni ni-notification-70"></i>
                  <span className="nav-link-inner--text d-lg-none">Profile</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-link-icon"
                  href="#"
                  id="navbar-default_dropdown_1"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ni ni-settings-gear-65"></i>
                  <span className="nav-link-inner--text d-lg-none">Settings</span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbar-default_dropdown_1"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      </nav>
    </header>
  );
}
